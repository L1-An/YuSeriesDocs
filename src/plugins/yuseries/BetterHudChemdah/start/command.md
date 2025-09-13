---
title: Command Usage
order: 2
---

# Command Usage

BetterHudChemdah provides a series of useful commands to manage plugin functionality and perform debugging.

## Main Command

The plugin's main command is `/betterhudchemdah`, which can be abbreviated as `/bhc`.

### Basic Syntax
```
/bhc <sub-command> [parameters...]
```

## Available Commands

### Version Information
```
/bhc version
```
**Permission**: `betterhudchemdah.command.version`  
**Description**: Display current plugin version information

**Example**:
```
> /bhc version
BetterHudChemdah | Current plugin version: 1.0.10
```

### Reload Configuration
```
/bhc reload
```
**Permission**: `betterhudchemdah.command.reload`  
**Description**: Reload plugin configuration files without restarting the server

**Example**:
```
> /bhc reload
BetterHudChemdah | Reload successful
```

::: warning Note
Reloading configuration will reinitialize all managers and may interrupt ongoing dialogues
:::

### Debug Mode
```
/bhc debug [on|off]
```
**Permission**: `betterhudchemdah.command.debug`  
**Description**: Enable or disable debug mode. Toggle current state when no parameter is specified

**Example**:
```
> /bhc debug on
BetterHudChemdah | Switched debug mode - Enabled

> /bhc debug
BetterHudChemdah | Switched debug mode - Disabled
```

Debug mode will output detailed runtime information to console to help diagnose issues.

### Quest Tracking
```
/bhc track
```
**Permission**: `betterhudchemdah.command.track`  
**Description**: Enable or disable tracking display for current quest

### Narration Display
```
/bhc narration <text-content>
```
**Permission**: `betterhudchemdah.command.narration`  
**Description**: Display specified text narration effect to the executor

**Example**:
```
> /bhc narration This is a test narration
```

## Permission System

### Permission Nodes

| Permission Node | Description | Default Permission |
|----------------|-------------|-------------------|
| `betterhudchemdah.command` | Basic permission to use main command | `op` |
| `betterhudchemdah.command.version` | View version information | `true` |
| `betterhudchemdah.command.reload` | Reload configuration | `op` |
| `betterhudchemdah.command.debug` | Debug mode | `op` |
| `betterhudchemdah.command.track` | Quest tracking | `true` |
| `betterhudchemdah.command.narration` | Narration testing | `op` |

### Wildcard Permissions

```yaml
# Grant all BetterHudChemdah permissions
betterhudchemdah.*

# Grant all command permissions
betterhudchemdah.command.*
```