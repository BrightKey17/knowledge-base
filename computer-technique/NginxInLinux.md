ps -ef |grep nginx

netstat -tulpn |grep 80

/usr/lib/systemd/system/nginx.service and then:

```
systemctl daemon-reload
systemctl start nginx
```

the PID is defined in /usr/lib/systemd/system/nginx-debug.service and /etc/nginx/nginx.conf
/var/log/nginx*