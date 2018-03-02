---
title: post提交的数据几种编码格式
date: 2017-07-05 22:31:32
tags: html
---

### 1.背景介绍

HTTP/1.1 协议规定的 HTTP 请求方法有 OPTIONS、GET、HEAD、POST、PUT、DELETE、TRACE、CONNECT 这几种。其中 POST 一般用来向服务端提交数据，本文主要讨论 POST 提交数据的几种编码方式。

### 2.知识剖析

协议规定 POST 提交的数据必须放在消息主体（entity-body）中，但协议并没有规定数据必须使用什么编码方式。但是，数据发送出去，还要服务端解析成功才有意义。

服务端通常是根据请求头（headers）中的 Content-Type 字段来获知请求中的消息主体是用何种方式编码，再对主体进行解析。POST 提交数据方案，包含了 Content-Type 和消息主体编码方式两部分。下面就正式开始介绍它们。

### 3.常见问题

常用的POST 提交数据方式有哪些？

### 4.解决方案

四种常见的 POST 提交数据方式：

1.application/x-www-form-urlencoded

2.multipart/form-data

3.application/json

4.text/xml

**4.1 application/x-www-form-urlencoded**

这应该是最常见的 POST 提交数据的方式了。浏览器的原生 form 表单，如果不设置 enctype属性，那么最终就会默认以 application/x-www-form-urlencoded 方式提交数据。

在POST提交数据中Content-Type 被指定为 application/x-www-form-urlencoded；提交的数据按照 key1=val1&key2=val2 的方式进行编码，key 和 val 都进行了 URL 转码。大部分服务端语言都对这种方式有很好的支持。很多时候，我们用 Ajax 提交数据时，也是使用这种方式。

```
xhr.open("POST","http://www.example.com",true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
```

**4.2 multipart/form-data**

这也是一个常见的 POST 数据提交的方式。我们使用表单上传文件时，必须让 form 的 enctype 等于这个值。这种方式一般用来上传文件，各大服务端语言对它也有着良好的支持。上面提到的这两种 POST 数据的方式，都是浏览器原生支持的。

```
xhr.open("POST","http://www.example.com",true);
xhr.setRequestHeader("Content-Type", "multipart/form-data");

```

**4.3 application/json**

application/json 这个 Content-Type 作为响应头大家肯定不陌生。实际上，现在越来越多的人把它作为请求头，用来告诉服务端消息主体是序列化后的 JSON 字符串。由于 JSON 规范的流行，除了低版本 IE 之外的各大浏览器都原生支持 JSON.stringify，服务端语言也都有处理 JSON 的函数，使用 JSON 不会遇上什么麻烦。

```
xhr.open("POST","http://www.example.com",true);
xhr.setRequestHeader("Content-Type", "application/json");

```

**4.4 text/xml**

它是一种使用 HTTP 作为传输协议，XML 作为编码方式的远程调用规范,它的使用也很广泛，能很好的支持已有的 XML-RPC 服务。不过，XML 结构还是过于臃肿，一般场景用 JSON 会更灵活方便。

```
xhr.open("POST","http://www.example.com",true);
xhr.setRequestHeader("Content-Type", "text/xml");

```

### 5.编码实战

### 6.扩展思考

我们应该选择哪种编码方式呢？

1.选择与后端约定好的提交方式

2.看提交的数据类型，如果提交文件的话选择multipart/form-data

### 7.更多讨论

**GET和POST有哪些区别？**

**传言1：GET方式对长度有限制；POST方式对长度没限制。**

(1).因为GET是通过URL提交数据，那么GET可提交的数据量就跟URL的长度有直接关系了。而实际上，URL不存在参数上限的问题，HTTP协议规范没有对URL长度进行限制。这个限制是特定的浏览器及服务器对它的限制。IE对URL长度的限制是2083字节(2K+35)。对于其他浏览器，如Netscape、FireFox等，理论上没有长度限制，其限制取决于操作系统的支持。

(2).理论上讲，POST是没有大小限制的，HTTP协议规范也没有进行大小限制，说“POST数据量存在80K/100K的大小限制”是不准确的，POST数据是没有限制的，起限制作用的是服务器的处理程序的处理能力。

**传言2：GET是从服务器上获取数据；POST是向服务器传送数据。**

回答：GET方式就没有向服务器传送数据？那么URL中的?子句送的是什么？不论是GET还是POST，都可以向服务器传送数据，只不过传送数据的位置不同,GET请求的数据会附在URL之后,POST把提交的数据则放置在是HTTP包的包体中；不论是GET还是POST，都要从服务器上获取数据,关键的问题是:

GET的主要任务是获得数据，但在获得数据前也可以向服务器提交一些数据；

POST的主要任务是提交数据，但在提交数据之后服务器也会向用户端返回一些显示用的数据。

**传言3：GET不安全，用户能从地址栏上看到传送的数据；POST安全，用户不能从地址栏上看到传送的数据。**

回答：通过GET提交数据，用户名和密码将明文出现在URL上，因为(1)登录页面有可能被浏览器缓存，(2)其他人查看浏览器的历史纪录，那么别人就可以拿到你的账号和密码了。POST方式看不到传送的数据是因为IE浏览器做了限制。如果你通过第三方工具看到了POST方式传送的数据，你还能说POST方式是安全的吗？理论上说GET和POST方式都不安全，要不就用不着研究HTTPS了。

**8.参考文献**

参考一：[四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)

参考二：[浅谈HTTP中Get与Post的区别](http://www.cnblogs.com/hyddd/archive/2009/03/31/1426026.html)

参考三：[HTTP协议POST请求问题总结](http://blog.csdn.net/jiangguilong2000/article/details/12651597)



视频资料

http://v.qq.com/iframe/player.html?vid=i05205vnhr5&tiny=0&auto=0

PPT资料

https://ptteng.github.io/PPT/PPT/js-05-EnctypeofPOST.html

更多资料https://ptteng.github.io/PPT/webIndex.html