---
tag: ["Vanilla"]
---

# Player Move

當玩家移動到指定地點時觸發

::: tabs

@tab id

`player move`

@tab Data

## position <Badge text="必須" type="tip"/>

- 類型: `string`
- 描述: 座標

@tab Condition

無額外 kether 條件可用

@tab Variable

無額外變量可用

@tab Example

```yaml
- type: "player move"
  data:
    position: "world 0 0 0" # 行走到指定位置才会解锁
  # 没有相关 kether 动作
  condition: ""
  then: |-
    tell inline color "&a你到達了目標地點!"
```

:::