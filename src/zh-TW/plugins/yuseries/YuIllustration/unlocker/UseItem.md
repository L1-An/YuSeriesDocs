---
tag: ["Vanilla"]
---

# Use Item

當玩家**使用物品**時觸發（與物品交互）

:::: tabs

@tab id

`use item`

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

@tab Goal

## consume <Badge text="可選" type="tip"/>

- 類型: `boolean`
- 默認值: `false`
- 描述: 是否在使用後消耗物品

@tab Example

```yaml
# 使用物品後解鎖（與物品交互）
- type: "use item"
  condition:
    # 物品類型，與 pickupitem 一樣支持模糊匹配與其他插件配合匹配
    item: "diamond_sword"
  goal:
    # 是否在使用後消耗
    consume: true
```

::::