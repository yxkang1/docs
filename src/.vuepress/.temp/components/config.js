import { hasGlobalComponent } from "E:/kf/my-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_st5jpggpgato2otagqblt2pbdi/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "E:/kf/my-docs/node_modules/.pnpm/@vueuse+core@11.1.0_vue@3.5.12/node_modules/@vueuse/core/index.mjs";
import FontIcon from "E:/kf/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.80.3_vuepress@2.0.0-rc.17_@vuepress+bu_gerih5v34e7vugsopp4wd72uki/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "E:/kf/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.80.3_vuepress@2.0.0-rc.17_@vuepress+bu_gerih5v34e7vugsopp4wd72uki/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "E:/kf/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.80.3_vuepress@2.0.0-rc.17_@vuepress+bu_gerih5v34e7vugsopp4wd72uki/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "E:/kf/my-docs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.80.3_vuepress@2.0.0-rc.17_@vuepress+bu_gerih5v34e7vugsopp4wd72uki/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
