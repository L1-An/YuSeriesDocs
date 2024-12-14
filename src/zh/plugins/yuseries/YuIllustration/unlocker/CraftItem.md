---
tag: ["vanilla"]
---

# Craft Item

該解鎖器將會在玩家**合成原版物品**時觸發.

::: tabs

@tab Id

`craft item`

示例:

```yaml
- type: "craft item"
  data:
    type: "IRON_SWORD"
  condition: |-
    check craft-item total-amount == 5
```

@tab Data

支援的自定義數據

| 名稱 | 類型 | 描述 |
| --- | --- | --- |
| `type` | `string` | 合成物品的類型, 在[這裡](https://bukkit.windit.net/javadoc/org/bukkit/Material.html)查看所有物品類型名稱 |

@tab Condition

支援的額外條件語句

## craft-item

id: `yui-craft-item` / `craft-item`

`craft-item total-amount` 返回當前合成對應物品的總數量

:::