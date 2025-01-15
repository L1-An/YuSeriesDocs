---
title: 認識條目
order: 2
---

YuIllustration 採用條目系統來管理具體的收集項目, 讓玩家能夠追蹤和完成各種收集目標.

## 簡介

條目是圖鑑中的**最小單位**, **必須依附於某個類別之下**.  
在 `./entry/*.yml` 文件中, 可以進行條目的配置.  
每個類別中的條目都有一個唯一的 id, 不可重複.  

::: tip
並非所有對應類別的條目都需要在一個文件中配置, 你只需要正確配置條目對應的類別即可.  
但我們的建議是將**每個類別的條目**配置在**同一個類別**中, 這樣可以方便管理.
:::

### 配置項目

::: tabs

@tab 基礎設置

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- |
| `category` | `string` | 所屬類別的id |
| `show` | `boolean` | 是否在 ui 中顯示 |
| `order` | `int` | 在 ui 中的顯示位置, 越小越靠前 |
| `name` | `string` | 條目名稱 |

示例:
```yaml
example-entry:
  category: "default"
  show: true
  order: 0
  name: "Example Entry"
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
example-entry:
  # ...
  icon:
    material: DIAMOND
    name: "&bDiamond Entry"
    custom-model-data: 10001
    shiny: true
    lore:
      - "&7This is an example entry"
  # ...
```

@tab 解鎖器

以下內容均屬於 `unlock` 內的項目

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `type` | `string` | 解鎖器類型(點擊[此處](../unlocker/README.md)查看所有解鎖器) |
| `data` | `Data` | 解鎖器相關數據, 每個類型不同 |
| `condition` | `string` | 解鎖器條件腳本, 支持的語句根據類型不同 |
| `then` | `string` | 解鎖器完成後執行的腳本 |

示例:
```yaml
example-entry:
  # ...
  unlock:
    - type: "pickup item"
      data:
        name: "example"
      condition: |-
        check yui-item total-amount == 5
      then: |-
        yui-item take
  # ...
```

@tab 獎勵設置

以下內容均屬於 `reward` 內的項目

| 項目 | 值類型 | 說明 |
| :--- | :--- | :--- 
| `content` | `string` | 解鎖條目後執行的腳本 |
| `compat` | `list<map>` | 兼容插件的獎勵 |

兼容插件獎勵配置:  
當前僅支持 **MMOCore** 和 **MythicLib** 插件.  
若您有需要的插件, 可以[聯繫我](https://discord.com/invite/SzPBHGttaR)進行添加.

示例:
```yaml
example-entry:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1"
      tell color inline "&eCongratulations! &aYou have unlocked &e{{ entry }} &a!"
    compat:
      mmocore:
        - attribute: "strength"
          amount: 1
      mythiclib:
        - attribute: "damage"
          amount: 1
```

:::

:::tip
條目的解鎖條件和獎勵可以根據需要自由組合，創造豐富的收集體驗。
:::