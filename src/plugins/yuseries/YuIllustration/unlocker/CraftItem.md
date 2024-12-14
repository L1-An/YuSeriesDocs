---
tag: ["vanilla"]
---

# Craft Item

This unlocker will trigger when a player **crafts a vanilla item**.

::: tabs

@tab Id

`craft item`

Example:

```yaml
- type: "craft item"
  data:
    type: "IRON_SWORD"
  condition: |-
    check craft-item total-amount == 5
```

@tab Data

Supported custom data

| Name | Type | Description |
| --- | --- | --- |
| `type` | `string` | Type of item crafted, see all item type names [here](https://bukkit.windit.net/javadoc/org/bukkit/Material.html) |

@tab Condition

Supported additional condition statements

## craft-item

id: `yui-craft-item` / `craft-item`

`craft-item total-amount` returns the total number of the crafted item

::: 