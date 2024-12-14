---
title: 認識類別
dir:
  order: 2
---

YuIllustration 插件採用分類管理系統，讓你能夠更好地組織和展示不同類型的圖鑑內容。

## 簡介

類別是圖鑑的**最基礎單位**, 任何條目都需要依託於類別存在.  
在 `./category.yml` 文件中, 可以進行類別的配置.  
每個類別都有一個唯一的 id, 不可重複.  

### 配置項目

::: tabs

@tab 基礎設置

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `show` | `boolean` | 是否在 ui 中顯示 |
| `order` | `int` | 在 ui 中的顯示位置, 越小越靠前 |
| `name` | `string` | 類別名稱 |

示例:
```yaml
example-category:
  show: true
  order: 0
  name: "Example Category"
  # ...
```

@tab 圖標設置

以下內容均屬於 `icon` 內的項目

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `material` | `string` | 使用的 Minecraft 物品材質 |
| `name` | `string` | 圖標顯示的名稱 |
| `custom-model-data` | `int` | 自定義模型數據 |
| `shiny` | `boolean` | 是否添加附魔光澤效果 |
| `lore` | `list<string>` | 圖標的說明文字 |

示例:
```yaml
example-category:
  # ...
  icon:
    material: WOODEN_SWORD
    name: "&6Default Category"
    custom-model-data: 10001
    shiny: true
    lore:
      - "&7This is a default category"
  # ...
```

@tab 獎勵設置

以下內容均屬於 `reward` 內的項目

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `content` | `string` | 完全解鎖該類別後執行的腳本 |
| `compat` | `list<map>` | 兼容插件的獎勵 |

兼容插件獎勵配置:  
當前僅支持 **MMOCore** 和 **MythicLib** 插件.  
若您有需要的插件, 可以[聯繫我](https://discord.com/invite/SzPBHGttaR)進行添加.

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `attribute` | `string` | 兼容插件的屬性 |
| `amount` | `int` | 屬性值 |

示例:  
```yaml
example-category:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1"
      tell color inline "&eCongratulations! &aYou have fully unlocked the category &e{{ &category }} &a!"
    compat:
      mmocore:
        - attribute: "strength"
          amount: 5
        - attribute: "dexterity"
          amount: 5
      mythiclib:
        - attribute: "damage"
          amount: 5
        - attribute: "defense"
          amount: 5
```
:::
