(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{499:function(s,t,a){s.exports=a.p+"assets/img/PerspectiveCamera.39386334.png"},500:function(s,t,a){s.exports=a.p+"assets/img/OrthographicCamera.f686c5e5.png"},544:function(s,t,a){"use strict";a.r(t);var e=a(6),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"_1-threejs-介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-threejs-介绍"}},[s._v("#")]),s._v(" 1-ThreeJS-介绍")]),s._v(" "),e("blockquote",[e("p",[s._v("官网对 Threejs 的介绍非常简单：“Javascript 3D library”。openGL 是一个跨平台 3D/2D 的绘图标准，WebGL 则是 openGL 在浏览器上的一个实现。web 前端开发人员可以直接用 WebGL 接口进行编程，但 WebGL 只是非常基础的绘图 API，需要编程人员有很多的数学知识、绘图知识才能完成 3D 编程任务，而且代码量巨大。Threejs 对 WebGL 进行了封装，让前端开发人员在不需要掌握很多数学知识和绘图知识的情况下，也能够轻松进行 web 3D 开发，降低了门槛，同时大大提升了效率")])]),s._v(" "),e("h2",{attrs:{id:"_2-threejs-基本要素-场景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-threejs-基本要素-场景"}},[s._v("#")]),s._v(" 2-ThreeJS 基本要素-场景")]),s._v(" "),e("blockquote",[e("p",[s._v("scene 场景：一个三维空间，所有物品的容器，可以把场景想象成一个空房间，可以往房间里放要呈现的物体、相机、光源等"),e("br"),s._v("\n在 ThreeJS 中，场景是作为最外层容器存在的，它相当于 html 中的 window 对象，所有 ThreeJS 中的对象，都可以在 scene 中找到")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" scene "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Scene")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_3-threejs-基本要素-相机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-threejs-基本要素-相机"}},[s._v("#")]),s._v(" 3-ThreeJS 基本要素-相机")]),s._v(" "),e("blockquote",[e("p",[s._v("ThreeJS 必须要往场景中添加一个相机，相机用来确定位置、方向、角度，相机看到的内容就是我们最终在屏幕上看到的内容。在程序运行过程中，可以调整相机的位置、方向和角度"),e("br"),s._v("\nThreeJS 中的相机分为两种一种是正交相机 📷 和透视相机 📷")])]),s._v(" "),e("h3",{attrs:{id:"_1-透视相机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-透视相机"}},[s._v("#")]),s._v(" 1)透视相机")]),s._v(" "),e("p",[e("img",{attrs:{src:a(499),alt:""}})]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" camera "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PerspectiveCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("45")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 视野角度 FOV")]),s._v("\n  width "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" height"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 长宽比 aspect ratio")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 近截面 near")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 远截面 far")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[e("strong",[s._v("透视相机的特点：就是符合我们人眼观察事物的特点， 近大远小")])]),s._v(" "),e("h3",{attrs:{id:"_2-正交相机"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-正交相机"}},[s._v("#")]),s._v(" 2)正交相机")]),s._v(" "),e("p",[e("img",{attrs:{src:a(500),alt:""}})]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" camera "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("OrthographicCamera")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  width "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 左平面 left")]),s._v("\n  width "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 右平面  right")]),s._v("\n  height "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 上平面 top")]),s._v("\n  height "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//下平面 bottom")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 近平面 near")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 远平面 far")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[e("strong",[s._v("正交相机的特点：在最终渲染的图片中物体的大小都保持不变")])]),s._v(" "),e("h2",{attrs:{id:"_4-threejs-的基本要素-灯光"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-threejs-的基本要素-灯光"}},[s._v("#")]),s._v(" 4-Threejs 的基本要素-灯光")]),s._v(" "),e("blockquote",[e("p",[s._v("假如没有光，摄像机看不到任何东西，因此需要往场景添加光源，为了跟真实世界更加接近，Threejs 支持模拟不同光源，展现不同光照效果，有点光源、平行光、聚光灯、环境光等。")])]),s._v(" "),e("h3",{attrs:{id:"_1-ambientlight-环境光"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-ambientlight-环境光"}},[s._v("#")]),s._v(" 1)AmbientLight(环境光)")]),s._v(" "),e("p",[s._v("环境光会均匀的照亮场景中的所有物体，环境光不能用来投射阴影，因为它没有方向")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" light "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("AmbientLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0x404040")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// soft white light")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_2-平行光-directionallight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-平行光-directionallight"}},[s._v("#")]),s._v(" 2)平行光（DirectionalLight）")]),s._v(" "),e("p",[s._v("平行光是沿着特定方向发射的光。这种光的表现像是无限远,从它发出的光线都是平行的。常常用平行光来模拟太阳光 的效果; 太阳足够远，因此我们可以认为太阳的位置是无限远，所以我们认为从太阳发出的光线也都是平行的，此灯可以投射阴影")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" directionalLight "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("DirectionalLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffffff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.5")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-点光源-pointlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-点光源-pointlight"}},[s._v("#")]),s._v(" 3)点光源（PointLight）")]),s._v(" "),e("p",[s._v("从一个点向各个方向发射的光源。一个常见的例子是模拟一个灯泡发出的光，这种光可以投下阴影")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" light "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("PointLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xff0000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h3",{attrs:{id:"_4-聚光灯-spotlight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-聚光灯-spotlight"}},[s._v("#")]),s._v(" 4)聚光灯（SpotLight）")]),s._v(" "),e("p",[s._v("这种光从一个方向的单个点发出，沿着一个锥形，距离它越远，它的尺寸就越大，这种光可以投下阴影")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" spotLight "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("SpotLight")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffffff")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_5-threejs-的基本要素-渲染器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-threejs-的基本要素-渲染器"}},[s._v("#")]),s._v(" 5-Threejs 的基本要素-渲染器")]),s._v(" "),e("blockquote",[e("p",[s._v("渲染器就是去渲染你场景中灯光、相机、网格...")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" renderer "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("WebGLRenderer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  antialias"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true/false表示是否开启反锯齿")]),s._v("\n  alpha"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true/false 表示是否可以设置背景色透明")]),s._v("\n  precision"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"highp"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// highp/mediump/lowp 表示着色精度选择")]),s._v("\n  premultipliedAlpha"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true/false 表示是否可以设置像素深度（用来度量图像的分率）")]),s._v("\n  preserveDrawingBuffer"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// true/false 表示是否保存绘图缓冲")]),s._v("\n  maxLights"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大灯光数")]),s._v("\n  stencil"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// false/true 表示是否使用模板字体或图案")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h2",{attrs:{id:"_6-threejs-的基本要素-orbitcontrols"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-threejs-的基本要素-orbitcontrols"}},[s._v("#")]),s._v(" 6-Threejs 的基本要素-OrbitControls")]),s._v(" "),e("blockquote",[e("p",[s._v("轨道控制器允许相机围绕目标运行")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" controls "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OrbitControls")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("camera"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" renderer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("domElement"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_7-threejs-的基本要素-raycaster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_7-threejs-的基本要素-raycaster"}},[s._v("#")]),s._v(" 7-Threejs 的基本要素-Raycaster")]),s._v(" "),e("blockquote",[e("p",[s._v("点击射线，用于点击事件，用于鼠标拾取（计算鼠标在 3d 空间中的对象）等")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" raycaster "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Raycaster")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"_8-threejs-的基本要素-loader"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_8-threejs-的基本要素-loader"}},[s._v("#")]),s._v(" 8-Threejs 的基本要素-loader")]),s._v(" "),e("blockquote",[e("p",[s._v("加载器，特殊的物体例如模型需要使用加载器，而且不同格式的模型需要不同的加载器")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" loader "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("GLTFLoader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" loader "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("OBJLoader")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"_9-threejs-的基本要素-mesh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_9-threejs-的基本要素-mesh"}},[s._v("#")]),s._v(" 9-Threejs 的基本要素-Mesh")]),s._v(" "),e("blockquote",[e("p",[s._v("材质(Material)+几何体(Geometry)就是一个 mesh，Threejs 提供了集中比较有代表性的材质，常用的用漫反射、镜面反射两种材质，还可以引入外部图片，贴到物体表面，成为纹理贴图")])]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" geometry "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("BoxGeometry")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" material "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("MeshBasicMaterial")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" color"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0xffff00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" mesh "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("THREE"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Mesh")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("geometry"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" material"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nscene"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("mesh"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);