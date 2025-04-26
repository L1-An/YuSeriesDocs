---
tag: ["Vanilla"]
---

# Player Move

當玩家移動到指定地點時觸發

::: tabs

@tab id

`player move`

@tab Condition

## position
- 類型: `string`
- 描述: 座標

@tab Goal

無 goal 設定, 達成 condition 即爲完成

@tab Example

```yaml
- type: "player move"
  condition:
    position: "world 0 0 0 ~ 10" # 行走到指定位置附近 10 個內才会解锁
  then: |-
    tell inline color "&a你到達了目標地點!"
```

:::