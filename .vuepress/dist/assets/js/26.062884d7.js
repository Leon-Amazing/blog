(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{520:function(s,a,n){"use strict";n.r(a);var t=n(6),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"git-分布式版本控制系统"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-分布式版本控制系统"}},[s._v("#")]),s._v(" GIT：分布式版本控制系统")]),s._v(" "),n("p",[s._v("1.版本控制系统\n开发中我们把每一次的修改都有效的进行记录（记录成一个版本），后期如果需要回退到原有的有个版本或者是用当前的和某一个版本进行比较等，都可以有效的进行管理"),n("br"),s._v("\n常用的版本控制系统：SVN(集中式) / GIT(分布式)")]),s._v(" "),n("p",[s._v("2.分布式版本管理系统的特点")]),s._v(" "),n("p",[s._v("3.Linux团队开发的git，所以git中的命令大部分都是linux命令")]),s._v(" "),n("h2",{attrs:{id:"简单的linux命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简单的linux命令"}},[s._v("#")]),s._v(" 简单的LINUX命令")]),s._v(" "),n("p",[s._v("WINDOWS操作系统：DOS窗口和DOS命令\nLINUX服务器操作系统：LINUX命令 （MAC的终端使用的也是LINUX命令）")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -l/-a：查看当前目录结构（-a是可以看见所有的：包含隐藏的）\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" xxx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("路径地址"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("：进入到执行的文件夹中（进入的路径地址，可以粘贴到对应的操作命令窗口中）\n      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /：根目录\n      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ./：当前目录\n      "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/：上级目录\n\n    clear：清屏\n\n    mkdir：创建文件夹\n\n    touch：创建空的文件\n\n    vi：向文件中插入或者管理一些内容\n      "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("i")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("进入到插入模式\n      ESC + :WQ ，退出内容的插入模式，把刚才编辑的内容进行保存\n\n    echo：向指定的文件中输入内容\n\n    cat：查看文件中的内容\n\n    cp：拷贝\n\n    rm：删除文件  -r（递归删除）-f（强制删除），一旦删除无法还原\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br")])]),n("h2",{attrs:{id:"git的常规流程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git的常规流程"}},[s._v("#")]),s._v(" GIT的常规流程")]),s._v(" "),n("p",[s._v("1.每一个GIT仓库都有三个区："),n("br"),s._v("\n工作区：写代码"),n("br"),s._v("\n暂存区：临时存放每一次修改的代码，但是并没有生成历史版本"),n("br"),s._v("\n历史区：存放所有历史版本的地方(提交到历史区就会生成历史版本)")]),s._v(" "),n("p",[s._v("2.把暂存区的某一个文件删除（提交到暂存区的内容不好，我们可以删除）")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached xxx.xx\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" --cached "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -r  删除暂存区中所有提交的  \n  如果在删除过程中，发现从暂存区删除的文件，在工作区已经被修改了，只有加上 -f 才能强制从暂存区把内容删除掉\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("3.提交到暂存区一份，把工作区内容改了，但是改的东西不好，想把暂存区上次提交的内容撤回到工作区（覆盖工作区新写的内容）")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xxx.xx\n  暂存区内容没有消失，只是把工作去最新修改的信息给覆盖了，让工作区和暂存区保持一致\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("h2",{attrs:{id:"细节问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#细节问题"}},[s._v("#")]),s._v(" 细节问题")]),s._v(" "),n("p",[s._v("1.如果是第一次使用git，生成历史版本的时候，需要提供身份认证")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  只需要在本地GIT全局环境下配置一些信息即可\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config -l\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.eamil "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'xxx'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("2.真实项目中，并不是所有的文件都和项目有关系（例如：.idea是WS生成的配置文件夹和项目没关系），也不是所有的文件都提交\n（例如：node_modules中的内容太大了，也不需要提交）")]),s._v(" "),n("p",[s._v(".gitignore  =>GIT提交的忽略文件")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# dependencies")]),s._v("\n  /node_modules\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# testing")]),s._v("\n  /coverage\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# production")]),s._v("\n  /build\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# misc")]),s._v("\n  .DS_Store\n  .env.local\n  .env.development.local\n  .env.test.local\n  .env.production.local\n\n  npm-debug.log*\n  yarn-debug.log*\n  yarn-error.log*\n\n  .idea\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])]),n("p",[s._v("3.$ git log 查看历史版本信息")]),s._v(" "),n("h2",{attrs:{id:"git常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git常用命令"}},[s._v("#")]),s._v(" GIT常用命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m"),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v("\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 版本号\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"团队协作开发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#团队协作开发"}},[s._v("#")]),s._v(" 团队协作开发")]),s._v(" "),n("ol",[n("li",[n("p",[s._v("基础流程操作")]),s._v(" "),n("ol",[n("li",[s._v("首先创建中央仓库:可以基于gitHub/codding来创建（最好不要创建空仓库，因为空仓库中没有任何分支，只有提交一次历史信息才会生成MASTER分支）")])]),s._v(" "),n("p",[s._v("把开发者都列入仓库的开发群组中，这样每一个开发者用自己的gitHub账号，都有权限操作这个仓库了（当然不这样做也可以，所有开发者用统一的一个账号也可以，为了防止不知道是谁提交的，我们需要让每一个客户端在本地的GIT全局配置中，设置和gitHub相同的用户名和邮箱 $ git config --global user.name 'xxx' ...）"),n("br"),s._v("\n2. 创建客户端本地仓库（一个开发者就是一个单独仓库），还需要让本地的仓库和远程仓库保持关联，这样才可以实现后续的信息同步")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("创建本地仓库\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin “远程仓库GIT地址”   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("让本地仓库和远程仓库保持连接\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote -v    "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("查看连接信息（origin是连接的名称，一般都用这个名字，当然自己可以随便设置）\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" origin     "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("移除本地仓库和远程仓库的链接\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote update origin   "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("更新链接通道\n\n有更简单的方式：只要把远程仓库克隆到本地，就相当于创建本地仓库，而且自动建立了链接，并且把远程仓库中的内容也同步到了本地\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone “远程仓库地址” “本地仓库文件夹名字（不写默认是仓库名字）”\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[s._v("各自和中央服务器同步信息")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("推送：$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master   （每一次PUSH之前最好都PULL一下：如果有冲突在本地处理一下冲突，然后再推送）\n拉取：$ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"知识点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[s._v("#")]),s._v(" 知识点：")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone “远程仓库地址”   把远程仓库克隆到本地（本地自动和远程建立连接，自动把远程中的信息同步到本地了，本地也是一个单独的仓库：建议远程仓库不要是空的，至少有一个master分支）\n\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master  把远程仓库MASTER中的信息同步到本地仓库MASTER中\n\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master  把本地仓库MASTER中的信息同步到远程仓库MASTER中（需要使用gitHub的用户密码来进行权限校验：一般都是组长在远程仓库中把组员的账号都放到小组中，这样组员用自己的账号也有权限操作仓库了，最好在本地的GIT配置中把用户名和邮箱修改为和gitHub账号相同的信息）\n\n  如果有冲突：\n     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".进入到了编辑框模式，i-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("ESC-"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(":wq 即可\n     "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(".自己会把两份代码都保存在本地文件中，自己手动去选择要哪一个，改完后重新提交即可\n\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b xxx  创建分支并且切换到指定分支下（可以把本地master中的历史信息同步到新创建的分支中）\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch xxx\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout xxx\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D xxx 删除分支\n\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge xxx  把xxx分支的历史信息合并到当前分支下\n\n  $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash / $ "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop  在切换分支的时候，有一部分信息并没有提交成为历史版本，为了防止信息的丢失，我们需要先使用stash保存，然后在基于stash pop还原\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);