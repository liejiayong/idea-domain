(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{670:function(s,a,n){"use strict";n.r(a);var t=n(9),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),n("p",[s._v("解决egg-mysql连接不上MySql服务器报错："),n("code",[s._v("Client does not support authentication protocol requested by server; consider upgrading MySQL client")])]),s._v(" "),n("h1",{attrs:{id:"分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#分析"}},[s._v("#")]),s._v(" 分析")]),s._v(" "),n("p",[s._v("查阅文档，发现是由于navicat版本的问题造成连接失败。")]),s._v(" "),n("p",[s._v("mysql8 之前的版本中加密规则是"),n("code",[s._v("mysql_native_password")]),s._v(",")]),s._v(" "),n("p",[s._v("而在mysql8之后,加密规则是"),n("code",[s._v("caching_sha2_password")])]),s._v(" "),n("h1",{attrs:{id:"解决"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决"}},[s._v("#")]),s._v(" 解决")]),s._v(" "),n("p",[s._v("将加密规则 "),n("code",[s._v("caching_sha2_password")]),s._v(" 改为 "),n("code",[s._v("mysql_native_password")])]),s._v(" "),n("div",{staticClass:"language-mysql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mysql> ALTER USER 'root'@'localhost' IDENTIFIED BY '[mysql_password]' PASSWORD EXPIRE NEVER;\n# 关键在于修改规则\nmysql> ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '[mysql_password]';\n、、 刷新权限，使修改生效。\nmysql> FLUSH PRIVILEGES; \n# 查看表中相关信息，确认修改是否真正生效\nmysql> use mysql;  //先使用命令 use mysql\nDatabase changed\nmysql> select user,host,plugin from user where user='root'; // 在输入该命令\n+------+-----------+-----------------------+ \n| user | host      | plugin                |\n+------+-----------+-----------------------+\n| root | localhost | mysql_native_password |\n+------+-----------+-----------------------+\n1 row in set (0.00 sec)\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);