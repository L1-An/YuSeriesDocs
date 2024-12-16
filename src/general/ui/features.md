---
title: Features
icon: pajamas:issue-type-feature-flag
dir:
  order: 2
---

`YuSeries` plugins' UI module provides some easy-to-use features to make your UI more rich.  

::: note

If you have good ideas, please [contact us](https://discord.com/invite/SzPBHGttaR) to add more default features.

:::

::: tabs

@tab Close

Click to close the UI

### No parameters

### Usage example
```yaml
'#':
  name: "關閉"
  feature:
    - ==: Close
```

@tab Head

Specify the head style when building

### Parameters

#### head
Head id  

You can fill in `{{ player head }}` or `player`, which will display the player's head who opens the interface.  
Or fill in a **base64 encoded** head, you can find all heads and their base64 codes [here](https://minecraft-heads.com/).

### Usage example
```yaml
'#':
  material: PLAYER_HEAD
  name: "This is the player's head who opens this ui"
  feature:
    - ==: Head
      head: player # Fill in {{ player head }} or player to display the player's head who opens this ui
'@':
  material: PLAYER_HEAD
  name: "This is a custom head"
  feature:
    - ==: Head
      head: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzkxMjNlMmE0MjA0NmYxZjczOTA2ZTlhMGI2MjExNDE5MTRjNjIyMDE4NDg2YzY2MmIzY2VhMDk4ZDg3YjIyNyJ9fX0="
```

@tab Kether

Click to execute one or a series of Kether scripts

### Parameters

#### scripts
Script list, even if there is only one, it needs to be filled in as a list

### Usage example
```yaml
'#':
  name: "Say hello and give 1 diamond"
  feature:
    - ==: Kether
      scripts:
        - 'tell color inline "&aHello {{ sender }}"'
        - 'command inline "give {{ sender }} diamond"' as console
```

<!-- @tab Command

Click to execute one or a series of commands

Usage example:
```yaml
'#':
  name: "Say hello and give 1 diamond"
  feature:
   - ==: Command
     commands:
       - "
``` -->

:::