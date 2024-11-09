import { defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import theme from './theme.js';

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  title: '知识库',
  description: '便于查看复制的知识库',
  theme,
  
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
      },
      hotKeys: ['s', '/'],
      maxSuggestions: 10,
      isSearchable: (page) => true,
      getExtraFields: (page) => page.content ? [page.content] : [], // 索引页面的全部内容
    }),
  ],
});
