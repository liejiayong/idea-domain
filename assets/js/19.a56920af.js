(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{629:function(s,t,a){"use strict";a.r(t);var n=a(9),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在一次项目升级时由于新增了比较多的功能引入了比较多的插件，面对诸多插件的暴打，突然本文的主角突然出现，对着我一顿 buf 加特猛如虎。事后对 SplitChunks 心怀好感， 特意总结实践以表心意。")]),s._v(" "),a("p",[s._v("SplitChunks 从字面可得知是用来分割块的，作为 webpack 的性能优化利器，其主要作用是提取公共代码，防止代码被重复打包，拆分过大的 js 文件，合并零散的 js 文件。")]),s._v(" "),a("blockquote",[a("p",[s._v("webpack 4 移除 CommonsChunkPlugin，取而代之的是两个新的配置项（optimization.splitChunks 和 optimization.runtimeChunk）。")])]),s._v(" "),a("h2",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[s._v("#")]),s._v(" 配置参数")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("chunks：决定要提取哪些模块。可选值有：async，initial 和 all。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("async: 默认值。只提取异步加载的模块打包到一个文件中。")]),s._v(" "),a("ul",[a("li",[s._v("异步加载的模块：通过 import('xxx')或 require(['xxx'],() =>{}) 加载的模块。")])])]),s._v(" "),a("li",[a("p",[s._v("all：提取同步加载和异步加载模块，如果 xxx 在项目中异步加载了，也同步加载了，那么 xxx 这个模块会被提取两次，分别打包到不同的文件中。")]),s._v(" "),a("ul",[a("li",[s._v("同步加载的模块：通过 import xxx 或 require('xxx') 加载的模块。")])])]),s._v(" "),a("li",[a("p",[s._v("initial: 不管异步加载还是同步加载的模块都提取出来，打包到一个文件中。")])])])]),s._v(" "),a("li",[a("p",[s._v("minSize：默认值 30000byte。规定被提取的模块在压缩前的大小最小值，只有超过规定尺寸才会被提取。")])]),s._v(" "),a("li",[a("p",[s._v("maxSize：默认值 0byte。把提取出来的模块打包生成的文件大小不能超过 maxSize 值，如果超过了，要对其进行分割并打包生成新的文件。")]),s._v(" "),a("ul",[a("li",[s._v("值为 0 时表示不限制大小。")])])]),s._v(" "),a("li",[a("p",[s._v("minChunks：默认值 1。表示要被提取的模块最小被引用次数，引用次数超过或等于 minChunks 值，才能被提取（译注：保证代码块复用性，默认配置的策略是不需要多次引用也可以被分割）。")])]),s._v(" "),a("li",[a("p",[s._v("maxInitialRequests：默认值 4。打包后的入口文件加载时，还能同时加载 js 文件的数量（包括入口文件）。")])]),s._v(" "),a("li",[a("p",[s._v("maxAsyncRequests：默认值 6。按需加载时候最大的并行请求数。")])]),s._v(" "),a("li",[a("p",[s._v("automaticNameDelimiter：默认值 ~。指定用于生成名称的分隔符。（webpack 将使用 chunk 的来源和名称生成名称。例如 vendors~main.js）")])]),s._v(" "),a("li",[a("p",[s._v("enforceSizeThreshold：默认值 50000byte。强制执行拆分的体积阈值和其他限制（minRemainingSize，maxAsyncRequests，maxInitialRequests）将被忽略。")]),s._v(" "),a("ul",[a("li",[s._v("注意 splitChunks.minRemainingSize 仅在剩余单个 chunk 时生效。")])])]),s._v(" "),a("li",[a("p",[s._v("minRemainingSize：默认值 0，。在 webpack 5 中引入了 splitChunks.minRemainingSize 选项，通过确保拆分后剩余的最小 chunk 体积超过限制来避免大小为零的模块。 'development' 模式 中默认为 0。对于其他情况，splitChunks.minRemainingSize 默认为 splitChunks.minSize 的值，因此除需要深度控制的极少数情况外，不需要手动指定它。")])]),s._v(" "),a("li",[a("p",[s._v("defaultSizeTypes：默认值 ['javascript', 'unknown']。设置当数字用于大小时使用的大小类型。")])]),s._v(" "),a("li",[a("p",[s._v("name：打包的 chunks 的名字，字符串或者函数(函数可以根据条件自定义名字)")])]),s._v(" "),a("li",[a("p",[s._v("cacheGroups：核心重点，配置提取模块的方案。里面每一项代表一个提取模块的方案。若 cacheGroups 每项中有，就按配置的，没有就使用外面配置的。下面是 cacheGroups 每项中特有的选项，其余选项和外面一致。")])]),s._v(" "),a("li",[a("p",[s._v("test： 用于控制哪些模块被这个缓存组匹配到。原封不动传递出去的话，它默认会选择所有的模块。可以传递的值类型：RegExp、String 和 Function")])]),s._v(" "),a("li",[a("p",[s._v("priority：缓存组打包的优先级，数字越大提取代码的优先级越高。")])]),s._v(" "),a("li",[a("p",[s._v("reuseExistingChunk：选填 true/false。为 true 时，如果当前要提取的模块，在已经在打包生成的 js 文件中存在，则将重用该模块，而不是把当前要提取的模块打包生成新的 js 文件。")])]),s._v(" "),a("li",[a("p",[s._v("enforce：选填 true/false。为 true 时，忽略 minSize，minChunks，maxAsyncRequests 和 maxInitialRequests 外面选项")])])]),s._v(" "),a("p",[s._v("注意：模块请求次数与模块大小的优先级： "),a("code",[s._v("maxInitialRequests / maxAsyncRequests < maxSize < minSize")])]),s._v(" "),a("p",[s._v("模板如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// vue.config.js")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("configureWebpack")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("optimization "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("splitChunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'async'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("maxSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minChunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("maxAsyncRequests")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("maxInitialRequests")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("automaticNameDelimiter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'~'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("cacheGroups")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("common")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk-common'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minChunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("maxInitialRequests")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("minSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("reuseExistingChunk")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("enforce")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("vendors")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk-vendors'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\\\/]node_modules[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'initial'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("vant")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'chunk-vant'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[s._v("[\\\\/]node_modules[\\\\/]vant[\\\\/]")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[s._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("chunks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'all'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("priority")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br")])]),a("h1",{attrs:{id:"实践探索"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实践探索"}},[s._v("#")]),s._v(" 实践探索")]),s._v(" "),a("h1",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[s._v("#")]),s._v(" 参考链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://webpack.docschina.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack splitechunks plugins 中文文档"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://webpack.js.org/plugins/split-chunks-plugin/",target:"_blank",rel:"noopener noreferrer"}},[s._v("webpack splitechunks plugins 英文文档"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);