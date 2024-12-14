---
tag: ["Zaphkiel"]
---

# Pickup Zap Item

This unlocker will trigger when a player **picks up a Zaphkiel item**.

::: tabs

@tab Id

`pickup zap item`

Example:

```yaml
- type: "pickup zap item"
  data:
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `id` | `string` | ID of the Zaphkiel item |

@tab Condition

Supported additional condition statements

## yui-item

id: `yui-item` / `item`  

`item take` removes the picked-up item from the player's inventory  
`item total-amount` returns the total number of items picked up  
`item pick-amount` returns the number of items picked up this time  

::: 