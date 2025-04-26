---
tag: ["Vanilla"]
---

# Break Block

當玩家破壞指定方塊時觸發

::: tabs

@tab id

`break block`

@tab Condition

## material

- 類型: `string`
- 描述: 方塊 Id, 必須小寫

@tab Goal

## amount <Badge text="可選" type="tip" />

- 類型: `number`
- 默認值: `1`
- 描述: 破壞的方塊數量

@tab Example

```yaml
- type: "break block"
  data:
    material: "stone"
  condition:
    amount: 10
  then: |-
    tell inline color "&a你摧毀了 10 個 stone"
```

:::