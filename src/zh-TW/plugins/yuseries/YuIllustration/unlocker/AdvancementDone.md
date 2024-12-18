---
tag: ["Vanilla"]
---

# Advancement Done

當玩家完成指定進度時觸發

::: tabs

@tab id

`advancement done`

@tab Data

## key <Badge text="必須" type="tip" />

- 類型: `string`
- 描述: 進度 key, 可以通過 [API 指令](../start/command.md) 獲取

@tab Condition

無額外 kether 條件可用

@tab Example

```yaml
- type: "advancement done"
  data:
    key: "minecraft:story/iron_tools"
  # 没有相关 kether 动作
  condition: ""
```

:::