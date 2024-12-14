import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "/",
    "portfolio",
    "plugins/",
  ],
  "/plugins/": "structure",
});
