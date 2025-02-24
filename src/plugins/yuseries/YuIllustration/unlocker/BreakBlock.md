---
tag: ["Vanilla"]
---

# Break Block

Triggers when a player breaks a specified block.

::: tabs

@tab id

`break block`

@tab Data

## type <Badge text="Required" type="tip"/>

- Type: `string`
- Description: Block Id

@tab Condition

## break-block

id: `yui-break-block` / `break-block`

Syntax:
- `break-block total-amount` returns the total number of blocks broken.

@tab Variable

## type
Returns the name of the block type broken.

@tab Example

```yaml
- type: "break block"
  data:
    type: "stone"
  condition: |-
    check break-block total-amount == 10
  then: |-
    tell inline color "&aYou have destroyed {{ &type }} blocks * {{ &total-amount }} times"
```

::: 