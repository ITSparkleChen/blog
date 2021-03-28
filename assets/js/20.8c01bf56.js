(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{508:function(s,t,a){"use strict";a.r(t);var n=a(3),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("只要接触过或者学过java的,spring的学习必不可少。那么spring 是什么？为什么这么流行？在进行短暂的接触之后简单的做下笔记，希望也能给其他想要学习java的爱好者分享一点点自己的学习经验。内容可能不太够深入,因为spring的概念太多了,而且相关的知识比较分散,类似一个复杂的工艺品,需要循序渐进更需要对每道工序能深入了解，并非一朝一夕就能完成的。当然随着时间的推移,spring也不是一成不变的,新的技术新的版本都会要求我们时刻保持高度的警惕心持续学习。")])]),s._v(" "),a("h2",{attrs:{id:"spring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring"}},[s._v("#")]),s._v(" Spring")]),s._v(" "),a("h3",{attrs:{id:"什么是spring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是spring"}},[s._v("#")]),s._v(" 什么是Spring?")]),s._v(" "),a("p",[s._v("下面是词条百科对spring的描述：")]),s._v(" "),a("p",[a("code",[s._v("Spring框架是一个开放源代码的应用程序框架，针对bean的生命周期进行管理的轻量级容器。更多的是一种工具")])]),s._v(" "),a("p",[s._v("下面是spring官网对其描述")]),s._v(" "),a("blockquote",[a("blockquote",[a("p",[s._v("“We use a lot of the  tools that come with the Spring framework and reap the benefits of  having a lot of the out of the box solutions, and not having to worry  about writing a ton of additional code—so that really saves us some time and energy.”")])]),s._v(" "),a("p",[s._v("Sean Graham, Application Transformation Lead, DICK’s Sporting Goods")])]),s._v(" "),a("p",[s._v("大概意思是说spring使开发变得简单,包括了大量的开箱即用的工具，而不必要写大量重复冗余的代码了，提高了开发的效率同时降低了开发的门槛。当然目前spring项目不仅仅在开发web方面，衍生了一些子项目，每个子项目又有不同的应用场景。比如比较热门的一键式配置的springboot 可以快速上手开发而无需进行大量的关系依赖的jar包引用、spring mvc mvc架构开发项目、spring cloud 针对近几年比较火的云开发、spring AMQP 做消息服务开发、spring security 做安全的等等。还有很多其他类型的子项目，感兴趣的可以访问"),a("a",{attrs:{href:"https://spring.io/projects",target:"_blank",rel:"noopener noreferrer"}},[s._v("这里"),a("OutboundLink")],1),s._v(" 进行查看。我们这里说的spring 更确切的是指spring framework。")]),s._v(" "),a("h3",{attrs:{id:"spring模块图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring模块图"}},[s._v("#")]),s._v(" spring模块图")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/21032801.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我们从下往上看")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("Spring Test")]),s._v("：spring中集成测试的模块")]),s._v(" "),a("li",[a("strong",[s._v("Srping Core")]),s._v(" : 包括  Beans（理解为生产对象的模具）、Core (Spring的核心为spring提供了基本功能）、Context(Spring 的容器 也是bean的生产工厂)、SpEL(表达式语言 是一个支持运行时查询和操作对象图的表达式语言 。 语法类似于 EL 表达式 ，后续界面绑定数据会用到。)")]),s._v(" "),a("li",[a("strong",[s._v("Spring Aop&Aspect")]),s._v(" :  面向切面编程，Spring 做切面用主要用来增强实现的类。简单就是在一些地方想额外加代码提供更丰富的功能。比如我们系统中随时可以使用日志记录。")]),s._v(" "),a("li",[a("strong",[s._v("Spring Instrumentation")]),s._v(": 提供类的检测")]),s._v(" "),a("li",[a("strong",[s._v("Spring Messaging")]),s._v("：Spring内部模块之间协作使用的消息基础")]),s._v(" "),a("li",[a("strong",[s._v("数据访问/集成")]),s._v(": JDBC、ORM、OXM(处理xml)、JMS(消息使用和制造)")]),s._v(" "),a("li",[a("strong",[s._v("Spring Web")]),s._v(":  WebSocket(Socket通信)、Servlet(交互式地浏览和生成数据，生成动态web内容,是javaweb服务器的接口)、web、portlet(Portlet环境和映射spring-webmvc模块功能的MVC实现。)")])]),s._v(" "),a("h3",{attrs:{id:"ioc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ioc"}},[s._v("#")]),s._v(" IoC")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("Ioc(Inversion of Control)即控制反转，它是一种思想不是一种技术。")]),s._v(" "),a("h3",{attrs:{id:"spring的核心特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring的核心特性"}},[s._v("#")]),s._v(" Spring的核心特性")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("spring 核心特性就是IOC和AOP，IOC（Inversion of Control），即“控制反转”；AOP（Aspect-OrientedProgramming），即“面向切面编程”。")])])]),s._v(" "),a("h4",{attrs:{id:"控制反转"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制反转"}},[s._v("#")]),s._v(" 控制反转")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("从字面意思可以拆为两部分：1、控制 2、反转 。  那么是谁控制，控制什么东西，怎么控制？反转又指的是什么，为什么称为反转，反转又有什么好处？带着问题下面介绍下。")]),s._v(" "),a("p",[s._v("首先对象这个概念在面向对象编程特别重要。我们知道编写一个程序需要有大量的类文件构成，此处以java为例，这些java文件大部分是类文件，类实例化之后有了对象，由此我们就可以操纵类的属性和方法。有这么一个问题，在类A中去调用类B的属性或方法，我们通常的做法肯定是 在类A里面实例化一个B的对象即 "),a("code",[s._v("B clazz=new B();")]),s._v("然后通过B.xxx来拿到属性或者调用方法。这一系列是我们手动创建的。Spring容器的作用就是帮我们管理这些类，只要我们定义了一些要使用的类，通过某种方式告诉容器，等我们什么时候用到这个类，那么容器自动生成一个实体类对象。不需要去手动"),a("code",[s._v("new")]),s._v("也就是说，我们只管定义类是怎么样的，至于实例化的过程交给容器做就好了，spring容器帮我们管理对象的生成、以及对象依赖的管理。")]),s._v(" "),a("p",[s._v("有了以上概念那么对于上面的问题有了回答")]),s._v(" "),a("ol",[a("li",[s._v("谁控制、控制什么东西、怎么控制？")])]),s._v(" "),a("p",[s._v("由spring容器控制对象的创建和对象之间的依赖，控制的方式就是每个类都会生成一个bean（实际内部叫"),a("strong",[s._v("BeanDefinition")]),s._v(",此处不过多介绍，就只要知道它用来记录类的一些详细信息以便之后创建对象）")]),s._v(" "),a("p",[s._v("2.反转是什么,为什么称为反转，有什么好处")]),s._v(" "),a("p",[s._v("​      反转的对立面就是正转，正转是什么，比如刚才说的类A中需要用到类B。如果B是A的一个属性，在我们实例化A的过程中必须先把B实例化然后才能用到B.xxx,这个过程是我们主动创建执行的，称为正转。反转就是不需要主动创建，由容器帮我们在创建对象A的同时自动处理A的依赖B。这两个方式是针对对象的创建主动权发生了变化。")]),s._v(" "),a("p",[s._v("Ioc的主要实现方式是DI(Dependency Injection)即依赖注入,即在使用对象的时候自动依赖对象。")]),s._v(" "),a("p",[s._v("那么这里有一个概念就是“工厂” BeanFactory，这个工厂就是对外生产对象的，所以Ioc用到了工厂设计模式")]),s._v(" "),a("h4",{attrs:{id:"aop"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aop"}},[s._v("#")]),s._v(" AOP")]),s._v(" "),a("hr"),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("AOP（Aspect-oriented Programming）即面向切面编程。")])]),s._v(" "),a("p",[s._v("看到AOP不能不提一下熟悉的面向对象编程（OOP）")]),s._v(" "),a("p",[s._v("OOP三大特点")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("继承")])]),s._v(" "),a("li",[a("p",[s._v("封装")])]),s._v(" "),a("li",[a("p",[s._v("多态")])])]),s._v(" "),a("p",[s._v("既然有了OOP，AOP存在的意义是什么？黑格尔黑哥说过“存在即合理”，哈哈哈")]),s._v(" "),a("p",[s._v("先看OOP一些特点，我们抽象某一类事物的特征用接口来实现，然后子类实现接口中的一些方法即可。或者通过继承的关系来实现拥有父类的特性。当需要为分散对象引入公共行为（比如每个子类中需要添加日志输出），那么OOP显得很无力。OOP只定义的是从上到下的层级关系。并没有从左到右的关系。AOP就是用来解决这个问题的。AOP就像一把刀子，哪里有需要哪里开刀，把特性给加进去。")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Aspect")]),s._v("（切面）： Aspect 声明类似于 Java 中的类声明，在 Aspect 中会包含着一些 Pointcut 以及相应的 Advice。")]),s._v(" "),a("li",[a("code",[s._v("Joint point")]),s._v("（连接点）：表示在程序中明确定义的点，典型的包括方法调用，对类成员的访问以及异常处理程序块的执行等等，它自身还可以嵌套其它 joint point。")]),s._v(" "),a("li",[a("code",[s._v("Pointcut")]),s._v("（切点）：表示一组 joint point，这些 joint point 或是通过逻辑关系组合起来，或是通过通配、正则表达式等方式集中起来，它定义了相应的 Advice 将要发生的地方。")]),s._v(" "),a("li",[a("code",[s._v("Advice")]),s._v("（增强）：Advice 定义了在 "),a("code",[s._v("Pointcut")]),s._v(" 里面定义的程序点具体要做的操作，它通过 before、after 和 around 来区别是在每个 joint point 之前、之后还是代替执行的代码。")]),s._v(" "),a("li",[a("code",[s._v("Target")]),s._v("（目标对象）：织入 "),a("code",[s._v("Advice")]),s._v(" 的目标对象.。")]),s._v(" "),a("li",[a("code",[s._v("Weaving")]),s._v("（织入）：将 "),a("code",[s._v("Aspect")]),s._v(" 和其他对象连接起来, 并创建 "),a("code",[s._v("Advice")]),s._v("d object 的过程")])]),s._v(" "),a("p",[s._v("让我们来假设一下, 从前有一个小县城, 在一个月黑风高的晚上, 这个县城中发生了命案. 作案的凶手十分狡猾,  现场没有留下什么有价值的线索. 不过万幸的是, 刚从隔壁回来的老王恰好在这时候无意中发现了凶手行凶的过程, 但是由于天色已晚, 加上凶手蒙着面, 老王并没有看清凶手的面目, 只知道凶手是个男性, 身高约七尺五寸. 县令根据老王的描述, 对守门的士兵下命令说:  凡是发现有身高七尺五寸的男性, 都要抓过来审问. 士兵当然不敢违背县令的命令, 只好把进出城的所有符合条件的人都抓了起来.")]),s._v(" "),a("p",[s._v("来让我们看一下上面的一个小故事和 AOP 到底有什么对应关系.\n首先我们知道, 在 Spring AOP 中 "),a("code",[s._v("Joint point")]),s._v(" 指代的是所有方法的执行点, 而 point cut 是一个描述信息, 它修饰的是 "),a("code",[s._v("Joint point")]),s._v(", 通过 point cut, 我们就可以确定哪些 "),a("code",[s._v("Joint point")]),s._v(" 可以被织入 "),a("code",[s._v("Advice")]),s._v(". 对应到我们在上面举的例子, 我们可以做一个简单的类比, "),a("strong",[a("code",[s._v("Joint point")]),s._v(" 就相当于 小县城里的百姓")]),s._v(","),a("strong",[a("code",[s._v("pointcut")]),s._v(" 就相当于 老王所做的指控, 即凶手是个男性, 身高约七尺五寸")]),s._v(", "),a("strong",[s._v("而 "),a("code",[s._v("Advice")]),s._v(" 则是施加在符合老王所描述的嫌疑人的动作: 抓过来审问")]),s._v(".\n为什么可以这样类比呢?")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("Joint point")]),s._v(" ： 小县城里的百姓: 因为根据定义, "),a("code",[s._v("Joint point")]),s._v(" 是所有可能被织入 "),a("code",[s._v("Advice")]),s._v(" 的候选的点, 在 Spring AOP中, 则可以认为所有方法执行点都是 "),a("code",[s._v("Joint point")]),s._v(". 而在我们上面的例子中, 命案发生在小县城中, 按理说在此县城中的所有人都有可能是嫌疑人.")]),s._v(" "),a("li",[a("code",[s._v("Pointcut")]),s._v(" ：男性, 身高约七尺五寸: 我们知道, 所有的方法(joint point) 都可以织入 "),a("code",[s._v("Advice")]),s._v(", 但是我们并不希望在所有方法上都织入 "),a("code",[s._v("Advice")]),s._v(", 而 "),a("code",[s._v("Pointcut")]),s._v(" 的作用就是提供一组规则来匹配joinpoint, 给满足规则的 joinpoint 添加 "),a("code",[s._v("Advice")]),s._v(". 同理, 对于县令来说, 他再昏庸, 也知道不能把县城中的所有百姓都抓起来审问, 而是根据凶手是个男性, 身高约七尺五寸,  把符合条件的人抓起来. 在这里 凶手是个男性, 身高约七尺五寸 就是一个修饰谓语, 它限定了凶手的范围, 满足此修饰规则的百姓都是嫌疑人,  都需要抓起来审问.")]),s._v(" "),a("li",[a("code",[s._v("Advice")]),s._v(" ：抓过来审问, "),a("code",[s._v("Advice")]),s._v(" 是一个动作, 即一段 Java 代码, 这段 Java 代码是作用于 point cut 所限定的那些 "),a("code",[s._v("Joint point")]),s._v(" 上的. 同理, 对比到我们的例子中, 抓过来审问 这个动作就是对作用于那些满足 男性, 身高约七尺五寸 的小县城里的百姓.")]),s._v(" "),a("li",[a("code",[s._v("Aspect")]),s._v(":："),a("code",[s._v("Aspect")]),s._v(" 是 point cut 与 "),a("code",[s._v("Advice")]),s._v(" 的组合, 因此在这里我们就可以类比: “根据老王的线索, 凡是发现有身高七尺五寸的男性, 都要抓过来审问” 这一整个动作可以被认为是一个 "),a("code",[s._v("Aspect")]),s._v(".")])]),s._v(" "),a("p",[s._v("AOP实现使用的是代理模式")]),s._v(" "),a("p",[s._v("代理实现的前提是代理类和实际类实现的是同一接口或者继承关系")]),s._v(" "),a("p",[s._v("代理分为静态代理和动态代理。静态代理是固定的代理，动态代理是编译时候动态生成的代理。")]),s._v(" "),a("p",[s._v("静态代理")]),s._v(" "),a("p",[s._v("定义一个接口")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("具体调用类")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDao")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n   "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@overrid")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吃饭了"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("代理类的实现")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserProxy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUserDao")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUser")]),s._v(" _user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUser")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        _user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@overrid")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       _user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       \n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("before")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吃饭前"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   \n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"吃饭后"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("测试代码")]),s._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("，obj value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IUser")]),s._v(" user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserDao")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserProxy")]),s._v(" proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("UserProxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("eat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-----吃饭前")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-----吃饭了")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//-----吃饭后")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("这个地方通过静态代理曾强原来的UserDao.eat()方法而不改变具体对象的eat中的东西")])])}),[],!1,null,null,null);t.default=e.exports}}]);