---
tag: ["Vanilla"]
---

# Permission Node

當玩家擁有某權限節點時觸發

::: tabs

@tab id

`permission node`

@tab Condition

無 Condition 條件可用

@tab Goal

## permission <Badge text="必須" type="tip" />

- 類型: `string`
- 默認值: `none`
- 描述: 權限節點名稱

@tab Example

```yaml
unlock:
  - type: "permission node"
    goal:
      permission: "example.permission" # 當玩家擁有該權限時解鎖
```

:::