# Repository Guidelines

本仓库为基于 VuePress v2 与 vuepress-theme-hope 的文档站点（YuSeries Docs）。请遵循以下规范以保持一致的结构、风格与发布流程。

## 项目结构与模块
- 文档根目录：`src/`
- 站点配置：`src/.vuepress/`（`config.ts`、`theme.ts`、`navbar/`、`sidebar/`）
- 静态资源：`src/.vuepress/public/`（如 `/logo.png`、`/assets/**`）
- 构建产物：`src/.vuepress/dist/`（仅构建后出现）
- 内容组织：按语言与主题分区，如 `src/zh-TW/**`、`src/plugins/**`、`src/general/**`

## 构建、开发与常用命令
- 安装依赖：`pnpm install`
- 本地预览：`pnpm run docs:dev`（启动开发服务器）
- 生产构建：`pnpm run docs:build`（输出到 `src/.vuepress/dist/`）
- 升级依赖：`pnpm run docs:update-package`
CI：`main` 分支推送后由 `.github/workflows/deploy-docs.yml` 自动部署到 `gh-pages`。

## 编写规范与命名
- 内容使用 Markdown，为每页提供清晰的一级标题（`# 标题`）与有序层级（`##`、`###`）。
- 文件命名：小写短横线或驼峰，避免空格，如 `start/Installation.md`、`ui/overview.md`。
- 站点配置使用 TypeScript，保持与现有风格一致（ES2022、`moduleResolution: NodeNext`）。
- 图片与静态资源放入 `src/.vuepress/public/`，以绝对路径引用（如 `/assets/image/advanced.svg`）。

## 测试与校验
- 提交前本地运行：`pnpm run docs:dev` 检视导航、搜索与组件渲染；`pnpm run docs:build` 确认可构建。
- 链接与图片请在本地预览逐页点击验证；避免指向不存在的锚点或路径。

## 提交与 Pull Request
- 提交信息简洁明确，建议采用 Conventional Commits：
  - 示例：`docs: update YuIllustration unlocker docs`、`chore: bump vuepress deps`。
- PR 要求：
  - 描述变更范围与动机，附影响页面（路径示例）。
  - 若含导航/侧边栏变更，注明对应 `navbar/*.ts`、`sidebar/*.ts` 的修改点。
  - 截图（如 UI 或组件效果变更）。

## 环境与发布提示（重要）
- Node：与 CI 对齐使用 Node 22；包管理器：`pnpm`。
- 若新增语言或大类，请同步维护 `locales`、`navbar`、`sidebar` 配置。
- 不要手动提交 `src/.vuepress/dist/`；产物由 CI 部署至 `gh-pages`。

