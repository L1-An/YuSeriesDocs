---
title: Understanding Entries
dir:
  order: 3
---

The YuIllustration plugin uses an entry system to manage specific collection items, allowing players to track and complete various collection goals.

## Introduction

Entries are the **smallest unit** of the illustration and must be attached to a category.  
Entries can be configured in the `./entry/*.yml` files.  
Each entry within a category has a unique id, which cannot be duplicated.  

::: tip
Not all entries for a corresponding category need to be configured in one file. You just need to correctly configure the category to which the entry belongs.  
However, our suggestion is to configure **entries of each category** in **the same category**, making it easier to manage.
:::

### Configurations

::: tabs

@tab Basic Settings

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `category` | `string` | ID of the category it belongs to |
| `show` | `boolean` | Whether to display in the UI |
| `order` | `int` | Display position in the UI, the smaller the number, the more forward it is |
| `name` | `string` | Entry name |

Example: 
```yaml
example-entry:
  category: "default"
  show: true
  order: 0
  name: "Example Entry"
  # ...
```

@tab Icon Settings

The following content belongs to the `icon` section

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `material` | `string` | Minecraft item material used |
| `name` | `string` | Name displayed on the icon |
| `custom-model-data` | `int` | Custom model data |
| `shiny` | `boolean` | Whether to add an enchanted glow effect |
| `lore` | `list<string>` | Description text of the icon |

Example:
```yaml
example-entry:
  # ...
  icon:
    material: DIAMOND
    name: "&bDiamond Entry"
    custom-model-data: 10001
    shiny: true
    lore:
      - "&7This is an example entry"
  # ...
```

@tab Unlockers

The following content belongs to the `unlock` section

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `type` | `string` | Unlocker type (click [here](../unlocker/README.md) to see all unlockers) |
| `data` | `Data` | Unlocker related data, different for each type |
| `condition` | `string` | Unlocker condition script, supported statements vary by type |
| `then` | `string` | Script executed after the unlocker is completed |

Example:
```yaml
example-entry:
  # ...
  unlock:
    - type: "pickup item"
      data:
        name: "example"
      condition: |-
        check yui-item total-amount == 5
      then: |-
        yui-item take
  # ...
```

@tab Reward Settings

The following content belongs to the `reward` section

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `content` | `string` | Script executed after unlocking the entry |
| `compat` | `list<map>` | Rewards for compatible plugins |

Compatible plugin reward configuration:  
Currently only supports **MMOCore** and **MythicLib** plugins.  
If you need other plugins, you can [contact me](https://discord.com/invite/SzPBHGttaR) to add them.

Example:
```yaml
example-entry:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1"
      tell color inline "&eCongratulations! &aYou have unlocked &e{{ entry }} &a!"
    compat:
      mmocore:
        - attribute: "strength"
          amount: 1
      mythiclib:
        - attribute: "damage"
          amount: 1
```

:::

:::tip
The unlocking conditions and rewards for entries can be freely combined to create a rich collection experience.
:::

