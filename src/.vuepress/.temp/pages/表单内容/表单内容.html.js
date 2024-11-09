import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/表单内容/表单内容.html.vue"
const data = JSON.parse("{\"path\":\"/%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9/%E8%A1%A8%E5%8D%95%E5%86%85%E5%AE%B9.html\",\"title\":\"表单内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"表单内容\",\"icon\":\"circle-info\",\"description\":\"1、解决多行文本显示不全问题\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":59},\"filePathRelative\":\"表单内容/表单内容.md\",\"autoDesc\":true}")
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
