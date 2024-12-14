---
tag: ["MythicMobs"]
---

# Kill MythicMob

This unlocker will trigger when a player **kills a MythicMob entity**.

::: tabs

@tab Id

`kill mythic mob`

Example:

```yaml
- type: "kill mythic mob"
  data:
    id: "SkeletalKnight"
  condition: |-
    check mythic-mob total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the MythicMob |

@tab Condition

Supported additional condition statements

## mythic-mob

id: `yui-mythic-mob` / `mythic-mob`  

`mythic-mob total-amount` returns the total number of kills  
`mythic-mob id` returns the id of the entity killed  
`mythic-mob name` returns the name of the entity killed  

::: 