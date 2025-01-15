---
title: MMOCore
order: 2
---

對 **MMOCore** 的屬性支援.

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
      mmocore:
        - attribute: attack_damage
          amount: 1
```