---
title: narration 動作
order: 2
---

# narration 動作

`narration` 動作用於在玩家屏幕上顯示旁白文字，提供沉浸式的敘述體驗。

## 基本語法

```kether
narration <訊息> [animation <布林值>] [duration <持續時間>] [animation-speed <動畫速度>]
```

## 參數說明

- **訊息**: 要顯示的旁白文字內容（必需）
- **animation**: 是否啟用打字機動畫效果（可選，預設 `true`）
- **duration**: 旁白顯示的持續時間，單位為刻（可選，預設 `40`）
- **animation-speed**: 動畫播放的速度倍率（可選，預設 `1`）

## 使用示例

### 基本旁白
```kether
# 顯示簡單旁白，使用預設設置
narration "夜幕降臨，村莊陷入了寧靜..."
```

### 禁用動畫
```kether
# 禁用打字機動畫，立即顯示全部文字
narration "警告：前方有危險！" animation false
```

### 自定義持續時間
```kether
# 設置較長的顯示時間
narration "這是一段需要仔細閱讀的重要敘述。" duration 80
```

### 調整動畫速度
```kether
# 快速動畫效果
narration "快速閃過的想法..." animation-speed 3

# 慢速動畫效果
narration "緩慢浮現的記憶..." animation-speed 0.5
```

### 組合參數
```kether
# 同時設置多個參數
narration "重要的對話開始了..." animation true duration 60 animation-speed 2
```

## 進階使用

### 條件化旁白
```kether
# 根據玩家數據顯示不同的旁白
if player-data("first_visit") == true then {
    narration "這裡似乎很熟悉..." duration 50
} else {
    narration "你第一次來到這個神秘的地方。" duration 50
}
```

### 連續旁白序列
```kether
# 營造氛圍的連續敘述
narration "在這座古老的城堡深處..." duration 60 animation-speed 1
wait 65

narration "隱藏著無數的秘密..." duration 60 animation-speed 1
wait 65

narration "你能感受到空氣中瀰漫著神秘的魔法氣息。" duration 80 animation-speed 1.5
```

### 與其他動作結合
```kether
# 與攝影機動作結合使用
camera meta interpolation 40
camera set location player world 100 65 200 0 0
narration "攝影機正在移動到新的位置..." duration 40

wait 40
narration "現在你可以看到全景了。" duration 50
```

## 顯示配置

旁白的實際顯示效果取決於 BetterHud 的 Popup 配置：

### 旁白 Popup 設置
```yaml
# BetterHud 配置中的旁白 Popup
dialog_narration_popup:
  conditions: ["script:player_data('bhc_narration_show') == 'true'"]
  layouts:
    default:
      type: text
      x: center
      y: 30
      width: 400
      text-color: "white"
      background-color: "rgba(0,0,0,0.6)"
      font-size: 16
      text-align: center
      padding: 15
```

## 性能建議

- 避免過於頻繁的旁白顯示
- 合理設置持續時間，避免過短或過長
- 在多人伺服器上注意旁白的網絡開銷
- 使用適當的動畫速度，過快可能影響閱讀體驗

## 故障排除

### 旁白不顯示
1. 檢查 BetterHud 的 `dialog_narration_popup` 配置是否正確
2. 確認條件表達式 `bhc_narration_show` 是否被正確設置
3. 驗證 Popup 的位置和大小設定

### 動畫效果異常
1. 檢查 `animation-speed` 參數是否在合理範圍內
2. 確認 BetterHud 版本是否支持文字動畫
3. 驗證客戶端性能是否足夠

### 文字顯示不完整
1. 檢查 `duration` 參數是否足夠長
2. 確認 Popup 的寬度設定是否適合文字長度
3. 考慮使用換行或分段顯示長文字

`narration` 動作是創建沉浸式對話體驗的重要工具，合理使用可以大大增強玩家的代入感。