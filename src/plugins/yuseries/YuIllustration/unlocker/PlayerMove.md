---
tag: ["Vanilla"]
---

# Player Move

Triggers when a player moves to a specified location.

::: tabs

@tab id

`player move`

@tab Data

## position <Badge text="Required" type="tip"/>

- Type: `string`
- Description: Coordinates

@tab Condition

No additional kether conditions are available.

@tab Variable

No additional variables are available.

@tab Example

```yaml
- type: "player move"
  data:
    position: "world 0 0 0" # Unlocks when walking to the specified location
  # No related kether actions
  condition: ""
  then: |-
    tell inline color "&aYou have reached the target location!"
```

::: 