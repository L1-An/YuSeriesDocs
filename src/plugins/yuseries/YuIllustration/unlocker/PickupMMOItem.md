---
tag: ["MMOItems"]
---

# Pickup MMOItem

This unlocker will trigger when a player **picks up an MMOItem**.

::: tabs

@tab Id

`pickup mmoitem`

Example:

```yaml
- type: "pickup mmoitem"
  data:
    type: "test"
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `type` | `string` | Type of the MMOItem |
| `id` | `string` | ID of the MMOItem |

@tab Condition

Supported additional condition statements

## yui-item

id: `yui-item` / `item`  

`item take` removes the picked-up item from the player's inventory  
`item total-amount` returns the total number of items picked up  
`item pick-amount` returns the number of items picked up this time  

::: 