---
tag: ["Vanilla"]
---

# Use Item

This unlocker will trigger when a player **uses an item** (interacts with an item).

:::: tabs

@tab id

`use item`

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

## item

id: `item`

Specifies the type of item to interact with. Supports fuzzy matching and compatibility with other plugin items.

@tab Goal

## consume <Badge text="Optional" type="tip" />

- Type: `boolean`
- Default: `false`  
- Description: Whether to consume the item after use.

@tab Variable

## type
Returns the name of the used item type

## display-name
Returns the display name of the used item

@tab Example

```yaml
# Use Item Unlock (Item Interaction)
- type: "use item"
  condition:
    # Item type, supports fuzzy matching and compatibility with other plugins like pickup item
    item: "diamond_sword"
  goal:
    # Whether to consume after use
    consume: true
```

::::