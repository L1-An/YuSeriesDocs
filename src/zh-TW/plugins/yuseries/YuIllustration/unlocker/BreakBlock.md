---
tag: ["Vanilla"]
---

# Break Block

當玩家破壞指定方塊時觸發

::: tabs

@tab id

`break block`

@tab Data

## type <Badge text="必須" type="tip"/>

- 類型: `string`
- 描述: 方塊 Id

@tab Condition

## break-block

id: `yui-break-block` / `break-block`

語法:
- `break-block total-amount` 返回破壞的方塊總數

@tab Variable

## type
返回破壞的方塊類型名稱

@tab Example

```yaml
- type: "break block"
  data:
    type: "stone"
  condition: |-
    check break-block total-amount == 10
  then: |-
    tell inline color "&a你摧毀了 {{ &type }} 方塊 * {{ &total-amount }} 個"
```

:::