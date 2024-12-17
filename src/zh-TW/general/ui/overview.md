---
title: 總覽
icon: grommet-icons:overview
dir:
  order: 1
---

## 介紹

`YuSeries` 系列插件提供的 GUI 介面系統允許你進行完全自定義, 可以自己添加新的圖標、可以完全自定義 GUI 的樣式, 支持 `CustomModelData`, 也支持自定義頭顱.  

::: note
得益於 [`TabooLib`](https://github.com/TabooLib/TabooLib) 與**自製開發庫**, 所有 `YuSeries` 插件的 GUI 介面配置都使用統一的格式, 這可以大大減少你的學習成本.
:::

## 學習配置

GUI 配置文件的格式如下:

```yaml
title: "xxx"

shape:
  - '    S    '
  - '#P@#@#@N#'
  - '####B####'

templates:
  '#':
    material: BLACK_STAINED_GLASS_PANE
    name: " "
  
  # ...
```

可以看到, 一個配置文件由三部分組成:

::: tabs

@tab title

### 介面的標題, 顯示在介面頂部.  

支持**顏色符號**, 使用 **papi 變量**和 **Kether 語句解析**.

@tab shape

### 介面的形狀佈局, 其中的內容允許你自定義為任何抽象字符.  

每個抽象字符**限定為一個字符**, 一行中**最多允許 9 個字符**, 也就對應介面從第一個格子到第九個也就是最後一個格子.  
`shape` 中**最多允許 6 行**, 也就是對應箱子的最大行數.
如果希望出現空的格子, 則直接使用空格代替對應位置即可.  
然後在 `templates` 裡面進行對應抽象字符的具體配置.

例如, 構建一個只有**第 5 個格有內容**的**單行介面**, 可以這樣配置:
```yaml
shape:
  - '    S    '
```

@tab templates

### 介面中的圖標, 你可以自定義圖標的材質、名稱、模型數據等

在 `templates` 中, 你**必須**要將 `shape` 裡定義過的所有抽象字符進行配置, 否則將無法打開介面.

例如在上面的示例配置中, 我們定義了 `S`, `#`, `P`, `N`, `@`, `B` 這幾個抽象字符, 那麼在 `templates` 中就必須要對這些字符進行配置.

一個完整的抽象字符配置如下:
```yaml
templates:
  'P':
    material: ARROW
    name: "上一頁"
    lore:
      - "點擊切換到上一頁"
    custom-model-data: 10001
    shiny: true # 是否閃爍, 也就是帶有附魔效果.
    feature:
      - ==: Functional
        keyword: Previous
```

一個圖標的配置至少要包含 `material` 才能正常運行, 在[這裡](https://bukkit.windit.net/javadoc/org/bukkit/Material.html)查看所有 Material 列表.  

另外每個插件提供的 feature functional keyword 是**不同**的, 具體你可以在對應插件的 wiki 中查詢.

請在[這裡](./features.md)查詢**默認提供**的 feature.

:::