---
title: goto-self Action
order: 5
---

# goto-self Action

The `goto-self` action is used to reopen the current dialogue, mainly for refreshing dialogue state or reloading dialogue content.

## Basic Syntax

```kether
goto-self
```

## Function Description

The `goto-self` action belongs to the `chemdah-conversation` namespace, it will:

1. **Reopen Current Dialogue**: Restart dialogue session using the same dialogue source and player
2. **Maintain Dialogue Context**: Preserve original dialogue environment and settings