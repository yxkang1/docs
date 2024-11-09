import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/后端内容/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%90%8E%E7%AB%AF%E5%86%85%E5%AE%B9/\",\"title\":\"后端内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"后端内容\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"后端内容/README.md\"}")
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
