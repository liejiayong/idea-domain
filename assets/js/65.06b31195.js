(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{676:function(v,_,e){"use strict";e.r(_);var o=e(9),c=Object(o.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("blockquote",[e("p",[v._v("持续更新...")])]),v._v(" "),e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[v._v("#")]),v._v(" 前言")]),v._v(" "),e("p",[v._v("下面以域名"),e("code",[v._v("wwww.google.com")]),v._v("为例讲解浏览器输入 URL 后的整个过程。")]),v._v(" "),e("h2",{attrs:{id:"查询-dns"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询-dns"}},[v._v("#")]),v._v(" 查询 DNS")]),v._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[v._v("名词解析：\n- 域名：`www.google.com`\n- 客户端配置的本地名称服务器：`dns.google.com`\n- 域名根目录名称服务器`a.rootserver.net`\n\n- 主要角色\n\n  - DNS 客户 -> `DNS 客户`\n  - 本地名称服务器 -> `Local DNS`\n  - 根名称服务器 ->`.`\n  - 一级（顶级）名称服务器 -> `com`\n  - 二级名称服务器 -> `google.com`\n  - 权威名称服务器 -> `www.google.com`\n")])]),v._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[v._v("1")]),e("br"),e("span",{staticClass:"line-number"},[v._v("2")]),e("br"),e("span",{staticClass:"line-number"},[v._v("3")]),e("br"),e("span",{staticClass:"line-number"},[v._v("4")]),e("br"),e("span",{staticClass:"line-number"},[v._v("5")]),e("br"),e("span",{staticClass:"line-number"},[v._v("6")]),e("br"),e("span",{staticClass:"line-number"},[v._v("7")]),e("br"),e("span",{staticClass:"line-number"},[v._v("8")]),e("br"),e("span",{staticClass:"line-number"},[v._v("9")]),e("br"),e("span",{staticClass:"line-number"},[v._v("10")]),e("br"),e("span",{staticClass:"line-number"},[v._v("11")]),e("br"),e("span",{staticClass:"line-number"},[v._v("12")]),e("br"),e("span",{staticClass:"line-number"},[v._v("13")]),e("br")])]),e("p",[v._v("DNS，Domain Name System/域名系统，一个面向互联网的将域名和 IP 地址相互映射的一个分布式数据库。是一个树状结构的记录、映射域名和 IP 地址的分布式系统。DNS 查询使用 UDP 协议。")]),v._v(" "),e("p",[v._v("为啥需要 DNS 呢，因为终端间的数据交互是通过 IP 地址来定位目标的，IP 地址如 192.168.8.8。由于人类对无规律的 IP 地址不容易记忆，因此一般使用 域名地址 来代替 IP 地址 进行搜索使用，但实际上终端间的访问最终还是通过 域名地址映射获取 IP 地址来访问的。")]),v._v(" "),e("p",[v._v("用户习惯使用域名地址来访问终端，当浏览器发出请求后，操作系统会使用 DNS 来查询域名地址对应的 IP 地址是什么，查询成功后操作系统会通过 IP 地址来访问终端来获取资源。")]),v._v(" "),e("p",[v._v("域名 DNS 名称服务器查询都是从根部"),e("code",[v._v(".")]),v._v("按照从右往左顺序原则进行的。")]),v._v(" "),e("p",[v._v("通常情况下，主机向本地名称服务器的查询一般都是采用迭代查询，而本地名称服务器向 DNS(一级、二级、三级...)名称服务器采用递归查询。")]),v._v(" "),e("p",[v._v("主机的 DNS 查询主要有两种方式，递归查询 和 迭代查询，其主要区别为：")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("发送 DNS 查询时，DNS "),e("code",[v._v("请求报头部")]),v._v("的 "),e("code",[v._v("RD 字段")]),e("strong",[v._v("默认")]),v._v("为 "),e("code",[v._v("1")]),v._v("，默认为 "),e("code",[v._v("递归查询")]),v._v("。")]),v._v(" "),e("ul",[e("li",[v._v("RD 为 "),e("code",[v._v("1")]),v._v(" => "),e("code",[v._v("递归查询")]),v._v("，"),e("strong",[v._v("默认查询方式")])]),v._v(" "),e("li",[v._v("RD 为 "),e("code",[v._v("0")]),v._v(" => "),e("code",[v._v("迭代查询")])])])]),v._v(" "),e("li",[e("p",[e("code",[v._v("递归查询")]),v._v(" 以"),e("code",[v._v("本地名称服务器")]),e("strong",[v._v("为中心")]),v._v("，DNS 客户端只是发出原始的域名查询请求报文，然后就一直处于等待状态，直到本地名称服务器发来了最终的查询结果。此时的本地名称服务器就相当于"),e("code",[v._v("中介代理")]),v._v("的作用。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("递归查询")]),v._v(" 的触发条件：1. 默认触发；2. RD 设置为 1 触发；")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("迭代查询")]),v._v(" 以"),e("code",[v._v("DNS客户端自己")]),e("strong",[v._v("为中心")]),v._v("。所有查询工作全部是 DNS 客户端自己进行。"),e("code",[v._v("DNS客户")]),v._v(" 会按照顺序 向 本地名称服务器 、一级名称服务器、二级名称服务器、权威名称服务器发出查询 DNS 的 请求查询报文，这个过程中每一级服务器就会返回一个能解答这个查询的下一个名称服务器列表 A，获取到下个查询列表信息 A 后 DNS 客户 会再向返回的列表 A 中发出请求，直到找到最终负责所查域名的名称服务器，从它得到最终结果。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("迭代查询")]),v._v(" 的触发条件：1. 在所配置的本地名称服务器上查询触发（因为本地名称服务器禁止使用递归查询）；2. RD 设置为 0 触发；")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("递归查询")]),v._v("和"),e("code",[v._v("迭代查询")]),v._v(" 查询一级域名服务器到权威域名服务器的步骤相似，主要区别是"),e("code",[v._v("递归查询")]),v._v(" 以"),e("code",[v._v("本地名称服务器")]),e("strong",[v._v("为中心")]),v._v("进行查询， "),e("code",[v._v("迭代查询")]),v._v(" 以"),e("code",[v._v("DNS客户端自己")]),e("strong",[v._v("为中心")]),v._v("查询。")])])]),v._v(" "),e("h3",{attrs:{id:"dns-迭代查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-迭代查询"}},[v._v("#")]),v._v(" DNS 迭代查询")]),v._v(" "),e("p",[v._v("迭代查询，也叫迭代解析。使用迭代解析方式时，所有的查询工作都是由 DNS 客户自己进行的。如果它所配置的主名称服务器（如 Windows 系统中的"),e("code",[v._v("首选 DNS 服务器")]),v._v("）不能解析的话，客户端还会继续向所配置的其它名称服务器（如 Windows 系统中的"),e("code",[v._v("备用 DNS 服务器")]),v._v("）查询。")]),v._v(" "),e("p",[v._v("如果考虑了本地名称服务器的缓存技术（在 DNS 服务器上对一定数量查询过的记录保存一定时间，这样后面查询同样的域名信息时就可直接从缓存中调出来，以加速查询效率）的话，迭代名称解析的基本流程如下（在此仅以首先 DNS 服务器作为本地名称服务器为例，与其它备用 DNS 服务器的解析流程完全一样）：")]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("向本机配置的"),e("code",[v._v("本地名称服务器")]),v._v("发出 DNS 域名查询请求。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("收到请求后，"),e("code",[v._v("先查询本地的缓存")]),v._v("，如果有该域名的记录项，则本地名称服务器就直接把查询的结果返回给客户端；如果本地缓存中没有该域名的记录，则向 DNS 客户端返回一条 DNS 应答报文，报文中会给出一些参考信息，如本地名称服务器上的根名称服务器地址等。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("在收到本地名称服务器的应答报文后，会根据其中的根名称服务器地址信息，向对应的根名称服务器再次发出与前面一样的 DNS 查询请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("根名称服务器")]),v._v("在收到 DNS 查询请求报文后，通过查询自己的 DNS 数据库得到请求 DNS 域名中顶级域名所对应的顶级名称服务器信息，然后以一条 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("根据来自根名称服务器应答报文中的对应顶级名称服务器地址信息，向该顶级名称服务器发出与前面一样的 DNS 查询请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("顶级名称服务器")]),v._v("在收到 DNS 查询请求后，"),e("code",[v._v("先查询自己的缓存")]),v._v("，如果有所请求的 DNS 域名的记录项，则直接把对应的记录项返回给 DNS 客户端，否则通过查询后把对应域名中二级域名所对应的二级名称服务器地址信息以一条 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("继续按照步骤 5 与步骤 6 的方法分别向三级、四级名称服务器查询，直到查到最终的权威名称服务器返回到最终的记录。")])])]),v._v(" "),e("p",[v._v("如果在上述步骤中对应域名的权威名称服务器都说找不到对应的域名记录，则会向 DNS 客户端返回一条查询失败的 DNS 应答报文。当然，如果这个权威名称服务器上配置了指向其它名称服务器的转发器，则权威名称服务器还会在转发器指向的名称服务器上进一步重复上述步骤查询。另外，如果 DNS 客户端上配置了多个 DNS 服务器，则还会继续向其它 DNS 服务器查询的。")]),v._v(" "),e("p",[v._v("DNS 查找到这里就基本来可以获取域名对应的 IP 了，除非需要查找的域名没有配置 IP 则查询失败。")]),v._v(" "),e("h3",{attrs:{id:"dns-迭代查询-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-迭代查询-示例"}},[v._v("#")]),v._v(" DNS 迭代查询-示例")]),v._v(" "),e("p",[v._v("为了方便理解，例举一个具体的示例，看一下 DNS 迭代解析的工作流程：")]),v._v(" "),e("ul",[e("li",[v._v("假设客户端想要访问自己并不识别的站点"),e("code",[v._v("www.google.com")]),v._v("，那么 DNS 客服端的查询路径如下：")])]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("向所配置的本地名称服务器 "),e("code",[v._v("dns.google.com")]),v._v(" 发出解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("收到 客户端的 DNS 查询请求报文后，"),e("code",[v._v("先查询本地缓存")]),v._v("。假设没有查到该域名对应记录，则本地名称服务器把所配置的根名称服务器 "),e("code",[v._v("a.rootserver.net")]),v._v(" 地址信息以 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("在收到本地名称服务器的 DNS 应答报文后，根据其中给出的根名称服务器地址信息，向对应的根名称服务器再次发送解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文）。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("根名称服务器")]),v._v("在收到 DNS 查询请求后，通过查询得到 "),e("code",[v._v(".com")]),v._v(" 顶级域名所对应的顶级名称服务器，然后把查询到的对应顶级域名信息以一条 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("在收到根名称服务器的 DNS 应答报文，得到 "),e("code",[v._v(".com")]),v._v(" 顶级域名所对应的顶级名称服务器地址后，再次向对应的顶级名称服务器发送一条解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v(".com")]),v._v(" 顶级名称服务器在收到 DNS 客户端的 DNS 查询请求报文后，"),e("code",[v._v("先查询自己的缓存")]),v._v("，假设也没有该域名的记录项，则查询 "),e("code",[v._v("google.com")]),v._v(" 所对应的二级名称服务器，然后把查询到的对应二级域名信息以一条 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("在收到 "),e("code",[v._v(".com")]),v._v(" 顶级名称服务器的 DNS 应答报文，得到 "),e("code",[v._v("google.com")]),v._v(" 二级域名所对应的二级名称服务器地址后，再次向对应的二级名称服务器发送一条解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("google.com")]),v._v(" 二级名称服务器在收到 DNS 客户端的 DNS 查询请求报文后，"),e("code",[v._v("也先查询自己的缓存")]),v._v("，假设也没有该域名的记录项，则查询 "),e("code",[v._v("www.google.com")]),v._v(" 所对应的权威名称服务器（因为这个名称服务器已包括了整个域名 "),e("code",[v._v("www.google.com")]),v._v(" 所在区域），然后把查询到的对应权威域名信息以一条 DNS 应答报文返回给 DNS 客户端。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v("在收到 "),e("code",[v._v("google.com")]),v._v(" 二级名称服务器的 DNS 应答报文，得到 "),e("code",[v._v("www.google.com")]),v._v(" 三级域名所对应的权威名称服务器地址后，再次向对应的"),e("code",[v._v("权威名称服务器")]),v._v("发送解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("权威名称服务器``www.google.com")]),v._v("在收到 DNS 客户端的 DNS 查询请求报文后，在它的 DNS 区域数据库中查找，最终得出了 "),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的 "),e("code",[v._v("IP 地址")]),v._v("。然后向 DNS 客户端返回一条 DNS 应答报文。这样 DNS 客户端获取 IP 地址后就可以正常访问这个网站了。")])])]),v._v(" "),e("h3",{attrs:{id:"dns-递归查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-递归查询"}},[v._v("#")]),v._v(" DNS 递归查询")]),v._v(" "),e("p",[e("code",[v._v("递归查询(递归解析)")]),v._v(" 是"),e("strong",[v._v("默认")]),v._v("的 DNS 解析方式。在这种解析方式中，如果客户端配置的本地名称服务器遇到不能解析的，则后面的查询全由"),e("code",[v._v("本地名称服务器")]),e("strong",[v._v("代替")]),e("code",[v._v("DNS 客户端")]),v._v("进行"),e("strong",[v._v("查询")]),v._v("，直到本地名称服务器从权威名称服务器得到了正确的解析结果，然后由本地名称服务器告诉 DNS 客户端查询的结果。")]),v._v(" "),e("p",[v._v("在递归查询过程中，一直是以本地名称服务器为中心的，"),e("code",[v._v("DNS 客户端")]),v._v("只是发出原始的域名查询请求报文，然后就"),e("code",[v._v("一直处于等待状态")]),v._v("的，"),e("strong",[v._v("直到")]),e("code",[v._v("本地名称服务器")]),e("strong",[v._v("返回")]),v._v("最终的查询结果。此时的本地名称服务器就相当于中介代理的作用。")]),v._v(" "),e("p",[v._v("如果考虑了本地名称服务器的缓存技术（在 DNS 服务器上对一定数量查询过的记录保存一定时间，这样后面查询同样的域名信息时就可直接从缓存中调出来，以加速查询效率）的话，则递归解析的基本流程如下（在此仅以首先 DNS 服务器作为本地名称服务器为例，与其它备用 DNS 服务器的解析流程完全一样）：")]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("客户端")]),v._v("向本机配置的"),e("code",[v._v("本地名称服务器")]),v._v("发出 DNS 域名查询请求。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("收到请求后，"),e("code",[v._v("先查询本地的缓存")]),v._v("，如果有该域名的记录项，则本地名称服务器就直接把查询的结果返回给客户端；如果本地缓存中没有该域名的记录，则本地名称服务器再以 DNS 客户端的角色发送与前面一样的 DNS 域名查询请求发给根名称服务器。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("根名称服务器")]),v._v("收到 DNS 请求后，把所查询得到的所请求的 DNS 域名中顶级域名所对应的顶级名称服务器地址返回给本地名称服务器。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("根据根名称服务器所返回的顶级名称服务器地址，向对应的顶级名称服务器发送与前面一样的 DNS 域名查询请求。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("顶级名称服务器")]),v._v("在收到 DNS 查询请求后，也是"),e("code",[v._v("先查询自己的缓存")]),v._v("，如果有所请求的 DNS 域名的记录项，则直接把对应的记录项返回给本地名称服务器，然后再由本地名称服务器返回给 DNS 客户端，否则向本地名称服务器返回所请求的 DNS 域名中的二级域名所对应的二级名称服务器地址。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("根据根名称服务器所返回的二级名称服务器地址，向对应的二级名称服务器发送与前面一样的 DNS 域名查询请求。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("二级名称服务器")]),v._v("在收到 DNS 查询请求后，也是"),e("code",[v._v("先查询自己的缓存")]),v._v("，如果有所请求的 DNS 域名的记录项，则直接把对应的记录项返回给本地名称服务器，然后再由本地名称服务器返回给 DNS 客户端，否则向本地名称服务器返回所请求的 DNS 域名中的三级域名所对应的三级名称服务器地址。")])]),v._v(" "),e("li",[e("p",[v._v("就这样"),e("code",[v._v("本地名称服务器")]),v._v("重复步骤 6 和步骤 7 的方法一次次地向三级、四级名称服务器等查询，"),e("code",[v._v("直到")]),v._v("最终的对应域名所在区域的"),e("code",[v._v("权威名称服务器")]),v._v("返回到最终的记录给本地名称服务器。")])]),v._v(" "),e("li",[e("p",[v._v("然后再由"),e("code",[v._v("本地名称服务器")]),v._v("返回给 "),e("code",[v._v("DNS 客户")]),v._v("，"),e("code",[v._v("同时")]),v._v("本地名称服务器会"),e("code",[v._v("缓存")]),v._v("本次查询得到的记录项。")])])]),v._v(" "),e("p",[v._v("如果在上述步骤中对应域名的权威名称服务器都说找不到对应的域名记录，则会向 DNS 客户端返回一条查询失败的 DNS 应答报文。当然，如果这个权威名称服务器上配置了指向其它名称服务器的转发器，则权威名称服务器还会在转发器指向的名称服务器上进一步重复上述步骤查询。另外，如果 DNS 客户端上配置了多个 DNS 服务器，则还会继续向其它 DNS 服务器查询的。")]),v._v(" "),e("p",[v._v("简单的讲，递归查询步骤；")]),v._v(" "),e("ol",[e("li",[e("code",[v._v("客户端")]),v._v("向本机配置的"),e("code",[v._v("本地名称服务器")]),v._v("发出 DNS 域名查询请求，发出请求后"),e("code",[v._v("客户端")]),v._v("一直处于等待状态，等待"),e("code",[v._v("本地名称服务器")]),v._v("返回查询结果。")]),v._v(" "),e("li",[e("code",[v._v("本地名称服务器")]),v._v("收到 DNS 请求后，"),e("code",[v._v("先查询本地的缓存")]),v._v("，查到存在该域名记录项立即返回结果，否则"),e("code",[v._v("本地名称服务器")]),v._v("不断向 DNS 名称服务器发送 DNS 请求查询，直到查到改域名对应的"),e("code",[v._v("权威名称服务器")]),v._v("并获得记录结果。")]),v._v(" "),e("li",[e("code",[v._v("本地名称服务器")]),v._v(" 解析到结果后将结果返回给 "),e("code",[v._v("客户端")]),v._v("。")])]),v._v(" "),e("h3",{attrs:{id:"dns-递归查询-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-递归查询-示例"}},[v._v("#")]),v._v(" DNS 递归查询-示例")]),v._v(" "),e("p",[v._v("为了方便理解，例举一个具体的示例，看一下 DNS 递归解析的工作流程：")]),v._v(" "),e("ul",[e("li",[v._v("假设客户端想要访问自己并不识别的站点"),e("code",[v._v("www.google.com")]),v._v("，那么 DNS 客服端的查询路径如下：")])]),v._v(" "),e("ol",[e("li",[e("p",[e("code",[v._v("DNS 客户端")]),v._v(" 向所配置的本地名称服务器 "),e("code",[v._v("dns.google.com")]),v._v(" 发出解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("收到请求后，"),e("code",[v._v("先查询本地缓存")]),v._v("。假设没有查到该域名对应记录，则本地名称服务器向所配置的根名称服务器 "),e("code",[v._v("a.rootserver.net")]),v._v(" 发出解析请求解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文(相当于对本地名称服务器说:“请给我 "),e("code",[v._v("www.google.com")]),v._v(" 所对应的 IP 地址”)。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("根名称服务器")]),v._v("收到 客户端的 DNS 查询请求报文后，通过查询得到"),e("code",[v._v(".com")]),v._v(" 顶级域名所对应的顶级名称服务器，然后向本地名称服务器返回一条应答报文(相当说“我不知道"),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的 IP 地址，但我现在告诉你 "),e("code",[v._v(".com")]),v._v(" 域名所对应的顶级名称服务器地址”)。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("在收到根名称服务器的 DNS 应答报文，得到 "),e("code",[v._v(".com")]),v._v(" 顶级域名所对应的顶级名称服务器地址后，再次向对应的顶级名称服务器发送一条请求解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v(".com")]),v._v("顶级名称服务器在收到 DNS 请求报文后，"),e("code",[v._v("先查询自己的缓存")]),v._v("，假设也没有该域名的记录项，则查询 "),e("code",[v._v("google.com")]),v._v(" 所对应的二级名称服务器，然后也向本地名称服务返回一条 DNS 应答报文(相当于对本地名称服务器说:“我不知道 "),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的 IP 地址，但我现在告诉你 "),e("code",[v._v("google.com")]),v._v(" 域名所对应的二级名称服务器地址”。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("在收到 "),e("code",[v._v(".com")]),v._v(" 顶级名称服务器的 DNS 应答报文，得到"),e("code",[v._v("google.com")]),v._v(" 二级域名所对应的二级名称服务器地址后，再次向对应的二级名称服务器发送一条请求解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("google.com")]),v._v(" 二级名称服务器在收到 DNS 请求报文后，也"),e("code",[v._v("先查询自己的缓存")]),v._v("，假设也没有该域名的记录项，则查询 "),e("code",[v._v("www.google.com")]),v._v(" 所对应的权威名称服务器，然后也向本地名称服务器返回一条 DNS 应答报文(相当于本地名称服务器说：“我不知道 "),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的 IP 地址，但我现在告诉你 "),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的权威名称服务器地址”)。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("在收到 "),e("code",[v._v("google.com")]),v._v(" 二级名称服务器的 DNS 应答报文，得到 "),e("code",[v._v("www.google.com")]),v._v(" 三级域名所对应的权威名称服务器地址后，再次向对应的权威名称服务器发送一条请求解析 "),e("code",[v._v("www.google.com")]),v._v(" 域名的 DNS 请求报文。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("www.google.com``权威名称服务器")]),v._v("在收到 DNS 请求后，在它的 DNS 区域数据库中查找，最终得出了"),e("code",[v._v("www.google.com")]),v._v(" 域名所对应的 IP 地址。然后向本地名称服务器返回到条 DNS 应答报文(相当于对本地名称服务器说：“"),e("code",[v._v("www.google.com")]),v._v(" 域名的 IP 地址为 xxx.xxx.xxx.xxx”)。")])]),v._v(" "),e("li",[e("p",[e("code",[v._v("本地名称服务器")]),v._v("在"),e("strong",[v._v("收到")]),e("code",[v._v("权威名称服务器")]),v._v("的应答报文后，"),e("strong",[v._v("向")]),v._v(" "),e("code",[v._v("DNS 客户端")]),e("strong",[v._v("返回")]),v._v("一条 DNS "),e("code",[v._v("应答报文")]),v._v("，"),e("strong",[v._v("告诉")]),v._v(" DNS 客户端所得到的"),e("code",[v._v("www.google.com")]),v._v(" 域名的 "),e("code",[v._v("IP 地址")]),v._v("。这样 DNS 客户端就可以正常访问这个网站了。")])])]),v._v(" "),e("p",[v._v("PS：DNS 是基于 UDP 做的查询，大家也可以考虑下为什么之前不考虑使用 TCP 去实现。")]),v._v(" "),e("h2",{attrs:{id:"建立-tcp-链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立-tcp-链接"}},[v._v("#")]),v._v(" 建立 TCP 链接")]),v._v(" "),e("p",[v._v("DNS 查询成功后，接下来是 TCP 握手阶段。")]),v._v(" "),e("p",[v._v("TCP 握手发生在传输层，当应用层下发"),e("code",[v._v("数据包")]),v._v("到"),e("code",[v._v("传输层")]),v._v("，根据"),e("code",[v._v("TCP协议")]),v._v(" 为报文"),e("code",[v._v("指明")]),v._v("请求端与应答端"),e("code",[v._v("两端")]),v._v("的"),e("code",[v._v("端口号")]),v._v("，然后将数据下发给"),e("code",[v._v("网络层")]),v._v("。网络层接收数据会会根据 IP 协议"),e("code",[v._v("确定")]),v._v("两端的 "),e("code",[v._v("IP 地址")]),v._v("，并指示了数据传输中如何"),e("code",[v._v("跳转路由器")]),v._v("。接着数据包会再被封装到"),e("code",[v._v("数据链路层")]),v._v("的"),e("code",[v._v("数据帧结构")]),v._v("中，最后数据包就可以在物理层传输数据了。")]),v._v(" "),e("p",[v._v("在 TCP 协议阶段，建立连接会有 3 次握手，断开连接会有 4 次握手。")]),v._v(" "),e("p",[v._v("为了方便下面解说，假设主动发起请求的一端称为客户端 Client，被动连接的一端称为服务端 Server。因为不管是客户端还是服务端，TCP 连接建立完后都能发送和接收数据，所以 TCP 是一个"),e("code",[v._v("全双工")]),v._v("的协议。")]),v._v(" "),e("h3",{attrs:{id:"tcp-建立连接之三次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-建立连接之三次握手"}},[v._v("#")]),v._v(" TCP 建立连接之三次握手")]),v._v(" "),e("p",[v._v("在建立连接中，任意一端掉线，TCP 都会重发 SYN 包，一般会重试五次，在建立连接中可能会遇到 SYN Flood 攻击。遇到这种情况你可以选择调低重试次数或者干脆在不能处理的情况下拒绝请求。")]),v._v(" "),e("p",[v._v("三次握手过程：")]),v._v(" "),e("ol",[e("li",[v._v("未建立 TCP 时，Client 与 Server 两端传输层的 TCP 都为 CLOSED 状态。")]),v._v(" "),e("li",[v._v("在 TCP 通信开始前，两端都会创建 TCP。 Server 创建完 TCP 后便进入 LISTEN 状态并开始等待客户端发送数据。")]),v._v(" "),e("li",[v._v("第一次握手。Client 向 Server 发送请求报文段 "),e("code",[v._v("SYN")]),v._v("（报文段中包括自身的数据通讯初始序号），请求发送后 Client 进入 "),e("code",[v._v("SYN-SENT")]),v._v(" 状态。")]),v._v(" "),e("li",[v._v("第二次握手。Server 接受到 Client 的报文段"),e("code",[v._v("SYN")]),v._v("后，如果同意连接则发送一个应答 "),e("code",[v._v("SYN-ACK")]),v._v("（应答中也会包含自身的数据通讯初始序号）给 Client，发送完成后便进入 "),e("code",[v._v("SYN-RECEIVED")]),v._v(" 状态。")]),v._v(" "),e("li",[v._v("第三次握手。Client 收到同意建立 TCP 连接的应答"),e("code",[v._v("SYN-ACK")]),v._v("后，还会向 Server 发送一个确认报文 "),e("code",[v._v("ACK")]),v._v("。发完报文后 Client 便进入"),e("code",[v._v("ESTABLISHED")]),v._v(" 状态，Server 收到来自 Client 的应答"),e("code",[v._v("ACK")]),v._v("后也进入 "),e("code",[v._v("ESTABLISHED")]),v._v(" 状态。此时连接建立完成。")])]),v._v(" "),e("p",[v._v("PS：第三次握手中可以包含数据，通过快速打开（TFO）技术就可以实现这一功能。其实只要涉及到握手的协\n议，都可以使用类似 TFO 的方式，客户端和服务端存储相同的 cookie，下次握手时发出 cookie 达到减少 RTT 的\n目的。")]),v._v(" "),e("h3",{attrs:{id:"tcp-断开连接之四次握手"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tcp-断开连接之四次握手"}},[v._v("#")]),v._v(" TCP 断开连接之四次握手")]),v._v(" "),e("p",[v._v("TCP 是"),e("code",[v._v("全双工")]),v._v("的，在断开连接时两端都需要发送 "),e("code",[v._v("FIN")]),v._v(" 和 "),e("code",[v._v("ACK")]),v._v("。")]),v._v(" "),e("p",[v._v("四次握手过程：")]),v._v(" "),e("ol",[e("li",[v._v("第一次握手。若 Client 认为数据发送完成，则向 Server 发送请求连接释放报文 "),e("code",[v._v("FIN")]),v._v("，请求发送后 Client 进入 "),e("code",[v._v("FIN_WAIT_1")]),v._v(" 状态。")]),v._v(" "),e("li",[v._v("第二次握手。Server 收到请求连接释放报文后，会告诉应用层要释放 TCP 连接，然后向 Client 发送报文"),e("code",[v._v("ACK")]),v._v("，并进入"),e("code",[v._v("CLOSE_WAIT")]),v._v("状态，此时表明 Client 到 Server 的连接已经被释放，Server 不再接收 Client 发送的数据了。但是因为 TCP 连接是双向的，所以 Server 仍然可以向 Client 发送数据报文。")]),v._v(" "),e("li",[v._v("第三次握手。此时 Server 仍可向 Client 发送请求 ，若 Server 发完数据后向 Client 发送请求释放连接的报文"),e("code",[v._v("FIN")]),v._v("，则 Server 进入"),e("code",[v._v("LAST_ACK")]),v._v("状态。")]),v._v(" "),e("li",[v._v("第四次握手。Client 收到 Server 发送的请求释放连接报文"),e("code",[v._v("FIN")]),v._v("后会进入"),e("code",[v._v("TIME_WAIT")]),v._v("状态（该状态会持续 "),e("code",[v._v("2MSL")]),v._v("时间，指最大段生存期，指报文段在网络中生存的时间，超时会被抛弃），并且向 Server 发送应答报文"),e("code",[v._v("ACK")]),v._v("。若 2MSL 时间内没有收到 Server 的重发请求的话，Client 则进入"),e("code",[v._v("CLOSED")]),v._v("状态。另外 Server 收到确认应答"),e("code",[v._v("ACK")]),v._v("后便进入"),e("code",[v._v("CLOSED")]),v._v("状态。此时连接断开完成。")])]),v._v(" "),e("h3",{attrs:{id:"faqs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[v._v("#")]),v._v(" FAQS")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("为什么 TCP 建立连接需要三次握手，明明两次就可以建立起连接？")]),v._v(" "),e("ul",[e("li",[e("p",[v._v("因为这是为了防止出现失效的连接请求报文段被服务端接收的情况，从而造成资源浪费。")])]),v._v(" "),e("li",[e("p",[v._v("可以想象如下场景：Client 发送了一个连接请求 A，但是因为网络原因造成了超时，这时 TCP 会启动超时重传的\n机制再次发送一个连接请求 B。此时请求 B 顺利到达 Server，Server 应答完就建立了请求，然后接收数据后释放了连\n接。假设这时候连接请求 A 在两端关闭后终于抵达了 Server，那么此时 Server 会认为 Client 又需要建立 TCP 连接，从\n而应答了该请求并进入 ESTABLISHED 状态。但是 Client 其实是 CLOSED 的状态，那么就会导致 Server 一直等\n待，造成资源的浪费。")])])])]),v._v(" "),e("li",[e("p",[v._v("为什么 Client 要进入 "),e("code",[v._v("TIME-WAIT")]),v._v(" 状态，等待"),e("code",[v._v("2MSL")]),v._v(" 时间后才进入 "),e("code",[v._v("CLOSED")]),v._v(" 状态？")]),v._v(" "),e("ul",[e("li",[v._v("为了保证 Server 能收到 Client 的确认应答。若 Client 发完确认应答后直接进入 "),e("code",[v._v("CLOSED")]),v._v(" 状态，如果确认应答因为网络问题一\n直没有到达，那么会造成 Server 不能正常关闭。")])])])]),v._v(" "),e("h2",{attrs:{id:"tls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tls"}},[v._v("#")]),v._v(" TLS")]),v._v(" "),e("p",[v._v("当 TCP 建立连接完成后，两端间即可通过 HTTP 进行数据通讯了。")]),v._v(" "),e("p",[v._v("当服务端配置了 TLS，则需要对 HTTPS 报文数据进行加密后再传输。")]),v._v(" "),e("p",[v._v("HTTPS 实际上还是通过 HTTP 来传输报文数据，区别在于 使用 HTTP 通讯的 报文数据是明文通讯的，而 使用 HTTPS 通讯的报文数据是通过 TLS 协议进行了加密通讯的。")]),v._v(" "),e("p",[v._v("TLS 协议位于传输层之上，应用层之下。首次进行 TLS 协议传输需要两个 RTT ，接下来可以通过 Session Resumption 减少到一个 RTT。")]),v._v(" "),e("p",[v._v("在 TLS 中使用了两种加密技术：")]),v._v(" "),e("ul",[e("li",[v._v("对称加密")]),v._v(" "),e("li",[v._v("非对称加密")])]),v._v(" "),e("h2",{attrs:{id:"发送-http-请求资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发送-http-请求资源"}},[v._v("#")]),v._v(" 发送 HTTP 请求资源")]),v._v(" "),e("h2",{attrs:{id:"关闭-tcp-链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭-tcp-链接"}},[v._v("#")]),v._v(" 关闭 TCP 链接")]),v._v(" "),e("h2",{attrs:{id:"浏览器渲染资源呈现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染资源呈现"}},[v._v("#")]),v._v(" 浏览器渲染资源呈现")]),v._v(" "),e("h1",{attrs:{id:"相关文献"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关文献"}},[v._v("#")]),v._v(" 相关文献")]),v._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=Mzg4NzI3MTg4Mw==&mid=2247483995&idx=1&sn=d385e62a805cf704b47b1935982a46ad&chksm=cf8dbafff8fa33e9577bccea60bb38e48f9ddb4e271372d1f9154729a24c496c90afe0292b76&token=1933599772&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[v._v("DNS 的递归查询与迭代查询-原文"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"https://blog.csdn.net/lycb_gz/article/details/11720247",target:"_blank",rel:"noopener noreferrer"}},[v._v("例解 DNS 递归/迭代名称解析原理-csdn"),e("OutboundLink")],1)]),v._v(" "),e("li",[e("a",{attrs:{href:"http://dnscheck.pingdom.com/",target:"_blank",rel:"noopener noreferrer"}},[v._v("dnscheck-工具"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=c.exports}}]);