---
tag: ["MMOItems"]
---

# Pickup MMOItem

當玩家**撿起 MMOItem**時觸發

::: tabs

@tab id

`pickup mmoitem`

@tab Data

## type <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: MMOItem 的類型.

## id <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: MMOItem 的 id.

@tab Condition

## yui-item

id: `yui-item` / `item`

語法:
- `item take` 從玩家的背包中移除撿起的物品.
- `item total-amount` 返回撿起的物品總數.
- `item pick-amount` 返回撿起的物品數量.

@tab Variable

## type
返回撿起的物品類型名稱

## display-name
返回撿起的物品顯示名稱

@tab Example

```yaml
- type: "pickup mmoitem"
  data:
    type: "test"
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

:::