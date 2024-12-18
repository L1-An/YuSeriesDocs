---
tag: ["Vanilla"]
---

# Craft Item

This unlocker will trigger when a player **crafts a vanilla item**.

::: tabs

@tab id

`craft item`

@tab Data

## type <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The type of the item crafted. See all item type names [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html).

@tab Condition

## craft-item

id: `yui-craft-item` / `craft-item`

Syntax:
- `craft-item total-amount` returns the total number of the crafted item.

@tab Example

```yaml
- type: "craft item"
  data:
    type: "IRON_SWORD"
  condition: |-
    check craft-item total-amount == 5
```

:::