---
title: dialog Action
order: 3
---

# dialog Action

The `dialog` action group is used to control the appearance of dialogue interface, including dynamically setting dialogue titles and avatars.

## Basic Syntax

```kether
dialog <sub-action> <parameter>
```

## Available Sub-actions

### dialog title - Set Dialogue Title

Dynamically set the title for the next dialogue display.

#### Syntax
```kether
dialog title <text>    # Set title
dialog title clear     # Clear title
```

#### Usage Examples

**Basic Title Setting**:
```kether
# Set dialogue speaker name as title
dialog title "Village Chief Edward"
dialog title "Mysterious Merchant"
dialog title "Sage Odin"
```

**Clear Title Setting**:
```kether
# Clear title setting, use default title
dialog title clear
```

**Conditional Title**:
```kether
# Set different titles based on player data
if player-data("reputation") >= 100 then {
    dialog title "Respected Hero"
} else if player-data("reputation") >= 50 then {
    dialog title "Famous Adventurer"
} else {
    dialog title "Strange Traveler"
}
```

**Dynamic Title**:
```kether
# Set greeting based on time
if time-of-day >= 6000 && time-of-day < 12000 then {
    dialog title "Good Morning, Traveler"
} else if time-of-day >= 12000 && time-of-day < 18000 then {
    dialog title "Good Afternoon, Friend"
} else {
    dialog title "Good Evening, Warrior"
}
```

### dialog avatar - Set Dialogue Avatar

Set the character avatar displayed in the dialogue interface.

#### Syntax
```kether
dialog avatar <avatar>    # Set avatar
dialog avatar clear       # Clear avatar
```

#### Usage Examples

**Basic Avatar Setting**:
```kether
# Set avatar in BetterHud image format
dialog avatar "<image:villager_happy>"
dialog avatar "<image:merchant_smile>"
dialog avatar "<image:guard_serious>"
```

**Clear Avatar Setting**:
```kether
# Clear avatar setting, use default avatar
dialog avatar clear
```

**Emotional Avatar**:
```kether
# Set different avatars based on NPC mood
if player-data("npc_mood") == "happy" then {
    dialog avatar "<image:npc_happy>"
} else if player-data("npc_mood") == "angry" then {
    dialog avatar "<image:npc_angry>"
} else if player-data("npc_mood") == "sad" then {
    dialog avatar "<image:npc_sad>"
} else {
    dialog avatar "<image:npc_neutral>"
}
```

**Quest Status Avatar**:
```kether
# Adjust avatar based on quest status
if quest-completed("help_villager") then {
    dialog avatar "<image:villager_grateful>"
} else if quest-available("help_villager") then {
    dialog avatar "<image:villager_worried>"
} else {
    dialog avatar "<image:villager_normal>"
}
```

## Comprehensive Usage Examples

### Complete Dialogue Setup
```kether
# Set title and avatar when dialogue starts
dialog title "Village Chief Thomas"
dialog avatar "<image:elder_wise>"

# Dialogue content...

# Clean up settings when dialogue ends
dialog title clear
dialog avatar clear
```

### Dynamic Dialogue Updates
```kether
# Update dialogue appearance based on player choice
if var("player_choice") == "help" then {
    set player-data("npc_attitude") to "friendly"
    dialog title "Friendly Village Chief"
    dialog avatar "<image:elder_happy>"
    narration "The village chief expresses gratitude for your help." duration 40
} else if var("player_choice") == "refuse" then {
    set player-data("npc_attitude") to "disappointed"
    dialog title "Disappointed Village Chief"
    dialog avatar "<image:elder_sad>"
    narration "The village chief looks somewhat disappointed." duration 40
} else {
    dialog title "Village Chief Thomas"
    dialog avatar "<image:elder_neutral>"
}

wait 40
goto-self  # Refresh dialogue to reflect new settings
```

### Dialogue Sequence
```kether
# Appearance changes in multi-stage dialogue
dialog title "Mysterious Wizard"
dialog avatar "<image:wizard_mysterious>"
narration "A wizard wearing a dark cloak appears before you..." duration 60

wait 60

# Change appearance after revealing identity
dialog title "Archmage Merlin"
dialog avatar "<image:wizard_revealed>"
narration "The wizard removes his hood, revealing a kind face." duration 50
```

## Avatar Formats

BetterHud supports various avatar formats:

### Image References
```kether
# Standard image reference format
dialog avatar "<image:avatar_name>"

# Supported image formats
dialog avatar "<image:player_head>"        # Player avatar
dialog avatar "<image:villager_face>"      # Villager avatar
dialog avatar "<image:custom_npc_01>"      # Custom NPC avatar
```

### Dynamic Avatars
```kether
# Use variables as avatars
set avatar_name to "wizard_" + player-data("wizard_rank")
dialog avatar "<image:" + var("avatar_name") + ">"

# Avatar based on player name
dialog avatar "<image:player_" + player-name + ">"
```

## Configuration Requirements

### BetterHud Settings

Title and avatar display depends on BetterHud's dialogue Popup configuration:

```yaml
# BetterHud configuration example
dialog_popup:
  layouts:
    default:
      # Title display area
      title:
        text: "{bhc_dialog_title}"
        font-size: 18
        color: "gold"
        
      # Avatar display area  
      avatar:
        image: "{bhc_dialog_avatar}"
        width: 32
        height: 32
        
      # Dialogue content area
      content:
        text: "{bhc_dialog_content}"
        font-size: 14
        color: "white"
```

### Variable Binding

The plugin automatically sets the following variables for BetterHud use:

- `bhc_dialog_title`: Dialogue title content
- `bhc_dialog_avatar`: Dialogue avatar reference
- `bhc_dialog_content`: Dialogue text content

## Best Practices

1. **Consistency**: Use consistent title and avatar styles for the same character
2. **Cleanup**: Clear custom settings when dialogue ends to avoid affecting other dialogues
3. **Conditional**: Dynamically adjust appearance based on player status and relationships
4. **Testing**: Ensure all referenced image resources exist in BetterHud configuration

The `dialog` action allows you to create more personalized and dynamic dialogue interfaces, enhancing player immersion.