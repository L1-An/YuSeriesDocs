---
tag: ["Vanilla"]
---

# Pickup Item

當玩家**撿起物品**時觸發

:::: tabs

@tab id

`pickup item`

@tab Data

::: important

你需要設置**至少一個**以下數據.

:::

## name <Badge text="可選" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 物品的名稱。

## lore <Badge text="可選" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 物品的描述。

## nbt <Badge text="可選" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 物品的 NBT。

@tab Condition

## yui-item

id: `yui-item` / `item`

語法:
- `item take` 從玩家背包中移除撿起的物品。
- `item total-amount` 返回撿起的物品總數。
- `item pick-amount` 返回本次撿起的物品數量。

@tab Variable

## type
返回撿起的物品類型名稱

## display-name
返回撿起的物品顯示名稱

@tab Example

```yaml
- type: "pickup item"
  data:
    name: "diamond" # 物品名稱
    lore: "diamond" # 物品描述（只要描述中包含對應的內容）
    nbt: "diamond" # 物品 NBT，默認包含 @yuillustration-item-pickup
  condition: |-
    check yui-item total-amount == 5
```

::::