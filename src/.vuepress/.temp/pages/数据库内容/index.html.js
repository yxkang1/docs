import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/数据库内容/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%86%85%E5%AE%B9/\",\"title\":\"数据库内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"数据库内容\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.06,\"words\":19},\"filePathRelative\":\"数据库内容/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
