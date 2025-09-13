---
title: narration Action
order: 2
---

# narration Action

The `narration` action is used to display narration text on the player's screen, providing an immersive narrative experience.

## Basic Syntax

```kether
narration <message> [animation <boolean>] [duration <duration>] [animation-speed <animation-speed>]
```

## Parameter Description

- **message**: The narration text content to display (required)
- **animation**: Whether to enable typewriter animation effect (optional, default `true`)
- **duration**: Duration for narration display in ticks (optional, default `40`)
- **animation-speed**: Animation playback speed multiplier (optional, default `1`)

## Usage Examples

### Basic Narration
```kether
# Display simple narration with default settings
narration "Night falls, the village falls into tranquility..."
```

### Disable Animation
```kether
# Disable typewriter animation, show all text immediately
narration "Warning: Danger ahead!" animation false
```

### Custom Duration
```kether
# Set longer display time
narration "This is an important narrative that needs careful reading." duration 80
```

### Adjust Animation Speed
```kether
# Fast animation effect
narration "Quick fleeting thoughts..." animation-speed 3

# Slow animation effect
narration "Slowly emerging memories..." animation-speed 0.5
```

### Combined Parameters
```kether
# Set multiple parameters simultaneously
narration "Important dialogue begins..." animation true duration 60 animation-speed 2
```

## Advanced Usage

### Conditional Narration
```kether
# Show different narration based on player data
if player-data("first_visit") == true then {
    narration "This place seems familiar..." duration 50
} else {
    narration "You come to this mysterious place for the first time." duration 50
}
```

### Continuous Narration Sequence
```kether
# Continuous narrative to create atmosphere
narration "In the depths of this ancient castle..." duration 60 animation-speed 1
wait 65

narration "Hidden countless secrets..." duration 60 animation-speed 1
wait 65

narration "You can feel the mysterious magical aura in the air." duration 80 animation-speed 1.5
```

### Combined with Other Actions
```kether
# Combined with camera actions
camera meta interpolation 40
camera set location player world 100 65 200 0 0
narration "Camera is moving to new position..." duration 40

wait 40
narration "Now you can see the panoramic view." duration 50
```

## Display Configuration

The actual display effect of narration depends on BetterHud's Popup configuration:

### Narration Popup Settings
```yaml
# Narration Popup in BetterHud configuration
dialog_narration_popup:
  conditions: ["script:player_data('bhc_narration_show') == 'true'"]
  layouts:
    default:
      type: text
      x: center
      y: 30
      width: 400
      text-color: "white"
      background-color: "rgba(0,0,0,0.6)"
      font-size: 16
      text-align: center
      padding: 15
```

## Performance Recommendations

- Avoid overly frequent narration displays
- Set reasonable duration, avoid too short or too long
- Pay attention to narration network overhead on multiplayer servers
- Use appropriate animation speed, too fast may affect reading experience

## Troubleshooting

### Narration Not Displaying
1. Check if BetterHud's `dialog_narration_popup` configuration is correct
2. Confirm if condition expression `bhc_narration_show` is properly set
3. Verify Popup position and size settings

### Animation Effects Abnormal
1. Check if `animation-speed` parameter is within reasonable range
2. Confirm if BetterHud version supports text animation
3. Verify if client performance is sufficient

### Text Display Incomplete
1. Check if `duration` parameter is long enough
2. Confirm if Popup width setting is suitable for text length
3. Consider using line breaks or segmented display for long text

The `narration` action is an important tool for creating immersive dialogue experiences, proper use can greatly enhance player immersion.