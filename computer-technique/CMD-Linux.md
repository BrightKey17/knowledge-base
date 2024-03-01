# Linux-CMD

Date Finished: 2023-07-14
Author: Bright Key
Tags:  Computer Operation System Linux

---
##  Configuration Setup

🚀
IpAddress&Network Tool
```shell
# environment
echo $PATH
: << 'COMMENT'
ifconfig is in the /sbin directory
yum search to collect information
*************
COMMENT
yum search ifconfig

```

remote root login
```shell
# install if not packed
yum -y install openssh-server
# check version
ps -e | grep ssh
# configuration files
vi /etc/ssh/sshd.config
# PermitRootLogin yes
# restart service
systemctl restart sshd
```


## Information of Server

core version
```shell
cat /proc/version
uname -a
```

date/time
```shell
man date 
man timedatectl
```
system version
```shell
lsb_release -a
cat /etc/issue
```
cache
```shell
free -h
cat /proc/meminfo
```


## Locating the Process

`top
` ps aux | grep chrome
- a = show processes for all users
- u = display the process's user/owner

## Killing the Process

process name/id

`kill killall`

## File Search

```sh
find
whereis
```

## Network

```sh
netstat
```

##  System Setup and Handful Tooltips

 concatenate all files into one 
合并所有类型文件到一个

```terminal
type *.txt >> merged.txt
```

# Ubuntu
Focal Fossa 20.04LTS
Jammy Jellyfish 22.04LTS

## Chinese Input Method
```sh
sudo apt-get install ibus-pinyin
sudo apt-get install ibus-rime
sudo apt-get install librime-data-double-pinyin
#rime service reload
rime-daemon -drx
```

## VirtualMachineWare install

- sudo apt install build-essential
- download the bundle file on official website
- sudo bash VMware-Workstation-Full-*.bundle
- register component in the kernel ? MOK

## IDE
- ubuntu-make to isntall Intellij

## swap Esc and Caps
- gnome-tweak-tools
`sudo apt install gnome-tweak-tool`

## Disk space
```bash
lsblk
fdisk -l
fd -h
ls /mnt/usb
mkdir /mnt/usb
sudo mount /dv/sdb1 /mnt/usb
```
configuration file /etc/fstab

## .rpm installation

```bash
sudo add-apt-repository universe
sudo apt upate
sudo apt install alien
sudo apt-get install -f
sudo alien package.rpm
sudo dpkg -i package.deb
# alternative
sudo alien -i package.rpm
```

## obsidian
```bash
sudo apt install flatpak
flatpak --version
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak search <app_name>
flatpak install <app_id>
flatpak install md.obsidian.Obsidian
```


## Desktop icon

~/$USER/Desktop
~/.local/share/applications
/usr/share/applications
/usr/local/share/applications

## permission and groups
*docker got Permission denied*
```bash
sudo groupadd docker
sudo usermod -aG docker $USER
newgrp docker
```


# CentOS
```sh
//setup network adapter
ip address show
nmcli
nmtui
systemctl restart network.service
systemctl status sshd
vi /etc/ssh/sshd_config
// setup firewall port
fierwall-cmd --zone=public --add-port=22/tcp --permanent
firewall-cmd --relaod
firewall-cmd --list-ports

//setup onboot&& change network configuration
cd /etc/syscofig/network-scripts
vi ifcfg-ens33
```

### Extend Partition

1. fdisk
2. partprobe
3. pvcrewate /dev/sdb
4. vgextend centos /dev/sdb
5. lvextend -L +64G /dev/centos/root
6. xfs_growfs /dev/centos/root
7. df -hlT

### install NVIDIA drivers

nvidia 

ubuntu-drivers devices
ubuntu-drivers autoinstall
sudo apt install nvidia-driver-#{version}
sudo add-apt-repository ppa:graphics-drivers/ppa

recogonize Nvidia model
```bash
lshw -numeric -C display
lspci -vnn
prime-select query
sudo prime-select nvidia
```
close desktop manager
```bash
sudo telinit 3
```
reboot dsiplay service
```bash
sudo service gdm3 start
```
nvidia information
```bash
nvidia-smi
```
reomve drivers删除驱动
```bash
sudo apt purge nvidia-*
suso apt autoremove
```

# Impressions
# Summarize Bottom