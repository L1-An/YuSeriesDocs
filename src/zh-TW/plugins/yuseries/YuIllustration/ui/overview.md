---
title: 總覽
dir:
  order: 1
---

## 介紹

`YuIllustration` 提供了可以完全自定義的 GUI 介面系統. 具體介紹可以參考[通用技術-GUI](../../../../general/ui/overview.md)

::: tip
值得一提的是, 每個類別使用的 GUI 都是獨立的, 因此你可以給不同的類別配置不同的 GUI 介面, 這樣或許還可以實現一些有趣的功能, 比如成就系統.
:::

## 提供的 feature

### MainUI

在 `MainUI` 中, 提供的 feature 有:

::: tabs

@tab element

帶有這個 feature 的圖標將會被渲染成主介面的一個類別按鈕, 點擊即可跳轉到對應的類別介面.

```yaml
- ==: Functional
  keyword: Main:element
```

:::

### CategoryUI

在 `CategoryUI` 中, 提供的 feature 有:

::: tabs

@tab element

帶有這個 feature 的圖標將會被渲染成類別介面的一個條目按鈕, 它將會顯示你在[條目配置文件](../basic/know-entry.md)中配置的條目圖標.

```yaml
- ==: Functional
  keyword: Category:element
```

@tab main

帶有這個 feature 的圖標將可以被點擊以返回主介面.

```yaml
- ==: Functional
  keyword: Category:main
```

:::