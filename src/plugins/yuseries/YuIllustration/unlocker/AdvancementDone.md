---
tag: ["Vanilla"]
---

# Advancement Done

When the player completes the specified advancement, it triggers.

::: tabs

@tab id

`advancement done`

@tab Data

## key <Badge text="Required" type="tip" />

- Type: `string`
- Description: Advancement key, can be obtained through [API commands](../start/command.md)

@tab Condition

No additional kether conditions are available

@tab Example

```yaml
- type: "advancement done"
  data:
    key: "minecraft:story/iron_tools"
  # No related kether actions
  condition: ""
```

:::