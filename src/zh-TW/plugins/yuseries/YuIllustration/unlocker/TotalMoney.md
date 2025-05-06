---
tag: ["Vault"]
---

# Total Money

當玩家擁有指定數量金錢時觸發

::: tabs

@tab id

`total money`

@tab Condition

無 Condition 條件可用

@tab Goal

## amount

- 類型: `number`
- 描述: 金錢數量

@tab Example

```yaml
unlock:
  - type: "total money"
    goal:
      amount: 1000 # 擁有超過 1000 金錢時會觸發
    then: |-
      tell inline color "&a你擁有超過 1000 金錢!!!"
```

:::