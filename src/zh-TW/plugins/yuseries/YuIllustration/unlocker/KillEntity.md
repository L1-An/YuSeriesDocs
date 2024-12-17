---
tag: ["vanilla"]
---

# Kill Entity

當玩家**殺死原版生物**時觸發

::: tabs

@tab id

`kill entity`

@tab Data

## type <Badge text="Required" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 殺死的生物類型。查看所有生物類型名稱 [here](https://bukkit.windit.net/javadoc/org/bukkit/entity/EntityType.html).

@tab Condition

## kill-entity

id: `yui-kill-entity` / `kill-entity`

語法:
- `kill-entity total-amount` 返回殺死的生物總數.
- `kill-entity name` 返回殺死的生物名稱.

@tab Example

```yaml
- type: "kill entity"
  data:
    type: "ZOMBIE"
  condition: |-
    check kill-entity total-amount == 5
```

::: 