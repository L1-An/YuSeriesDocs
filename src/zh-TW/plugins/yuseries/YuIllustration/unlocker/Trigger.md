---
tag: ["Vanilla"]
---

# Trigger

當自定義**觸發事件**被調用時觸發

:::: tabs

@tab id

`trigger`

@tab Condition

## id

- 類型: `string`
- 默認值: `none`
- 描述: 應該匹配的觸發器 id

@tab Goal

## amount <Badge text="可選" type="tip"/>

- 類型: `number`
- 默認值: `1`
- 描述: 觸發器被調用的次數

@tab Example

```yaml
unlock:
  - type: "trigger"
    condition:
      id: "my_custom_trigger"
    goal:
      amount: 1
```

@tab API 使用

你可以通過程序調用這個解鎖器：

**指令:**
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