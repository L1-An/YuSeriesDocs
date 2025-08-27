# CLAUDE.md

此文件为Claude Code (claude.ai/code) 在此代码库中工作时提供指导。

## 常用命令

### 开发和构建
- `pnpm docs:dev` - 启动开发服务器（支持热重载）
- `pnpm docs:build` - 构建生产版本
- `pnpm docs:clean-dev` - 清除缓存并启动开发服务器
- `pnpm docs:update-package` - 更新VuePress包依赖

### 包管理
- 使用 `pnpm` 作为包管理器（已锁定版本：9.14.2）
- 不使用npm或yarn，严格使用pnpm

## 项目架构

### 技术栈
- **框架**: VuePress 2.0 (使用Vite捆绑器)
- **主题**: vuepress-theme-hope 
- **语言**: TypeScript
- **包管理**: pnpm
- **中文分词**: nodejs-jieba (用于搜索功能)

### 目录结构
```
src/                        # 文档源码目录
├── .vuepress/             # VuePress配置
│   ├── config.ts          # 主配置文件
│   ├── theme.ts           # 主题配置
│   ├── navbar/            # 导航栏配置
│   ├── sidebar/           # 侧边栏配置
│   ├── public/            # 静态资源
│   └── styles/            # 样式文件
├── plugins/               # 插件文档
│   ├── yuseries/          # YuSeries插件文档
│   └── partner/           # 合作伙伴插件文档
├── general/               # 通用文档
└── zh-TW/                 # 繁体中文版本（完整镜像结构）
```

### 多语言支持
- 默认语言：英文 (`/`)
- 繁体中文：`/zh-TW/`
- 两种语言的文档结构完全镜像
- 中文搜索使用jieba分词

### 核心配置文件
- `src/.vuepress/config.ts` - VuePress主配置
- `src/.vuepress/theme.ts` - Hope主题配置
- `src/.vuepress/navbar/` - 导航栏配置（分语言）
- `src/.vuepress/sidebar/` - 侧边栏配置（分语言）

### 插件和功能
- Google Analytics集成
- Giscus评论系统
- 内容搜索（slimsearch）
- Git集成（自动显示编辑链接）
- 版权信息自动添加
- Markdown增强功能（图表、代码演示、任务列表等）

## 文档编写规范

### 文件组织
- 每个插件在 `src/plugins/` 下有独立目录
- 使用 `README.md` 作为目录的索引页面
- 功能文档按逻辑分组存放

### 双语言维护
- 英文文档在 `src/` 根目录
- 繁体中文文档在 `src/zh-TW/` 镜像目录
- 修改时需要同时维护两个版本
- **任何插件任何项目的中英文对照文档都需要严格保持文件名称以及文件数量一致，以zh-TW的为准**

### 图标配置规则
- **任何子目录都不需要icon，只有主目录需要icon**
- 在frontmatter中不要为子目录添加`icon`字段

### 测试和构建规则
- **当需要测试时，无需使用build，直接使用`pnpm docs:clean-dev`即可**
- 开发测试使用clean-dev，生产构建使用build

### 提交信息规则
- **与Claude Code相关的更新信息都不需要写入commit信息和release信息里**
- 提交信息应该专注于实际功能和内容变更
- 避免在提交信息中包含工具相关的元信息

## 开发注意事项

### 导航和侧边栏
- 新增页面后需要更新对应的sidebar配置文件
- navbar配置控制顶部导航
- 英文和中文版本需要分别配置

### 资源处理
- 静态资源放置在 `src/.vuepress/public/`
- 图标和图片有专门的assets目录
- favicon和logo等核心资源在public根目录

### 构建输出
- 构建结果输出到 `src/.vuepress/dist/`
- 部署到 https://docs.yuseries.org

## Release发布流程

### 自定义工作流
- 项目使用自定义的 `.git/hooks/post-commit` 工作流管理GitHub Release发布
- **重要规则**：当用户提到需要发布release（如"publish release"）时，执行 `.git/hooks/post-commit` 而非自行创建release

### 发布步骤
1. 当用户请求发布release时，执行 `.git/hooks/post-commit`
2. 询问用户确认是否发布、是否需要修改等意见
3. Hook会自动处理：
   - 生成release标题格式：`Publish yyyy/MM/dd hh:mm`
   - 收集用户输入的release内容描述
   - 包含变更文件列表和提交信息
   - 使用时间戳格式创建标签：`YYYYMMDDHHMMSS`