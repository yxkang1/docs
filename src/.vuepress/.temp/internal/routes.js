export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/portfolio.html", { loader: () => import(/* webpackChunkName: "portfolio.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/portfolio.html.js"), meta: {"t":"档案","i":"user"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"t":"页面配置","i":"file","O":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"t":"BPM相关文档","i":"lightbulb"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"t":"相关文档","i":"lightbulb"} }],
  ["/guide/bar/%E5%89%8D%E7%AB%AF%E5%86%85%E5%AE%B9.html", { loader: () => import(/* webpackChunkName: "guide_bar_前端内容.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/前端内容.html.js"), meta: {"t":"前端内容","i":"circle-info"} }],
  ["/guide/bar/%E5%90%8E%E7%AB%AF%E5%86%85%E5%AE%B9.html", { loader: () => import(/* webpackChunkName: "guide_bar_后端内容.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/后端内容.html.js"), meta: {"t":"后端内容","i":"circle-info"} }],
  ["/guide/bar/%E6%95%B0%E6%8D%AE%E5%BA%93.html", { loader: () => import(/* webpackChunkName: "guide_bar_数据库.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/数据库.html.js"), meta: {"t":"数据库内容","i":"circle-info"} }],
  ["/guide/bar/%E6%B5%81%E7%A8%8B%E5%86%85%E5%AE%B9.html", { loader: () => import(/* webpackChunkName: "guide_bar_流程内容.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/流程内容.html.js"), meta: {"t":"流程内容","i":"circle-info"} }],
  ["/guide/bar/%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9.html", { loader: () => import(/* webpackChunkName: "guide_bar_表单内容.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/表单内容.html.js"), meta: {"t":"表单内容","i":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/kf/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);
