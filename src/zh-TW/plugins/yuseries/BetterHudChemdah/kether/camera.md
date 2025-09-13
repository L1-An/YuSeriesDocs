---
title: 攝影機控制
order: 1
---

# 攝影機控制

BetterHudChemdah 提供了虛擬攝影機系統，讓您可以在沉浸式對話中控制玩家的視角位置。

## camera 動作

### 基本語法

```kether
camera <子動作> [參數...]
```

### 可用子動作

#### reset - 重置攝影機

將攝影機恢復到玩家的原始位置：

```kether
camera reset
```

**說明**：
- 將攝影機傳送回玩家對話開始前的原始位置
- 通常在對話結束時使用，讓玩家視角回到正常狀態

**使用示例**：
```kether
# 在對話結束時重置攝影機
camera reset
```

#### set - 設置攝影機位置

將攝影機設置到指定位置：

```kether
camera set <位置>
```

**參數說明**：
- `位置`: 攝影機要移動到的目標位置，支援多種位置格式

**使用示例**：
```kether
# 設置到絕對座標
camera set location player world 100 64 200
```

#### meta - 設置攝影機元數據

設置攝影機的元數據屬性：

```kether
camera meta <鍵> <值>
```

**可用的元數據鍵**：
- `interpolation`: 位置/旋轉插值持續時間（刻數）

**使用示例**：
```kether
# 設置攝影機移動的平滑過渡時間為 2 秒 (40 刻)
camera meta interpolation 40

# 設置更快的過渡時間 (1 秒)  
camera meta interpolation 20
```

## 完整使用示例

### 基本對話攝影機序列

```kether
# 對話開始時，將攝影機設置為平滑過渡
camera meta interpolation 60

# 移動攝影機到指定座標
camera set location player world 100 65 200 -30 0

# 等待過渡完成
wait 60

# 對話進行中...

# 對話結束時重置攝影機
camera reset
```

### 動態攝影機效果

```kether
# 快速切換效果
camera meta interpolation 10
camera set location player world 150 70 250 45 -10
wait 15

# 慢動作效果  
camera meta interpolation 100
camera set location player world 100 65 200 0 0
wait 100

# 恢復正常
camera reset
```


## 使用前提

### 沉浸模式要求

攝影機功能需要滿足以下條件：

1. **配置要求**：
   ```yaml
   # config.yml
   immersive-mode: true
   ```

2. **插件依賴**：
   - PacketEvents 2.7.0+