---
tag: ["Vanilla"]
---

# Trigger

This unlocker will trigger when a custom **trigger event** is called.

:::: tabs

@tab id

`trigger`

@tab Condition

## id

- Type: `string`
- Default: `none`
- Description: The trigger id that should match.

@tab Goal

## amount <Badge text="Optional" type="tip"/>

- Type: `number`
- Default: `1`
- Description: The number of times the trigger should be called.

@tab Example

```yaml
unlock:
  - type: "trigger"
    condition:
      id: "my_custom_trigger"
    goal:
      amount: 1
```

@tab API Usage

You can trigger this unlocker programmatically:

**Command:**
```
/yuillustrationapi trigger <id>
```

**Kether:**
```
yui-trigger "my_custom_trigger"
```

**Java API:**
```java
ITrigger.trigger(player, "my_custom_trigger");
```

::::