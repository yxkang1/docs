export const SEARCH_INDEX = [
  {
    "title": "档案",
    "headers": [
      {
        "level": 2,
        "title": "介绍",
        "slug": "介绍",
        "link": "#介绍",
        "children": []
      }
    ],
    "path": "/portfolio.html",
    "pathLocale": "/",
    "extraFields": [
      "---\nhome: true\nportfolio: true\ntitle: 档案\nicon: user\nwelcome: 👋 你好，我是\nname: 学习努力的好学生\navatar: https://theme-hope-assets.vuejs.press/hero/conan.png\n\ntitles:\n  - 天行健\n  - 君子以自强不息\n  - 地势坤\n  - 君子以厚德载物\n\nfooter: false\n---\n\n## 介绍\n\n这是一个档案主页的案例。\n\n\n"
    ]
  },
  {
    "title": "主页",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": [
      "---\nhome: true\nicon: home\ntitle: 主页\n\nbgImage: https://theme-hope-assets.vuejs.press/bg/6-light.svg\n// bgImageDark: https://theme-hope-assets.vuejs.press/bg/6-dark.svg\nbgImageStyle:\n  background-attachment: fixed\nheroText: 我的知识库\n// tagline: 方便查询，复制.\n\nhighlights:\n  - header: 相关页面\n    // description: 方便、快捷。\n    bgImage: https://theme-hope-assets.vuejs.press/bg/2-light.svg\n    bgImageDark: https://theme-hope-assets.vuejs.press/bg/2-dark.svg\n    bgImageStyle:\n      background-repeat: repeat\n      background-size: initial\n    features:\n      - title: BPM文档\n        icon: face-smile\n        details: BPM文档内容\n        link: /guide/\n\n      - title: BPM网站\n        icon: spa\n        details: 流程管理平台\n        link: http://192.168.80.17:6688/#\n\n      - title: 通义千问\n        icon: thumbs-up\n        details: 好用的AI工具\n        link: https://tongyi.aliyun.com/qianwen/\n\n      - title: 设备管理系统\n        icon: gopuram\n        details: 设备管理系统\n        link: http://192.168.80.22:8022/?#/login\n\n      - title: 翻译\n        icon: trademark\n        details: 翻译查询\n        link: https://fanyi.baidu.com/\n              \n      - title: 测试BPM系统\n        icon: star\n        details: 测试系统\n        link:  http://192.168.80.39:6688/#\n\n\ncopyright: false\nfooter: 使用 <a href=\"https://theme-hope.vuejs.press/zh/\" target=\"_blank\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-至今\n---\n\n\n"
    ]
  },
  {
    "title": "布局与功能禁用",
    "headers": [],
    "path": "/demo/disable.html",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: 布局与功能禁用\nicon: gears\norder: 4\ncategory:\n  - 使用指南\ntag:\n  - 禁用\n\nnavbar: false\nsidebar: false\n\nbreadcrumb: false\npageInfo: false\ncontributors: false\neditLink: false\nlastUpdated: false\nprev: false\nnext: false\ncomment: false\nfooter: false\n\nbacktotop: false\n---\n\n你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。\n\n<!-- more -->\n\n本页面就是一个示例，禁用了如下功能:\n\n- 导航栏\n- 侧边栏\n- 路径导航\n- 页面信息\n- 贡献者\n- 编辑此页链接\n- 更新时间\n- 上一篇/下一篇 链接\n- 评论\n- 页脚\n- 返回顶部按钮\n"
    ]
  },
  {
    "title": "密码加密的文章",
    "headers": [],
    "path": "/demo/encrypt.html",
    "pathLocale": "/",
    "extraFields": [
      "---\nicon: lock\ncategory:\n  - 使用指南\ntag:\n  - 加密\n---\n\n# 密码加密的文章\n\n实际的文章内容。\n\n段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。\n\n段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。\n"
    ]
  },
  {
    "title": "布局",
    "headers": [],
    "path": "/demo/layout.html",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: 布局\nicon: object-group\norder: 2\ncategory:\n  - 指南\ntag:\n  - 布局\n---\n\n布局包括:\n\n- [导航栏](https://theme-hope.vuejs.press/zh/guide/layout/navbar.html)\n- [侧边栏](https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html)\n- [页脚](https://theme-hope.vuejs.press/zh/guide/layout/footer.html)\n\n同时每个页面包含:\n\n- [路径导航](https://theme-hope.vuejs.press/zh/guide/layout/breadcrumb.html)\n- [标题和页面信息](https://theme-hope.vuejs.press/zh/guide/feature/page-info.html)\n- [TOC (文章标题列表)](https://theme-hope.vuejs.press/zh/guide/layout/page.html#标题列表)\n- [贡献者、更新时间等页面元信息](https://theme-hope.vuejs.press/guide/feature/meta.html)\n- [评论](https://theme-hope.vuejs.press/zh/guide/feature/comment.html)\n\n主题也带有以下元素:\n\n- [夜间模式按钮](https://theme-hope.vuejs.press/zh/guide/interface/darkmode.html)\n- [返回顶部按钮](https://theme-hope.vuejs.press/guide/interface/others.html#返回顶部按钮)\n- [打印按钮](https://theme-hope.vuejs.press/guide/interface/others.html#打印按钮)\n\n你可以在主题选项和页面的 frontmatter 中自定义它们。\n"
    ]
  },
  {
    "title": "Markdown 展示",
    "headers": [
      {
        "level": 2,
        "title": "Markdown 介绍",
        "slug": "markdown-介绍",
        "link": "#markdown-介绍",
        "children": []
      },
      {
        "level": 2,
        "title": "Markdown 配置",
        "slug": "markdown-配置",
        "link": "#markdown-配置",
        "children": []
      },
      {
        "level": 2,
        "title": "Markdown 扩展",
        "slug": "markdown-扩展",
        "link": "#markdown-扩展",
        "children": [
          {
            "level": 3,
            "title": "VuePress 扩展",
            "slug": "vuepress-扩展",
            "link": "#vuepress-扩展",
            "children": []
          },
          {
            "level": 3,
            "title": "主题扩展",
            "slug": "主题扩展",
            "link": "#主题扩展",
            "children": []
          },
          {
            "level": 3,
            "title": "图片增强",
            "slug": "图片增强",
            "link": "#图片增强",
            "children": []
          }
        ]
      }
    ],
    "path": "/demo/markdown.html",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: Markdown 展示\nicon: fab fa-markdown\norder: 2\ncategory:\n  - 使用指南\ntag:\n  - Markdown\n---\n\nVuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。\n\n你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。\n\n<!-- more -->\n\n## Markdown 介绍\n\n如果你是一个新手，还不会编写 Markdown，请先阅读 [Markdown 介绍](https://theme-hope.vuejs.press/zh/cookbook/markdown/) 和 [Markdown 演示](https://theme-hope.vuejs.press/zh/cookbook/markdown/demo.html)。\n\n## Markdown 配置\n\nVuePress 通过 Frontmatter 为每个 Markdown 页面引入配置。\n\n::: important Frontmatter\n\nFrontmatter 是 VuePress 中很重要的一个概念，请阅读 [Frontmatter 介绍](https://theme-hope.vuejs.press/zh/cookbook/vuepress/page.html#front-matter) 了解详情。\n\n:::\n\n## Markdown 扩展\n\nVuePress 会使用 [markdown-it](https://github.com/markdown-it/markdown-it) 来解析 Markdown 内容，因此可以借助于 markdown-it 插件来实现 [语法扩展](https://github.com/markdown-it/markdown-it#syntax-extensions) 。\n\n### VuePress 扩展\n\n为了丰富文档写作，VuePress 对 Markdown 语法进行了扩展。\n\n关于这些扩展，请阅读 [VuePress 中的 Markdown 扩展](https://theme-hope.vuejs.press/zh/cookbook/vuepress/markdown.html)。\n\n### 主题扩展\n\n通过 VuePress 插件，主题扩展了更多 Markdown 语法，提供更加丰富的写作功能。\n\n#### 选项卡\n\n::: tabs#fruit\n\n@tab apple\n\nApple\n\n@tab banana\n\nBanana\n\n@tab orange\n\nOrange\n\n:::\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/tabs.html)\n\n#### 脚注\n\n此文字有脚注[^first].\n\n[^first]: 这是脚注内容\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/footnote.html)\n\n#### 导入文件\n\n<!-- @include: ./README.md{11-17} -->\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/include.html)\n\n#### TeX 语法\n\n$$\n\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n$$\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tex.html)\n\n#### 任务列表\n\n- [x] 计划 1\n- [ ] 计划 2\n\n[查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/tasklist.html)\n\n### 图片增强\n\n支持为图片设置颜色模式和大小。\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/image.html)\n\n#### 上下角标\n\n19^th^ H~2~O\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/grammar/sup-sub.html)\n\n#### 组件\n\n```component VPCard\ntitle: Mr.Hope\ndesc: Where there is light, there is hope\nlogo: https://mister-hope.com/logo.svg\nlink: https://mister-hope.com\nbackground: rgba(253, 230, 138, 0.15)\n```\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/component/grammar.html)\n\n#### 提示容器\n\n::: v-pre\n\n安全的在 Markdown 中使用 {{ variable }}。\n\n:::\n\n::: info 自定义标题\n\n信息容器，包含 `代码` 与 [链接](#提示容器)。\n\n```js\nconst a = 1;\n```\n\n:::\n\n::: tip 自定义标题\n\n提示容器\n\n:::\n\n::: warning 自定义标题\n\n警告容器\n\n:::\n\n::: caution 自定义标题\n\n危险容器\n\n:::\n\n::: details 自定义标题\n\n详情容器\n\n:::\n\n- [GitHub 警示](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/alert.html)\n- [提示框](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/hint.html)\n\n#### 自定义对齐\n\n::: center\n\n我是居中的\n\n:::\n\n::: right\n\n我在右对齐\n\n:::\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/align.html)\n\n#### 属性支持\n\n一个拥有 ID 的 **单词**{#word}。\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/attrs.html)\n\n#### 标记\n\n你可以标记 ==重要的内容== 。\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/mark.html)\n\n#### 剧透\n\nVuePress Theme Hope !!十分强大!!.\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html)\n\n#### 样式化\n\n向 Mr.Hope 捐赠一杯咖啡。 _Recommended_\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/stylize/stylize.html)\n\n#### 图表\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/chartjs.html\" width=\"100%\" height=\"450\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/chartjs.html)\n\n#### ECharts\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/echarts.html\" width=\"100%\" height=\"800\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/echarts.html)\n\n#### 流程图\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/flowchart.html\" width=\"100%\" height=\"450\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/flowchart.html)\n\n#### MarkMap\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/markmap.html\" width=\"100%\" height=\"380\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/markmap.html)\n\n#### Mermaid\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/mermaid.html\" width=\"100%\" height=\"620\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/chart/mermaid.html)\n\n#### PlantUML\n\n@startuml\nAlice -> Bob: 认证请求\n\nalt 成功情况\n\n    Bob -> Alice: 认证接受\n\nelse 某种失败情况\n\n    Bob -> Alice: 认证失败\n    group 我自己的标签\n    Alice -> Log : 开始记录攻击日志\n        loop 1000次\n            Alice -> Bob: DNS 攻击\n        end\n    Alice -> Log : 结束记录攻击日志\n    end\n\nelse 另一种失败\n\n    Bob -> Alice: 请重复\n\nend\n@enduml\n\n- [View Detail](https://theme-hope.vuejs.press/zh/guide/markdown/chart/plantuml.html)\n\n#### 代码块\n\n::: code-tabs\n\n@tab pnpm\n\n```bash\npnpm add -D vuepress-theme-hope\n```\n\n@tab yarn\n\n```bash\nyarn add -D vuepress-theme-hope\n```\n\n@tab:active npm\n\n```bash\nnpm i -D vuepress-theme-hope\n```\n\n:::\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/code-tabs.html)\n\n#### 代码演示\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/code-demo.html\" width=\"100%\" height=\"450\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/demo.html)\n\n#### 交互演示\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/playground.html\" width=\"100%\" height=\"480\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/playground.html)\n\n#### Kotlin 交互演示\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/kotlin-playground.html\" width=\"100%\" height=\"220\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/kotlin-playground.html)\n\n#### Sandpack 交互演示\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/sandpack.html\" width=\"100%\" height=\"380\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/sandpack.html)\n\n#### Vue 交互演示\n\n<iframe src=\"https://plugin-md-enhance-demo.vuejs.press/snippet/vue-playground.html\" width=\"100%\" height=\"380\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/code/vue-playground.html)\n\n#### 幻灯片\n\n<iframe src=\"https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html\" width=\"100%\" height=\"420\"/>\n\n- [查看详情](https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html)\n"
    ]
  },
  {
    "title": "页面配置",
    "headers": [
      {
        "level": 2,
        "title": "页面标题",
        "slug": "页面标题",
        "link": "#页面标题",
        "children": []
      },
      {
        "level": 2,
        "title": "页面信息",
        "slug": "页面信息",
        "link": "#页面信息",
        "children": []
      },
      {
        "level": 2,
        "title": "页面内容",
        "slug": "页面内容",
        "link": "#页面内容",
        "children": []
      },
      {
        "level": 2,
        "title": "组件",
        "slug": "组件",
        "link": "#组件",
        "children": []
      }
    ],
    "path": "/demo/page.html",
    "pathLocale": "/",
    "extraFields": [
      "---\n# 这是文章的标题\ntitle: 页面配置\n# 你可以自定义封面图片\ncover: /assets/images/cover1.jpg\n# 这是页面的图标\nicon: file\n# 这是侧边栏的顺序\norder: 3\n# 设置作者\nauthor: Ms.Hope\n# 设置写作时间\ndate: 2020-01-01\n# 一个页面可以有多个分类\ncategory:\n  - 使用指南\n# 一个页面可以有多个标签\ntag:\n  - 页面配置\n  - 使用指南\n# 此页面会在文章列表置顶\nsticky: true\n# 此页面会出现在星标文章中\nstar: true\n# 你可以自定义页脚\nfooter: 这是测试显示的页脚\n# 你可以自定义版权信息\ncopyright: 无版权\n---\n\n`more` 注释之前的内容被视为文章摘要。\n\n<!-- more -->\n\n## 页面标题\n\nThe first H1 title in Markdown will be regarded as page title.\n\nMarkdown 中的第一个 H1 标题会被视为页面标题。\n\n你可以在 Markdown 的 Frontmatter 中设置页面标题。\n\n```md\n---\ntitle: 页面标题\n---\n```\n\n## 页面信息\n\n你可以在 Markdown 的 Frontmatter 中设置页面信息。\n\n- 作者设置为 Ms.Hope。\n- 写作日期为 2020 年 1 月 1 日\n- 分类为 “使用指南”\n- 标签为 “页面配置” 和 “使用指南”\n\n## 页面内容\n\n你可以自由在这里书写你的 Markdown。\n\n::: tip 图片引入\n\n- 你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。\n- 对于 `.vuepress/public` 文件夹的图片，请使用绝对链接 `/` 进行引用。\n\n:::\n\n## 组件\n\n每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：\n\n{{ 1 + 1 }}\n\n<!-- markdownlint-disable MD033 -->\n\n<ul>\n  <li v-for=\"i in 3\">{{ i }}</li>\n</ul>\n\n<!-- markdownlint-enable MD033 -->\n\n你也可以创建并引入你自己的组件。\n\n<MyComponent />\n\n<script setup>\nimport { defineComponent, h, ref } from 'vue';\n\nconst MyComponent = defineComponent({\n  setup() {\n    const input = ref('Hello world!');\n    const onInput = (e) => {\n      input.value = e.target.value;\n    };\n\n    return () => [\n      h('p', [\n        h('span','输入: '),\n        h('input', {\n          value: input.value,\n          onInput,\n        }),\n      ]),\n      h('p', [h('span','输出: '), input.value]),\n    ];\n  },\n});\n</script>\n\n---\n\n主题包含一些有用的组件。这里是一些例子:\n\n- 文字结尾应该有深蓝色的 徽章文字 徽章。 <Badge text=\"徽章文字\" color=\"#242378\" />\n\n- 一个卡片:\n\n  ```component VPCard\n  title: Mr.Hope\n  desc: Where there is light, there is hope\n  logo: https://mister-hope.com/logo.svg\n  link: https://mister-hope.com\n  background: rgba(253, 230, 138, 0.15)\n  ```\n"
    ]
  },
  {
    "title": "主要功能与配置演示",
    "headers": [],
    "path": "/demo/",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: 主要功能与配置演示\nindex: false\nicon: laptop-code\ncategory:\n  - 使用指南\n---\n\n<Catalog />\n"
    ]
  },
  {
    "title": "BPM相关文档",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: BPM相关文档\nicon: lightbulb\n---\n\n- [BPM相关文档](./bar/)\n"
    ]
  },
  {
    "title": "相关文档",
    "headers": [],
    "path": "/guide/bar/",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: 相关文档\nicon: lightbulb\n---\n\n- [表单内容](表单内容.md)\n- [流程内容](流程内容.md)\n- [前端内容](前端内容.md)\n- [后端内容](后端内容.md)\n- [数据库内容](数据库.md)\n\n  \n"
    ]
  },
  {
    "title": "前端内容",
    "headers": [],
    "path": "/guide/bar/%E5%89%8D%E7%AB%AF%E5%86%85%E5%AE%B9.html",
    "pathLocale": "/",
    "extraFields": [
      "---\r\ntitle: 前端内容\r\nicon: circle-info\r\n---\r\n\r\n###### 1、动态页面获取值，更改背景色，更改值的显示\r\n\r\n```js\r\nif(record.data.ApplyQty>record.data.ActualApplyQty){\r\n    metaData.style = 'background-color: red;';\r\n    return  \"<span style='color:black;font-weight:bold;'>\" + value + \"</span>\";;}\r\nelse {\r\n    return value;\r\n\t} \r\n```\r\n\r\n###### 2、更改附件显示！\r\n\r\n文件位置：ZYSoft\\ux\\FileViewer\\Document.js\r\n\r\n```js\r\nmarage:0 200 0 200。\r\n```\r\n\r\n"
    ]
  },
  {
    "title": "后端内容",
    "headers": [],
    "path": "/guide/bar/%E5%90%8E%E7%AB%AF%E5%86%85%E5%AE%B9.html",
    "pathLocale": "/",
    "extraFields": [
      "---\r\ntitle: 后端内容\r\nicon: circle-info\r\n---\r\n\r\n###### 1、清理附件缓存\r\n\r\n位置：D:\\BPM\\WEB\\App_Data\\DocumentCache\r\n\r\n> [!IMPORTANT]\r\n>\r\n> \r\n\r\n注意注意：CacheVersion文件不能删除\r\n\r\n###### 2、每周六备份代码\r\n\r\n（1）sourcetree,点击文件状态；\r\n\r\n（2）未暂存文件点提交-例行备份；\r\n\r\n（3）提交后到未暂存文件；\r\n\r\n（4）点击推送，分别推送到公司和中润仓库。\r\n"
    ]
  },
  {
    "title": "数据库内容",
    "headers": [
      {
        "level": 3,
        "title": "1、查看记录更新时间及节点",
        "slug": "_1、查看记录更新时间及节点",
        "link": "#_1、查看记录更新时间及节点",
        "children": []
      }
    ],
    "path": "/guide/bar/%E6%95%B0%E6%8D%AE%E5%BA%93.html",
    "pathLocale": "/",
    "extraFields": [
      "---\r\ntitle: 数据库内容\r\nicon: circle-info\r\n---\r\n### 1、查看记录更新时间及节点\r\n\r\n```sql\r\nselect * from BPMSysRecordModifies where DatasetKey ='1310418'\r\n```"
    ]
  },
  {
    "title": "流程内容",
    "headers": [],
    "path": "/guide/bar/%E6%B5%81%E7%A8%8B%E5%86%85%E5%AE%B9.html",
    "pathLocale": "/",
    "extraFields": [
      "---\r\ntitle: 流程内容\r\nicon: circle-info\r\n---\r\n\r\n###### 1、默认发起部门名称\r\n\r\n```c#\r\nInitiator.ParentOU.Name\r\n```\r\n\r\n###### 2、部门经理审批\r\n\r\n```c#\r\n\r\nMember.FromAccount(OU.TryGetOUFromCode(FormDataSet[\"ZH_RedHeadedFile_M.DepCode\"].ToString()).ExtAttributes[\"Leader\"].ToString())\r\n```\r\n\r\n###### 3、判断明细表是否有明细信息\r\n\r\n```sql\r\n\r\nif exists (select 1 from AD_EmpVehicleChangeWarm_T1 where TaskID= '<%=FormDataSet[\"AD_EmpVehicleChangeWarm_M.TaskID\"]%>')\r\n\tUPDATE AD_EmpVehicleChangeWarm_M\r\n        SET HaveT = ( SELECT TOP 1 BelongingPerson FROM AD_EmpVehicleChangeWarm_T1 \r\n        WHERE \r\n         AD_EmpVehicleChangeWarm_T1.TaskID = '<%=FormDataSet[\"AD_EmpVehicleChangeWarm_M.TaskID\"]%>') \r\n       WHERE\r\n\tAD_EmpVehicleChangeWarm_M.TaskID = '<%=FormDataSet[\"AD_EmpVehicleChangeWarm_M.TaskID\"]%>'\r\nELSE \r\n\tselect 1\r\n```\r\n\r\n"
    ]
  },
  {
    "title": "表单内容",
    "headers": [],
    "path": "/guide/bar/%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9.html",
    "pathLocale": "/",
    "extraFields": [
      "---\ntitle: 表单内容\nicon: circle-info\n---\n\n###### 1、解决多行文本显示不全问题\n\n```js\n function OnAfterLoad() {\n        foreach_all_textarea();\n\n}\nfunction foreach_all_textarea() {\n    var eles = agent.Eles;\n\n    // 收集页面上所有fileid\n    for (i = 0; i < eles.length; i++) {\n        var ele = eles[i];\n        try {\n            if (ele.controls && ele.controls.dom && ele.controls.dom.input && ele.controls.dom.input.type == 'textarea') {\n                ele.autoSize();\n            }\n        }\n        catch (e) {\n        }\n    }\n\n}\n```\n\n###### 2、取值后重新赋值\n\n```js\n// 明细表\nfor(var i=0;i<len;i++){          \n    if(myString){        \n        var a = ZYXForm.getTailValue('XDropDownList5',i);        \t\t\t\t\t\t         ZYXForm.setTailValue('XDropDownList5',i,a);   \n    }\n```\n\n```js\n//主表\nvar a = ZYXForm.getValue('XTextBox16');\nZYXForm.setValue('XTextBox16',a);\n```\n\n###### 3、审批组件\n\n\n\n\n```html\n       \n// <aspxform:XSignTrace id=\"XSignTrace1\" runat=\"server\" Width=\"1000px\" BorderWidth=\"1px\"></aspxform:XSignTrace>\n```\n\n###### 4、表单基本信息及明细信息\n\n```html\n \n// <span style=\"FONT-WEIGHT: bold; MARGIN: 0px 6px\"><span class=\"yz-glyph yz-glyph-e96b\"></span>&nbsp;基本信息</span>\n \n // <span style=\"FONT-WEIGHT: bold; MARGIN: 0px 6px\"><span class=\"yz-glyph yz-glyph-eaa5\"></span>&nbsp;退费明细</span> \n \n```\n\n"
    ]
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": [
      "404 Not Found"
    ]
  }
]
