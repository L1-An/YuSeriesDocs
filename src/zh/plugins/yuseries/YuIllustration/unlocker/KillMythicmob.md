---
tag: ["MythicMobs"]
---

# Kill MythicMob

該解鎖器將會在玩家**擊殺 MythicMob 生物**時觸發.

::: tabs

@tab Id

`kill mythic mob`

示例:

```yaml
- type: "kill mythic mob"
  data:
    id: "SkeletalKnight"
  condition: |-
    check mythic-mob total-amount == 5
```

@tab Data

支援的自定義數據

| 名稱 | 類型 | 描述 |
| --- | --- | --- |
| `id` | `string` | MythicMob 的 id |

@tab Condition

支援的額外條件語句

## mythic-mob

id: `yui-mythic-mob` / `mythic-mob`  

`mythic-mob total-amount` 返回當前總擊殺的數量  
`mythic-mob id` 返回當前擊殺的生物 id  
`mythic-mob name` 返回當前擊殺的生物名稱


:::