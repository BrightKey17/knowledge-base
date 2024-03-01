# Global Command
## format
> :[range]g/{pattern}/[command]
> g! and :v are the antonyms

## command

查找
> :g/{pattern}/p

删除
> :g/{pattern}/d

```command
:g/^[ tab]*$/d
```

移动
> m move
```command
## 标记间相反排序
:g'a,'bg/^/m'b
## 块移动
:g /SYNTAX/.,/DESCRIPTION/-1 move /PARAMETER/-1
## 不是数字开头移动到末尾
:g!/^[[:digit:]]/m$
```

复制
> t copy