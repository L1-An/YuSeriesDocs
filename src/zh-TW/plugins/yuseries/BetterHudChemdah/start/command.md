---
title: 指令使用
order: 2
---

# 指令使用

BetterHudChemdah 提供了一系列實用指令來管理插件功能和進行調試。

## 主指令

插件的主指令為 `/betterhudchemdah`，可以簡寫為 `/bhc`。

### 基本語法
```
/bhc <子指令> [參數...]
```

## 可用指令

### 版本信息
```
/bhc version
```
**權限**: `betterhudchemdah.command.version`  
**說明**: 顯示當前插件版本信息

**示例**:
```
> /bhc version
BetterHudChemdah | 當前插件版本: 1.0.10
```

### 重載配置
```
/bhc reload
```
**權限**: `betterhudchemdah.command.reload`  
**說明**: 重載插件配置文件而不重啟伺服器

**示例**:
```
> /bhc reload
BetterHudChemdah | 重載成功
```

::: warning 注意
重載配置會重新初始化所有管理器，可能會中斷正在進行的對話
:::

### 調試模式
```
/bhc debug [on|off]
```
**權限**: `betterhudchemdah.command.debug`  
**說明**: 啟用或關閉調試模式。不指定參數時切換當前狀態

**示例**:
```
> /bhc debug on
BetterHudChemdah | 已切換debug模式 - 啟用

> /bhc debug
BetterHudChemdah | 已切換debug模式 - 關閉
```

調試模式會在控制台輸出詳細的運行信息，幫助診斷問題。

### 任務追蹤
```
/bhc track
```
**權限**: `betterhudchemdah.command.track`  
**說明**: 開啟或關閉當前任務的追蹤顯示

### 旁白顯示
```
/bhc narration <文本內容>
```
**權限**: `betterhudchemdah.command.narration`  
**說明**: 向執行者顯示指定文本的旁白效果

**示例**:
```
> /bhc narration 這是一段測試旁白
```

## 權限系統

### 權限節點

| 權限節點 | 說明 | 默認權限 |
|---------|------|----------|
| `betterhudchemdah.command` | 使用主指令的基礎權限 | `op` |
| `betterhudchemdah.command.version` | 查看版本信息 | `true` |
| `betterhudchemdah.command.reload` | 重載配置 | `op` |
| `betterhudchemdah.command.debug` | 調試模式 | `op` |
| `betterhudchemdah.command.track` | 任務追蹤 | `true` |
| `betterhudchemdah.command.narration` | 旁白測試 | `op` |

### 通配權限

```yaml
# 給予所有 BetterHudChemdah 權限
betterhudchemdah.*

# 給予所有指令權限
betterhudchemdah.command.*
```