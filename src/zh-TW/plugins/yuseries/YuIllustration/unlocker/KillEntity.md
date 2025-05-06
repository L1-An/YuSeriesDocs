---
tag: ["Vanilla"]
---

# Kill Entity

當玩家**殺死原版生物**時觸發

::: tabs

@tab id

`kill entity`

@tab Condition

## weapon

- 類型: `string`
- 默認值: `none`
- 描述: 殺死生物時使用的物品(主手物品), 注意必須小寫

## type
- 類型: `string`
- 默認值: `none`
- 描述: 殺死的生物類型。查看所有生物類型名稱 [here](https://bukkit.windit.net/javadoc/org/bukkit/entity/EntityType.html), 注意必須小寫

@tab Goal

## amount <Badge text="可選" type="tip" />
- 類型: `number`
- 默認值: `1`
- 描述: 殺死的生物數量

@tab Example

```yaml
unlock:
  - type: "kill entity"
    condition:
      type: "zombie"
    goal:
      amount: 5
```

::: 