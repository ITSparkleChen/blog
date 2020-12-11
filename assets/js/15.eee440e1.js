(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{504:function(s,t,a){"use strict";a.r(t);var e=a(3),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuepress构建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress构建"}},[s._v("#")]),s._v(" VuePress构建")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("前言")]),s._v(" "),a("p",[s._v("上一篇博客写了VuePress本地运行，有需要的"),a("RouterLink",{attrs:{to:"/blogs/html/2020/12092140.html"}},[s._v("点击这里")]),s._v(",怎么把VuePress本地运行的结果放到Github上通过配置GitHub Pages显示呢")],1)]),s._v(" "),a("p",[s._v("首先默认你已经可以在本地运行起来了VuePress，那么你至少通过上一篇博客或者其他码友的博客学会了搭建本地VuePress, 你应该知道启动本地服务器的命令")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("npm run dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#npm run docs:dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("yarn 启动命令如下")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("yarn dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yarn docs:dev")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("至于使用"),a("code",[s._v("dev")]),s._v("还是"),a("code",[s._v("docs:dev")]),s._v("，请打开VuePress根目录下"),a("code",[s._v("package.json")]),s._v("文件查看"),a("code",[s._v("scripts")]),s._v("中配置的有没有带有"),a("code",[s._v("docs:")]),s._v("前缀")]),s._v(" "),a("p",[s._v("scripts中一共有两个命令一个是"),a("code",[s._v("dev")]),s._v(" 用来运行本地服务器启动VuePress,另外一个是 "),a("code",[s._v("build")]),s._v("这个build就是用来构建VuePress的，")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("那么构建的是什么？")])]),s._v(" "),a("p",[s._v("VuePress中目前都是创建的"),a("code",[s._v(".md")]),s._v("格式的文件，浏览器显示的事html的格式，对，你猜的没错，构建就是将所有"),a("code",[s._v(".md")]),s._v("格式的文件动态编译为静态html文件。")]),s._v(" "),a("p",[s._v('说了这么多VuePress都已经运行起来了，还没有介绍VuePress的目录结构,以下目录内容摘自官网"目录结构"')]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(".\n├── docs\n│   ├── .vuepress (可选的)\n│   │   ├── components (可选的)\n│   │   ├── theme (可选的)\n│   │   │   └── Layout.vue\n│   │   ├── public (可选的)\n│   │   ├── styles (可选的)\n│   │   │   ├── index.styl\n│   │   │   └── palette.styl\n│   │   ├── templates (可选的, 谨慎配置)\n│   │   │   ├── dev.html\n│   │   │   └── ssr.html\n│   │   ├── config.js (可选的)\n│   │   └── enhanceApp.js (可选的)\n│   │ \n│   ├── README.md\n│   ├── guide\n│   │   └── README.md\n│   └── config.md\n│ \n└── package.json\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])])]),s._v(" "),a("p",[s._v("以"),a("RouterLink",{attrs:{to:"/blogs/html/2020/12092140.html"}},[s._v("上一篇博客")]),s._v("创建testblog为例，我们在.docs中创建"),a("code",[s._v(".vuepress")]),s._v("文件夹，然后在文件夹下创建"),a("code",[s._v("config.js")]),s._v("文件")],1),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("ol",[a("li",[s._v("注意区分大小写")]),s._v(" "),a("li",[s._v("当你想要去自定义 "),a("code",[s._v("templates/ssr.html")]),s._v(" 或 "),a("code",[s._v("templates/dev.html")]),s._v(" 时，最好基于 "),a("a",{attrs:{href:"https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/client/index.dev.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("默认的模板文件 (opens new window)"),a("OutboundLink")],1),s._v("来修改，否则可能会导致构建出错。")])])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("docs/.vuepress")]),s._v(": 用于存放全局的配置、组件、静态资源等。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/components")]),s._v(": 该目录中的 Vue 组件将会被自动注册为全局组件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/theme")]),s._v(": 用于存放本地主题。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles")]),s._v(": 用于存放样式相关的文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles/index.styl")]),s._v(": 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/styles/palette.styl")]),s._v(": 用于重写默认颜色常量，或者设置新的 stylus 颜色常量。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/public")]),s._v(": 静态资源目录。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates")]),s._v(": 存储 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates/dev.html")]),s._v(": 用于开发环境的 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/templates/ssr.html")]),s._v(": 构建时基于 Vue SSR 的 HTML 模板文件。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/config.js")]),s._v(": 配置文件的入口文件，也可以是 "),a("code",[s._v("YML")]),s._v(" 或 "),a("code",[s._v("toml")]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("docs/.vuepress/enhanceApp.js")]),s._v(": 客户端应用的增强。")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("使用默认主题")])]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("home")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heroImage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /timg.jfif\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("heroText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hero 标题\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tagline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Hero 副标题\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("actionText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 快速上手 →\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("actionLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /zh/guide/\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("features")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 简洁至上\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Vue驱动\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 高性能\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("details")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("footer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" MIT Licensed "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("|")]),s._v(" Copyright © 2018"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("present Evan You\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("运行查看")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-01.jpg",alt:""}})]),s._v(" "),a("p",[s._v("图片没显示是因为配置图片不存在，放一张进去    "),a("code",[s._v("doc/.vuepress/public")]),s._v(" 是放静态资源的 那么我们暂时在"),a("code",[s._v("public")]),s._v(" 下创建一个images文件夹然后把图片放进去")]),s._v(" "),a("p",[s._v("在根目录也就是docs同层的文件夹下，"),a("code",[s._v("package.json")]),s._v(" 右键打开"),a("code",[s._v("git bansh here")])]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("npm run build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("构建之后可以查看信息，如看不懂没关系，直接跳过.")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-02.jpg",alt:""}})]),s._v(" "),a("p",[s._v("本地文件目录，在根目录也就是"),a("code",[s._v("docs")]),s._v("同级下生成一个"),a("code",[s._v("node-modules")]),s._v("文件夹，这个是放本地的插件.一般不用管")]),s._v(" "),a("p",[s._v("另外输出信息 大概是说在"),a("code",[s._v("docs\\\\vuepress\\dist")]),s._v(" 下生成静态文件。")]),s._v(" "),a("p",[s._v(":: warning")]),s._v(" "),a("p",[s._v("可以看到dist 下就是构建生成的静态页面，我们之后把这个目录上传到GitHub 上然后配置一下GitHub Page就行了，具体配置请参考[GitHub Pages配置](1292140.html##Github Pages )")]),s._v(" "),a("p",[s._v(":::")]),s._v(" "),a("p",[s._v("当然可以修改dis的路径  "),a("code",[s._v(".vuepress\\config.js")]),s._v("设置 dest")]),s._v(" "),a("p",[s._v("配置导航栏")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"nav"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"主页"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reco-home"')]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"时间线"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/timeline/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reco-date"')]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"GitHub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://github.com/ITSparkleChen/blog"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reco-github"')]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"关于"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"link"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/about/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"icon"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reco-account"')]),s._v("\n\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("nav 是一个数组，可以添加多个元素，")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("text : 文本")])]),s._v(" "),a("li",[a("p",[s._v("link : 连接地址，这里以"),a("code",[s._v("'/'")]),s._v("值得是根目录，使用的相对路径，默认会使用index.html作为首页  ，/guide/ 指得是根路径下有个guide的文件夹，当然要想正常访问，那么guide文件夹下应该有个.md5，也可以放外网地址。")])]),s._v(" "),a("li",[a("p",[s._v("icon: 小图标")]),s._v(" "),a("p",[s._v("这里不过多叙述怎么美化我们的博客，大家也可以下载现成的主题，推荐个主题 "),a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("直通车"),a("OutboundLink")],1)])])]),s._v(" "),a("h2",{attrs:{id:"git的简单使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git的简单使用"}},[s._v("#")]),s._v(" Git的简单使用")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",[s._v("此处先简单介绍下Git怎么使用，熟悉的小伙伴可以直接跳过")])])]),s._v(" "),a("p",[s._v("首先我们GitHub已经创建了一个新的仓库，这里不再复述，关于GitHub创建仓库已经在上篇博客做了说明，感兴趣的可以看下[GitHub Pages配置](1292140.html#Github Pages )")]),s._v(" "),a("p",[s._v('下面我创建了一个名为 "myblog" 的博客，如下')]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-03.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("网上很多人使用"),a("code",[s._v("GitHub Pages")]),s._v(" 都是参考的官方提供的明明规则   账户名.github.io   严格创建仓库,我不是很喜欢这种创建，url会很长，完全可以任意起名字，只要我们VuePress  "),a("code",[s._v("config.js")]),s._v("中的  "),a("code",[s._v("base")]),s._v("  配置和这个名字保持一致就行")])]),s._v(" "),a("p",[s._v("将根目录  "),a("code",[s._v("docs/.vuepress")]),s._v(" 下的"),a("code",[s._v("config.json")]),s._v(" 中的"),a("code",[s._v("base")]),s._v("路径修改一下   这个地方会影响所有图片和链接的路由，base配置成"),a("code",[s._v('"/myblog/"')]),s._v("，通过"),a("code",[s._v("npm run build")]),s._v("可以看下"),a("code",[s._v("dist")]),s._v("中生成的静态页面如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-04.jpg",alt:""}})]),s._v(" "),a("p",[s._v("所有资源前面都会以   "),a("code",[s._v('"/myblog/"')]),s._v("     也就是base会影响我们资源定位，js、链接等，我当时部署就踩了很多坑，本地运行的好好的，上传到GitHub上怎么脚本什么都没有了，页面布局、图片、包括点击跳转页面都不正常。这个百分百是资源路径不对,因此这个地方很重要!!! 我们在Github创建的也是myblog,以后配置了GitHup Pages 访问地址一般是https://xxx.github.io/myblog/xxx")]),s._v(" "),a("h3",{attrs:{id:"上传到github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传到github"}},[s._v("#")]),s._v(" 上传到GitHub")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Gti 本地仓库初始化")]),s._v(" "),a("p",[s._v("在VuePress生成的静态页面有index.html 的目录拷贝到某一个文件夹例如"),a("code",[s._v("public")]),s._v("下(随便一个空目录都行),右键  Git Bash here , 执行以下命令")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git init\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("::: danager")]),s._v(" "),a("p",[s._v("不要在VuePress生成的静态文件的文件夹下初始化")]),s._v(" "),a("p",[s._v(":::")]),s._v(" "),a("p",[s._v("不建议直接在VuePress 构建生成的静态文件的目录下执行，因为Git初始化会在当前目录生成一个.git的文件夹，这个是当前目录是本地仓库，记录当前仓库文件的一个状态。如果直接在"),a("code",[s._v("build")]),s._v("输出的静态文件夹，比如dist中初始化，那么当我们build时候，默认会删除当前dist中的所有文件及文件夹，因此可以将dist中文件另外拷贝到某个新建的文件夹A下或者空文件夹，然后再右建 Git Bash here中执行git初始化")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-05.jpg",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("2 上传修改代码文件到本地仓库")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git add "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("A\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("| ------------- |:-------------:| \n| git add .     | 所有变化提交    |\n| git add -u    | 仅监控不提交    |   \n| git add -A    | .和-u的合并    |    \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("会看到Git 命令行输出")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-06.jpg",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("查询状态")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("可以查看当前文件存在状态")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-07.jpg",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("本地提交")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git commit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("m "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Init"')]),s._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#-m是指的后面提交的信息")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"images/article4-08.jpg",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("上传代码")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git push "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("u origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  新仓库上传用-u 已有仓库可以不使用-u")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"images/article4-09.jpg",alt:""}})]),s._v(" "),a("p",[s._v("这个地方的意思是上传出错，不能获取远程仓库，这是因为我们没哟将本地仓库与远程仓库做关联，也就是你上传到我github上我怎么知道你要传到那个账户的仓库下")])]),s._v(" "),a("li",[a("p",[s._v("关联远程仓库")]),s._v(" "),a("p",[s._v("以我仓库的地址为例")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git remote add origin https:"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("ITSparkleChen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("myblog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n或者\ngit remote add origin git@github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com:ITSparkleChen"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("myblog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("git\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("怎么查看自己的地址，需要登陆GitHub打开我们刚才创建的新的仓库")]),s._v(" "),a("p",[s._v("https方式关联")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-11.jpg",alt:""}})]),s._v(" "),a("p",[s._v("ssh方式关联")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-11.jpg",alt:""}})]),s._v(" "),a("p",[s._v("当使用ssh方式出错，可能是由于本地没有生成 SSH 公钥")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-13.jpg",alt:""}})]),s._v(" "),a("p",[s._v("可以查看下本地git的配置")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("list\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果配置过会显示如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-14.jpg",alt:""}})]),s._v(" "),a("p",[s._v("没有配置则需要执行如下命令进行配置")]),s._v(" "),a("div",{staticClass:"language-powershell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[s._v("git config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global  user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这里换上你的用户名"')]),s._v("\ngit config "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v("global  user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("email "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"这里换上你的邮箱"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('ssh-keygen -t rsa -C "你的邮箱"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后一直按回车键Enter就行")]),s._v(" "),a("p",[s._v("找到 "),a("code",[s._v("C:\\Users\\你电脑的登陆名\\.ssh\\")]),s._v("下的"),a("code",[s._v("id_rsa.pub")]),s._v("的文件，打开拷贝里面的内容")]),s._v(" "),a("p",[s._v("登陆Github 点击右上角头像  找到 “setting”菜单")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-15.jpg",alt:""}})]),s._v(" "),a("p",[s._v("我们刚才拷贝的密匙配置到里面就行了，也就完成了授权本地可以上传了")])]),s._v(" "),a("li",[a("p",[s._v("再次push")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-12.jpg",alt:""}})]),s._v(" "),a("p",[s._v("发现已经上传成功")])]),s._v(" "),a("li",[a("p",[s._v("配置GitHub Pages")]),s._v(" "),a("p",[s._v("上传完毕之后会发现我们的仓库是这个样子,里面有VuePress生成的静态页面主页 而且是index.html,而Git Hub Pages需要这样的一个主页作为启动也，我们 进入 settings 配置一下GitHub Pages ,详细配置请参考")]),s._v(" "),a("p",[a("RouterLink",{attrs:{to:"/blogs/html/2020/12092140.html"}},[s._v("上篇博客")]),s._v("GitHub Pages 配置")],1),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-16.jpg",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("访问首页")]),s._v(" "),a("p",[s._v("等待GitHub Pages 配置生效后，点击链接即可访问主页。")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-17.jpg",alt:""}})]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",[s._v("特别说明，如果正常访问，请跳过")])]),s._v(" "),a("p",[s._v("假如你的页面出现这个情况,一定是路径问题")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-18.jpg",alt:""}})]),s._v(" "),a("p",[s._v("请确保三个地方")]),s._v(" "),a("ul",[a("li",[s._v("工程根目录docs/.vuepress/config.js中的"),a("code",[s._v("base")]),s._v("路径是否和我们创建"),a("code",[s._v("仓库的名字")]),s._v("一致")])]),s._v(" "),a("p",[s._v("​     "),a("img",{attrs:{src:"images/article4-19.jpg",alt:""}})]),s._v(" "),a("ul",[a("li",[a("p",[s._v("仓库里index.html是否在根节点，Github Pages是否选了root")]),s._v(" "),a("p",[a("img",{attrs:{src:"images/article4-20.png",alt:""}})])]),s._v(" "),a("li",[a("p",[s._v("需要自己调试下，浏览器F12打开调试模式，控制台，重新刷新页面，报错部分移上去能看到具体哪些资源加载错误，调整下位置，或者打开页面（index.html）代码进行查看js路径和图片路径，我们所有资源访问都是建立在https://github.com/ITSparkleChen/myblog/开头，比如加载图片那么使用访问的路径是https://github.com/ITSparkleChen/myblog/images/xxx.jpg或者界面使用到某个js脚本，一定是https://github.com/ITSparkleChen/myblog/assets/js/xxx.js")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("重要的事情说三遍")]),s._v(" "),a("p",[s._v("出现上述页面与本地实际运行不符合")]),s._v(" "),a("p",[s._v("一定是路径问题!")]),s._v(" "),a("p",[s._v("一定是路径问题!")]),s._v(" "),a("p",[s._v("一定是路径问题!")]),s._v(" "),a("p",[s._v("我也是磕磕碰碰过来的，幸好会点浏览器调试，找了好久才发现是路径问题......")])]),s._v(" "),a("p",[s._v("这样整个简单的VuePress驱动静态网页并发布到GitHub 上设置GitHub Pages来简单实现外网访问自己的网站")]),s._v(" "),a("p",[s._v("大家可以找一个主题进行搭建，这是"),a("a",{attrs:{href:"https://itsparklechen.github.io/blog/",target:"_blank",rel:"noopener noreferrer"}},[s._v("我的博客"),a("OutboundLink")],1),s._v("使用了一个简洁好看的主题"),a("a",{attrs:{href:"https://vuepress-theme-reco.recoluan.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),a("OutboundLink")],1),s._v(",在主题基础上也可以自行配置一些插件哦.")])])}),[],!1,null,null,null);t.default=n.exports}}]);