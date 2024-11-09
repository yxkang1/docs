import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/流程内容/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E6%B5%81%E7%A8%8B%E5%86%85%E5%AE%B9/\",\"title\":\"流程内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"流程内容\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"流程内容/README.md\"}")
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
