import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "YuSeries Docs",
      description: "YuSeries Docs",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "YuSeries Docs",
      description: "YuSeries Docs",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
