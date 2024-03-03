
const moment = require('moment');
moment.locale("zh-cn");


module.exports = {
  base:"/vuepress-starter/",
  title:"知识库",
  description:"第一次制作",
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
       
          return moment(timestamp).format("LLLL")
        }
      }
    ]
  ],
    themeConfig: {
      lastUpdated: '更新时间', 
      logo: '/assets/img/hero.png',
   
  nav: [
    { text: '主页', link: '/' },
    //{ text: 'Guide', link: '/About/' },
    { text: '百度', link: 'https://www.baidu.com' },
//     { text: 'Languages',
//     items: [
//       { text: 'Group1', items: [{text: 'Item1', link: '/About/'}, {text: 'Item2'}] },
//       { text: 'Group2', items: [{text: 'Item1', link: '/About/'}, {text: 'Item2'}] },
//   ]
// }
],
sidebar: [
  '',
  '表单内容',
  '流程内容',
  '后端内容',
  'SQL内容'
]
    }
    }
  