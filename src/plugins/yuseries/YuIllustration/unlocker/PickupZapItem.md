---
tag: ["Zaphkiel"]
---

# Pickup Zap Item

This unlocker will trigger when a player **picks up a Zaphkiel item**.

::: tabs

@tab id

`pickup zap item`

@tab Data

## id <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The id of the Zaphkiel item.

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
- type: "pickup zap item"
  data:
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

:::