# windows functional command

```cmd
netstat -an |find ":80" 

netstat -ano -p tcp | find "5952" >nul 2>nul && echo 端口已开启 || echo 端口未开启

tasklist| findstr "pid"

change cmd code
chcp [code]    -- ignorant: show the current value , 936:gbk2312 60051:utf-8


del [/p] [/f] [/s] [/q] [/a[:]<attributes>] <names>
erase [/p] [/f] [/s] [/q] [/a[:]<attributes>] <names>
```

# tomcat case

[Del](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/del)

```bat
del /q/s temp
del /q/s work\Catalina
call bin\startup.bat
```

```
@echo off
chcp 65001
title 院长驾驶舱后台
java  -jar -Dfile.encoding=utf-8 targetManage.jar --spring.config.location=application.yml
pause
```
