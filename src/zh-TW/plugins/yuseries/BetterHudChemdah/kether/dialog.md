---
title: dialog 動作
order: 3
---

# dialog 動作

`dialog` 動作組用於控制對話界面的外觀，包括動態設置對話標題和頭像。

## 基本語法

```kether
dialog <子動作> <參數>
```

## 可用子動作

### dialog title - 設置對話標題

動態設置下一次對話顯示的標題。

#### 語法
```kether
dialog title <文字>    # 設置標題
dialog title clear     # 清除標題
```

#### 使用示例

**基本標題設置**：
```kether
# 設置對話者名稱作為標題
dialog title "村長艾德華"
dialog title "神秘商人"
dialog title "智者奧丁"
```

**清除標題設置**：
```kether
# 清除標題設置，使用預設標題
dialog title clear
```

**條件化標題**：
```kether
# 根據玩家數據設置不同的標題
if player-data("reputation") >= 100 then {
    dialog title "尊敬的勇者"
} else if player-data("reputation") >= 50 then {
    dialog title "知名冒險者"
} else {
    dialog title "陌生的旅人"
}
```

**動態標題**：
```kether
# 根據時間設置問候語
if time-of-day >= 6000 && time-of-day < 12000 then {
    dialog title "早安，旅行者"
} else if time-of-day >= 12000 && time-of-day < 18000 then {
    dialog title "午安，朋友"
} else {
    dialog title "晚安，勇士"
}
```

### dialog avatar - 設置對話頭像

設置對話界面中顯示的角色頭像。

#### 語法
```kether
dialog avatar <頭像>    # 設置頭像
dialog avatar clear     # 清除頭像
```

#### 使用示例

**基本頭像設置**：
```kether
# 設置 BetterHud 圖像格式的頭像
dialog avatar "<image:villager_happy>"
dialog avatar "<image:merchant_smile>"
dialog avatar "<image:guard_serious>"
```

**清除頭像設置**：
```kether
# 清除頭像設置，使用預設頭像
dialog avatar clear
```

**情緒化頭像**：
```kether
# 根據 NPC 情緒設置不同頭像
if player-data("npc_mood") == "happy" then {
    dialog avatar "<image:npc_happy>"
} else if player-data("npc_mood") == "angry" then {
    dialog avatar "<image:npc_angry>"
} else if player-data("npc_mood") == "sad" then {
    dialog avatar "<image:npc_sad>"
} else {
    dialog avatar "<image:npc_neutral>"
}
```

**任務狀態頭像**：
```kether
# 根據任務狀態調整頭像
if quest-completed("help_villager") then {
    dialog avatar "<image:villager_grateful>"
} else if quest-available("help_villager") then {
    dialog avatar "<image:villager_worried>"
} else {
    dialog avatar "<image:villager_normal>"
}
```

## 綜合使用示例

### 完整的對話設置
```kether
# 在對話開始時設置標題和頭像
dialog title "村長托馬斯"
dialog avatar "<image:elder_wise>"

# 對話內容...

# 對話結束時清理設置
dialog title clear
dialog avatar clear
```

### 動態對話更新
```kether
# 根據玩家選擇更新對話外觀
if var("player_choice") == "help" then {
    set player-data("npc_attitude") to "friendly"
    dialog title "友善的村長"
    dialog avatar "<image:elder_happy>"
    narration "村長對你的幫助表示感謝。" duration 40
} else if var("player_choice") == "refuse" then {
    set player-data("npc_attitude") to "disappointed"
    dialog title "失望的村長"
    dialog avatar "<image:elder_sad>"
    narration "村長看起來有些失望。" duration 40
} else {
    dialog title "村長托馬斯"
    dialog avatar "<image:elder_neutral>"
}

wait 40
goto-self  # 刷新對話以反映新的設置
```

### 對話序列
```kether
# 多階段對話中的外觀變化
dialog title "神秘法師"
dialog avatar "<image:wizard_mysterious>"
narration "一位身穿深色斗篷的法師出現在你面前..." duration 60

wait 60

# 揭示身份後更改外觀
dialog title "大法師梅林"
dialog avatar "<image:wizard_revealed>"
narration "法師摘下了兜帽，露出了慈祥的面容。" duration 50
```

## 頭像格式

BetterHud 支援多種頭像格式：

### 圖像引用
```kether
# 標準圖像引用格式
dialog avatar "<image:avatar_name>"

# 支援的圖像格式
dialog avatar "<image:player_head>"        # 玩家頭像
dialog avatar "<image:villager_face>"      # 村民頭像
dialog avatar "<image:custom_npc_01>"      # 自定義 NPC 頭像
```

### 動態頭像
```kether
# 使用變數作為頭像
set avatar_name to "wizard_" + player-data("wizard_rank")
dialog avatar "<image:" + var("avatar_name") + ">"

# 基於玩家名稱的頭像
dialog avatar "<image:player_" + player-name + ">"
```

## 配置要求

### BetterHud 設置

標題和頭像的顯示依賴於 BetterHud 的對話 Popup 配置：

```yaml
# BetterHud 配置示例
dialog_popup:
  layouts:
    default:
      # 標題顯示區域
      title:
        text: "{bhc_dialog_title}"
        font-size: 18
        color: "gold"
        
      # 頭像顯示區域  
      avatar:
        image: "{bhc_dialog_avatar}"
        width: 32
        height: 32
        
      # 對話內容區域
      content:
        text: "{bhc_dialog_content}"
        font-size: 14
        color: "white"
```

### 變數綁定

插件會自動設置以下變數供 BetterHud 使用：

- `bhc_dialog_title`: 對話標題內容
- `bhc_dialog_avatar`: 對話頭像引用
- `bhc_dialog_content`: 對話文字內容

## 最佳實踐

1. **一致性**: 為同一角色使用一致的標題和頭像風格
2. **清理**: 在對話結束時清除自定義設置，避免影響其他對話
3. **條件化**: 根據玩家狀態和關係動態調整外觀
4. **測試**: 確保所有引用的圖像資源都存在於 BetterHud 配置中

`dialog` 動作讓您能夠創建更加個性化和動態的對話界面，增強玩家的沉浸感。