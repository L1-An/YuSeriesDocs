---
tag: ["Vault"]
---

# Total Money

Triggers when a player has a specified amount of money.

::: tabs

@tab id

`total money`

@tab Data

## amount <Badge text="Required" type="tip"/>

- Type: `number`
- Description: Amount of money

@tab Condition

No additional kether conditions are available.

@tab Variable

No additional variables are available.

@tab Example

```yaml
- type: "total money"
  data:
    amount: 1000 # Triggers when having more than 1000 money
  # No related kether actions
  condition: ""
  then: |-
    tell inline color "&aYou have more than 1000 money!!!"
```

::: 