---
title: 主配置
order: 1  
---

# 主配置

主配置文件 `config.yml` 包含了 BetterHudChemdah 的所有核心設置。

## 配置文件位置

```
/plugins/BetterHudChemdah/config.yml
```

## 完整配置示例

```yaml
# 是否開啟沉浸對話模式
immersive-mode: true

# BetterHud 配置
betterhud:
  dialog-group-name: "dialog"
  popups:
    dialog: "dialog_popup"              # 對話對應的 popup id
    narration: "dialog_narration_popup" # 旁白對應的 popup id
    options: "dialog_options_popup"     # 選項對應的 popup id
    immersive_background: "dialog_immersive_background_popup" # 沉浸對話背景對應的 popup id
  dialog-line-break: false  # 是否換行對話內容
  dialog-default-avatar: "<image:unknown>" # 默認對話框頭像, 對應 BetterHud 的 image name

# Theme 配置
theme-betterhud:
  # 是否使用滾輪切換選項
  use-scroll: true
  
  select:
    # 回復內容的樣式
    reply:
      select: "&f{player_side}"
      other: "&7{player_side}"
    # 切換選項時的音效
    sound:
      name: ENTITY_EXPERIENCE_ORB_PICKUP
      p: 2
      v: 0
      
  # 允許的回復交互方式
  reply-interaction:
    - "SWAP"
    - "DROP"
    - "RIGHT_CLICK"  
    - "LEFT_CLICK"
    
  # 開始對話時的音效
  sound:
    name: ENTITY_ITEM_PICKUP
    p: 1
    v: 0
    
  # 動畫相關配置
  animation:
    enable: true
    # 對話動畫速度
    speed: 1
    # 回復動畫速度
    reply-speed: 2
```

## 配置項詳解

### 沉浸模式設置

```yaml
immersive-mode: true
```

**類型**: `boolean`  
**默認值**: `true`  
**說明**: 是否啟用沉浸式對話模式

- `true`: 啟用虛擬攝影機和沉浸效果（需要 PacketEvents）
- `false`: 使用標準對話模式

### BetterHud 集成配置

#### 對話組名稱

```yaml
betterhud:
  dialog-group-name: "dialog"
```

**類型**: `string`  
**默認值**: `"dialog"`  
**說明**: BetterHud 中定義的對話組名稱，必須與 BetterHud 配置匹配

#### Popup 映射

```yaml
betterhud:
  popups:
    dialog: "dialog_popup"
    narration: "dialog_narration_popup"
    options: "dialog_options_popup"
    immersive_background: "dialog_immersive_background_popup"
```

**類型**: `object`  
**說明**: 將插件內部的 Popup 類型映射到 BetterHud 中定義的 Popup ID

- `dialog`: 主要對話內容顯示區域
- `narration`: 旁白文本顯示區域
- `options`: 對話選項列表顯示區域
- `immersive_background`: 沉浸模式背景遮罩

#### 文本處理選項

```yaml
betterhud:
  dialog-line-break: false
```

**類型**: `boolean`  
**默認值**: `false`  
**說明**: 是否自動換行長對話內容

- `true`: 根據 Popup 寬度自動換行
- `false`: 保持原始文本格式

#### 默認頭像

```yaml
betterhud:
  dialog-default-avatar: "<image:unknown>"
```

**類型**: `string`  
**默認值**: `"<image:unknown>"`  
**說明**: NPC 沒有指定頭像時使用的默認頭像，格式為 BetterHud 圖像引用

### 主題行為配置

#### 滾輪交互

```yaml
theme-betterhud:
  use-scroll: true
```

**類型**: `boolean`  
**默認值**: `true`  
**說明**: 是否允許使用滑鼠滾輪切換對話選項

#### 選項樣式

```yaml
theme-betterhud:
  select:
    reply:
      select: "&f{player_side}"  # 被選中選項的格式
      other: "&7{player_side}"   # 未選中選項的格式
```

**類型**: `object`  
**說明**: 定義對話選項的顯示格式

- `select`: 當前選中選項的文本格式
- `other`: 其他選項的文本格式
- 支持 Minecraft 顏色代碼和 PlaceholderAPI

#### 交互方式

```yaml
theme-betterhud:
  reply-interaction:
    - "SWAP"        # F 鍵
    - "DROP"        # Q 鍵  
    - "RIGHT_CLICK" # 右鍵
    - "LEFT_CLICK"  # 左鍵
```

**類型**: `array`  
**說明**: 定義玩家可以使用哪些按鍵來選擇對話選項

可用的交互類型：
- `SWAP`: 物品欄交換鍵（默認 F）
- `DROP`: 丟棄鍵（默認 Q）
- `RIGHT_CLICK`: 滑鼠右鍵
- `LEFT_CLICK`: 滑鼠左鍵
- `SNEAK`: 潛行鍵（默認 Shift）

### 音效配置

#### 對話開始音效

```yaml
theme-betterhud:
  sound:
    name: ENTITY_ITEM_PICKUP  # 音效名稱
    p: 1                      # 音調 (0.0-2.0)
    v: 0                      # 音量 (0.0-1.0)
```

**類型**: `object`  
**說明**: 對話開始時播放的音效

#### 選項切換音效

```yaml
theme-betterhud:
  select:
    sound:
      name: ENTITY_EXPERIENCE_ORB_PICKUP
      p: 2
      v: 0
```

**類型**: `object`  
**說明**: 切換選項時播放的音效

**音效參數說明**:
- `name`: Minecraft 音效名稱
- `p` (pitch): 音調，範圍 0.0-2.0
- `v` (volume): 音量，範圍 0.0-1.0

### 動畫配置

```yaml
theme-betterhud:
  animation:
    enable: true    # 是否啟用動畫
    speed: 1        # 對話文本動畫速度
    reply-speed: 2  # 選項動畫速度
```

**類型**: `object`  
**說明**: 控制各種動畫效果的設置

- `enable`: 是否啟用動畫效果
- `speed`: 對話文本打字機效果的速度
- `reply-speed`: 選項切換和顯示的動畫速度

## 配置重載

修改配置後，可以使用以下指令重載而無需重啟伺服器：

```bash
/bhc reload
```