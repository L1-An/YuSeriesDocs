import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as i,o as n}from"./app-BI0qJ-16.js";const s={};function o(r,e){return n(),a("div",null,e[0]||(e[0]=[i(`<h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><p>在正式學習 <code>Kether</code> 之前, 我們需要先瞭解一些它的基本概念.</p><p>它是以語句為單位的腳本語言, 每個語句帶有自己的參數, 每行為一個語句.</p><p>因此你將會在各個插件文檔中找到它們提供的語句, 通過那些語句, 你可以實現該插件對應的功能.</p><p>另外, <code>Kether</code> 還被分爲<strong>公有語句</strong>與<strong>私有語句</strong>, 公有語句意味著, 你可以在任何支持 <code>Kether</code> 的插件中使用它們, 而私有語句則意味著, 你只能在提供這個語句的插件中使用它們, 私有語句一般是跟插件功能緊緊相關的.</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>我們以 <code>YuIllustration</code> 的條目解鎖獎勵腳本為例, 來瞭解一下 <code>Kether</code> 的語法.</p><p>默認配置是這樣的:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">reward</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # kether 腳本</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  content</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">|-</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    command inline &quot;give {{ sender }} diamond 1&quot; as op</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">    tell color inline &quot;&amp;aYou have unlocked a entry named &amp;e{{ &amp;entry }}&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析"><span>解析</span></a></h3><p><code>content</code> 鍵裡的內容就是解鎖條目後觸發的 Kether 腳本,<br> 示例配置中有兩個 Kether 語句, 分別是 <code>command</code> 和 <code>tell</code>.<br> 接下來詳細分析這兩個語句:</p><h4 id="command" tabindex="-1"><a class="header-anchor" href="#command"><span>command</span></a></h4><div class="language-kether" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>command inline &quot;give {{ sender }} diamond 1&quot; as op</span></span></code></pre></div><p>對於這一個語句, <code>command</code> 是語句名稱, 代表執行指令, 這是 <code>TabooLib</code> 內置的語句, <code>inline</code> 是內聯語句, 用於將<strong>玩家名</strong>等參數解析出來, <code>as op</code> 是語句的額外參數, 代表執行指令的身分, 它默認提供了三種身分: <code>op</code>, <code>member</code>, <code>player</code>, 分別代表管理員, 成員, 玩家. 不填寫則代表玩家.</p><p>所以, <code>inline &quot;give {{ sender }} diamond 1&quot; as op</code> 這一長串都是 <code>command</code> 語句的參數.</p><p>除了內置的變量, <code>Kether</code> 也支持解析<strong>任何 PAPI 變量</strong>, 使用方法為:</p><div class="language-kether" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>command inline &quot;give {{ papi %player_name% }} diamond 1&quot; as op</span></span></code></pre></div><hr><h4 id="tell" tabindex="-1"><a class="header-anchor" href="#tell"><span>tell</span></a></h4><div class="language-kether" data-highlighter="shiki" data-ext="kether" data-title="kether" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>tell color inline &quot;&amp;aYou have unlocked a entry named &amp;e{{ &amp;entry }}&quot;</span></span></code></pre></div><p>對於這個語句, <code>tell</code> 是語句名稱, 代表發送消息, <code>color</code> 是顏色轉換語句, 可以將形如 <code>&amp;a</code> 這樣的顏色代碼轉換成顏色字符, <code>inline</code> 仍然是內聯語句, 用於將<strong>條目名</strong>等參數解析出來.</p><p>但 <code>color</code> 只能将颜色代码转换为颜色字符, 而<strong>不具有</strong>输出的功能, 那么 <code>tell</code> 就是用来输出的. 所以实际上, <code>color inline &quot;&amp;aYou have unlocked a entry named &amp;e{{ &amp;entry }}&quot;</code> 这整一行都是 tell 的参数.</p><hr><h4 id="inline" tabindex="-1"><a class="header-anchor" href="#inline"><span>inline</span></a></h4><p><code>inline</code> 語句的作用只有在文本內以將被 <code>{{ }}</code> 包裹的動作返回為對應的變量, 因此 <code>{{ sender }}</code> 會被解析為執行指令的玩家名.</p>`,25)]))}const c=t(s,[["render",o],["__file","begin.html.vue"]]),h=JSON.parse('{"path":"/zh-TW/general/kether/begin.html","title":"入門","lang":"zh-TW","frontmatter":{"title":"入門","order":1,"description":"基本概念 在正式學習 Kether 之前, 我們需要先瞭解一些它的基本概念. 它是以語句為單位的腳本語言, 每個語句帶有自己的參數, 每行為一個語句. 因此你將會在各個插件文檔中找到它們提供的語句, 通過那些語句, 你可以實現該插件對應的功能. 另外, Kether 還被分爲公有語句與私有語句, 公有語句意味著, 你可以在任何支持 Kether 的插件...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://docs.yuseries.org/general/kether/begin.html"}],["meta",{"property":"og:url","content":"https://docs.yuseries.org/zh-TW/general/kether/begin.html"}],["meta",{"property":"og:site_name","content":"YuSeries 文檔"}],["meta",{"property":"og:title","content":"入門"}],["meta",{"property":"og:description","content":"基本概念 在正式學習 Kether 之前, 我們需要先瞭解一些它的基本概念. 它是以語句為單位的腳本語言, 每個語句帶有自己的參數, 每行為一個語句. 因此你將會在各個插件文檔中找到它們提供的語句, 通過那些語句, 你可以實現該插件對應的功能. 另外, Kether 還被分爲公有語句與私有語句, 公有語句意味著, 你可以在任何支持 Kether 的插件..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-TW"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-22T23:37:51.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-22T23:37:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"入門\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-22T23:37:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"L1An\\",\\"url\\":\\"https://github.com/l1-an\\"}]}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[{"level":3,"title":"解析","slug":"解析","link":"#解析","children":[]}]}],"git":{"createdTime":1734910671000,"updatedTime":1734910671000,"contributors":[{"name":"L1-An","username":"L1-An","email":"shiyu46@icloud.com","commits":1,"url":"https://github.com/L1-An"}]},"readingTime":{"minutes":2.22,"words":665},"filePathRelative":"zh-TW/general/kether/begin.md","localizedDate":"2024年12月22日","autoDesc":true,"excerpt":"<h2>基本概念</h2>\\n<p>在正式學習 <code>Kether</code> 之前, 我們需要先瞭解一些它的基本概念.</p>\\n<p>它是以語句為單位的腳本語言, 每個語句帶有自己的參數, 每行為一個語句.</p>\\n<p>因此你將會在各個插件文檔中找到它們提供的語句, 通過那些語句, 你可以實現該插件對應的功能.</p>\\n<p>另外, <code>Kether</code> 還被分爲<strong>公有語句</strong>與<strong>私有語句</strong>, 公有語句意味著, 你可以在任何支持 <code>Kether</code> 的插件中使用它們, 而私有語句則意味著, 你只能在提供這個語句的插件中使用它們, 私有語句一般是跟插件功能緊緊相關的.</p>"}');export{c as comp,h as data};