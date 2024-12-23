---
title: Common Public Statements
order: 2
---

::: tip

Content wrapped in <span style="color: green;">**[]**</span> is optional input, and content wrapped in <span style="color: red;">**<>**</span> is required input.  
The content after the colon `:` is the default value or description.

:::

The commonly used public statements are as follows:

## tell <badge text="Public Statement" type="tip"/> <badge text="Built-in" type="important"/>

> Send a message

Standard format:

```kether
tell <action>
```

Example:

```kether
tell color "&aHello, Kether!"
```

## command <badge text="Public Statement" type="tip"/> <badge text="Built-in" type="important"/>

> Execute a command

Standard format:

```kether
command <action> [as <player/op/console>]
```

Example:

```kether
command inline "give {{ sender }} diamond 1" as op
```

## actionbar <badge text="Public Statement" type="tip"/> <badge text="Built-in" type="important"/>

> Send an action bar message

Standard format:

```kether
actionbar <action>
```

Example:

```kether
actionbar "&aHello, Kether!"
```


## bossbar <badge text="Public Statement" type="tip"/> <badge text="Only YuSeries Plugin" type="important"/>

> Send bossbar message

Standard format:

```kether :no-line-numbers
bossbar <id:unique> <title> [-color <color:WHITE>] (-style <style:SOLID>) (with <tick:20>)
```

Example:

Send a bossbar message with the content "Hello, Kether!", color white, style solid, and duration 20 ticks:

```kether :no-line-numbers
bossbar "test" "Hello, Kether!" -color WHITE -style SOLID with 20
```