---
tag: ["MythicMobs"]
---

# Kill MythicMob

當玩家**殺死 MythicMob 生物**時觸發

::: tabs

@tab id

`kill mythic mob`

@tab Condition

## id

- 類型: `string`
- 默認值: `none`
- 描述: MythicMob 的 id.

## name

- 類型: `string`
- 默認值: `none`
- 描述: MythicMob 的名稱.

## level

- 類型: `number`
- 默認值: `none`
- 描述: MythicMob 的等級.

@tab Goal

## amount <Badge text="可選" type="tip" />
- 類型: `number`
- 默認值: `1`
- 描述: 殺死的 MythicMob 生物數量

@tab Example

```yaml
unlock:
  - type: "kill mythic mob"
    condition:
      id: "SkeletalKnight"
    goal: 
      amount: 5
```

::: 