---
title: API Overview
order: 1
---

# API Overview

YuIllustration provides a powerful API system that allows developers to:

- Access and modify player illustration data
- Create custom unlockers
- Listen to illustration-related events
- Integrate with Kether script system
- Hook into the plugin's core functionality

## Getting Started

### Dependency Setup

Add YuIllustration as a dependency in your plugin:

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
# or
softdepend: ["YuIllustration"]
```

:::

### Main API Class

The main API entry point is `YuIllustrationAPI`:

```kotlin
import com.github.l1an.yuillustration.api.YuIllustrationAPI

// Access player profile
val player = Bukkit.getPlayer("PlayerName")
val profile = YuIllustrationAPI.profiles[player]

// Get unlocker instance
val unlocker = YuIllustrationAPI.getUnlocker("BREAK_BLOCK")

// Check if player profile is loaded
if (player.isProfileLoaded) {
    // Safe to access profile
    val playerProfile = player.profile
}
```

## Core API Components

### 1. Player Profiles

Access and manipulate player illustration data:

```kotlin
import com.github.l1an.yuillustration.api.YuIllustrationAPI.profile

val player = Bukkit.getPlayer("PlayerName")
val profile = player.profile

// Check if entry is unlocked
val isUnlocked = profile.isEntryUnlocked(entry)

// Unlock entry manually
profile.unlockEntry(entry)

// Get locked entries
val lockedEntries = profile.getLockedEntry()
```

### 2. Unlocker System

Create and register custom unlockers:

```kotlin
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Unlocker
import com.github.l1an.yuillustration.core.entry.unlock.unlocker.Dependency

@Dependency("YourPlugin")
object CustomUnlocker : Unlocker<YourEvent>() {
    
    override val name: String = "CUSTOM_ACTION"
    override val event: Class<YourEvent> = YourEvent::class.java
    
    init {
        handler { event ->
            event.player // Return the player from event
        }
        
        addSimpleCondition("custom_data") { data, event ->
            // Your custom condition logic
            data.toString() == event.customValue
        }
    }
}
```

### 3. Event System

Listen to YuIllustration events:

```kotlin
@EventHandler
fun onEntryUnlock(event: EntryUnlockEvent) {
    val player = event.player
    val entry = event.entry
    
    player.sendMessage("You unlocked: ${entry.name}")
}

@EventHandler  
fun onCategoryComplete(event: CategoryCompleteEvent) {
    val player = event.player
    val category = event.category
    
    // Give rewards or send notifications
}
```

## Available Events

| Event Class | Description | Cancellable |
|------------|-------------|-------------|
| `EntryUnlockEvent` | Triggered when a player unlocks an entry | ❌ |
| `EntryDeunlockEvent` | Triggered when an entry is manually unlocked | ❌ |
| `CategoryCompleteEvent` | Triggered when a player completes a category | ❌ |
| `YuIllustrationReloadEvent` | Triggered when the plugin reloads | ❌ |
| `PlaceholderHookEvent` | Used for custom placeholder handling | ✅ |
| `InferItemHookEvent` | Used for custom item inference | ✅ |
| `InferBlockHookEvent` | Used for custom block inference | ✅ |
| `InferEntityHookEvent` | Used for custom entity inference | ✅ |

## Kether Integration

YuIllustration integrates with the Kether script system, allowing you to create custom actions:

```kotlin
import taboolib.module.kether.*

@KetherParser(["custom-action"])
object CustomAction : ScriptActionParser<Void> {
    
    override fun parse(reader: KetherReader): ScriptAction<Void> {
        return scriptAction {
            // Your custom action logic
        }
    }
}
```

## Best Practices

1. **Always check if profiles are loaded** before accessing player data
2. **Use events** instead of polling for state changes
3. **Register unlockers** using the `@Dependency` annotation system
4. **Handle plugin disable/enable** gracefully in your integrations
5. **Use async operations** when appropriate to avoid blocking the main thread

## Example Integration

Here's a complete example of a plugin that integrates with YuIllustration:

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
        
        // Wait for profile to load, then check progress
        scheduler.runTaskLater(this, {
            if (player.isProfileLoaded) {
                val profile = player.profile
                val completedCount = profile.getUnlockedEntry().size
                player.sendMessage("You have completed $completedCount illustrations!")
            }
        }, 20L)
    }
    
    @EventHandler
    fun onEntryUnlock(event: EntryUnlockEvent) {
        // Give rewards when player unlocks entries
        val player = event.player
        val entry = event.entry
        
        // Custom reward logic
        giveCustomRewards(player, entry)
    }
    
    private fun giveCustomRewards(player: Player, entry: Entry) {
        // Your reward implementation
    }
}
```