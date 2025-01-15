---
title: Reward Configuration
order: 3
---

**YuIllustration**'s reward module allows you to easily configure rewards for players after **unlocking illustrations** or **fully unlocking categories**.

## Introduction

Rewards include: 
- Executing Kether scripts
- Receiving attribute point rewards (see [supported plugins](../compat/attribute/))

## Configuration Details

| Item  | Value Type | Description |
| :--  | :---- | :-- |
| `content` | `string` | Script executed after unlocking the entry |
| `compat`  | `list<map>` | Rewards for supported plugins   |

Example configuration:
```yaml
example-entry:
  # ...
  reward:
    content: |-
      command inline "give {{ sender }} diamond 1" as console
      tell color inline "&eCongratulations! &aYou have unlocked &e{{ entry }} &a!"
    compat:
      mmocore:
        - attribute: strength
          amount: 1
      mythiclib:
        - attribute: damage
          amount: 1
      sortilege:
        - attribute: attack_damage
          amount: 1
```

### Supported Plugins for Reward Configuration
Currently supported plugins for rewards are:
- [Sortilege](../compat/attribute/Sortilege.md)
- [MMOCore](../compat/attribute/MMOCore.md)
- [MythicLib(MMOItems)](../compat/attribute/MythicLib.md)

Check the corresponding plugin's interface for detailed reward configuration and instructions.