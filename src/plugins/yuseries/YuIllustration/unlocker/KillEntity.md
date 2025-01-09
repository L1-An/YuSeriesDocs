---
tag: ["Vanilla"]
---

# Kill Entity

This unlocker will trigger when a player **kills a vanilla entity**.

::: tabs

@tab id

`kill entity`

@tab Data

## type <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The type of the entity killed. See all entity type names [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/entity/EntityType.html).

@tab Condition

## kill-entity

id: `yui-kill-entity` / `kill-entity`

Syntax:
- `kill-entity total-amount` returns the total number of kills.
- `kill-entity name` returns the name of the entity killed.

@tab Variable

## type
Returns the name of the killed entity type

## name
Returns the name of the killed entity

@tab Example

```yaml
- type: "kill entity"
  data:
    type: "ZOMBIE"
  condition: |-
    check kill-entity total-amount == 5
```

::: 