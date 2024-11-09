import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/表单内容/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9/\",\"title\":\"表单内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"表单内容\",\"icon\":\"lightbulb\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.05,\"words\":16},\"filePathRelative\":\"表单内容/README.md\"}")
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
