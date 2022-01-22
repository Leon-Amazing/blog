(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{683:function(s,t,n){"use strict";n.r(t);var a=n(6),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h3",{attrs:{id:"let-和-var-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-和-var-的区别"}},[s._v("#")]),s._v(" let 和 var 的区别")]),s._v(" "),n("ol",[n("li",[s._v("变量提升：var存在变量提升的，但是let不存在(更严谨)")]),s._v(" "),n("li",[s._v("重复声明：相同上下文中，var允许重复「只识别一次」；let不允许重复（不论基于啥声明过，再基于let/const声明都会报错）")]),s._v(" "),n("li",[s._v("在“全局上下文中”，基于var/let声明的变量，和GO(window)的关系是不一样的")])]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("基于var/function声明的变量：除了往全局变量对象中存储一份，而且也给GO(window)设置了对应的属性 「映射机制」")]),s._v(" "),n("li",[s._v("新版处理机制：在全局上下文中，基于var/function声明的变量，直接存储到GO中(VO(G)中不留了)")]),s._v(" "),n("li",[s._v("基于let声明的变量存到VO(G)中")])])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* 基于let/const声明的变量，只会存储到VO(G)中，和GO没有任何的关系 */")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//VO(G)  n:10")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("window"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//undefined")]),s._v("\n\nn "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//GO:{n:10} 设置：直接给GO设置")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//先看VO(G)中，如果有就是全局变量的操作，如果没有，再看GO中有没有...如果还没有，则报错：变量未定义")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[s._v("let会产生“块级作用域（私有的上下文）”：全局上下文、函数执行的私有上下文、块级私有上下文")])]),s._v(" "),n("blockquote",[n("ul",[n("li",[s._v("除函数体以及创建对象的大括号外，其余大部分包含代码块的大括号（例如：判断体、循环体...）都有可能会产生块级上下文")]),s._v(" "),n("li",[s._v("在代码块中，首先看是否出现 let/const/class/function「特殊」，如果出现，此时就会形成一个块级私有上下文\n"),n("ul",[n("li",[s._v("EC(BLOCK)")]),s._v(" "),n("li",[s._v("VO(BLOCK)")]),s._v(" "),n("li",[s._v("作用域链:<EC(BLOCK),EC(G)> 上级上下文就是代码执行所处的环境")]),s._v(" "),n("li",[s._v("没有自己的THIS，用到的this用的也都是上级上下文中的")]),s._v(" "),n("li",[s._v("没有arguments")]),s._v(" "),n("li",[s._v("没有形参赋值")]),s._v(" "),n("li",[s._v("有变量提升，也只是针对特殊的function")]),s._v(" "),n("li",[s._v("即使产生块级上下文，对var的操作也是无效的「var不受块级上下文的影响」")])])])])]),s._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[s._v("暂时性死区")])]),s._v(" "),n("blockquote",[n("p",[s._v("基于typeof检测一个未被声明的变量，不会报错，结果是'undefined'")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[s._v("console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//'undefined'")]),s._v("\n\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("typeof")]),s._v(" n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 报错")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"let-和-const-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#let-和-const-的区别"}},[s._v("#")]),s._v(" let 和 const 的区别")]),s._v(" "),n("blockquote",[n("p",[s._v("const声明常量(具体值) 错误的说法，const也是声明变量的，只不过不能修改此变量的关联指向")])]),s._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nm "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Uncaught TypeError: Assignment to constant variable.")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" m "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'li'")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'wang'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("m"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//{name:'wang'} ")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);