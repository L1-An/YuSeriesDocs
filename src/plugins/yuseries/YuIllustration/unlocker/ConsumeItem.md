---
tag: ["Vanilla"]
---

# Consume Item

This unlocker will trigger when a player **consumes an item** (food, potions, etc).

:::: tabs

@tab id

`consume item`

@tab Condition

## item

- Type: `string`
- Default: `none`
- Description: Item description, standard format:  
  `namespace:id`, if namespace is not specified, defaults to `minecraft`, pointing to vanilla items, id must be lowercase.  
  Other available namespaces:
  - `zaphkiel` points to [zaphkiel](../../../partner/Zaphkiel/README.md) plugin items.
  - `mmoitems` points to MMOItems plugin items.
  - `mythicmobs` points to MythicMobs plugin items.  
  Examples:
  - `zaphkiel:example_potion` points to zaphkiel plugin's `example_potion` item.
  - `mmoitems:healing_potion` points to MMOItems plugin's `healing_potion` item.
  - `mythicmobs:magic_food` points to MythicMobs plugin's `magic_food` item.

## position <Badge text="Optional" type="tip"/>

- Type: `string`
- Default: `none`
- Description: Position restriction where the consumption must occur.

@tab Goal

## amount <Badge text="Optional" type="tip"/>

- Type: `number`
- Default: `1`
- Description: Number of times the item should be consumed.

@tab Example

```yaml
unlock:
  - type: "consume item"
    condition:
      item: "golden_apple"
    goal:
      amount: 5
```

::::