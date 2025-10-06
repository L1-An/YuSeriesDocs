---
tag: ["Vanilla"]
---

# Placeholder API

當玩家的 `papi` 變數符合指定條件時觸發

::: tabs

@tab id

`placeholder api`

@tab Condition

無 Condition 條件可用

@tab Goal

## key <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 變數名稱

## value <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 要求變數值

@tab Example

```yaml
unlock:
  - type: "placeholder api"
    goal:
      key: "%player_level%" # PAPI 變數名稱, 這裡指定為玩家等級, 必須包含 %
      value: "5" # 當玩家等級達到 5 時解鎖
```

:::