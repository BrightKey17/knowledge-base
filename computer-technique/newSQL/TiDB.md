Rows 按照**主键的字节序**排列
不显示声明会隐式配备，整数类主键会使用特定编码使其字节序和大小排序一致

# 特性

1. 按照字节序扫描效率较高
2. 连续的行大概率会存储在相邻的位置，批量读取/写入效率高
3. 索引是有序的（主键也是一种索引），一行的每一列索引会占据一个 K-V pair

> 比如，某个表除了主键有 3 个索引，那么在这个表中插入一行，对应在底层存储就是 4 个 K-V Pairs 的写入: 数据行以及 3 个索引行

4. 一行的数据存在一个K-V pair， 不会被分割
> 与BigTable的列式存储不一样

5. TiKV会被切分，形成Region（64M），Region是调度单位，随着数据量变大会*分裂/合并/移动* 
> 尽量批量写入，但是不要超过64M
> 事务大小同样有限制
> 宽表不可取，单行不要超过64k

## 索引

除主键查询外，建立二级索引，支持全局索引（non-interleaved index)，可以scale

# 反模式

## 过度依赖主键递增，Auto  Increment Primary ID

suggestion:
1. 使用真实含义的列作为主键，例如username, phone-number
2. UUID
3. bit-verse the auto-incremented

## 单调递增时间戳索引

尾部Region形成热点
> Index encoding rule of unique index
> key: tablePrefix{tableID}_indexPrefixSep{IndexID}_indexedColumnsValue
> value: rowID
> According to TiDB coding rules, the data of the same table is in a range prefixed by the beginning of the TableID, and the data is arranged in the order of rowID values. When RowID values are incremented during table inserting, the inserted line can only be appended to the end.

suggestion:
sharding technology

# Query Optimize

## Rule Based Optimization 

### 谓词下推

> predicate: a function return non-value P,X->{true, false} in symbolic logic


` select * from t join s on t.id = s.id where t.c1 < 10; 
可以被 TiDB 自动改写成
` select * from (select * from t where t.c1 < 10) as t join s on t.id = s.id;


### 关联子查询消除

关联子查询可能被 TiDB 改写成 Join，例如：
` select * from t where t.id in (select id from s where s.c1 < 10 and s.name = t.name);
可以被改写成：
` select * from t semi join s on t.id = s.id and s.name = t.name and s.c1 < 10;

###  **聚合下推**

聚合函数可以被推过 Join，所以类似带等值连接的 Join 的效率会比较高，例如：
` select count(s.id) from t join s on t.id = s.t_id 
可以被改写成：
` select sum(agg0) from t join (select count(id) as agg0, t_id from s group by t_id) as s on t.id = s.t_id;

### 基于规则的优化有时可以组合以产生意想不到的效果

```sql

select s.c2 from s where 0 = (select count(id) from t where t.s_id = s.id);

-- 在TiDB中，这个语句会先通过关联子查询消除的优化，变成：

select s.c2 from s left outer join t on t.s_id = s.id group by s.id where 0 = count(t.id);

-- 然后这个语句会通过聚合下推的优化，变成：

select s.c2 from s left outer join (select count(t.id) as agg0 from t group by t.s_id) t on t.s_id = s.id group by s.id where 0 = sum(agg0);

--再经过聚合消除的判断，语句可以优化成：

select s.c2 from s left outer join (select count(t.id) as agg0 from t group by t.s_id) t on t.s_id = s.id where 0 = agg0;
```

## Cost Based Opimization

- 通过统计信息或索引分布选择最优索引
- join操作中会区分大小表，小的装入内存

# Scenario

- 大数据量，查询慢，有实时查询实时分析等需求
- 数据增长接近单机极限
- 高并发
- 分布式，多数据中心强一致性高可靠性，auto-failover高可用性

>middleware会入侵业务
>sharding会约束框架

