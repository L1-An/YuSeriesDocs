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

@tab Variable

## title
返回該進度的名稱

@tab Example

```yaml
- type: "advancement done"
  data:
    key: "minecraft:story/iron_tools"
  # 没有相关 kether 动作
  condition: ""
  then: |-
    tell inline color "&a你完成了進度: &e{{ &title }}"
```

:::