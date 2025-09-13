---
tag: ["Adyeshach"]
---

# Interact Ady

當玩家與**Adyeshach 實體**交互時觸發

:::: tabs

@tab id

`interact ady`

@tab Condition

## position <Badge text="可選" type="tip"/>

- 類型: `string`
- 默認值: `none`
- 描述: 交互必須發生的位置限制

## id <Badge text="可選" type="tip"/>

- 類型: `string` or `list`
- 默認值: `none`
- 描述: 要交互的 Adyeshach 實體的 ID

## type <Badge text="可選" type="tip"/>

- 類型: `string` or `list`
- 默認值: `none`
- 描述: 要交互的實體類型

@tab Goal

## amount <Badge text="可選" type="tip"/>

- 類型: `number`
- 默認值: `1`
- 描述: 與實體交互的次數

@tab Variable

## id
返回交互的 Adyeshach 實體 ID

@tab Example

```yaml
unlock:
  - type: "interact ady"
    condition:
      id: "npc_merchant"
    goal:
      amount: 5
```

::::