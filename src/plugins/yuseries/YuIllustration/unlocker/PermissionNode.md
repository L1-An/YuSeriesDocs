---
tag: ["Vanilla"]
---

# Permission Node

When a player has a certain permission node.

::: tabs

@tab id

`permission node`

@tab Data

## node <Badge text="Required" type="tip" />

- Type: `string`
- Default: `none`
- Description: The permission node.

@tab Condition

No additional kether actions are available.

@tab Example

```yaml
- type: "permission node"
  data:
    node: "example.permission" # When the player has this permission, the unlocker will trigger
  # No related kether actions
  condition: ""
```

:::