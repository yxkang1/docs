import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "E:/kf/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vuepress+plugin-search@2.0.0-rc.55_vuepress@2.0.0-rc.17_@vue_vrorlbl7j6m4t7oy7jp7j7rcj4/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "E:/kf/my-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17__qbwrtk2rb65w6dj2y7xmpll2u4/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "E:/kf/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vuepress+plugin-search@2.0.0-rc.55_vuepress@2.0.0-rc.17_@vue_vrorlbl7j6m4t7oy7jp7j7rcj4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/kf/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vuepress+plugin-search@2.0.0-rc.55_vuepress@2.0.0-rc.17_@vue_vrorlbl7j6m4t7oy7jp7j7rcj4/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"

import "E:/kf/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_st5jpggpgato2otagqblt2pbdi/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "E:/kf/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_st5jpggpgato2otagqblt2pbdi/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "E:/kf/my-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@vuepress+plugin-search@2.0.0-rc.55_vuepress@2.0.0-rc.17_@vue_vrorlbl7j6m4t7oy7jp7j7rcj4/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
