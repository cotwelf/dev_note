# 1.介绍知道的http返回的状态码
## 2xx是正确的
200    OK    请求成功。一般用于GET与POST请求
## 3xx是不正确但可以自动处理的 
301    Moved Permanently    永久移动。请求的资源已被永久的移动到新URI，返回信息会包括新的URI，浏览器会自动定向到新URI。今后任何新的请求都应使用新的URI代替  
302    Found    临时移动。与301类似。但资源只是临时被移动。客户端应继续使用原有URI  
304    Not Modified    未修改。所请求的资源未修改，服务器返回此状态码时，不会返回任何资源。客户端通常会缓存访问过的资源，通过提供一个头信息指出客户端希望只返回在指定日期之后修改的资源  
（字面上的区别就是301是永久重定向，而302是临时重定向。  
301比较常用的场景是使用域名跳转。302用来做临时跳转 比如未登陆的用户访问用户中心重定向到登录页面。）
## 4xx是客户端错误 
400    Bad Request    客户端请求的语法错误，服务器无法理解  
401    Unauthorized    请求要求用户的身份认证  
403    Forbidden    服务器理解请求客户端的请求，但是拒绝执行此请求  
404    Not Found    服务器无法根据客户端的请求找到资源（网页）。通过此代码，网站设计人员可设置"您所请求的资源无法找到"的个性页面  
## 5xx是服务端错误
500    Internal Server Error    服务器内部错误，无法完成请求  
502    Bad Gateway    作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应

# 2.前端优化
降低请求量：合并资源，lazyLoad，减少HTTP 请求数，minify / gzip 压缩，webP。  
加快请求速度：预解析DNS，减少域名数，并行加载，CDN 分发。  
缓存：离线数据缓存localStorage，HTTP 协议缓存请求，离线缓存 manifest。  
渲染：JS/CSS优化，加载顺序，服务端渲染，pipeline。  
## 怎么看网站的性能如何
参考回答：
检测页面加载时间一般有两种方式，一种是被动去测：就是在被检测的页面置入脚本或探针，当用户访问网页时，探针自动采集数据并传回数据库进行分析，另一种主动监测的方式，即主动的搭建分布式受控环境，模拟用户发起页面访问请求，主动采集性能数据并分析，在检测的精准度上，专业的第三方工具效果更佳，比如说性能极客

# 3.HTTP支持的方法
GET, POST, HEAD, OPTIONS, PUT, DELETE, TRACE, CONNECTGET和POST的区别
## get和post的区别
get参数通过url传递，post放在request body中。  
get请求在url中传递的参数是有长度限制的，而post没有。  
get比post更不安全，因为参数直接暴露在url中，所以不能用来传递敏感信息。  
get请求只能进行url编码，而post支持多种编码方式  
get请求会浏览器主动cache，而post支持多种编码方式。  
get请求参数会被完整保留在浏览历史记录里，而post中的参数不会被保留。  
GET和POST本质上就是TCP链接，并无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。  
GET产生一个TCP数据包；POST产生两个TCP数据包。

# 4.HTML5新增的元素
首先html5为了更好的实践web语义化，增加了header，footer，nav,aside,section等语义化标签，  
在表单方面，为了增强表单，为input增加了color，emial,data ,range等类型，  
在存储方面，提供了sessionStorage，localStorage,和离线存储，通过这些存储方式方便数据在客户端的存储和获取，  
在多媒体方面规定了音频和视频元素audio和vedio，另外还有地理定位，canvas画布，拖放，多线程编程的web worker和websocket协议

# 5.cookie和session的区别，localstorage和sessionstorage的区别
Cookie和session都可用来存储用户信息，cookie存放于客户端，session存放于服务器端，因为cookie存放于客户端有可能被窃取，所以cookie一般用来存放不敏感的信息，比如用户设置的网站主题，敏感的信息用session存储，比如用户的登陆信息，session可以存放于文件，数据库，内存中都可以，cookie可以服务器端响应的时候设置，也可以客户端通过JS设置cookie会在请求时在http首部发送给客户端，cookie一般在客户端有大小限制，一般为4K。  
cookie数据始终在同源的http请求中携带(即使不需要)，即cookie在浏览器和服务器间来回传递。比如cookie存a 服务端可以根据a读session b。然后b里面有用户数据c  
## cookie有哪些字段可以设置
|字段|用法|说明|
|---|---|---|
|||expires/Max-Age 字段为此cookie超时时间。若设置其值为一个时间，那么当到达此时间后，此cookie失效。不设置的话默认值是Session，意思是cookie会和session一起失效。当浏览器关闭(不是浏览器标签页，而是整个浏览器) 后，此cookie失效。|

name字段为一个cookie的名称。
value字段为一个cookie的值。

domain字段为可以访问此cookie的域名。

非顶级域名，如二级域名或者三级域名，设置的cookie的domain只能为顶级域名或者二级域名或者三级域名本身，不能设置其他二级域名的cookie，否则cookie无法生成。

顶级域名只能设置domain为顶级域名，不能设置为二级域名或者三级域名，否则cookie无法生成。

二级域名能读取设置了domain为顶级域名或者自身的cookie，不能读取其他二级域名domain的cookie。所以要想cookie在多个二级域名中共享，需要设置domain为顶级域名，这样就可以在所有二级域名里面或者到这个cookie的值了。
顶级域名只能获取到domain设置为顶级域名的cookie，其他domain设置为二级域名的无法获取。

path字段为可以访问此cookie的页面路径。 比如domain是abc.com,path是/test，那么只有/test路径下的页面可以读取此cookie。



Size字段 此cookie大小。

http字段  cookie的httponly属性。若此属性为true，则只有在http请求头中会带有此cookie的信息，而不能通过document.cookie来访问此cookie。

secure 字段 设置是否只能通过https来传递此条cookie
下面从几个方向区分一下cookie，localstorage，sessionstorage的区别  
## 5.1.生命周期：
Cookie：可设置失效时间，否则默认为关闭浏览器后失效  
Localstorage:除非被手动清除，否则永久保存  
Sessionstorage：仅在当前网页会话下有效，关闭页面或浏览器后就会被清除  

## 5.2.存放数据：
Cookie：4k左右  
Localstorage和sessionstorage：可以保存5M的信息  

## 5.3.http请求：
Cookie：每次都会携带在http头中，如果使用cookie保存过多数据会带来性能问题  
其他两个：仅在客户端即浏览器中保存，不参与和服务器的通信  

## 5.4.易用性：
Cookie：需要程序员自己封装，原生的cookie接口不友好  
Localstorage和sessionstorage：即可采用原生接口，亦可再次封装  

## 5.5.应用场景：
从安全性来说，因为每次http请求都回携带cookie信息，这样子浪费了带宽，所以cookie应该尽可能的少用，此外cookie还需要指定作用域，不可以跨域调用，限制很多，但是用户识别用户登陆来说，cookie还是比storage好用，其他情况下可以用storage，localstorage可以用来在页面传递参数，sessionstorage可以用来保存一些临时的数据，防止用户刷新页面后丢失了一些参数，

# 6.常见的HTTP的头部
可以将http首部分为通用首部，请求首部，响应首部，实体首部
通用首部表示一些通用信息，比如date表示报文创建时间，

请求首部就是请求报文中独有的，如cookie，和缓存相关的如if-Modified-Since

响应首部就是响应报文中独有的，如set-cookie，和重定向相关的location，

实体首部用来描述实体部分，如allow用来描述可执行的请求方法，content-type描述主题类型，content-Encoding描述主体的编码方式

# 7.浏览器在生成页面的时候，会生成那两颗树？
构造两棵树，DOM树和CSSOM规则树  
当浏览器接收到服务器相应来的HTML文档后，会遍历文档节点，生成DOM树，CSSOM规则树由浏览器解析CSS文件生成，

# 8.输入URL到页面加载显示完成发生了什么?
参考回答：
DNS解析
TCP连接

发送HTTP请求

服务器处理请求并返回HTTP报文

浏览器解析渲染页面

连接结束

# 9.具体有哪些请求头是跟缓存相关的
参考回答：
缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。
强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match
# 10.cache-control的值有哪些
参考回答：
cache-control是一个通用消息头字段被用于HTTP请求和响应中，通过指定指令来实现缓存机制，这个缓存指令是单向的，常见的取值有private、no-cache、max-age、must-revalidate等，默认为private。

# 11.csrf和xss的网络攻击及防范
参考回答：
CSRF：跨站请求伪造，可以理解为攻击者盗用了用户的身份，以用户的名义发送了恶意请求，比如用户登录了一个网站后，立刻在另一个ｔａｂ页面访问量攻击者用来制造攻击的网站，这个网站要求访问刚刚登陆的网站，并发送了一个恶意请求，这时候CSRF就产生了，比如这个制造攻击的网站使用一张图片，但是这种图片的链接却是可以修改数据库的，这时候攻击者就可以以用户的名义操作这个数据库，防御方式的话：使用验证码，检查https头部的refer，使用token
XSS：跨站脚本攻击，是说攻击者通过注入恶意的脚本，在用户浏览网页的时候进行攻击，比如获取cookie，或者其他用户身份信息，可以分为存储型和反射型，存储型是攻击者输入一些数据并且存储到了数据库中，其他浏览者看到的时候进行攻击，反射型的话不存储在数据库中，往往表现为将攻击代码放在url地址的请求参数中，防御的话为cookie设置httpOnly属性，对用户的输入进行检查，进行特殊字符过滤

# 12.HTML5和CSS3用的多吗？你了解它们的新属性吗？有在项目中用过吗？
html5：  
1）标签增删  
8个语义元素 header section footer aside nav main article figure  

内容元素mark高亮 progress进度

新的表单控件calander date time email url search

新的input类型 color date datetime datetime-local email

移除过时标签big font frame frameset

2）canvas绘图，支持内联SVG。支持MathML

3）多媒体audio video source embed track

4）本地离线存储，把需要离线存储在本地的文件列在一个manifest配置文件

5）web存储。localStorage、SessionStorage


css3：

CSS3边框如border-radius，box-shadow等；CSS3背景如background-size，background-origin等；CSS3 2D，3D转换如transform等；CSS3动画如animation等。 参考https://www.cnblogs.com/xkweb/p/5862612.html

# 13.浏览器缓存机制
参考回答：
缓存分为两种：强缓存和协商缓存，根据响应的header内容来决定。
强缓存相关字段有expires，cache-control。如果cache-control与expires同时存在的话，cache-control的优先级高于expires。

协商缓存相关字段有Last-Modified/If-Modified-Since，Etag/If-None-Match