(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{510:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"_1-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-go"}},[t._v("#")]),t._v(" 1.GO")]),t._v(" "),a("p",[t._v("全局对象：通过window对象访问，是堆内存，存储内置的属性和方法 (alert、setTimeout、setInterval...)")]),t._v(" "),a("h3",{attrs:{id:"_2-vo-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-vo-g"}},[t._v("#")]),t._v(" 2.VO(G)")]),t._v(" "),a("p",[t._v("全局变量对象：是一个栈内存")]),t._v(" "),a("h3",{attrs:{id:"_3-ec-g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-ec-g"}},[t._v("#")]),t._v(" 3.EC(G)")]),t._v(" "),a("p",[t._v("全局执行上下文：打开页面执行，全局上下文就会形成，只有当页面关闭才会释放")]),t._v(" "),a("h3",{attrs:{id:"_4-ec-x"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-ec-x"}},[t._v("#")]),t._v(" 4.EC(X)")]),t._v(" "),a("p",[t._v("私有执行上下文：一般函数(代码块)中的代码块执行完，浏览器会自动把私有上下文出栈释放"),a("br"),t._v("\nvar、function => GO"),a("br"),t._v("\nlet、const、class => VO(G)"),a("br"),t._v("\n使用一个变量 => VO(G) => GO => 如果都没有，则报未定义的错误")]),t._v(" "),a("h3",{attrs:{id:"_5-上下文和作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-上下文和作用域"}},[t._v("#")]),t._v(" 5.上下文和作用域")]),t._v(" "),a("p",[t._v("上下文：当前函数自己执行时产生的环境"),a("br"),t._v("\n作用域：函数创建所在的环境")]),t._v(" "),a("h3",{attrs:{id:"_6-闭包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-闭包"}},[t._v("#")]),t._v(" 6.闭包")]),t._v(" "),a("p",[t._v('闭包：是一种机制，函数执行产生一个私有的上下文，可以"保护"里面的变量不被外界干扰，防止全局变量污染，我们把函数执行的这种机制称为闭包')]),t._v(" "),a("h3",{attrs:{id:"_7-变量提升"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-变量提升"}},[t._v("#")]),t._v(" 7.变量提升")]),t._v(" "),a("p",[t._v("变量提升：在当前执行上下文中，代码执行前，浏览器会把带var、function关键字进行提前的声明和定义"),a("br"),t._v("\nvar：只会提前声明"),a("br"),t._v("\nfunction：提前声明+定义(赋值)")]),t._v(" "),a("h3",{attrs:{id:"_8-强引用和弱引用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8-强引用和弱引用"}},[t._v("#")]),t._v(" 8.强引用和弱引用")]),t._v(" "),a("p",[t._v("强引用：堆被占用，不能释放这个堆"),a("br"),t._v("\n弱引用：堆被占用，也能释放这个堆")]),t._v(" "),a("h3",{attrs:{id:"_9-暂时性死区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_9-暂时性死区"}},[t._v("#")]),t._v(" 9.暂时性死区")]),t._v(" "),a("p",[t._v("基于typeof检测一个未被声明的变量，结果是undefined，不会报错")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 情况1 */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// undefined")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 情况2 */")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 报错")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);