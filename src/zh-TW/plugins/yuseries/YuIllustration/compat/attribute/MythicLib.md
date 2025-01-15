---
title: MythicLib
order: 3
---

對 **MythicLib** 的屬性支援, 同時支援了 **MMOItems** 的屬性.

## 參數

| 參數 | 類型 | 說明 |
| :-- | :-- | :-- |
| `attribute` | `string` | 屬性名稱 |
| `amount` | `int` | 屬性點數 |

## 示例
```yaml {6-8}
example-entry:
  # ...
  reward:
    # ...
    compat:
      mythiclib:
        - attribute: attack_damage
          amount: 1
```