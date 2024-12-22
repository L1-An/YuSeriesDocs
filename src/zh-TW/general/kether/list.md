---
title: 常用公有語句
order: 2
---

::: note

如果你是中文閱讀者, 那麼可以在[這裡](https://kether.tabooproject.org/list.html)查看內置語句列表.

:::

::: tip

以 <span style="color: green;">**[]**</span> 包裹的内容为可选输入, 以 <span style="color: red;">**<>**</span> 包裹的内容为必须输入

:::

一般常用的公有語句有以下這些:

## tell <badge text="公有語句" type="tip"/>

> 發送訊息

標準格式:

```kether :no-line-numbers
tell <action>
```

示例:

```kether :no-line-numbers
tell color "&aHello, Kether!"
```

## command <badge text="公有語句" type="tip"/>

> 執行指令

標準格式:

```kether :no-line-numbers
command <action> [as <player/op/console>]
```

示例:

```kether :no-line-numbers
command inline "give {{ sender }} diamond 1" as op
```

## actionbar <badge text="公有語句" type="tip"/>

> 發送動作欄訊息

標準格式:

```kether :no-line-numbers
actionbar <action>
```

示例:

```kether :no-line-numbers
actionbar "&aHello, Kether!"
```