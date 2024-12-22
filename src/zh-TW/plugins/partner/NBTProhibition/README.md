---
title: NBTProhibition
icon: hugeicons:tools
dir:
  link: true
  order: 4
---

## 關於

一款基於 **TabooLib** 的輕量級 NBT 移除插件, 支援多種匹配模式

## 價格

|時效|價格|
|:-:|:-:|
|永久|3.99EUR|

購買請加入[Yu's Studio](https://discord.com/invite/SzPBHGttaR), 或透過 [Discord](https://discord.com/users/1092505635767205948) 聯繫我

## 特色

- 精確的 NBT 路徑比對系統
- 支援多種 NBT 匹配格式
- 即時偵測並移除違禁 NBT
- 可設定的移除提示和懲罰措施
- 支援 Kether 腳本執行
- 完整的事件系統支持
- 詳細的調試資訊輸出

## 預覽

### 支援格式

#### 簡單路徑
```yaml
# 直接匹配頂層NBT
Unbreakable: true
# 配置: "Unbreakable"
```

#### 嵌套路徑
```yaml
# 使用點號存取嵌套的NBT
display:
  Name: "物品名稱"
# 設定: "display.Name"
```

#### 數組索引
```yaml
# 使用方括號存取陣列特定位置
ench: [
  {id: 0s, lvl: 1s},
  {id: 1s, lvl: 1s}
]
# 配置: "ench[0].id" - 符合第一個附魔的id
# 配置: "ench[*].id" - 符合所有附魔的id
```

#### 值匹配
```yaml
# 使用冒號匹配特定值
CustomPotionEffects: [
  {Id: 6, Amplifier: 1}
]
# 設定: "CustomPotionEffects[0].Id:6"
```

#### 組合使用
```yaml
# 以上規則可以組合使用
ench: [
  {id: 1s, lvl: 5s},
  {id: 34s, lvl: 3s}
]
# 配置: "ench[0].id:1s" - 符合第一個附魔且其id為1s
# 配置: "ench[*].id:1s" - 符合任意位置id為1s的附魔
```

### 偵錯模式

在 `config.yml` 中啟用偵錯模式可以看到詳細的 NBT 處理資訊：

```yaml
# 偵錯模式會輸出更多訊息
debug: true
```

調試資訊包括：

- NBT 路徑匹配過程
- 物品 NBT 內容
- 移除操作的詳細步驟
- 腳本執行情況

## 詳細信息

欲了解更多詳細信息, 請查看[官方文檔](https://wiki.bingzi.online/zh/NBTProhibition/Index)