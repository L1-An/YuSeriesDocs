---
tag: ["Vanilla"]
---

# Place Block

當玩家放置指定方塊時觸發

::: tabs

@tab id

`place block`

@tab Data

## type <Badge text="必須" type="tip"/>

- 類型: `string`
- 描述: 方塊 Id

@tab Condition

## place-block

id: `yui-place-block` / `place-block`

語法:
- `place-block total-amount` 返回放置的方塊總數

@tab Variable

## type
返回破壞的方塊類型名稱

@tab Example

```yaml
- type: "place block"
  data:
    type: "stone"
  condition: |-
    check place-block total-amount == 10
  then: |-
    tell inline color "&a你放置了 {{ &type }} 方塊 * {{ &total-amount }} 個"
```

:::