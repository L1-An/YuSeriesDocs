---
title: i18n Module
icon: meteor-icons:language
order: 1
---

## Overview

Thanks to the language module of **TabooLib**, the entire `YuSeries` plugin series supports an international multi-language system.  
This means that the plugin can **automatically** send messages in the corresponding language based on the player's selected client language.

::: tip

Of course, this requires you to configure the corresponding language files. If the plugin cannot find the corresponding language file, it will send messages in the default language.

:::

Generally, the `YuSeries` plugin series comes with default language files for `en_US`, `zh_CN`, `zh_TW`, and `zh_HK`.  
You can check how to extend files for other languages in subsequent articles.

## Modifying Default Language Files

In the `./plugins/pluginName/lang` directory, find the file for the corresponding language, open it, and modify the relevant information.

::: important

Please do not forget to save and reload the plugin after making changes!  
Also, do not delete the default language nodes, or messages will not be sent correctly!

:::

## Extending Language Files

Still in the `./plugins/pluginName/lang` directory, create a new `yml file` named with the `Country Locale Code`, such as French `fr_FR.yml`.  
Add **all** language nodes from the default language into the file, and then translate the content.

::: tip

You can find a list of global language codes [here](https://saimana.com/list-of-country-locale-code/).
:::
