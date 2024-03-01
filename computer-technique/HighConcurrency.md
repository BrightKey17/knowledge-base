# Concurrency&Multi-thread

>> 高并发与多线程

High Concurrency 

- 响应时间 Response Time
- 吞吐量 ThroughPut
- 查询率 Query Per Second

## 并发编程三要素

- 原子性
- 有序性
- 变量共享

## 线程状态

new start run sleep dead

## 乐观锁与悲观锁 synchronized

## 线程间的协作: wait/notify/notifyAll

## Thread Pool 线程池

## 高并发解决技术方案

1. 分布式缓存: redis memcached...
2. 消息队列: activeMQ
3. 工程分拆，使用RPC构筑通信网络
4. 数据库垂直和水平分拆
5. 数据库读写分离
6. nosql: mongoDB
7. 服务降级与分流


