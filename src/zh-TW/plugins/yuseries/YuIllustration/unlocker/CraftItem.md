---
tag: ["Vanilla"]
---

# Craft Item

當玩家**製作原版物品**時觸發

::: tabs

@tab id

`craft item`

@tab Condition

## item

- 類型: `string`
- 默認值: `none`
- 描述: 製作的物品類型。查看所有物品類型名稱 [here](https://bukkit.windit.net/javadoc/org/bukkit/Material.html), 注意必須小寫

@tab Goal

## amount <Badge text="可選" type="tip" />
- 類型: `number`
- 默認值: `1`
- 描述: 製作的物品數量

@tab Example

```yaml
- type: "craft item"
  condition:
    item: "iron_sword"
  goal:
    amount: 5
```

:::