import{u as j,g as se,h as le,i as K,j as te,k as ue,t as ie,l as re,m as M,n as H,p as ae,w as O,q as l,v as ne,R as $,x as oe,y as ce,z as he,A as pe,B as ye,C as me,D as ve,E as ge,F as de,G as w,H as Ie,I as ke,J as Ye,K as P,L as F,M as fe}from"./app-DEPG_939.js";const ze=["/","/portfolio.html","/plugins/","/zh/","/zh/portfolio.html","/plugins/partner/","/plugins/yuseries/","/zh/plugins/","/plugins/partner/Adyeshach/","/plugins/partner/Chemdah/","/plugins/partner/Zaphkiel/","/plugins/yuseries/Sortilege/","/plugins/yuseries/YuBattleMusic/","/plugins/yuseries/YuIllustration/","/plugins/yuseries/YuItemAction/","/plugins/yuseries/YuSpawnerHologram/","/plugins/yuseries/YuVarieLevel/","/zh/plugins/partner/","/zh/plugins/yuseries/","/plugins/yuseries/YuIllustration/start/Installation.html","/plugins/yuseries/YuIllustration/start/","/plugins/yuseries/YuIllustration/start/command.html","/plugins/yuseries/YuIllustration/start/know-category.html","/plugins/yuseries/YuIllustration/start/know-entry.html","/plugins/yuseries/YuIllustration/ui/","/plugins/yuseries/YuIllustration/unlocker/CraftItem.html","/plugins/yuseries/YuIllustration/unlocker/KillEntity.html","/plugins/yuseries/YuIllustration/unlocker/KillMythicmob.html","/plugins/yuseries/YuIllustration/unlocker/PickupItem.html","/plugins/yuseries/YuIllustration/unlocker/PickupMMOItem.html","/plugins/yuseries/YuIllustration/unlocker/PickupZapItem.html","/plugins/yuseries/YuIllustration/unlocker/","/zh/plugins/partner/Adyeshach/","/zh/plugins/partner/Chemdah/","/zh/plugins/partner/Zaphkiel/","/zh/plugins/yuseries/Sortilege/","/zh/plugins/yuseries/YuBattleMusic/","/zh/plugins/yuseries/YuIllustration/","/zh/plugins/yuseries/YuItemAction/","/zh/plugins/yuseries/YuSpawnerHologram/","/zh/plugins/yuseries/YuVarieLevel/","/zh/plugins/yuseries/YuIllustration/start/Installation.html","/zh/plugins/yuseries/YuIllustration/start/","/zh/plugins/yuseries/YuIllustration/start/command.html","/zh/plugins/yuseries/YuIllustration/start/know-category.html","/zh/plugins/yuseries/YuIllustration/start/know-entry.html","/zh/plugins/yuseries/YuIllustration/ui/","/zh/plugins/yuseries/YuIllustration/unlocker/CraftItem.html","/zh/plugins/yuseries/YuIllustration/unlocker/KillEntity.html","/zh/plugins/yuseries/YuIllustration/unlocker/KillMythicmob.html","/zh/plugins/yuseries/YuIllustration/unlocker/PickupItem.html","/zh/plugins/yuseries/YuIllustration/unlocker/PickupMMOItem.html","/zh/plugins/yuseries/YuIllustration/unlocker/PickupZapItem.html","/zh/plugins/yuseries/YuIllustration/unlocker/","/404.html"],He="SLIMSEARCH_QUERY_HISTORY",g=j(He,[]),we=()=>{const{queryHistoryCount:t}=w,u=t>0;return{enabled:u,queryHistories:g,addQueryHistory:i=>{u&&(g.value=Array.from(new Set([i,...g.value.slice(0,t-1)])))},removeQueryHistory:i=>{g.value=[...g.value.slice(0,i),...g.value.slice(i+1)]}}},A=t=>ze[t.id]+("anchor"in t?`#${t.anchor}`:""),Re="SLIMSEARCH_RESULT_HISTORY",{resultHistoryCount:T}=w,d=j(Re,[]),Se=()=>{const t=T>0;return{enabled:t,resultHistories:d,addResultHistory:u=>{if(t){const i={link:A(u),display:u.display};"header"in u&&(i.header=u.header),d.value=[i,...d.value.slice(0,T-1)]}},removeResultHistory:u=>{d.value=[...d.value.slice(0,u),...d.value.slice(u+1)]}}},Ce=t=>{const u=pe(),i=K(),R=ye(),a=M(0),k=H(()=>a.value>0),m=me([]);return ve(()=>{const{search:v,terminate:S}=ge(),I=de(o=>{const{resultsFilter:Y=n=>n,querySplitter:b,suggestionsFilter:C,...Q}=u.value;o?(a.value+=1,v(o,i.value,Q).then(n=>Y(n,o,i.value,R.value)).then(n=>{a.value-=1,m.value=n}).catch(n=>{console.warn(n),a.value-=1,a.value||(m.value=[])})):m.value=[]},w.searchDelay-w.suggestDelay,{maxWait:5e3});O([t,i],([o])=>{I(o.join(" "))},{immediate:!0}),Ie(()=>{S()})}),{isSearching:k,results:m}};var qe=se({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(t,{emit:u}){const i=le(),R=K(),a=te(ue),{enabled:k,addQueryHistory:m,queryHistories:v,removeQueryHistory:S}=we(),{enabled:I,resultHistories:o,addResultHistory:Y,removeResultHistory:b}=Se(),C=k||I,Q=ie(t,"queries"),{results:n,isSearching:B}=Ce(Q),r=re({isQuery:!0,index:0}),p=M(0),y=M(0),D=H(()=>C&&(v.value.length>0||o.value.length>0)),q=H(()=>n.value.length>0),x=H(()=>n.value[p.value]||null),U=()=>{const{isQuery:e,index:s}=r;s===0?(r.isQuery=!e,r.index=e?o.value.length-1:v.value.length-1):r.index=s-1},Z=()=>{const{isQuery:e,index:s}=r;s===(e?v.value.length-1:o.value.length-1)?(r.isQuery=!e,r.index=0):r.index=s+1},V=()=>{p.value=p.value>0?p.value-1:n.value.length-1,y.value=x.value.contents.length-1},_=()=>{p.value=p.value<n.value.length-1?p.value+1:0,y.value=0},G=()=>{y.value<x.value.contents.length-1?y.value+=1:_()},J=()=>{y.value>0?y.value-=1:V()},L=e=>e.map(s=>fe(s)?s:l(s[0],s[1])),W=e=>{if(e.type==="customField"){const s=ke[e.index]||"$content",[c,z=""]=Ye(s)?s[R.value].split("$content"):s.split("$content");return e.display.map(h=>l("div",L([c,...h,z])))}return e.display.map(s=>l("div",L(s)))},f=()=>{p.value=0,y.value=0,u("updateQuery",""),u("close")},N=()=>k?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},a.value.queryHistory),v.value.map((e,s)=>l("div",{class:["slimsearch-result-item",{active:r.isQuery&&r.index===s}],onClick:()=>{u("updateQuery",e)}},[l(P,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},e),l("button",{class:"slimsearch-remove-icon",innerHTML:F,onClick:c=>{c.preventDefault(),c.stopPropagation(),S(s)}})]))])):null,X=()=>I?l("ul",{class:"slimsearch-result-list"},l("li",{class:"slimsearch-result-list-item"},[l("div",{class:"slimsearch-result-title"},a.value.resultHistory),o.value.map((e,s)=>l($,{to:e.link,class:["slimsearch-result-item",{active:!r.isQuery&&r.index===s}],onClick:()=>{f()}},()=>[l(P,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(c=>L(c)).flat())]),l("button",{class:"slimsearch-remove-icon",innerHTML:F,onClick:c=>{c.preventDefault(),c.stopPropagation(),b(s)}})]))])):null;return ae("keydown",e=>{if(t.isFocusing){if(q.value){if(e.key==="ArrowUp")J();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const s=x.value.contents[y.value];m(t.queries.join(" ")),Y(s),i.push(A(s)),f()}}else if(I){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")Z();else if(e.key==="Enter"){const{index:s}=r;r.isQuery?(u("updateQuery",v.value[s]),e.preventDefault()):(i.push(o.value[s].link),f())}}}}),O([p,y],()=>{var e;(e=document.querySelector(".slimsearch-result-list-item.active .slimsearch-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["slimsearch-result-wrapper",{empty:t.queries.length?!q.value:!D.value}],id:"slimsearch-results"},t.queries.length?B.value?l(ne,{hint:a.value.searching}):q.value?l("ul",{class:"slimsearch-result-list"},n.value.map(({title:e,contents:s},c)=>{const z=p.value===c;return l("li",{class:["slimsearch-result-list-item",{active:z}]},[l("div",{class:"slimsearch-result-title"},e||a.value.defaultTitle),s.map((h,ee)=>{const E=z&&y.value===ee;return l($,{to:A(h),class:["slimsearch-result-item",{active:E,"aria-selected":E}],onClick:()=>{m(t.queries.join(" ")),Y(h),f()}},()=>[h.type==="text"?null:l(h.type==="title"?oe:h.type==="heading"?ce:he,{class:"slimsearch-result-type"}),l("div",{class:"slimsearch-result-content"},[h.type==="text"&&h.header?l("div",{class:"content-header"},h.header):null,l("div",W(h))])])})])})):a.value.emptyResult:C?D.value?[N(),X()]:a.value.emptyHistory:a.value.emptyResult)}});export{qe as default};
