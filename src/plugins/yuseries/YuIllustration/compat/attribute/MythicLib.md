---
title: MythicLib
order: 3
---

Support for **MythicLib** attributes, also supports **MMOItems** attributes.

## Parameters

| Parameter | Type | Description |
| :-- | :-- | :-- |
| `attribute` | `string` | Attribute name |
| `amount` | `int` | Attribute points |

## Example
```yaml {6-8}
example-entry:
  # ...
  reward:
    # ...
    compat:
      mythiclib:
        - attribute: attack_damage
          amount: 1