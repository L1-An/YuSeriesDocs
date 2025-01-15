import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";
import { cut } from "nodejs-jieba";

export default hopeTheme({
  hostname: "https://docs.yuseries.org",

  author: {
    name: "L1An",
    url: "https://github.com/l1-an",
  },

  iconAssets: "iconify",

  logo: "/logo.png",

  repo: "L1-An/YuSeriesDocs",

  docsDir: "src",

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      copyright: "Copyright © 2023-2024 L1An",

      displayFooter: true,

      metaLocales: {
        editLink: "Edit this page",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh-TW/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      copyright: "Copyright © 2023-2024 L1An",

      displayFooter: true,

      // page meta
      metaLocales: {
        editLink: "編輯此頁",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh-TW/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    // Note: This is for testing ONLY!
    // You MUST generate and use your own comment service in production.
    comment: {
      provider: "Giscus",
      repo: "L1-An/YuSeriesDocs",
      repoId: "R_kgDONdndiw",
      category: "Announcements",
      categoryId: "DIC_kwDONdndi84ClOoz",
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    // docsearch: {
    //   appId: "ZZFI90R6KR",
    //   apiKey: "292413dfd73d3461d519aab9412a0f2e",
    //   indexName: "yuseries",
    // },

    slimsearch: {
      indexContent: true,
      indexLocaleOptions: {
        '/zh-TW/': {
          tokenize: (text, fieldName) =>
            fieldName === 'id' ? [text] : cut(text, true),
        },
      },
    },

    copyright: { global: true },

    git: {},

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },

  markdown: {
    align: true,
    attrs: true,
    component: true,
    demo: true,
    figure: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    highlighter: "shiki",
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tasklist: true,
    tabs: true,
    vPre: true,

    // Install chart.js before enabling it
    // chart: true,

    // insert component easily

    // Install echarts before enabling it
    // echarts: true,

    // Install flowchart.ts before enabling it
    // flowchart: true,

    // gfm requires mathjax-full to provide tex support
    // gfm: true,

    // Install mermaid before enabling it
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // Install @vue/repl before enabling it
    // vuePlayground: true,

    // Install sandpack-vue3 before enabling it
    // sandpack: true,
  },

});
