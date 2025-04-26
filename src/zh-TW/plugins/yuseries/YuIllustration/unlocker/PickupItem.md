---
tag: ["Vanilla"]
---

# Pickup Item

當玩家**撿起物品**時觸發

:::: tabs

@tab id

`pickup item`

@tab Condition

## item

- 類型: `string`
- 默認值: `none`
- 描述: 物品描述, 標準寫法如下:  
  `namespace:id`, 如果不指定命名空間則默認爲 `minecraft`, 指向原版物品, id 必須小寫.  
  其他可選的 namespace:
  - `zaphkiel` 指向 [zaphkiel](../../../partner/Zaphkiel/README.md) 插件的物品.
  - `mmoitems` 指向 MMOItems 插件的物品.
  - `mythicmobs` 指向 MythicMobs 插件的物品.  
  例如:
  - `zaphkiel:example_sword` 指向 zaphkiel 插件的 `example_sword` 物品.
  - `mmoitems:diamond_sword` 指向 MMOItems 插件的 `diamond_sword` 物品.
  - `mythicmobs:skeleton_sword` 指向 MythicMobs 插件的 `skeleton_sword` 物品.

## amount
- 類型: `number`
- 默認值: `1`
- 描述: 撿起的物品數量

@tab Goal

## amount <Badge text="可選" type="tip"/>
- 類型: `number`
- 默認值: `1`
- 描述: 撿起物品的次數

@tab Example

```yaml
- type: "pickup item"
  condition:
    item: "diamond_sword"
  goal:
    amount: 5
```

::::