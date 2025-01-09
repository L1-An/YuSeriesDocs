---
tag: ["MMOItems"]
---

# Pickup MMOItem

This unlocker will trigger when a player **picks up an MMOItem**.

::: tabs

@tab id

`pickup mmoitem`

@tab Data

## type <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The type of the MMOItem.

## id <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The id of the MMOItem.

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
- type: "pickup mmoitem"
  data:
    type: "test"
    id: "test"
  condition: |-
    check yui-item total-amount == 5
```

:::