---
tag: ["Vanilla"]
---

# Pickup Item

This unlocker will trigger when a player **picks up an item**.

:::: tabs

@tab id

`pickup item`

@tab Data

::: important

You have to set **at least one** of the following data.

:::

## name <Badge text="Optional" type="tip" />

- Type: `string`
- Default: `none`
- Description: The name of the item.

## lore <Badge text="Optional" type="tip" />

- Type: `string`
- Default: `none`
- Description: The lore of the item.

## nbt <Badge text="Optional" type="tip" />

- Type: `string`
- Default: `none`
- Description: The NBT of the item.

@tab Condition

## yui-item

id: `yui-item` / `item`

Syntax:
- `item take` removes the picked-up item from the player's inventory.
- `item total-amount` returns the total amount of the picked-up item.
- `item pick-amount` returns the amount of items picked up this time.

@tab Example

```yaml
- type: "pickup item"
  data:
    name: "diamond" # Name of the item
    lore: "diamond" # Lore of the item (as long as any lore contains the corresponding content)
    nbt: "diamond" # NBT of the item, by default, it contains the NBT @yuillustration-item-pickup
  condition: |-
    check yui-item total-amount == 5
```

::::