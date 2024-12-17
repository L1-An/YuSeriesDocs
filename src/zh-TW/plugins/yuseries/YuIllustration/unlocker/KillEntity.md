---
tag: ["vanilla"]
---

# Kill Entity

該解鎖器將會在玩家**擊殺原版生物**時觸發.

::: tabs

@tab Id

`kill entity`

示例:

```yaml
- type: "kill entity"
  data:
    type: "ZOMBIE"
  condition: |-
    check kill-entity total-amount == 5
```

@tab Data

支援的自定義數據

| 名稱 | 類型 | 描述 |
| --- | --- | --- |
| `type` | `string` | 擊殺生物的類型, 在[這裡](https://bukkit.windit.net/javadoc/org/bukkit/entity/EntityType.html)查看所有生物類型名稱 |

@tab Condition

支援的額外條件語句

## kill-entity

id: `yui-kill-entity` / `kill-entity`  

`kill-entity total-amount` 返回當前總擊殺的數量  
`kill-entity name` 返回當前擊殺的生物名稱  

:::