---
title: Sortilege
order: 1
---

**Sortilege** 是 **YuSeries** 的高性能屬性插件, 關於該插件的詳情請查看[這裡](../../../Sortilege/README.md).

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
      sortilege:
        - attribute: attack_damage
          amount: 1
```