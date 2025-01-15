---
title: Kether
order: 5
---

**YuIllustration** 提供了一些額外的 Kether 動作, 如果你還不知道 Kether 是什麼, 請查看[這裡](../../../../general/kether/README.md).

## 公有動作
這類動作可以在任何支援 Kether 的插件中使用

### toast

給玩家發送一個成就信息(右上角顯示). 需要安裝 [UltimateAdvancementAPI](https://www.spigotmc.org/resources/ultimateadvancementapi-1-15-1-21-4.95585/)

```kether no-line-numbers
toast <material> <text> [data <key:value>] [by <frame:challenge/task/goal>]
```

**參數詳解**:

| 參數 | 類型 | 說明 | 必填 |
| :-- | :-- | :-- | :-- |
| `material` | `string` | 材質名稱 | ✅ |
| `text` | `string` | 顯示內容 | ✅ |
| `data` | `string` | 自定義數據 (NBT) | ❌ |
| `by` | `string` | 發送的類型(challenge/task/goal) | ❌ |

---

## 私有動作
這類動作只能在 YuIllustration 中使用.

### yui-craft-item
僅用於 entry 的條件配置中. 用於獲取玩家合成此物品的數量

```kether no-line-numbers
yui-craft-item total-amount
```

**參數詳解**:

| 參數 | 類型 | 說明 | 必填 |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | 合成此物品的總數量 | ✅ |

### yui-item
僅用於 entry 的條件配置中. 用於處理玩家通過拾取的物品.

```kether no-line-numbers
yui-item <action:take/total-amount/pick-amount>
```

**參數詳解**:

| 參數 | 類型 | 說明 | 必填 |
| :-- | :-- | :-- | :-- |
| `action` | `string` | 動作類型(take/total-amount/pick-amount) | ✅ |

- take 將**本次**撿起的物品從背包中移除
- total-amount 總共撿起的數量
- pick-amount 本次撿起的數量

### yui-kill-entity
僅用於 entry 的條件配置中. 用於獲取玩家殺死的實體信息

```kether no-line-numbers
yui-kill-entity total-amount
yui-kill-entity entity name
```

**參數詳解**:

| 參數 | 類型 | 說明 | 必填 |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | 殺死的實體總數量 | ✅ |
| `entity name` | `string` | 殺死的實體名稱 | ✅ |

### yui-mythic-mob
僅用於 entry 的條件配置中. 用於獲取玩家殺死的 MythicMobs 實體信息

```kether no-line-numbers
yui-mythic-mob total-amount
yui-mythic-mob id
yui-mythic-mob name
```

**參數詳解**:

| 參數 | 類型 | 說明 | 必填 |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | 殺死的 MythicMobs 總數量 | ✅ |
| `id` | `string` | 殺死的 MythicMobs ID | ✅ |
| `name` | `string` | 殺死的 MythicMobs 名稱 | ✅ |