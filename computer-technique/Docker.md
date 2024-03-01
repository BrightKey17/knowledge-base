# Ubuntu

## Changing the Image Installation Directory

[From Web](https://www.baeldung.com/ops/docker-image-change-installation-directory)

``` sh
$ docker info -f '{{ .DockerRootDir }}'
/var/lib/docker
$ mkdir -p /tmp/new-docker-root
$ sudo vi /etc/docker/daemon.json
$ sudo cat /etc/docker/daemon.json
{ 
   "data-root": "/tmp/new-docker-root"
}
$ sudo systemctl restart docker
$ docker info -f '{{ .DockerRootDir}}'
/tmp/new-docker-root
```


## Load Image from archived file

.zip or .tar images exported 

```sh

docker load 
```

## docker run

```sh
docker ps -a | grep 'searchstring'
docker run
dokcer start|stop
docker exec -it 'container_name' bash 
```

```
> ![FAQ] - docker: Error response from daemon: could not select device driver "" with capabilities: [[gpu]].
> 
```