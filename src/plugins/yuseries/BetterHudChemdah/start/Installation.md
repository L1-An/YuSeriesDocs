---
title: Installation & Configuration
order: 1
---

# Installation & Configuration

## Prerequisites

Before installing BetterHudChemdah, please ensure your server meets the following requirements:

### Server Version
- **Minecraft Version**: 1.19 - 1.21
- **Server Type**: Spigot, Paper (recommended), Purpur

### Required Dependencies

The following plugins are essential for BetterHudChemdah to function properly:

1. **Chemdah**
   - Plugin Introduction: [Chemdah](../../../partner/Chemdah/README.md)
   - Dialogue system core

2. **BetterHud**
   - Download Link: [Spigot](https://www.spigotmc.org/resources/115559/)
   - HUD interface framework providing Popup display functionality

### Optional Dependencies

The following plugins can enhance BetterHudChemdah's functionality but are not required:

1. **PacketEvents** (version 2.7.0+)
   - Download Link: [GitHub](https://github.com/retrooper/packetevents/releases)
   - Used to enable immersive dialogue features (dynamic camera)

## Initial Configuration

### 1. Basic Configuration Files

After installation, the plugin will generate default configuration files in the `/plugins/BetterHudChemdah/` directory:

- `config.yml` - Main configuration file
- `lang/en_US.yml` - Language file

### 2. BetterHud Theme Configuration

You need to enable the `BetterHud` theme in `Chemdah` configuration:

```yaml
# /plugins/Chemdah/conversation/default.yml
settings:
  theme: betterhud
```

### 3. Immersive Mode Configuration

If you have installed `PacketEvents`, you can enable immersive mode:

```yaml
# /plugins/BetterHudChemdah/config.yml
immersive-mode: true
```

## Common Issues

### Q: Plugin fails to start, showing dependency missing
A: Please check if all required dependency plugins are properly installed, especially Adyeshach, Chemdah, and BetterHud.

### Q: Dialogue interface not displaying
A: Ensure the theme in Chemdah configuration is set to `betterhud`, and check if BetterHud is loading properly.

### Q: Immersive mode not working
A: Immersive mode requires PacketEvents plugin support. Ensure it's installed and `immersive-mode` is enabled in configuration.

If you encounter other issues, please visit our [Discord Support Group](https://discord.com/invite/SzPBHGttaR) for help.