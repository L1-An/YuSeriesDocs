---
tag: ["vanilla"]
---

# Pickup Item

This unlocker will trigger when a player **picks up an item**.

::: tabs

@tab Id

`pickup item`

Example:

```yaml
- type: "pickup item"
  data:
    name: "diamond" # Name of the item
    lore: "diamond" # Lore of the item (as long as any lore contains the corresponding content)
    nbt: "diamond" # NBT of the item, by default, it contains the NBT @yuillustration-item-pickup
  condition: |-
    check yui-item total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `name` | `string` | Name of the item |
| `lore` | `string` | Lore of the item (as long as any lore contains the corresponding content) |
| `nbt` | `string` | NBT of the item, by default, it contains the NBT @yuillustration-item-pickup |

@tab Condition

Supported additional condition statements

## yui-item

id: `yui-item` / `item`  

`item take` removes the picked-up item from the player's inventory  
`item total-amount` returns the total number of items picked up  
`item pick-amount` returns the number of items picked up this time  

::: 