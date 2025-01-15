---
title: Kether
order: 5
---

**YuIllustration** provides some additional Kether actions. If you don't know what Kether is, please check [here](../../../../general/kether/README.md).

## Public Actions
These actions can be used in any plugin that supports Kether.

### toast

Send an achievement message to the player (displayed in the top right corner). Requires [UltimateAdvancementAPI](https://www.spigotmc.org/resources/ultimateadvancementapi-1-15-1-21-4.95585/).

```kether no-line-numbers
toast <material> <text> [data <key:value>] [by <frame:challenge/task/goal>]
```

**Parameter Details**:

| Parameter | Type | Description | Required |
| :-- | :-- | :-- | :-- |
| `material` | `string` | Material name | ✅ |
| `text` | `string` | Display content | ✅ |
| `data` | `string` | Custom data (NBT) | ❌ |
| `by` | `string` | Type of message (challenge/task/goal) | ❌ |

---

## Private Actions
These actions can only be used in YuIllustration.

### yui-craft-item
Used only in entry condition configuration. Used to get the number of items crafted by the player.

```kether no-line-numbers
yui-craft-item total-amount
```

**Parameter Details**:

| Parameter | Type | Description | Required |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | Total number of items crafted | ✅ |

### yui-item
Used only in entry condition configuration. Used to handle items picked up by the player.

```kether no-line-numbers
yui-item <action:take/total-amount/pick-amount>
```

**Parameter Details**:

| Parameter | Type | Description | Required |
| :-- | :-- | :-- | :-- |
| `action` | `string` | Action type (take/total-amount/pick-amount) | ✅ |

- take removes the items picked up this time from the inventory
- total-amount total number of items picked up
- pick-amount number of items picked up this time

### yui-kill-entity
Used only in entry condition configuration. Used to get information about entities killed by the player.

```kether no-line-numbers
yui-kill-entity total-amount
yui-kill-entity entity name
```

**Parameter Details**:

| Parameter | Type | Description | Required |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | Total number of entities killed | ✅ |
| `entity name` | `string` | Name of the entity killed | ✅ |

### yui-mythic-mob
Used only in entry condition configuration. Used to get information about MythicMobs entities killed by the player.

```kether no-line-numbers
yui-mythic-mob total-amount
yui-mythic-mob id
yui-mythic-mob name
```

**Parameter Details**:

| Parameter | Type | Description | Required |
| :-- | :-- | :-- | :-- |
| `total-amount` | `int` | Total number of MythicMobs killed | ✅ |
| `id` | `string` | ID of the MythicMobs killed | ✅ |
| `name` | `string` | Name of the MythicMobs killed | ✅ | 