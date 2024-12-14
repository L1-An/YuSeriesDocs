---
tag: ["MMOItems"]
---

# Pickup MMOItem

該解鎖器將會在玩家**撿起 MMOItem 物品**時觸發.

::: tabs

@tab Id

`pickup mmoitem`

示例:

```yaml
- type: "pickup mmoitem"
  data:
    type: "test"
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

@tab Data

支援的自定義數據

| 名稱 | 類型 | 描述 |
| --- | --- | --- |
| `type` | `string` | MMOItem 的類型 |
| `id` | `string` | MMOItem 的 id |

@tab Condition

支援的額外條件語句

## yui-item

id: `yui-item` / `item`  

`item take` 将 本次 撿起的物品从玩家背包中移除  
`item total-amount` 返回當前總撿起的數量  
`item pick-amount` 返回本次撿起的數量

:::