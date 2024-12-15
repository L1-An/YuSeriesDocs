import { defineUserConfig } from "vuepress";

import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'

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

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-38ZG6DCQXY'
    }),
  ],

  // Enable it with pwa
  // shouldPrefetch: false,
});
