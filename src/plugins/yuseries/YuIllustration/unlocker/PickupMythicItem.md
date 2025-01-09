---
tag: ["MythicItems"]
---

# Pickup MythicItem

This unlocker will trigger when a player **picks up a mythic item**.

::: tabs

@tab id

`pickup mythic item`

@tab Data

## id <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The id of the mythic item.

@tab Condition

## yui-item

id: `yui-item` / `item`

Syntax:
- `item take` removes the picked-up item from the player's inventory.
- `item total-amount` returns the total amount of the picked-up item.
- `item pick-amount` returns the amount of items picked up this time.

@tab Variable

## type
Returns the name of the picked-up item type

## display-name
Returns the display name of the picked-up item

@tab Example

```yaml
- type: "pickup mythic item"
  data:
    id: "default_item"
  # When the player picks up 5 times, the unlocker will trigger
  condition: |-
    check yui-item total-amount == 5
```

:::