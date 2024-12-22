---
title: Getting Started
order: 1
---

## Basic Concepts

Before formally learning `Kether`, we need to understand some of its basic concepts.

It is a scripting language based on statements, each statement has its own parameters, and each line is a statement.

Therefore, you will find the statements provided by various plugins in their documentation, and through those statements, you can achieve the corresponding functions of the plugin.

Additionally, `Kether` is divided into **public statements** and **private statements**. Public statements mean you can use them in any plugin that supports `Kether`, while private statements mean you can only use them in the plugin that provides these statements, as they are generally closely related to the plugin's functionality.

## Example

Let's take the entry unlock reward script of `YuIllustration` as an example to understand the syntax of `Kether`.

The default configuration is as follows:

```yaml
reward:
  # kether script
  content: |-
    command inline "give {{ sender }} diamond 1" as op
    tell color inline "&aYou have unlocked an entry named &e{{ &entry }}"
```

### Analysis

The content under the `content` key is the Kether script triggered after unlocking an entry.  
The example configuration contains two Kether statements, `command` and `tell`.  
Let's analyze these two statements in detail:

#### command

```kether
command inline "give {{ sender }} diamond 1" as op
```

For this statement, `command` is the statement name, representing the execution of a command, which is a built-in statement of `TabooLib`. `inline` is an inline statement used to parse parameters such as **player name**, and `as op` is an additional parameter of the statement, representing the identity executing the command. It provides three identities by default: `op`, `member`, `player`, representing administrator, member, and player, respectively. If not specified, it defaults to player.

So, `inline "give {{ sender }} diamond 1" as op` is the parameter of the `command` statement.

In addition to built-in variables, `Kether` also supports parsing **any PAPI variable**, used as follows:

```kether
command inline "give {{ papi %player_name% }} diamond 1" as op
```

---

#### tell

```kether
tell color inline "&aYou have unlocked an entry named &e{{ &entry }}"
```

For this statement, `tell` is the statement name, representing sending a message. `color` is a color conversion statement that can convert color codes like `&a` into color characters. `inline` is still an inline statement used to parse parameters such as **entry name**.

However, `color` can only convert color codes into color characters and does **not have** the function of outputting, so `tell` is used for output. Therefore, the entire line `color inline "&aYou have unlocked an entry named &e{{ &entry }}"` is the parameter of `tell`.

---

#### inline

The function of the `inline` statement is only to return the corresponding variable for actions wrapped in `{{ }}` within the text. Therefore, `{{ sender }}` will be parsed as the player name executing the command. 