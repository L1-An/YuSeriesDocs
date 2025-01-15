---
title: MMOCore
order: 2
---

Support for **MMOCore** attributes.

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
      mmocore:
        - attribute: attack_damage
          amount: 1