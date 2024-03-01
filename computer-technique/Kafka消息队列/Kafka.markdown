# Kafka

[Kafka](https://www.cnblogs.com/cxuanBlog/p/11949238.html)
[Kafka message lost](https://zhuanlan.zhihu.com/p/341546586)
*Kafka 是由Linkedin公司开发，分布式(Distributed)，支持多分区(Partitions)、多副本(Replicas)*
*基于Zookeeper的分布式消息流平台(Data Pipeline/Stream)*
*开源(Open Source), 发布订阅模式的消息引擎

## Terminoly术语

消息：Kafka中的数据单元被称为**消息**，也被叫做记录，
批次：为了提高效率，消息会**分批次**写入Kafka，批次代表一组消息
主题：消息的种类被称为**主题**， 一个主题代表了一类消息，相当于对消息分类，可以看作数据库中的表
分区：主题可以被分为若干分区，同一主题分区可以不在一个机器上，部署在多个机器上（集群）时，由此来实现kafka的**伸缩性**--单一主题中的分区有序，但是无法保证所有主题的分区有序

## 消息队列功能

- 解耦
- 异步
- 削峰

## message delivery semantic

- at most once
- at least once
- exactly once

ack code:
0: nowait
1: leader down
-1: leader down follower down

## Kafka 消息传递过程

1. producer->broker
2. broker->sychronize/persist
3. broker->consumer

## Architecture of Message communication

Remote Procedure Calls, RPC--> HTTP Rest API
Service-Oriented Architecture, SOA --> Enterprise Service Bus

**heavy marked** are the advantages
|Contrast | ActiveMQ |RabibitMQ|RocketMQ|Kafka |
|:----:|:----:|:----:|:----:|:----:|
|language|Java|Erlang|-|Scala|
|protocol|JMS|AMQP|-|not standard|
|throughout|10,000|10,000|100,000|100,000|
|topics|-|-|**千位级别，吞吐量小幅下降**|百级时大幅下降, 可通过更多机器资源支撑大规模topic|
|offset|not manageable| ?| resetable|
|period| ms| **us**|ms|ms|
|work mode| topic/queue|broker: Exchange Binding Queue|producer->broker->consumer|topic/partition|
|loadbalance|standalone|standalone|master-slave|zookeeper|
|availabilty|high|high|higher(distributed)|extremely hight**distributed&replicas**|
|reliability|low occurrency|barely|double ack(no lost after opitimizing) | 

## RabbitMQ

### producer->broker progress with two sematics

1. transactional(Synchronized): channel.txSelect,channel.txRollback 
2. confirm(Asynchronized): ack

### 持久化

persist for two steps

1. 创建Queue,  persist metadata
2. deliveryMode=2, persist data

semantics

1. 交换机
2. 队列
3. 消息

### consumer side

ack technic on both producer and consumer sides

## Kafka四大核心API

abb.**PCSC**

1. Producer API
2. Consumer API
3. Stream API
4. Connector API

## 防止丢失的ACK机制

## 数据保存的策略

longevity
log.retention -| time
              -| byte
security
replication.factor
min.insyc.replicas

## Modular

- message channel
- publisher-subscriber: pull^push
- message router

## Kafka Producer

需要关注的要素
serialize
sync vs. async
ack
partition分发机制：轮询或者随机
compression压缩