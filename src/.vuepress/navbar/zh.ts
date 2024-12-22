import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh-TW/",
  "/zh-TW/portfolio",
  "/zh-TW/plugins/",
  "/zh-TW/general/",
  {
    text: "插件列表",
    icon: "tabler:puzzle",
    prefix: "/zh-TW/plugins/",
    children: [
      {
        text: "YuSeries 插件",
        icon: "lightbulb",
        children: [
          { text: "YuIllustration", icon: "material-symbols:book-outline", link: "/zh-TW/plugins/yuseries/YuIllustration/"},
          { text: "Sortilege", icon: "hugeicons:power-service", link: "/zh-TW/plugins/yuseries/Sortilege/"},
          { text: "YuSpawnerHologram", icon: "fluent-emoji-high-contrast:alien-monster", link: "/zh-TW/plugins/yuseries/YuSpawnerHologram/"},
          { text: "YuVarieLevel", icon: "ion:water", link: "/zh-TW/plugins/yuseries/YuVarieLevel/"},
          { text: "YuBattleMusic", icon: "mingcute:music-fill", link: "/zh-TW/plugins/yuseries/YuBattleMusic/"},
          { text: "YuItemAction", icon: "grommet-icons:action", link: "/zh-TW/plugins/yuseries/YuItemAction/"},
        ],
      },
      {
        text: "合作夥伴插件",
        icon: "lightbulb",
        children: [
          { text: "Adyeshach", icon: "mingcute:eye-fill", link: "/zh-TW/plugins/partner/Adyeshach/"},
          { text: "Chemdah", icon: "emojione-monotone:mouth", link: "/zh-TW/plugins/partner/Chemdah/"},
          { text: "Zaphkiel", icon: "ri:sword-line", link: "/zh-TW/plugins/partner/Zaphkiel/"},
          { text: "NBTProhibition", icon: "hugeicons:tools", link: "/zh-TW/plugins/partner/NBTProhibition/"},
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
