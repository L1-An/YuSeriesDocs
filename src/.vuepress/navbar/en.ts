import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  "/portfolio",
  "/plugins/",
  "/general/",
  {
    text: "Plugins List",
    icon: "tabler:puzzle",
    prefix: "/plugins/",
    children: [
      {
        text: "YuSeries Plugins",
        icon: "lightbulb",
        children: [
          { text: "YuIllustration", icon: "material-symbols:book-outline", link: "/plugins/yuseries/YuIllustration/"},
          { text: "Sortilege", icon: "hugeicons:power-service", link: "/plugins/yuseries/Sortilege/"},
          { text: "YuSpawnerHologram", icon: "fluent-emoji-high-contrast:alien-monster", link: "/plugins/yuseries/YuSpawnerHologram/"},
          { text: "YuVarieLevel", icon: "ion:water", link: "/plugins/yuseries/YuVarieLevel/"},
          { text: "YuBattleMusic", icon: "mingcute:music-fill", link: "/plugins/yuseries/YuBattleMusic/"},
          { text: "YuItemAction", icon: "grommet-icons:action", link: "/plugins/yuseries/YuItemAction/"},
        ],
      },
      {
        text: "Partner Plugins",
        icon: "lightbulb",
        children: [
          { text: "Adyeshach", icon: "mingcute:eye-fill", link: "/plugins/partner/Adyeshach/"},
          { text: "Chemdah", icon: "emojione-monotone:mouth", link: "/plugins/partner/Chemdah/"},
          { text: "Zaphkiel", icon: "ri:sword-line", link: "/plugins/partner/Zaphkiel/"},
        ],
      },
    ],
  },
  {
    text: "Join Discord",
    icon: "ic:baseline-discord",
    link: "https://discord.com/invite/SzPBHGttaR",
  }
]);
