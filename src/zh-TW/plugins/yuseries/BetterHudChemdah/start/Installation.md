---
title: 安裝配置
order: 1
---

# 安裝配置

## 前置要求

在安裝 BetterHudChemdah 之前，請確保您的伺服器滿足以下要求：

### 伺服器版本
- **Minecraft 版本**: 1.19 - 1.21
- **伺服器類型**: Spigot, Paper (推薦), Purpur

### 必需依賴插件

以下插件是 BetterHudChemdah 正常運行所必需的：

1. **Chemdah**
   - 插件介紹: [Chemdah](../../../partner/Chemdah/README.md)
   - 對話系統核心

2. **BetterHud**
   - 下載地址: [Spigot](https://www.spigotmc.org/resources/115559/)
   - HUD 界面框架，提供 Popup 顯示功能

### 可選依賴插件

以下插件可增強 BetterHudChemdah 的功能，但不是必需的：

1. **PacketEvents** (版本 2.7.0+)
   - 下載地址: [GitHub](https://github.com/retrooper/packetevents/releases)
   - 用於啟用沉浸式對話功能（动态攝影機）

## 初始配置

### 1. 基礎配置文件

安裝完成後，插件會在 `/plugins/BetterHudChemdah/` 目錄下生成默認配置文件：

- `config.yml` - 主配置文件
- `lang/zh_TW.yml` - 語言文件

### 2. BetterHud 主題配置

需要在 `Chemdah` 的配置中啟用 `BetterHud` 主題：

```yaml
# /plugins/Chemdah/conversation/default.yml
settings:
  theme: betterhud
```

### 3. 沉浸模式配置

如果您安裝了 `PacketEvents`，可以啟用沉浸模式：

```yaml
# /plugins/BetterHudChemdah/config.yml
immersive-mode: true
```

## 常見問題

### Q: 插件無法啟動，提示依賴缺失
A: 請檢查是否正確安裝了所有必需依賴插件，特別是 Adyeshach, Chemdah 和 BetterHud。

### Q: 對話界面不顯示
A: 確保 Chemdah 配置中的主題設置為 `betterhud`，並檢查 BetterHud 是否正常加載。

### Q: 沉浸模式無法使用
A: 沉浸模式需要 PacketEvents 插件支持，請確保已安裝並在配置中啟用 `immersive-mode`。

如果遇到其他問題，請訪問我們的 [Discord 支援群組](https://discord.com/invite/SzPBHGttaR) 尋求幫助。