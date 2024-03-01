Posted: March 16, 2022 %t min read

If you design software architectures, chances are that you come across the same goals and problems over and over again. Architectural patterns make it easier to solve these issues by providing repeatable designs that address common situations. As [Anand Butani explains](https://www.redhat.com/architect/5-essential-patterns-software-architecture):

> "The architectural pattern captures the design structures of various systems and elements of software so that they can be reused. During the process of writing software code, developers encounter similar problems multiple times within a project, within the company, and within their careers. One way to address this is to create design patterns that give engineers a reusable way to solve these problems, allowing software engineers to achieve the same output structurally for a given project."

**_\[ Download [the automation architect's handbook](https://www.redhat.com/en/engage/automation-architect?intcmp=7013a0000025wJwAAI). \]_**

There are numerous advantages to using architectural patterns in your software designs. They increase your efficiency, productivity, and speed; optimize development costs; improve planning; and more.

There are many different types of enterprise architect design patterns you can tap into. To help you decide what's right for your project, I've rounded up 14 previous articles about architectural design patterns and summarized them below. If one piques your interest, click the link to learn more.

## 14 software architecture patterns

The [**circuit breaker**](https://www.redhat.com/architect/circuit-breaker-architecture-pattern) pattern minimizes the effects of a hazard by rerouting traffic to another service. While it helps make systems more fault tolerant to prevent accidents, it also requires sophisticated testing and using an infrastructure-management technology like service mesh.

The [**client-server**](https://www.redhat.com/architect/5-essential-patterns-software-architecture#client-server) pattern is a peer-to-peer architecture that is comprised of a _client_, which requests a service, and a _server_, which provides the the service. Examples include banking, file sharing, email, and the World Wide Web. One advantage of this pattern is that data and network peripherals are centrally managed, however, the server is expensive.

The [**command query responsibility segregation**](https://www.redhat.com/architect/pros-and-cons-cqrs) (CQRS) pattern handles the situation where database queries happen more often than the data changes. It separates read and write activities to provide greater stability, scalability, and performance, but it requires more database technologies and therefore may increase costs.

The [**controller-responder**](https://www.redhat.com/architect/5-essential-patterns-software-architecture#controller-responder) pattern divides the architecture into two components: The controller handles the data and distributes workloads, and the responder replicates data from the controller and generates results. One advantage is that you can read data from the responder without affecting the data in the controller, but if the controller fails, you may lose data and need to restart the application.

**_\[ Learn more about cloud-native development in the eBook [Kubernetes Patterns: Reusable elements for designing cloud-native applications](https://www.redhat.com/en/engage/kubernetes-containers-architecture-s-201910240918?intcmp=7013a0000025wJwAAI). \]_**

The [**event sourcing**](https://www.redhat.com/architect/pros-and-cons-event-sourcing-architecture-pattern) pattern is good for applications that use real-time data. It sends a continuous stream of messages to a database, web server, log, or another target. It's very flexible but demands a highly efficient and reliable network infrastructure to minimize latency.

The [**layered**](https://www.redhat.com/architect/5-essential-patterns-software-architecture#layered) pattern is good for e-commerce, desktop, and other applications that include groups of subtasks that execute in a specific order. The layered pattern makes it easy to write applications quickly, but a disadvantage is that it can be hard to split up the layers later.

The [**microservices**](https://www.redhat.com/architect/5-essential-patterns-software-architecture#microservices) pattern combines design patterns to create multiple services that work interdependently to create a larger application. Because each application is small, it's easier to update them when needed, but the complexity means you need greater architectural expertise to make everything work correctly.

The [**model-view-controller**](https://www.redhat.com/architect/5-essential-patterns-software-architecture#MVC) (MVC) pattern divides an application into three components. The _model_ contains the application's data and main functionality; the _view_ displays data and interacts with the user; and the _controller_ handles user input and acts as the mediator between the model and the view. This pattern enables the application to generate various views, but its layers of abstraction increase complexity.

**_\[ Learn more about [validated patterns](https://www.redhat.com/en/topics/cloud-computing/what-are-validated-patterns?intcmp=7013a0000025wJwAAI). \]_**

The [**pub-sub**](https://www.redhat.com/architect/pub-sub-pros-and-cons) pattern sends (_publishes_) relevant messages to places that have _subscribed_ to a topic. It's easy to configure but more challenging to test because interactions between the publisher and the subscriber are asynchoronous.

The [**saga**](https://www.redhat.com/architect/pros-and-cons-saga-architecture-pattern) pattern is used for transactions with multiple steps, such as travel reservation services. A "saga" includes the various steps that must happen for the transaction to complete. This pattern enables transactions (ideally with five or fewer steps) to happen in loosely coupled, message-driven environments, but it requires a lot of programming and can be complex to manage.

The [**sharding**](https://www.redhat.com/architect/pros-and-cons-sharding) pattern segments data in a database to speed commands or queries. It ensures storage is consumed equally across instances but demands a skilled and experienced database administrator to manage sharding effectively.

The [**static content hosting**](https://www.redhat.com/architect/pros-and-cons-static-content-hosting-architecture-pattern) pattern is used to optimize webpage loading time. It stores static content (information that doesn't change often, like an author's bio or an MP3 file) separately from dynamic content (like stock prices). It's very efficient for delivering content and media that doesn't change often, but downsides include data consistency and higher storage costs.

The [**strangler**](https://www.redhat.com/architect/pros-and-cons-strangler-architecture-pattern) pattern is used when you're making incremental changes to a system. It places the old system behind an intermediary to support incremental transformation, which reduces risk compared to making larger changes. However, you need to pay close attention to routing and network management and make sure you have a rollback plan in place in case things go wrong.

The [**throttling**](https://www.redhat.com/architect/pros-and-cons-throttling) (or rate-limiting) pattern controls how fast data flows into a target. It's often used to prevent failure during a distributed denial of service attack or to manage cloud infrastructure costs. To use this pattern successfully, you need good redundancy mechanisms in place, and it's often used alongside the circuit breaker pattern to maintain service performance.

## Summary

The next time you're embarking on a new software architecture, consider which of these (or the many other) architectural design patterns you can use to make your work more efficient.

**_\[ Working at the edge? [Learn more about validated patterns](https://www.redhat.com/en/products/edge/validated-patterns?intcmp=7013a0000025wJwAAI). \]_**