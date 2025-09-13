---
title: Main Configuration
order: 1  
---

# Main Configuration

The main configuration file `config.yml` contains all core settings of BetterHudChemdah.

## Configuration File Location

```
/plugins/BetterHudChemdah/config.yml
```

## Complete Configuration Example

```yaml
# Whether to enable immersive dialogue mode
immersive-mode: true

# BetterHud configuration
betterhud:
  dialog-group-name: "dialog"
  popups:
    dialog: "dialog_popup"              # Popup id for dialogue
    narration: "dialog_narration_popup" # Popup id for narration
    options: "dialog_options_popup"     # Popup id for options
    immersive_background: "dialog_immersive_background_popup" # Popup id for immersive dialogue background
  dialog-line-break: false  # Whether to break dialogue content lines
  dialog-default-avatar: "<image:unknown>" # Default dialogue avatar, corresponds to BetterHud image name

# Theme configuration
theme-betterhud:
  # Whether to use scroll wheel to switch options
  use-scroll: true
  
  select:
    # Reply content styles
    reply:
      select: "&f{player_side}"
      other: "&7{player_side}"
    # Sound effect when switching options
    sound:
      name: ENTITY_EXPERIENCE_ORB_PICKUP
      p: 2
      v: 0
      
  # Allowed reply interaction methods
  reply-interaction:
    - "SWAP"
    - "DROP"
    - "RIGHT_CLICK"  
    - "LEFT_CLICK"
    
  # Sound effect when starting dialogue
  sound:
    name: ENTITY_ITEM_PICKUP
    p: 1
    v: 0
    
  # Animation related configuration
  animation:
    enable: true
    # Dialogue animation speed
    speed: 1
    # Reply animation speed
    reply-speed: 2
```

## Configuration Options Explained

### Immersive Mode Settings

```yaml
immersive-mode: true
```

**Type**: `boolean`  
**Default**: `true`  
**Description**: Whether to enable immersive dialogue mode

- `true`: Enable virtual camera and immersive effects (requires PacketEvents)
- `false`: Use standard dialogue mode

### BetterHud Integration Configuration

#### Dialogue Group Name

```yaml
betterhud:
  dialog-group-name: "dialog"
```

**Type**: `string`  
**Default**: `"dialog"`  
**Description**: The dialogue group name defined in BetterHud, must match BetterHud configuration

#### Popup Mapping

```yaml
betterhud:
  popups:
    dialog: "dialog_popup"
    narration: "dialog_narration_popup"
    options: "dialog_options_popup"
    immersive_background: "dialog_immersive_background_popup"
```

**Type**: `object`  
**Description**: Maps internal plugin Popup types to Popup IDs defined in BetterHud

- `dialog`: Main dialogue content display area
- `narration`: Narration text display area
- `options`: Dialogue options list display area
- `immersive_background`: Immersive mode background overlay

#### Text Processing Options

```yaml
betterhud:
  dialog-line-break: false
```

**Type**: `boolean`  
**Default**: `false`  
**Description**: Whether to automatically wrap long dialogue content

- `true`: Auto-wrap based on Popup width
- `false`: Keep original text format

#### Default Avatar

```yaml
betterhud:
  dialog-default-avatar: "<image:unknown>"
```

**Type**: `string`  
**Default**: `"<image:unknown>"`  
**Description**: Default avatar used when NPC has no specified avatar, formatted as BetterHud image reference

### Theme Behavior Configuration

#### Scroll Interaction

```yaml
theme-betterhud:
  use-scroll: true
```

**Type**: `boolean`  
**Default**: `true`  
**Description**: Whether to allow using mouse scroll wheel to switch dialogue options

#### Option Styles

```yaml
theme-betterhud:
  select:
    reply:
      select: "&f{player_side}"  # Format for selected option
      other: "&7{player_side}"   # Format for unselected options
```

**Type**: `object`  
**Description**: Defines the display format for dialogue options

- `select`: Text format for currently selected option
- `other`: Text format for other options
- Supports Minecraft color codes and PlaceholderAPI

#### Interaction Methods

```yaml
theme-betterhud:
  reply-interaction:
    - "SWAP"        # F key
    - "DROP"        # Q key  
    - "RIGHT_CLICK" # Right click
    - "LEFT_CLICK"  # Left click
```

**Type**: `array`  
**Description**: Defines which keys players can use to select dialogue options

Available interaction types:
- `SWAP`: Inventory swap key (default F)
- `DROP`: Drop key (default Q)
- `RIGHT_CLICK`: Mouse right click
- `LEFT_CLICK`: Mouse left click
- `SNEAK`: Sneak key (default Shift)

### Sound Configuration

#### Dialogue Start Sound

```yaml
theme-betterhud:
  sound:
    name: ENTITY_ITEM_PICKUP  # Sound name
    p: 1                      # Pitch (0.0-2.0)
    v: 0                      # Volume (0.0-1.0)
```

**Type**: `object`  
**Description**: Sound effect played when dialogue starts

#### Option Switch Sound

```yaml
theme-betterhud:
  select:
    sound:
      name: ENTITY_EXPERIENCE_ORB_PICKUP
      p: 2
      v: 0
```

**Type**: `object`  
**Description**: Sound effect played when switching options

**Sound Parameter Explanation**:
- `name`: Minecraft sound name
- `p` (pitch): Pitch, range 0.0-2.0
- `v` (volume): Volume, range 0.0-1.0

### Animation Configuration

```yaml
theme-betterhud:
  animation:
    enable: true    # Whether to enable animations
    speed: 1        # Dialogue text animation speed
    reply-speed: 2  # Option animation speed
```

**Type**: `object`  
**Description**: Controls various animation effect settings

- `enable`: Whether to enable animation effects
- `speed`: Speed of dialogue text typewriter effect
- `reply-speed`: Animation speed for option switching and display

## Configuration Reload

After modifying the configuration, you can reload without restarting the server using the following command:

```bash
/bhc reload
```