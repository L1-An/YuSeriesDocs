---
title: Overview
dir:
  order: 1
---

## Introduction

`YuIllustration` provides a fully customizable GUI system. For more information, please refer to [General Technology-GUI](../../../../general/ui/overview.md)

::: tip
Note that each category uses a separate GUI, so you can configure different GUI interfaces for different categories, which may also implement some interesting features, such as achievement systems.
:::

## Provided features

### MainUI

In `MainUI`, the following features are provided:

::: tabs

@tab element

Icons with this feature will be rendered as a category button in the main ui, clicking which will jump to the corresponding category ui.

```yaml
- ==: Functional
  keyword: Main:element
```

:::

### CategoryUI

In `CategoryUI`, the following features are provided:

::: tabs

@tab element

Icons with this feature will be rendered as an entry button in the category ui, displaying the entry icon configured in the [entry configuration file](../basic/know-entry.md).

```yaml
- ==: Functional
  keyword: Category:element
```

@tab main

Icons with this feature can be clicked to return to the main ui.

```yaml
- ==: Functional
  keyword: Category:main
```

:::