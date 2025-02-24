---
tag: ["Vanilla"]
---

# Place Block

Triggers when a player places a specified block.

::: tabs

@tab id

`place block`

@tab Data

## type <Badge text="Required" type="tip"/>

- Type: `string`
- Description: Block Id

@tab Condition

## place-block

id: `yui-place-block` / `place-block`

Syntax:
- `place-block total-amount` returns the total number of blocks placed.

@tab Variable

## type
Returns the name of the block type placed.

@tab Example

```yaml
- type: "place block"
  data:
    type: "stone"
  condition: |-
    check place-block total-amount == 10
  then: |-
    tell inline color "&aYou have placed {{ &type }} blocks * {{ &total-amount }} times"
```

::: 