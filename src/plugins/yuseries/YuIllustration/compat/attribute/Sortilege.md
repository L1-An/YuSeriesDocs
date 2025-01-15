---
title: Sortilege
order: 1
---

**Sortilege** is a high-performance attribute plugin by **YuSeries**. For more details about this plugin, please check [here](../../../Sortilege/README.md).

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
      sortilege:
        - attribute: attack_damage
          amount: 1