---
title: API 概述
order: 1
---

# API 概述

YuIllustration 提供強大的 API 系統，讓開發者可以：

- 訪問和修改玩家圖鑑數據
- 創建自定義解鎖器
- 監聽圖鑑相關事件
- 整合 Kether 腳本系統
- 掛鉤到插件的核心功能

## 開始使用

### 依賴設置

在你的插件中添加 YuIllustration 作為依賴：

::: tabs

@tab Maven

```xml
<dependency>
    <groupId>com.github.l1an</groupId>
    <artifactId>yuillustration</artifactId>
    <version>2.1.2</version>
    <scope>provided</scope>
</dependency>
```

@tab Gradle

```kotlin
dependencies {
    compileOnly("com.github.l1an:yuillustration:2.1.2")
}
```

@tab plugin.yml

```yaml
depend: ["YuIllustration"]
# 或者
softdepend: ["YuIllustration"]
```

:::

### 主要 API 類

主要 API 入口點是 `YuIllustrationAPI`：

```kotlin
import com.github.l1an.yuillustration.api.YuIllustrationAPI

// 訪問玩家資料
val player = Bukkit.getPlayer("PlayerName")
val profile = YuIllustrationAPI.profiles[player]

// 獲取解鎖器實例
val unlocker = YuIllustrationAPI.getUnlocker("BREAK_BLOCK")

// 檢查玩家資料是否已加載
if (player.isProfileLoaded) {
    // 安全訪問資料
    val playerProfile = player.profile
}
```

## 核心 API 組件

### 1. 玩家資料

訪問和操作玩家圖鑑數據：

```kotlin
import com.github.l1an.yuillustration.api.YuIllustrationAPI.profile

val player = Bukkit.getPlayer("PlayerName")
val profile = player.profile

// 檢查條目是否已解鎖
val isUnlocked = profile.isEntryUnlocked(entry)

// 手動解鎖條目
profile.unlockEntry(entry)

// 獲取已鎖定的條目
val lockedEntries = profile.getLockedEntry()
```

### 2. 解鎖器系統

創建和註冊自定義解鎖器：

```kotlin
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Unlocker
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Dependency

@Dependency("YourPlugin")
object CustomUnlocker : Unlocker<YourEvent>() {
    
    override val name: String = "CUSTOM_ACTION"
    override val event: Class<YourEvent> = YourEvent::class.java
    
    init {
        handler { event ->
            event.player // 從事件返回玩家
        }
        
        addSimpleCondition("custom_data") { data, event ->
            // 你的自定義條件邏輯
            data.toString() == event.customValue
        }
    }
}
```

### 3. 事件系統

監聽 YuIllustration 事件：

```kotlin
@EventHandler
fun onEntryUnlock(event: EntryUnlockEvent) {
    val player = event.player
    val entry = event.entry
    
    player.sendMessage("你解鎖了：${entry.name}")
}

@EventHandler  
fun onCategoryComplete(event: CategoryCompleteEvent) {
    val player = event.player
    val category = event.category
    
    // 給予獎勵或發送通知
}
```

## 可用事件

| 事件類 | 描述 | 可取消 |
|-------|------|--------|
| `EntryUnlockEvent` | 玩家解鎖條目時觸發 | ❌ |
| `EntryDeunlockEvent` | 條目被手動解鎖時觸發 | ❌ |
| `CategoryCompleteEvent` | 玩家完成分類時觸發 | ❌ |
| `YuIllustrationReloadEvent` | 插件重載時觸發 | ❌ |
| `PlaceholderHookEvent` | 用於自定義占位符處理 | ✅ |
| `InferItemHookEvent` | 用於自定義物品推斷 | ✅ |
| `InferBlockHookEvent` | 用於自定義方塊推斷 | ✅ |
| `InferEntityHookEvent` | 用於自定義實體推斷 | ✅ |

## Kether 整合

YuIllustration 整合了 Kether 腳本系統，允許你創建自定義動作：

```kotlin
import taboolib.module.kether.*

@KetherParser(["custom-action"])
object CustomAction : ScriptActionParser<Void> {
    
    override fun parse(reader: KetherReader): ScriptAction<Void> {
        return scriptAction {
            // 你的自定義動作邏輯
        }
    }
}
```

## 最佳實踐

1. **總是檢查資料是否已加載** 在訪問玩家數據之前
2. **使用事件** 而不是輪詢狀態變化
3. **使用 `@Dependency` 註解** 註冊解鎖器
4. **優雅處理插件禁用/啟用** 在你的整合中
5. **適當時使用異步操作** 避免阻塞主線程

## 整合範例

這是一個與 YuIllustration 整合的完整插件範例：

```kotlin
import com.github.l1an.yuillustration.api.YuIllustrationAPI
import com.github.l1an.yuillustration.api.event.EntryUnlockEvent
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Dependency
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Unlocker
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.plugin.java.JavaPlugin

class MyPlugin : JavaPlugin(), Listener {
    
    override fun onEnable() {
        server.pluginManager.registerEvents(this, this)
    }
    
    @EventHandler
    fun onPlayerJoin(event: PlayerJoinEvent) {
        val player = event.player
        
        // 等待資料加載，然後檢查進度
        scheduler.runTaskLater(this, {
            if (player.isProfileLoaded) {
                val profile = player.profile
                val completedCount = profile.getUnlockedEntry().size
                player.sendMessage("你已完成 $completedCount 個圖鑑！")
            }
        }, 20L)
    }
    
    @EventHandler
    fun onEntryUnlock(event: EntryUnlockEvent) {
        // 玩家解鎖條目時給予獎勵
        val player = event.player
        val entry = event.entry
        
        // 自定義獎勵邏輯
        giveCustomRewards(player, entry)
    }
    
    private fun giveCustomRewards(player: Player, entry: Entry) {
        // 你的獎勵實現
    }
}
```