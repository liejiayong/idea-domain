(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{631:function(t,s,e){"use strict";e.r(s);var a=e(9),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("个人有个小习惯是将多个不同类型的代码（工具类、前端框架、后端框架、数据库框架等不同类型的代码）写到一个目录下，然后将代码托管 GitHub 上，这样子就可以实现一次"),e("strong",[t._v("git clone")]),t._v("就可以下载好所有代码，也方便在同一个编辑器下查找预览所有代码。然而好景不长问题就发生了，一个代码库托管所有代码的弊端也逐渐暴露出来了，代码库经过 2 年的打磨洗礼，虽然代码质量越来越高，但分量也越来越大，以至于在新电脑"),e("strong",[t._v("git clone")]),t._v("代码时需要花费十几分钟或更长时间，代码下载回来后发现有差不多上 GB 大小。在这个时候我想到的还是将代码分包，按照项目、类型、工具模块等都可以划分为一个库，但缺点也很明显，就是每次都需要逐个包库的下载更新代码到本地，这是非常不好的。为了解决这个问题，经过一番探索因此有了这篇文章。")]),t._v(" "),e("blockquote",[e("p",[t._v("这篇文章没什么技术含量，只是在思维方式上取巧来解决重复工作量罢了~")])]),t._v(" "),e("h1",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("p",[t._v("在开始操作前，需要确保电脑上安装了 git 软件。如果没有，可以去 git 官网 下载。")]),t._v(" "),e("p",[t._v("安装了 git 软件之后，就可以执行 git clone 命令，也可以使用 curl、grep 这两个工具来下载。")]),t._v(" "),e("h1",{attrs:{id:"分析问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析问题"}},[t._v("#")]),t._v(" 分析问题")]),t._v(" "),e("p",[t._v("如果我们只下载一个代码包，可以直接在命令行输入 URL 即可。")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://gitee.com/liejiayong/MIT.git\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("p",[t._v("由此可见，批量下载的主要问题在于如何实现"),e("strong",[t._v("git clone")]),t._v("批量处理。")]),t._v(" "),e("p",[t._v("而在 GitHub 开发文档上发现，提供给开发者的公开 api 方法，使用 curl 命令执行相关的查询，然后使用 grep 匹配到想要的 clone 地址。")]),t._v(" "),e("h1",{attrs:{id:"实战"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实战"}},[t._v("#")]),t._v(" 实战")]),t._v(" "),e("h2",{attrs:{id:"探索-curl-生成配置文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#探索-curl-生成配置文件"}},[t._v("#")]),t._v(" 探索 curl 生成配置文件")]),t._v(" "),e("ul",[e("li",[t._v("尝试 curl 获取 GitHub URL")])]),t._v(" "),e("p",[t._v("下面例子是在 window 终端通过 cmder 来测试的，目的为了获取用户上指定条目的库链接信息，并导出为 clones.bat 文件")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -o clones.bat "https://api.github.com/users/liejiayong/repos?per_page=1000"\n\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("自动下载导出目标文件（目前探索阶段，下面命令存在问题）")])]),t._v(" "),e("p",[t._v("通过 curl 获取链接，grep 来刷选模板 url 并导出 clones.bat 文件")]),t._v(" "),e("p",[t._v("为了方便操作，对上述命令进行了小改，让其在获得 clone 地址后自动下载")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl "https://api.github.com/users/liejiayong/repos?per_page=1000" | grep -w clone_url | grep -o \'[ ^"]\\+://.\\+.git\' > clone_test.bat\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("当然自动获取 clone 地址直接进行下载是不太妥，因此我是建议自己创建一个 clones.bat 文件来配置链接信息")]),t._v(" "),e("h2",{attrs:{id:"手动配置链接文件（推荐）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手动配置链接文件（推荐）"}},[t._v("#")]),t._v(" 手动配置链接文件（推荐）")]),t._v(" "),e("p",[t._v("以 window 系统为例：")]),t._v(" "),e("p",[t._v("在定制目录新建文件：mkdir clone_github.bat")]),t._v(" "),e("p",[t._v("配置链接")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --depth=1:在GitHub上clone最新一次提交的代码，如果需要下载所有历史版本代码可以去掉")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://gitee.com/liejiayong/page.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://gitee.com/liejiayong/MIT.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://gitee.com/liejiayong/jyLibrary.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone --depth"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" https://gitee.com/liejiayong/xxx.git\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("最后双击 xx.bat 文件即可自动下载 GitHub 上指定的一类源代码库了")])])}),[],!1,null,null,null);s.default=n.exports}}]);