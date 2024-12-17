---
tag: ["MythicMobs"]
---

# Kill MythicMob

當玩家**殺死 MythicMob 生物**時觸發

::: tabs

@tab id

`kill mythic mob`

@tab Data

## id <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: MythicMob 的 id.

@tab Condition

## mythic-mob

id: `yui-mythic-mob` / `mythic-mob`

語法:
- `mythic-mob total-amount` 返回殺死的生物總數.
- `mythic-mob id` 返回殺死的生物 id.
- `mythic-mob name` 返回殺死的生物名稱.

@tab Example

```yaml
- type: "kill mythic mob"
  data:
    id: "SkeletalKnight"
  condition: |-
    check mythic-mob total-amount == 5
```

::: 