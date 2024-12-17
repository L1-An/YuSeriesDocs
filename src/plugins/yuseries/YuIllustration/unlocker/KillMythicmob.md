---
tag: ["MythicMobs"]
---

# Kill MythicMob

This unlocker will trigger when a player **kills a MythicMob entity**.

::: tabs

@tab id

`kill mythic mob`

@tab Data

## id <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The id of the MythicMob.

@tab Condition

## mythic-mob

id: `yui-mythic-mob` / `mythic-mob`

Syntax:
- `mythic-mob total-amount` returns the total number of kills.
- `mythic-mob id` returns the id of the entity killed.
- `mythic-mob name` returns the name of the entity killed.

@tab Example

```yaml
- type: "kill mythic mob"
  data:
    id: "SkeletalKnight"
  condition: |-
    check mythic-mob total-amount == 5
```

::: 