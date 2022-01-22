(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{520:function(s,t,r){s.exports=r.p+"assets/img/1.b769141e.png"},521:function(s,t,r){s.exports=r.p+"assets/img/2.4f95addc.png"},522:function(s,t,r){s.exports=r.p+"assets/img/3.b8e4641a.png"},523:function(s,t,r){s.exports=r.p+"assets/img/4.8c920660.png"},524:function(s,t,r){s.exports=r.p+"assets/img/5.019a127c.png"},525:function(s,t,r){s.exports=r.p+"assets/img/6.f5641037.png"},526:function(s,t,r){s.exports=r.p+"assets/img/7.411e7793.png"},527:function(s,t,r){s.exports=r.p+"assets/img/8.3736ddda.png"},682:function(s,t,r){"use strict";r.r(t);var a=r(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"_1-url解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-url解析"}},[s._v("#")]),s._v(" 1. URL解析")]),s._v(" "),a("p",[a("img",{attrs:{src:r(520),alt:""}})]),s._v(" "),a("ul",[a("li",[s._v("URI：统一资源标识符\n"),a("ul",[a("li",[s._v("URL：统一资源定位符")]),s._v(" "),a("li",[s._v("URN：统一资源名称")])])]),s._v(" "),a("li",[s._v("传输协议：用什么样的协议负责客户端和服务器端的信息传输\n"),a("ul",[a("li",[s._v("HTTP:最常用的 超文本传输协议  HTTP1.0/1.1/2.0")]),s._v(" "),a("li",[s._v("HTTPS:HTTP+SSL(TSL)比HTTP更加的安全")]),s._v(" "),a("li",[s._v("FTP:文件上的上传下载「我们把本地内容部署到服务器，或者从服务器拉取内容  FTP工具」")]),s._v(" "),a("li",[s._v("...")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("HTTP/1.0  每次请求响应，建立一个TCP连接，用完关闭"),a("br"),s._v("\nHTTP/1.1 「长连接」 若干个请求排队串行化单线程处理，后面的请求等待前面请求的返回才能获得执行机会，一旦有某请求超时等，后续请求只能被阻塞，毫无办法，也就是人们常说的线头阻塞；"),a("br"),s._v("\nHTTP/2.0 「多路复用」多个请求可同时在一个连接上并行执行，某个请求任务耗时严重，不会影响到其它连接的正常执行；")])]),s._v(" "),a("ul",[a("li",[s._v("域名:对服务器外网IP的一个重命名\n"),a("ul",[a("li",[s._v("顶级域名/一级域名/二级域名...")]),s._v(" "),a("li",[s._v(".cn/com/net/org/cc...")])])]),s._v(" "),a("li",[s._v("端口号:区分同一个服务器上不同的服务的\n"),a("ul",[a("li",[s._v("0~65535")]),s._v(" "),a("li",[s._v("默认端口号：浏览器会根据输入的协议，给与默认端口号「前提是自己没有指定」\n"),a("ul",[a("li",[s._v("HTTP -> 80")]),s._v(" "),a("li",[s._v("HTTPS -> 443")]),s._v(" "),a("li",[s._v("FTP -> 21")]),s._v(" "),a("li",[s._v("...")])])])])]),s._v(" "),a("li",[s._v("请求资源的文件路径\n"),a("ul",[a("li",[s._v("URL重写")])])]),s._v(" "),a("li",[s._v("问号参数\n"),a("ul",[a("li",[s._v("客户端把信息传递给服务器")]),s._v(" "),a("li",[s._v("A页面把信息传递给B页面")]),s._v(" "),a("li",[s._v("A组件把把信息传递给B组件")]),s._v(" "),a("li",[s._v("...")])])]),s._v(" "),a("li",[s._v("哈希值 HASH\n"),a("ul",[a("li",[s._v("锚点定位")]),s._v(" "),a("li",[s._v("HASH路由")]),s._v(" "),a("li",[s._v("...")])])]),s._v(" "),a("li",[s._v("编码问题：处理：中文、特殊符号...\n"),a("ul",[a("li",[s._v("encodeURI/decodeURI：对整个URL编码，处理中文")]),s._v(" "),a("li",[s._v("encodeURIComponent/decodeURIComponent：对传递的参数单独的编码，处理中文以及特殊符号")]),s._v(" "),a("li",[s._v("escape/unescape：客户端对中文进行编码解码「一般只用于客户端信息传输，例如：cookie」")]),s._v(" "),a("li",[s._v("也可以基于自己设定的加密机密规则处理「对称加密」")]),s._v(" "),a("li",[s._v("对于某些数据，我们需要采用非对称加密「不可解密的，例如：md5」")])])])]),s._v(" "),a("h2",{attrs:{id:"_2-缓存检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-缓存检测"}},[s._v("#")]),s._v(" 2. 缓存检测")]),s._v(" "),a("p",[a("strong",[s._v("缓存一般指的都是静态资源文件的缓存，这个一般是客户端和服务器端根据一些协商的规则，自动去完成的缓存策略「不用我们自己编写啥代码去处理」（只有API接口数据缓存，是需要前端开发自己去完成的）")])]),s._v(" "),a("blockquote",[a("p",[s._v("缓存位置：")]),s._v(" "),a("ul",[a("li",[s._v("Memory Cache : 内存缓存 「一般用于，页面没有关闭，只是刷新」")]),s._v(" "),a("li",[s._v("Disk Cache：硬盘缓存  「页面关闭后重新打开」")])])]),s._v(" "),a("p",[s._v("打开网页：查找 disk cache 中是否有匹配，如有则使用，如没有则发送网络请求"),a("br"),s._v("\n普通刷新 (F5)：因TAB没关闭，因此memory cache是可用的，会被优先使用，其次才是disk cache"),a("br"),s._v("\n强制刷新 (Ctrl + F5)：浏览器不使用缓存，因此发送的请求头部均带有 Cache-control: no-cache，服务器直接返回 200 和最新内容")]),s._v(" "),a("p",[a("strong",[s._v("强缓存  Expires「HTTP1.0」 / Cache-Control「HTTP1.1」")]),a("br"),s._v(" "),a("strong",[s._v("不会请求服务器，直接请求缓存")])]),s._v(" "),a("blockquote",[a("p",[s._v("浏览器对于强缓存的处理：根据第一次请求资源时返回的响应头来确定的")]),s._v(" "),a("ul",[a("li",[s._v("Expires：缓存过期时间，用来指定资源到期的时间（HTTP/1.0）")]),s._v(" "),a("li",[s._v("Cache-Control：cache-control: max-age=2592000第一次拿到资源后的2592000秒内（30天），再次发送请求，读取缓存中的信息（HTTP/1.1）")]),s._v(" "),a("li",[s._v("两者同时存在的话，Cache-Control优先级高于Expires")])])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("如果获取的是强缓存中的信息，HTTP状态码也是200")])]),s._v(" "),a("li",[a("p",[s._v("如果是从服务器成功从新获取，HTTP状态码也是200")])]),s._v(" "),a("li",[a("p",[s._v("强缓存不适合于静态页面的缓存")]),s._v(" "),a("ul",[a("li",[s._v("如果页面都缓存了，以后服务器更新了产品，我们访问也是走的缓存数据，这样看不到最新的内容了"),a("br"),s._v("\n「强缓存模式下，其他资源信息的缓存和部署以及更新」")]),s._v(" "),a("li",[s._v("项目资源更新，每一次部署的时候，在html中\n"),a("ul",[a("li",[s._v("所有请求的资源文件「例如CSS/JS/图片...」后面都带一个时间戳")]),s._v(" "),a("li",[s._v("或者每一次资源的更新，基于webpack生成不同的资源名称「HASH戳」")])])])])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.css?20210109120512'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'asdasdsa4356.js'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("过了一天  css"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("js内容改变了，重新部署了\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'index.css?20210110120512'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" 发现后缀和上次缓存的不一样，则从新拉取最新的信息\n        "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'35453rtdgd.js'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("img",{attrs:{src:r(521),alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("协商缓存 Last-Modified/If-Modified-Since 「HTTP1.0」 & ETag/If-None-Match 「HTTP1.1」")]),a("br"),s._v(" "),a("strong",[s._v("协商缓存就是强制缓存失效后，浏览器携带缓存标识向服务器发起请求，由服务器根据缓存标识决定是否使用缓存的过程")])]),s._v(" "),a("p",[a("img",{attrs:{src:r(522),alt:""}})]),s._v(" "),a("blockquote",[a("p",[s._v("总结：")]),s._v(" "),a("ul",[a("li",[s._v("静态页面可以使用协商缓存处理")]),s._v(" "),a("li",[s._v("对于其余的资源文件，我们使用 强缓存+协商缓存")])])]),s._v(" "),a("blockquote",[a("p",[s._v("检测缓存 ->"),a("br"),s._v("\n先看是否存在强缓存「强缓存存在走强缓存」->"),a("br"),s._v("\n强缓存不存在，再看是否有协商缓存「协商存在，还是走缓存」->"),a("br"),s._v("\n协商也不存在，则直接从服务器获取最新的内容  ->"),a("br"),s._v("\n缓存起来 ...")])]),s._v(" "),a("p",[a("strong",[s._v("数据缓存：")])]),s._v(" "),a("ul",[a("li",[s._v("本地存储：cookie / localStorage / sessionStorage")]),s._v(" "),a("li",[s._v("cookie:存储内容很少4KB、cookie信息自己会默认在客户端和服务器端传来传去「内容信息多会影响前后端通信的速度」、不稳定「基于安全卫士等可以把其清除掉」、用户可以禁用cookie...")]),s._v(" "),a("li",[s._v("localStorage:存储5MB、持久保存、稳定、和服务器也没关系")]),s._v(" "),a("li",[s._v("sessionStorage:页面关闭则消失")]),s._v(" "),a("li",[s._v("vuex+redux:类似于全局变量，页面刷新就没有了")]),s._v(" "),a("li",[s._v("......")])]),s._v(" "),a("p",[a("img",{attrs:{src:r(523),alt:""}})]),s._v(" "),a("h2",{attrs:{id:"_3-dns解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-dns解析"}},[s._v("#")]),s._v(" 3. DNS解析")]),s._v(" "),a("ul",[a("li",[s._v("递归查询")]),s._v(" "),a("li",[s._v("迭代查询")])]),s._v(" "),a("p",[a("img",{attrs:{src:r(524),alt:""}})]),s._v(" "),a("p",[a("strong",[s._v("每一次DNS解析时间预计在20~120毫秒")])]),s._v(" "),a("ul",[a("li",[s._v("减少DNS解析次数「一个网站中访问的资源尽可能在一个服务器上」\n"),a("ul",[a("li",[s._v("大型项目中，往往是分开服务器部署\n"),a("ul",[a("li",[s._v("Web服务器：处理资源文件「例如：html/css/js」的请求")]),s._v(" "),a("li",[s._v("图片服务器：处理图片等富媒体资源")]),s._v(" "),a("li",[s._v("数据服务器：处理API接口请求")]),s._v(" "),a("li",[s._v("第三方服务器：获取第三方的一些数据")]),s._v(" "),a("li",[s._v("...\n--\x3e充分利用服务器的资源，提高不同资源服务器的处理和并发性\n--\x3e提高HTTP的并发数「同一个服务器允许最大的并发数是5~7个」")])])])])])]),s._v(" "),a("p",[a("img",{attrs:{src:r(525),alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("加大DNS解析的次数「不好的」")])]),s._v(" "),a("li",[a("p",[s._v("DNS预获取（DNS Prefetch）"),a("br"),s._v("\n利用页面渲染的”异步性“，在渲染页面的过程中，同时去做DNS解析「解析的结果缓存下来」，后期渲染过程中，再次遇到对应域名的资源请求，直接获取缓存的解析记录即可...")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("meta http"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("equiv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"x-dns-prefetch-control"')]),s._v(" content"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"on"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//static.360buyimg.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//misc.360buyimg.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//img10.360buyimg.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//d.3.cn"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("link rel"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dns-prefetch"')]),s._v(" href"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"//d.jd.com"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4-tcp三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-tcp三次握手"}},[s._v("#")]),s._v(" 4. TCP三次握手")]),s._v(" "),a("p",[a("strong",[s._v("建立客户端和服务器之间的网络连接通道「只有通道建立好，才可以基于HTTP/HTTPS传输信息」")])]),s._v(" "),a("ul",[a("li",[a("p",[s._v("TCP网络通信：更加稳定可靠「三次握手 & 四次挥手」，但是也会慢")])]),s._v(" "),a("li",[a("p",[s._v("UDP网络通信：虽然建立通道比较快，但是不稳定，信息传输过程中可能会丢失信息")])]),s._v(" "),a("li",[a("p",[s._v("seq序号，用来标识从TCP源端向目的端发送的字节流，发起方发送数据时对此进行标记")])]),s._v(" "),a("li",[a("p",[s._v("ack确认序号，只有ACK标志位为1时，确认序号字段才有效，ack=seq+1")])]),s._v(" "),a("li",[a("p",[s._v("标志位")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("ACK：确认序号有效")])]),s._v(" "),a("li",[a("p",[s._v("RST：重置连接")])]),s._v(" "),a("li",[a("p",[s._v("SYN：发起一个新连接")])]),s._v(" "),a("li",[a("p",[s._v("FIN：释放一个连接")])]),s._v(" "),a("li",[a("p",[s._v("……\n"),a("img",{attrs:{src:r(526),alt:""}})])])])])]),s._v(" "),a("ol",[a("li",[s._v("第一次握手，由浏览器发起，告诉服务器我要发送请求了")]),s._v(" "),a("li",[s._v("第二次握手，由服务器发起，告诉浏览器我准备接受了，你赶紧发送吧")]),s._v(" "),a("li",[s._v("第三次握手，由浏览器发送，告诉服务器，我马上就发了，准备接受吧"),a("br"),s._v(" "),a("strong",[s._v("“三次握手”的目的是“为了防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误”。")])])]),s._v(" "),a("h2",{attrs:{id:"_5-基于传输协议进行数据传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-基于传输协议进行数据传输"}},[s._v("#")]),s._v(" 5. 基于传输协议进行数据传输")]),s._v(" "),a("ul",[a("li",[s._v("HTTP事物：一个完整的请求和响应，称为一次HTTP事物")]),s._v(" "),a("li",[s._v("HTTP报文：客户端和服务器之间通信的所有内容，统称为HTTP报文「控制台 NetWork」\n"),a("ul",[a("li",[s._v("起始行：请求起始行、响应起始行")]),s._v(" "),a("li",[s._v("首部（头）：请求头RequestHeaders、响应头ResponseHeaders")]),s._v(" "),a("li",[s._v("主体：请求主体、响应主体")])])])]),s._v(" "),a("h2",{attrs:{id:"_6-tcp四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-tcp四次挥手"}},[s._v("#")]),s._v(" 6. TCP四次挥手")]),s._v(" "),a("p",[a("strong",[s._v("断开TCP连接通道（客户端把请求头、请求主题信息传给服务端后就开启断开连接）")])]),s._v(" "),a("ul",[a("li",[s._v("正常情况下，每一次请求，4、5、6三个步骤都走一遍「问题：每一次TCP连接和关闭都是消耗时间的」")]),s._v(" "),a("li",[s._v("Connection: keep-alive")]),s._v(" "),a("li",[s._v("长连接「保持TCP通道暂时不关闭」，HTTP1.1版本及以后，默认都是带着这个属性的\n"),a("img",{attrs:{src:r(527),alt:""}})])]),s._v(" "),a("ol",[a("li",[s._v("第一次挥手：由浏览器发起的，发送给服务器，我请求报文发送完了，你准备关闭吧")]),s._v(" "),a("li",[s._v("第二次挥手：由服务器发起的，告诉浏览器，我请求报文接受完了，我准备关闭了，你也准备吧")]),s._v(" "),a("li",[s._v("第三次挥手：由服务器发起，告诉浏览器，我响应报文发送完了，你准备关闭吧")]),s._v(" "),a("li",[s._v("第四次挥手：由浏览器发起，告诉服务器，我响应报文接受完了，我准备关闭了，你也准备吧")])]),s._v(" "),a("h2",{attrs:{id:"_7-浏览器解析渲染页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-浏览器解析渲染页面"}},[s._v("#")]),s._v(" 7. 浏览器解析渲染页面")]),s._v(" "),a("ol",[a("li",[s._v("解析HTML，构建DOM树")]),s._v(" "),a("li",[s._v("解析CSS，生成CSSOM规则树")]),s._v(" "),a("li",[s._v("将 DOM 与 CSSOM 合并成一个Render树")]),s._v(" "),a("li",[s._v("Layout布局计算「回流/重排」")]),s._v(" "),a("li",[s._v("将各个节点绘制到屏幕上")])])])}),[],!1,null,null,null);t.default=e.exports}}]);