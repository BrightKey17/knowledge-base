# nginx start command

```command
nginx -c nginx.conf
```
## Basic reverse proxy server ##
upstream backend  {
    server 127.0.0.1:8080; # local server
}

server {
    location / {
        proxy_pass  http://backend;
    }
}
## Basic reverse proxy server ##
upstream tornado  {
    server 127.0.0.1:8080; # local server
}

server {
    listen          80;
    server_name     example.com;

    access_log      /home/nginx/log/access.log  main;
    error_log       /home/nginx/log/error.log;

    root            html;
    index           index.html index.htm index.php;
  
    ## send request back to tornado ##
    location / {
        proxy_pass  http://tornado;
  
        # Proxy Settings
        proxy_redirect     off;
        proxy_set_header   Host             $host;
        proxy_set_header   X-Real-IP        $remote_addr;
        proxy_set_header   X-Forwarded-For  $proxy_add_x_forwarded_for;
        proxy_next_upstream error timeout invalid_header http_500 http_502 http_503 http_504;
        proxy_max_temp_file_size    0;
        proxy_connect_timeout       90;
        proxy_send_timeout          90;
        proxy_read_timeout          90;
        proxy_buffer_size           4k;
        proxy_buffers               4 32k;
        proxy_busy_buffers_size     64k;
        proxy_temp_file_write_size  64k;
   }
}
```js
worker_processes auto;

http {

    #配置共享会话缓存大小，视站点访问情况设定
    ssl_session_cache   shared:SSL:10m;
    #配置会话超时时间
    ssl_session_timeout 10m;

    server {
        listen              443 ssl;
        server_name         www.example.com;

        #设置长连接
        keepalive_timeout   70;

        #证书文件
        ssl_certificate     www.example.com.crt;
        #私钥文件
        ssl_certificate_key www.example.com.key;

        #优先采取服务器算法
        ssl_prefer_server_ciphers on;
        #使用DH文件
        ssl_dhparam /etc/ssl/certs/dhparam.pem;
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
        #定义算法
        ssl_ciphers "EECDH+ECDSA+AESGCM EECDH+aRSA+AESGCM EECDH+ECDSA+SHA384 EECDH+ECDSA+SHA256 EECDH+aRSA+SHA384 EECDH+aRSA+SHA256 EECDH+aRSA+RC4 EECDH EDH+aRSA !aNULL !eNULL !LOW !3DES !MD5 !EXP !PSK !SRP !DSS !RC4";
        #减少点击劫持
        add_header X-Frame-Options DENY;
        #禁止服务器自动解析资源类型
        add_header X-Content-Type-Options nosniff;
        #防XSS攻擊
        add_header X-Xss-Protection 1;
        #...
```

## 强制通道HTTPS

```js
##   your-domain.com ##
server {
    listen       80;
    server_name  your-domain.com;

    location = / {
        rewrite ^/(.*) https://your-domain.com/$1 permanent;     # force redirect http to https
    }

    location / {
        rewrite ^/(.*) https://your-domain.com/ permanent;       # force redirect http to https
    }
}
```