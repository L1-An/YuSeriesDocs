---
title: 獎勵配置
order: 3
---

**YuIllustration** 的獎勵模塊可以讓你方便地配置玩家**解鎖圖鑑**、**完成類別全解鎖**後的獎勵.

## 簡介

獎勵包括: 
- 執行 Kether 腳本
- 獲取屬性點獎勵 (查看[支援的插件](../compat/attribute/))

## 配置項目詳情

| 項目  | 值類型 | 說明 |
| :--  | :---- | :-- |
| `content` | `string` | 解鎖條目後執行的腳本 |
| `compat`  | `list<map>` | 支援插件的獎勵   |

示例配置:
```yaml
example-entry:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1" as console
      tell color inline "&eCongratulations! &aYou have unlocked &e{{ entry }} &a!"
    compat:
      mmocore:
        - attribute: strength
          amount: 1
      mythiclib:
        - attribute: damage
          amount: 1
      sortilege:
        - attribute: attack_damage
          amount: 1
```

### 支援獎勵配置的插件
目前支援獎勵的插件有:
- [Sortilege](../compat/attribute/Sortilege.md)
- [MMOCore](../compat/attribute/MMOCore.md)
- [MythicLib(MMOItems)](../compat/attribute/MythicLib.md)

在對應插件的介面中查看其詳細的獎勵配置與說明.