---
tag: ["Vanilla"]
---

# Place Block

當玩家放置指定方塊時觸發

::: tabs

@tab id

`place block`

@tab Condition

## material

- 類型: `string`
- 描述: 方塊 Id, 必須小寫

@tab Goal

## amount
- 類型: `number`
- 默認值: `1`
- 描述: 放置的方塊數量

@tab Example

```yaml
- type: "place block"
  condition:
    material: "stone"
  goal:
    amount: 10
```

:::