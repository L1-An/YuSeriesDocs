---
tag: ["Vanilla"]
---

# Permission Node

當玩家擁有某權限節點時觸發

::: tabs

@tab id

`permission node`

@tab Data

## node <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 權限節點

@tab Condition

無額外 kether 條件可用

@tab Variable

無額外變量可用

@tab Example

```yaml
- type: "permission node"
  data:
    node: "example.permission" # 當玩家擁有該權限時解鎖
  # 沒有相關 kether 動作
  condition: ""
```

:::