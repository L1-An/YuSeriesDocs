---
tag: ["CMI"]
---

# CMI Play Time

When a player's game time reaches a specified time, the unlocker will trigger.

:::: tabs

@tab id

`cmi play time`

@tab Data

## time <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: Game time
- Special notes:
  - Supported time units: `s` seconds, `m` minutes, `h` hours, `d` days, `w` weeks, `M` months, `y` years
  - Supports multiple time units, for example: `4d6h30m`

::: tip

Please note that the time unit is **case sensitive**.

:::

@tab Condition

No additional kether conditions are available.

@tab Example

```yaml
- type: "cmi play time"
  data:
    time: 1000s # The player's online time must exceed 1000 seconds to unlock, supports `s` seconds, `m` minutes, `h` hours, `d` days, `w` weeks, `M` months, `y` years
  # No related kether actions
  condition: ""
```

::::