import{u as F,h as se,i as le,j as _,k as ue,l as te,t as ie,m as re,n as x,p as W,q as ae,w as j,v as l,x as ne,R as b,y as oe,z as ce,A as he,B as pe,C as me,D as ye,E as ve,F as ge,G as de,H as f,I as Ie,J as ke,K as Ye,L as D,M as E,N as Te}from"./app-CkGcxnJM.js";const ze=["/","/discord_present.html","/portfolio.html","/purchase_terms.html","/general/","/plugins/","/zh-TW/","/zh-TW/discord_present.html","/zh-TW/portfolio.html","/zh-TW/purchase_terms.html","/general/ui/","/general/ui/features.html","/general/ui/overview.html","/plugins/partner/","/plugins/yuseries/","/zh-TW/general/","/zh-TW/plugins/","/plugins/partner/Adyeshach/","/plugins/partner/Chemdah/","/plugins/partner/Zaphkiel/","/plugins/yuseries/Sortilege/","/plugins/yuseries/YuBattleMusic/","/plugins/yuseries/YuIllustration/","/plugins/yuseries/YuItemAction/","/plugins/yuseries/YuSpawnerHologram/","/plugins/yuseries/YuVarieLevel/","/zh-TW/general/ui/","/zh-TW/general/ui/features.html","/zh-TW/general/ui/overview.html","/zh-TW/plugins/partner/","/zh-TW/plugins/yuseries/","/plugins/yuseries/YuIllustration/start/Installation.html","/plugins/yuseries/YuIllustration/start/","/plugins/yuseries/YuIllustration/start/command.html","/plugins/yuseries/YuIllustration/start/know-category.html","/plugins/yuseries/YuIllustration/start/know-entry.html","/plugins/yuseries/YuIllustration/ui/","/plugins/yuseries/YuIllustration/ui/overview.html","/plugins/yuseries/YuIllustration/unlocker/CraftItem.html","/plugins/yuseries/YuIllustration/unlocker/KillEntity.html","/plugins/yuseries/YuIllustration/unlocker/KillMythicmob.html","/plugins/yuseries/YuIllustration/unlocker/PermissionNode.html","/plugins/yuseries/YuIllustration/unlocker/PickupItem.html","/plugins/yuseries/YuIllustration/unlocker/PickupMMOItem.html","/plugins/yuseries/YuIllustration/unlocker/PickupMythicItem.html","/plugins/yuseries/YuIllustration/unlocker/PickupZapItem.html","/plugins/yuseries/YuIllustration/unlocker/","/zh-TW/plugins/partner/Adyeshach/","/zh-TW/plugins/partner/Chemdah/","/zh-TW/plugins/partner/Zaphkiel/","/zh-TW/plugins/yuseries/Sortilege/","/zh-TW/plugins/yuseries/YuBattleMusic/","/zh-TW/plugins/yuseries/YuIllustration/","/zh-TW/plugins/yuseries/YuItemAction/","/zh-TW/plugins/yuseries/YuSpawnerHologram/","/zh-TW/plugins/yuseries/YuVarieLevel/","/zh-TW/plugins/yuseries/YuIllustration/start/Installation.html","/zh-TW/plugins/yuseries/YuIllustration/start/","/zh-TW/plugins/yuseries/YuIllustration/start/command.html","/zh-TW/plugins/yuseries/YuIllustration/start/know-category.html","/zh-TW/plugins/yuseries/YuIllustration/start/know-entry.html","/zh-TW/plugins/yuseries/YuIllustration/ui/","/zh-TW/plugins/yuseries/YuIllustration/ui/overview.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/CraftItem.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/KillEntity.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/KillMythicmob.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/PermissionNode.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/PickupItem.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/PickupMMOItem.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/PickupMythicItem.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/PickupZapItem.html","/zh-TW/plugins/yuseries/YuIllustration/unlocker/","/404.html"],We="SLIMSEARCH_QUERY_HISTORY",g=F(We,[]),fe=()=>{const{queryHistoryCount:u}=f,t=u>0;return{enabled:t,queryHistories:g,addQueryHistory:i=>{t&&(g.value=Array.from(new Set([i,...g.value.slice(0,u-1)])))},removeQueryHistory:i=>{g.value=[...g.value.slice(0,i),...g.value.slice(i+1)]}}},L=u=>ze[u.id]+("anchor"in u?`#${u.anchor}`:""),we="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:$}=f,d=F(we,[]),He=()=>{const u=$>0;return{enabled:u,resultHistories:d,addResultHistory:t=>{if(u){const i={link:L(t),display:t.display};"header"in t&&(i.header=t.header),d.value=[i,...d.value.slice(0,$-1)]}},removeResultHistory:t=>{d.value=[...d.value.slice(0,t),...d.value.slice(t+1)]}}},Re=u=>{const t=pe(),i=_(),w=me(),a=x(0),k=W(()=>a.value>0),y=ye([]);return ve(()=>{const{search:v,terminate:H}=ge(),I=de(o=>{const{resultsFilter:Y=n=>n,querySplitter:M,suggestionsFilter:R,...S}=t.value;o?(a.value+=1,v(o,i.value,S).then(n=>Y(n,o,i.value,w.value)).then(n=>{a.value-=1,y.value=n}).catch(n=>{console.warn(n),a.value-=1,a.value||(y.value=[])})):y.value=[]},f.searchDelay-f.suggestDelay,{maxWait:5e3});j([u,i],([o])=>{I(o.join(" "))},{immediate:!0}),Ie(()=>{H()})}),{isSearching:k,results:y}};var Ce=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(u,{emit:t}){const i=le(),w=_(),a=ue(te),{enabled:k,addQueryHistory:y,queryHistories:v,removeQueryHistory:H}=fe(),{enabled:I,resultHistories:o,addResultHistory:Y,removeResultHistory:M}=He(),R=k||I,S=ie(u,"queries"),{results:n,isSearching:K}=Re(S),r=re({isQuery:!0,index:0}),p=x(0),m=x(0),P=W(()=>R&&(v.value.length>0||o.value.length>0)),C=W(()=>n.value.length>0),Q=W(()=>n.value[p.value]||null),O=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?o.value.length-1:v.value.length-1):r.index=s-1},B=()=>{const{isQuery:e,index:s}=r;s===(e?v.value.length-1:o.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},U=()=>{p.value=p.value>0?p.value-1:n.value.length-1,m.value=Q.value.contents.length-1},Z=()=>{p.value=p.value<n.value.length-1?p.value+1:0,m.value=0},N=()=>{m.value<Q.value.contents.length-1?m.value+=1:Z()},V=()=>{m.value>0?m.value-=1:U()},q=e=>e.map(s=>Te(s)?s:l(s[0],s[1])),G=e=>{if(e.type==="customField"){const s=ke[e.index]||"$content",[c,z=""]=Ye(s)?s[w.value].split("$content"):s.split("$content");return e.display.map(h=>l("div",q([c,...h,z])))}return e.display.map(s=>l("div",q(s)))},T=()=>{p.value=0,m.value=0,t("updateQuery",""),t("close")},J=()=>k?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},a.value.queryHistory),v.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{t("updateQuery",e)}},[l(D,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:E,onClick:c=>{c.preventDefault(),c.stopPropagation(),H(s)}})]))])):null,X=()=>I?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},a.value.resultHistory),o.value.map((e,s)=>l(b,{to:e.link,class:["slimsearch-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{T()}},()=>[l(D,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>q(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:E,onClick:c=>{c.preventDefault(),c.stopPropagation(),M(s)}})]))])):null;return ae("keydown",e=>{if(u.isFocusing){if(C.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const s=Q.value.contents[m.value];y(u.queries.join(" ")),Y(s),i.push(L(s)),T()}}else if(I){if(e.key==="ArrowUp")O();else if(e.key==="ArrowDown")B();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(t("updateQuery",v.value[s]),e.preventDefault()):(i.push(o.value[s].link),T())}}}}),j([p,m],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:u.queries.length?!C.value:!P.value}],id:"slimsearch-results"},u.queries.length?K.value?l(ne,{hint:a.value.searching}):C.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const z=p.value===c;return l("li",{class:["slimsearch-result-list-item",{active:z}]},[l("div",{class:"slimsearch-result-title"},e||a.value.defaultTitle),s.map((h,ee)=>{const A=z&&m.value===ee;return l(b,{to:L(h),class:["slimsearch-result-item",{active:A,"aria-selected":A}],onClick:()=>{y(u.queries.join(" ")),Y(h),T()}},()=>[h.type==="text"?null:l(h.type==="title"?oe:h.type==="heading"?ce:he,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[h.type==="text"&&h.header?l("div",{class:"content-header"},h.header):null,l("div",G(h))])])})])})):a.value.emptyResult:R?P.value?[J(),X()]:a.value.emptyHistory:a.value.emptyResult)}});export{Ce as default};
