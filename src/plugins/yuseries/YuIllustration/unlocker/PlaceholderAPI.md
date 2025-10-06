---
tag: ["Vanilla"]
---

# Placeholder API

Triggered when a player's `papi` variable meets the specified condition

::: tabs

@tab id

`placeholder api`

@tab Condition

No Condition available

@tab Goal

## key <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: Variable name

## value <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: Required variable value

@tab Example

```yaml
unlock:
  - type: "placeholder api"
    goal:
      key: "%player_level%" # PAPI variable name, here specified as player level, must include %
      value: "5" # Unlocked when player level reaches 5
```

:::
