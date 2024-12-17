---
title: Overview
icon: grommet-icons:overview
dir:
  order: 1
---

## Introduction

`YuSeries` plugins' UI module allows you to customize the UI completely, you can add new icons, customize the UI style, support `CustomModelData`, and support custom heads.  

::: note
Thanks to [`TabooLib`](https://github.com/TabooLib/TabooLib) and **self-developed library**, all `YuSeries` plugins' UI configuration uses a unified format, which can greatly reduce your learning cost.
:::

## Learning Configuration

The format of the UI configuration file is as follows:

```yaml
title: "xxx"

shape:
  - '    S    '
  - '#P@#@#@N#'
  - '####B####'

templates:
  '#':
    material: BLACK_STAINED_GLASS_PANE
    name: " "
  
  # ...
```

As you can see, a configuration file consists of three parts:

::: tabs

@tab title

### The title of the UI, displayed at the top.  

Supports **color symbols**, uses **papi variables** and **Kether statement parsing**.

@tab shape

### The shape layout of the UI, the content allows you to define any abstract characters.  

Each abstract character is **limited to one character**, **up to 9 characters** per line, corresponding to the first to ninth slots of the interface.  
`shape` allows **up to 6 lines**, corresponding to the maximum number of rows in the chest.
If you want to leave empty slots, just use spaces to replace the corresponding positions.  
Then, configure the specific abstract characters in the `templates` section.

For example, to build a single-line interface with only the **5th slot filled**, you can configure it as follows:
```yaml
shape:
  - '    S    '
```

@tab templates

### Icons in the UI, you can customize the material, name, model data, etc.

In the `templates` section, you **must** configure all abstract characters defined in `shape`, otherwise the UI will not open.

For example, in the example configuration above, we defined the abstract characters `S`, `#`, `P`, `N`, `@`, `B`, so we must configure these characters in the `templates` section.

A complete abstract character configuration is as follows:
```yaml
templates:
  'P':
    material: ARROW
    name: "Previous"
    lore:
      - "Click to switch to the previous page"
    custom-model-data: 10001
    shiny: true # Whether to flash, that is, with enchanted effect.
    feature:
      - ==: Functional
        keyword: Previous
```

A UI icon configuration must contain `material` to run normally, see [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Material.html) for the list of all Materials.  

Each plugin provides different feature functional keywords, you can check them in the corresponding plugin's wiki.

See [here](./features.md) for the **default provided** features.

:::