---
tag: ["Vanilla"]
---

# Consume Item

當玩家**消耗物品**（食物、藥水等）時觸發

:::: tabs

@tab id

`consume item`

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
  - `zaphkiel:example_potion` 指向 zaphkiel 插件的 `example_potion` 物品.
  - `mmoitems:healing_potion` 指向 MMOItems 插件的 `healing_potion` 物品.
  - `mythicmobs:magic_food` 指向 MythicMobs 插件的 `magic_food` 物品.

## position <Badge text="可選" type="tip"/>

- 類型: `string`
- 默認值: `none`
- 描述: 消耗必須發生的位置限制

@tab Goal

## amount <Badge text="可選" type="tip"/>

- 類型: `number`
- 默認值: `1`
- 描述: 物品應該被消耗的次數

@tab Example

```yaml
unlock:
  - type: "consume item"
    condition:
      item: "golden_apple"
    goal:
      amount: 5
```

::::