---
title: bhquest 動作
order: 4
---

# bhquest 動作

`bhquest` 動作用於控制 BetterHud 的任務追蹤功能，讓玩家可以在界面上追蹤當前任務進度。

## 基本語法

```kether
bhquest <子動作>
```

## 可用子動作

### bhquest track - 開始追蹤任務

開始追蹤當前選中的任務。

```kether
bhquest track
```

### bhquest track cancel - 取消任務追蹤

取消當前的任務追蹤。

```kether
bhquest track cancel
```

## 使用前提

### 必需依賴

1. **有效任務**: 必須存在有效的進行中任務（由 Chemdah 自動設置）

## 使用示例

### 基本任務追蹤
```kether
# 在任務接受時開始追蹤
bhquest track
```

### 取消任務追蹤
```kether
# 任務完成時取消追蹤
bhquest track cancel

# 或在特定條件下取消追蹤
if player data "quest_failed" == true then {
    bhquest track cancel
}
```

`bhquest` 動作為任務系統提供了直觀的視覺追蹤功能，幫助玩家更好地管理和完成任務。