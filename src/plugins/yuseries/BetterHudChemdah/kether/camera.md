---
title: Camera Control
order: 1
---

# Camera Control

BetterHudChemdah provides a virtual camera system that allows you to control the player's viewpoint position in immersive dialogue.

## camera Action

### Basic Syntax

```kether
camera <sub-action> [parameters...]
```

### Available Sub-actions

#### reset - Reset Camera

Restore the camera to the player's original position:

```kether
camera reset
```

**Description**:
- Teleports the camera back to the player's original position before dialogue started
- Usually used when dialogue ends to return player's view to normal state

**Usage Example**:
```kether
# Reset camera when dialogue ends
camera reset
```

#### set - Set Camera Position

Set the camera to a specified position:

```kether
camera set <position>
```

**Parameter Description**:
- `position`: Target position where the camera should move, supports various position formats

**Usage Example**:
```kether
# Set to absolute coordinates
camera set location player world 100 64 200
```

#### meta - Set Camera Metadata

Set camera metadata properties:

```kether
camera meta <key> <value>
```

**Available metadata keys**:
- `interpolation`: Position/rotation interpolation duration (in ticks)

**Usage Example**:
```kether
# Set camera movement smooth transition time to 2 seconds (40 ticks)
camera meta interpolation 40

# Set faster transition time (1 second)  
camera meta interpolation 20
```

## Complete Usage Examples

### Basic Dialogue Camera Sequence

```kether
# At dialogue start, set camera for smooth transition
camera meta interpolation 60

# Move camera to specified coordinates
camera set location player world 100 65 200 -30 0

# Wait for transition to complete
wait 60

# Dialogue proceeds...

# Reset camera when dialogue ends
camera reset
```

### Dynamic Camera Effects

```kether
# Quick switch effect
camera meta interpolation 10
camera set location player world 150 70 250 45 -10
wait 15

# Slow motion effect  
camera meta interpolation 100
camera set location player world 100 65 200 0 0
wait 100

# Return to normal
camera reset
```


## Prerequisites

### Immersive Mode Requirements

Camera functionality requires the following conditions:

1. **Configuration Requirements**:
   ```yaml
   # config.yml
   immersive-mode: true
   ```

2. **Plugin Dependencies**:
   - PacketEvents 2.7.0+