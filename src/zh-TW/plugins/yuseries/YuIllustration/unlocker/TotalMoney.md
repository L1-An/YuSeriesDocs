---
tag: ["Vault"]
---

# Total Money

當玩家擁有指定數量金錢時觸發

::: tabs

@tab id

`total money`

@tab Data

## amount <Badge text="必須" type="tip"/>

- 類型: `number`
- 描述: 金錢數量

@tab Condition

無額外 kether 條件可用

@tab Variable

無額外變量可用

@tab Example

```yaml
- type: "total money"
  data:
    amount: 1000 # 擁有超過 1000 金錢時會觸發
  # 没有相关 kether 动作
  condition: ""
  then: |-
    tell inline color "&a你擁有超過 1000 金錢!!!"
```

:::