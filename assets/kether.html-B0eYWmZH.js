import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,f as i,e,b as s,d as r,a as o,r as d,o as h}from"./app-IazN7LZO.js";const c={};function p(y,t){const a=d("RouteLink");return h(),n("div",null,[i("p",null,[t[1]||(t[1]=i("strong",null,"YuIllustration",-1)),t[2]||(t[2]=e(" provides some additional Kether actions. If you don't know what Kether is, please check ")),s(a,{to:"/general/kether/"},{default:r(()=>t[0]||(t[0]=[e("here")])),_:1}),t[3]||(t[3]=e("."))]),t[4]||(t[4]=o(`<h2 id="public-actions" tabindex="-1"><a class="header-anchor" href="#public-actions"><span>Public Actions</span></a></h2><p>These actions can be used in any plugin that supports Kether.</p><h3 id="toast" tabindex="-1"><a class="header-anchor" href="#toast"><span>toast</span></a></h3><p>Send an achievement message to the player (displayed in the top right corner). Requires <a href="https://www.spigotmc.org/resources/ultimateadvancementapi-1-15-1-21-4.95585/" target="_blank" rel="noopener noreferrer">UltimateAdvancementAPI</a>.</p><div class="language-kether line-numbers-mode" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>toast &lt;material&gt; &lt;text&gt; [data &lt;key:value&gt;] [by &lt;frame:challenge/task/goal&gt;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Parameter Details</strong>:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;"><code>material</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Material name</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>text</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Display content</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>data</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Custom data (NBT)</td><td style="text-align:left;">❌</td></tr><tr><td style="text-align:left;"><code>by</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Type of message (challenge/task/goal)</td><td style="text-align:left;">❌</td></tr></tbody></table><hr><h2 id="private-actions" tabindex="-1"><a class="header-anchor" href="#private-actions"><span>Private Actions</span></a></h2><p>These actions can only be used in YuIllustration.</p><h3 id="yui-craft-item" tabindex="-1"><a class="header-anchor" href="#yui-craft-item"><span>yui-craft-item</span></a></h3><p>Used only in entry condition configuration. Used to get the number of items crafted by the player.</p><div class="language-kether line-numbers-mode" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yui-craft-item total-amount</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Parameter Details</strong>:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;"><code>total-amount</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">Total number of items crafted</td><td style="text-align:left;">✅</td></tr></tbody></table><h3 id="yui-item" tabindex="-1"><a class="header-anchor" href="#yui-item"><span>yui-item</span></a></h3><p>Used only in entry condition configuration. Used to handle items picked up by the player.</p><div class="language-kether line-numbers-mode" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yui-item &lt;action:take/total-amount/pick-amount&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Parameter Details</strong>:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;"><code>action</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Action type (take/total-amount/pick-amount)</td><td style="text-align:left;">✅</td></tr></tbody></table><ul><li>take removes the items picked up this time from the inventory</li><li>total-amount total number of items picked up</li><li>pick-amount number of items picked up this time</li></ul><h3 id="yui-kill-entity" tabindex="-1"><a class="header-anchor" href="#yui-kill-entity"><span>yui-kill-entity</span></a></h3><p>Used only in entry condition configuration. Used to get information about entities killed by the player.</p><div class="language-kether line-numbers-mode" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yui-kill-entity total-amount</span></span>
<span class="line"><span>yui-kill-entity entity name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parameter Details</strong>:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;"><code>total-amount</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">Total number of entities killed</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>entity name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the entity killed</td><td style="text-align:left;">✅</td></tr></tbody></table><h3 id="yui-mythic-mob" tabindex="-1"><a class="header-anchor" href="#yui-mythic-mob"><span>yui-mythic-mob</span></a></h3><p>Used only in entry condition configuration. Used to get information about MythicMobs entities killed by the player.</p><div class="language-kether line-numbers-mode" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>yui-mythic-mob total-amount</span></span>
<span class="line"><span>yui-mythic-mob id</span></span>
<span class="line"><span>yui-mythic-mob name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Parameter Details</strong>:</p><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th><th style="text-align:left;">Required</th></tr></thead><tbody><tr><td style="text-align:left;"><code>total-amount</code></td><td style="text-align:left;"><code>int</code></td><td style="text-align:left;">Total number of MythicMobs killed</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>id</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">ID of the MythicMobs killed</td><td style="text-align:left;">✅</td></tr><tr><td style="text-align:left;"><code>name</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Name of the MythicMobs killed</td><td style="text-align:left;">✅</td></tr></tbody></table>`,31))])}const m=l(c,[["render",p],["__file","kether.html.vue"]]),b=JSON.parse(`{"path":"/plugins/yuseries/YuIllustration/basic/kether.html","title":"Kether","lang":"en-US","frontmatter":{"title":"Kether","order":5,"description":"YuIllustration provides some additional Kether actions. If you don't know what Kether is, please check . Public Actions These actions can be used in any plugin that supports Ket...","head":[["link",{"rel":"alternate","hreflang":"zh-tw","href":"https://docs.yuseries.org/zh-TW/plugins/yuseries/YuIllustration/basic/kether.html"}],["meta",{"property":"og:url","content":"https://docs.yuseries.org/plugins/yuseries/YuIllustration/basic/kether.html"}],["meta",{"property":"og:site_name","content":"YuSeries Docs"}],["meta",{"property":"og:title","content":"Kether"}],["meta",{"property":"og:description","content":"YuIllustration provides some additional Kether actions. If you don't know what Kether is, please check . Public Actions These actions can be used in any plugin that supports Ket..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-TW"}],["meta",{"property":"og:updated_time","content":"2025-01-15T21:41:16.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-15T21:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Kether\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-01-15T21:41:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"L1An\\",\\"url\\":\\"https://github.com/l1-an\\"}]}"]]},"headers":[{"level":2,"title":"Public Actions","slug":"public-actions","link":"#public-actions","children":[{"level":3,"title":"toast","slug":"toast","link":"#toast","children":[]}]},{"level":2,"title":"Private Actions","slug":"private-actions","link":"#private-actions","children":[{"level":3,"title":"yui-craft-item","slug":"yui-craft-item","link":"#yui-craft-item","children":[]},{"level":3,"title":"yui-item","slug":"yui-item","link":"#yui-item","children":[]},{"level":3,"title":"yui-kill-entity","slug":"yui-kill-entity","link":"#yui-kill-entity","children":[]},{"level":3,"title":"yui-mythic-mob","slug":"yui-mythic-mob","link":"#yui-mythic-mob","children":[]}]}],"git":{"createdTime":1736977276000,"updatedTime":1736977276000,"contributors":[{"name":"L1-An","username":"L1-An","email":"shiyu46@icloud.com","commits":1,"url":"https://github.com/L1-An"}]},"readingTime":{"minutes":1.13,"words":340},"filePathRelative":"plugins/yuseries/YuIllustration/basic/kether.md","localizedDate":"January 15, 2025","autoDesc":true,"excerpt":"<p><strong>YuIllustration</strong> provides some additional Kether actions. If you don't know what Kether is, please check <a href=\\"/general/kether/\\" target=\\"_blank\\">here</a>.</p>\\n<h2>Public Actions</h2>\\n<p>These actions can be used in any plugin that supports Kether.</p>\\n<h3>toast</h3>\\n<p>Send an achievement message to the player (displayed in the top right corner). Requires <a href=\\"https://www.spigotmc.org/resources/ultimateadvancementapi-1-15-1-21-4.95585/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">UltimateAdvancementAPI</a>.</p>"}`);export{m as comp,b as data};
