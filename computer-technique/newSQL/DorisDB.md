# Apache Doris

基本参数：MPP Database(Mutiple Parallel Processing), distributed architecture, 100+Cluster, 向量化执行引擎(vectorization), PB scale, 10billion/second execution

## history

百度初始以MySQL Sharding方式为广告主提供*报表支持*, 2008年百度统计服务大概有50-60MySQL, 每天的业务数据增长量3000万+条。Doris1只满足凤巢的业务需求。
Doris2对于长时间跨度或大客户查询请求，在性能上无法满足。schema change, cluster expand等运维麻烦。非高可用系统，人肉进行复杂的操作恢复服务。
Doris3 (Data Transfer)(Data Search)(Data master) -- 3 modular part
数据存储在Armor Distributed Key-value Engine, 元数据由Zookeeper管理，上述三模块做到无状态，进而整个系统无单点故障
只能做到单表查询，无法满足多维分析需要，所以Doris3+MySQL Handler
PALO意为玩转OLAP, 一款有分布式计算能力的查询引擎
