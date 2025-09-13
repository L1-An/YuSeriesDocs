---
title: bhquest Action
order: 4
---

# bhquest Action

The `bhquest` action is used to control BetterHud's quest tracking functionality, allowing players to track current quest progress on the interface.

## Basic Syntax

```kether
bhquest <sub-action>
```

## Available Sub-actions

### bhquest track - Start Quest Tracking

Start tracking the currently selected quest.

```kether
bhquest track
```

### bhquest track cancel - Cancel Quest Tracking

Cancel the current quest tracking.

```kether
bhquest track cancel
```

## Prerequisites

### Required Dependencies

1. **Valid Quest**: A valid ongoing quest must exist (automatically set by Chemdah)

## Usage Examples

### Basic Quest Tracking
```kether
# Start tracking when quest is accepted
bhquest track
```

### Cancel Quest Tracking
```kether
# Cancel tracking when quest is completed
bhquest track cancel

# Or cancel tracking under specific conditions
if player data "quest_failed" == true then {
    bhquest track cancel
}
```

The `bhquest` action provides intuitive visual tracking functionality for the quest system, helping players better manage and complete quests.