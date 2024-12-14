---
tag: ["vanilla"]
---

# Kill Entity

This unlocker will trigger when a player **kills a vanilla entity**.

::: tabs

@tab Id

`kill entity`

Example:

```yaml
- type: "kill entity"
  data:
    type: "ZOMBIE"
  condition: |-
    check kill-entity total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `type` | `string` | Type of entity killed, see all entity type names [here](https://bukkit.windit.net/javadoc/org/bukkit/entity/EntityType.html) |

@tab Condition

Supported additional condition statements

## kill-entity

id: `yui-kill-entity` / `kill-entity`  

`kill-entity total-amount` returns the total number of kills  
`kill-entity name` returns the name of the entity killed  

::: 