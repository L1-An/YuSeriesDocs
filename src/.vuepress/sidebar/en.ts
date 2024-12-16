import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "/",
    "portfolio",
    "discord_present",
    "plugins/",
    "general/",
  ],
  "/plugins/": "structure",
  "/general/": "structure",
});

