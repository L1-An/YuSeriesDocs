---
tag: ["Vanilla"]
---

# Advancement Done

當玩家完成指定進度時觸發

::: tabs

@tab id

`advancement done`

@tab Condition

## key

- 類型: `string`
- 描述: 進度 key, 可以通過 [API 指令](../start/command.md) 獲取

@tab Goal

無 goal 設定, 達成 condition 即爲完成

@tab Example

```yaml
- type: "advancement done"
  condition:
    key: "minecraft:story/iron_tools"
  # 没有相关 goal 配置, 完成 condition 即爲完成
  then: |-
    tell inline color "&a你完成了進度: &eiron_tools"
```

:::