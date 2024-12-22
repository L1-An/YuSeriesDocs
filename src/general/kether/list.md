---
title: Common Public Statements
order: 2
---

::: tip

Content wrapped in <span style="color: green;">**[]**</span> is optional input, and content wrapped in <span style="color: red;">**<>**</span> is required input.

:::

The commonly used public statements are as follows:

## tell <badge text="Public Statement" type="tip"/>

> Send a message

Standard format:

```kether
tell <action>
```

Example:

```kether
tell color "&aHello, Kether!"
```

## command <badge text="Public Statement" type="tip"/>

> Execute a command

Standard format:

```kether
command <action> [as <player/op/console>]
```

Example:

```kether
command inline "give {{ sender }} diamond 1" as op
```

## actionbar <badge text="Public Statement" type="tip"/>

> Send an action bar message

Standard format:

```kether
actionbar <action>
```

Example:

```kether
actionbar "&aHello, Kether!"
``` 