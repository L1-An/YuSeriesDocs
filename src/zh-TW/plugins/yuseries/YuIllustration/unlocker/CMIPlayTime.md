---
tag: ["CMI"]
---

# CMI Play Time

當玩家遊戲時間達到指定時間時觸發

:::: tabs

@tab id

`cmi play time`

@tab Condition

無 Condition 條件可用

@tab Goal

## time <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 遊戲時間
- 特殊說明:
  - 支援的時間單位: 秒`s`, 分鐘`m`, 小時`h`, 天`d`, 周`w`, 月`M`, 年`y`
  - 支援多時間單位, 例如: `4d6h30m`

::: tip

請注意時間單位是 **大小寫敏感** 的

:::

@tab Example

```yaml
- type: "cmi play time"
  goal:
    time: 1000s # 在線時間超過 1000 秒才會解鎖, 支持 s秒, m分鐘, h小時, d天, w周, M月, y年
  # 沒有相關 kether 動作
```

::::