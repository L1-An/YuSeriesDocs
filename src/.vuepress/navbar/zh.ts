import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  "/zh/portfolio",
  "/zh/plugins/",
  "/zh/general/",
  {
    text: "插件列表",
    icon: "tabler:puzzle",
    prefix: "/zh/plugins/",
    children: [
      {
        text: "YuSeries 插件",
        icon: "lightbulb",
        children: [
          { text: "YuIllustration", icon: "material-symbols:book-outline", link: "/zh/plugins/yuseries/YuIllustration/"},
          { text: "Sortilege", icon: "hugeicons:power-service", link: "/zh/plugins/yuseries/Sortilege/"},
          { text: "YuSpawnerHologram", icon: "fluent-emoji-high-contrast:alien-monster", link: "/zh/plugins/yuseries/YuSpawnerHologram/"},
          { text: "YuVarieLevel", icon: "ion:water", link: "/zh/plugins/yuseries/YuVarieLevel/"},
          { text: "YuBattleMusic", icon: "mingcute:music-fill", link: "/zh/plugins/yuseries/YuBattleMusic/"},
          { text: "YuItemAction", icon: "grommet-icons:action", link: "/zh/plugins/yuseries/YuItemAction/"},
        ],
      },
      {
        text: "合作夥伴插件",
        icon: "lightbulb",
        children: [
          { text: "Adyeshach", icon: "mingcute:eye-fill", link: "/zh/plugins/partner/Adyeshach/"},
          { text: "Chemdah", icon: "emojione-monotone:mouth", link: "/zh/plugins/partner/Chemdah/"},
          { text: "Zaphkiel", icon: "ri:sword-line", link: "/zh/plugins/partner/Zaphkiel/"},
        ],
      },
    ],
  },
  {
    text: "加入 Discord",
    icon: "ic:baseline-discord",
    link: "https://discord.com/invite/SzPBHGttaR",
  },
]);
