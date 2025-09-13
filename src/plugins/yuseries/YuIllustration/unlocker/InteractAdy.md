---
tag: ["Adyeshach"]
---

# Interact Ady

This unlocker will trigger when a player **interacts with an Adyeshach entity**.

:::: tabs

@tab id

`interact ady`

@tab Condition

## position <Badge text="Optional" type="tip"/>

- Type: `string`
- Default: `none`
- Description: Position restriction where the interaction must occur.

## id <Badge text="Optional" type="tip"/>

- Type: `string` or `list`
- Default: `none`
- Description: The ID(s) of the Adyeshach entity to interact with.

## type <Badge text="Optional" type="tip"/>

- Type: `string` or `list`
- Default: `none`
- Description: The entity type(s) to interact with.

@tab Goal

## amount <Badge text="Optional" type="tip"/>

- Type: `number`
- Default: `1`
- Description: Number of times the entity should be interacted with.

@tab Variable

## id
Returns the ID of the interacted Adyeshach entity

@tab Example

```yaml
unlock:
  - type: "interact ady"
    condition:
      id: "npc_merchant"
    goal:
      amount: 5
```

::::