---
title: PlaceholderAPI 佔位符
order: 3
---

YuIllustration 為你提供了多種 PlaceholderAPI 的佔位符.

## 列表

### unlocked

> 返回玩家已解鎖**對應分類**或**總**的條目數量

`yui_unlocked_[category/total]`

案例:

- `yui_unlocked_total` 返回玩家已解鎖的總條目數量
- `yui_unlocked_default` 返回玩家在 `default` 分類中已解鎖的條目數量

### total

> 返回**對應分類**或**總**的條目數量

`yui_total_[category/total]`

案例:

- `yui_total_total` 返回總的條目數量
- `yui_total_default` 返回 `default` 分類的條目數量

### percent

> 返回**對應分類**或**總**的解鎖百分比

`yui_percent_[category/total]`

案例:

- `yui_percent_total` 返回總的解鎖百分比
- `yui_percent_default` 返回 `default` 分類的解鎖百分比

### isunlocked

> 返回玩家是否已解鎖**對應分類的對應條目**

`yui_isunlocked_[category]_[entry]`

案例:

- `yui_isunlocked_default_example` 返回玩家是否已解鎖 `default` 分類中的 `example` 條目

### bar

> 以**進度條**的方式返回**對應分類**或**總**的解鎖百分比

`yui_bar_[category/total]`

案例:

- `yui_bar_default` 返回 `default` 分類的解鎖百分比
- `yui_bar_total` 返回總的解鎖百分比