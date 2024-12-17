---
tag: ["vanilla"]
---

# Pickup Item

該解鎖器將會在玩家**撿起物品**時觸發.

::: tabs

@tab Id

`pickup item`

示例:

```yaml
- type: "pickup item"
  data:
    name: "diamond" # 物品的名称
    lore: "diamond" # 物品的 lore (只要所有 lore 里面有对应内容即可)
    nbt: "diamond" # 物品带有的 nbt, 默认情况下, 是带有 @yuillustration-item-pickup 的 nbt
  condition: |-
    check yui-item total-amount == 5
```

@tab Data

支援的自定義數據

| 名稱 | 類型 | 描述 |
| --- | --- | --- |
| `name` | `string` | 物品的名称 |
| `lore` | `string` | 物品的 lore (只要所有 lore 里面有对应内容即可) |
| `nbt` | `string` | 物品带有的 nbt, 默认情况下, 是带有 @yuillustration-item-pickup 的 nbt |

@tab Condition

支援的額外條件語句

## yui-item

id: `yui-item` / `item`  

`item take` 将 本次 撿起的物品从玩家背包中移除  
`item total-amount` 返回當前總撿起的數量  
`item pick-amount` 返回本次撿起的數量

:::