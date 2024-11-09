import comp from "E:/kf/my-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.vue"
const data = JSON.parse("{\"path\":\"/guide/bar/baz.html\",\"title\":\"表单内容\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"表单内容\",\"icon\":\"circle-info\",\"description\":\"1、解决多行文本显示不全问题\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.2,\"words\":59},\"filePathRelative\":\"guide/bar/baz.md\",\"autoDesc\":true}")
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
