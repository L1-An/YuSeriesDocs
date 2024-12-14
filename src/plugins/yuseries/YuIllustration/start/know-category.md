---
title: Understanding Categories
dir:
  order: 2
---

The YuIllustration plugin uses a category management system, allowing you to better organize and display different types of illustration content.

## Introduction

Categories are the **basic unit** of the illustration, and any entry must rely on a category to exist.  
You can configure categories in the `./category.yml` file.  
Each category has a unique id, which cannot be duplicated.

### Configuration Items

::: tabs

@tab Basic Settings

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `show` | `boolean` | Whether to display in the UI |
| `order` | `int` | Display position in the UI, the smaller the number, the more forward it is |
| `name` | `string` | Category name |

Example:
```yaml
example-category:
  show: true
  order: 0
  name: "Example Category"
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
example-category:
  # ...
  icon:
    material: WOODEN_SWORD
    name: "&6Default Category"
    custom-model-data: 10001
    shiny: true
    lore:
      - "&7This is a default category"
  # ...
```

@tab Reward Settings

The following content belongs to the `reward` section

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `content` | `string` | Script executed after fully unlocking the category |
| `compat` | `list<map>` | Rewards for compatible plugins |

Compatible plugin reward configuration:  
Currently only supports **MMOCore** and **MythicLib** plugins.  
If you need other plugins, you can [contact me](https://discord.com/invite/SzPBHGttaR) to add them.

| Item | Value Type | Description |
| :--- | :--- | :--- 
| `attribute` | `string` | Attribute of the compatible plugin |
| `amount` | `int` | Attribute value |

Example:  
```yaml
example-category:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1"
      tell color inline "&eCongratulations! &aYou have fully unlocked the category &e{{ &category }} &a!"
    compat:
      mmocore:
        - attribute: "strength"
          amount: 5
        - attribute: "dexterity"
          amount: 5
      mythiclib:
        - attribute: "damage"
          amount: 5
        - attribute: "defense"
          amount: 5
```
::: 