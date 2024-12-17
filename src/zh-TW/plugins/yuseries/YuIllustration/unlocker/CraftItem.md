---
tag: ["vanilla"]
---

# Craft Item

當玩家**製作原版物品**時觸發

::: tabs

@tab id

`craft item`

@tab Data

## type <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 製作的物品類型。查看所有物品類型名稱 [here](https://bukkit.windit.net/javadoc/org/bukkit/Material.html).

@tab Condition

## craft-item

id: `yui-craft-item` / `craft-item`

語法:
- `craft-item total-amount` 返回製作的物品總數.

@tab Example

```yaml
- type: "craft item"
  data:
    type: "IRON_SWORD"
  condition: |-
    check craft-item total-amount == 5
```

:::