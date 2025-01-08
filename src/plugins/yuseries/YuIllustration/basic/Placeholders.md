---
title: PAPI Placeholders
order: 4
---

YuIllustration provides you with various PlaceholderAPI placeholders.

## List

### unlocked

> Returns the number of entries unlocked by the player in a **specific category** or **total**.

`yui_unlocked_[category/total]`

Examples:

- `yui_unlocked_total` returns the total number of entries unlocked by the player.
- `yui_unlocked_default` returns the number of entries unlocked by the player in the `default` category.

### total

> Returns the number of entries in a **specific category** or **total**.

`yui_total_[category/total]`

Examples:

- `yui_total_total` returns the total number of entries.
- `yui_total_default` returns the number of entries in the `default` category.

### percent

> Returns the unlock percentage in a **specific category** or **total**.

`yui_percent_[category/total]`

Examples:

- `yui_percent_total` returns the total unlock percentage.
- `yui_percent_default` returns the unlock percentage in the `default` category.

### isunlocked

> Returns whether the player has unlocked a **specific entry in a specific category**.

`yui_isunlocked_[category]_[entry]`

Examples:

- `yui_isunlocked_default_example` returns whether the player has unlocked the `example` entry in the `default` category.

### bar

> Returns the unlock percentage in a **specific category** or **total** as a **progress bar**.

`yui_bar_[category/total]`

Examples:

- `yui_bar_default` returns the unlock percentage in the `default` category.
- `yui_bar_total` returns the total unlock percentage.