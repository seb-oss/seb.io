(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[162],{1097:function(e,t,n){Promise.resolve().then(n.bind(n,5452))},5452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return j}});var s=n(7437),l=n(4033),i=n(290);n(2550);var a=n(2265),c=n(1396),r=n.n(c);function d(e){let{component:t}=e,n=(0,l.usePathname)();return(0,s.jsx)("div",{className:"taber",children:[{path:"",label:"Overview"},{path:"/design",label:"Design"},{path:"/ux-text",label:"UX text"},{path:"/code",label:"Code"},{path:"/accessibility",label:"Accessibility"}].map(e=>{let{path:l,label:i}=e;return(0,s.jsx)(r(),{href:t+l,className:n===t+l?"active":"",children:i},l)})})}var o=n(9162);n(7038);var h=e=>{let{home:t,separator:n,activeClass:i}=e,c=(0,l.usePathname)(),d=c.split("/").filter(e=>e);return(0,s.jsx)("div",{className:"trail",children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"/",children:t})}),d.length>0&&n,d.map((e,t)=>{let l="/".concat(d.slice(0,t+1).join("/")),o=c===l?" ".concat(i):e[0].toUpperCase()+e.slice(1,e.length);return(0,s.jsxs)(a.Fragment,{children:[(0,s.jsx)("li",{className:o,children:(0,s.jsx)(r(),{href:l,children:e})}),d.length!==t+1&&n]},t)})]})})};function u(e){let{children:t}=e;return(0,s.jsx)("section",{className:"layout component",children:t})}n(1163);var x=n(3311),p=n(8022),m=n(4493);function j(e){var t;let{children:n,params:a}=e,{slug:c}=a,r=(0,l.usePathname)(),j=e=>x.DD.find(t=>t.url_path==="/component/".concat(c).concat(e)),v=j(""),f=j("/accessibility"),g=j("/code"),C=j("/design"),N=j("/ux-text");v||(0,l.notFound)();let{title:b,url_path:y,tags:_,status:w,global_id:k,last_edited:L,summary:Z,figma_hero_svg:H,preview:E}=v,M=(0,s.jsx)(o.Z,{headings:null==v?void 0:v.headings,component:b});for(let{path:e,component:t}of[{path:"/accessibility",component:f},{path:"/code",component:g},{path:"/design",component:C},{path:"/ux-text",component:N}])if(r.includes(e)){M=(0,s.jsx)(o.Z,{headings:null==t?void 0:t.headings,component:b});break}let S=_?_.split(", "):[],T=Math.max(0,S.length-3);return(0,s.jsxs)(u,{children:[(0,s.jsx)(h,{home:"Home",separator:(0,s.jsx)("span",{children:" / "}),activeClass:"active"}),(0,s.jsxs)("header",{children:[(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:"intro",children:[(0,s.jsx)("h1",{children:b}),(0,s.jsx)("p",{children:Z})]}),(0,s.jsxs)("div",{className:"details",children:[(0,s.jsx)("div",{title:"Status",children:(0,s.jsx)("div",{className:"status",children:w})}),(0,s.jsx)("div",{title:"Tags",children:(0,s.jsxs)("menu",{children:[S.slice(0,3).map((e,t)=>(0,s.jsx)("div",{children:e},e)),T>0&&(0,s.jsx)("div",{className:"more",children:(0,s.jsx)("svg",{viewBox:"0 0 18 4",children:(0,s.jsx)("path",{d:"M11 2C11 3.10417 10.1042 4 9 4C7.89583 4 7 3.10417 7 2C7 0.895833 7.89583 0 9 0C10.1042 0 11 0.895833 11 2ZM16 0C14.8958 0 14 0.895833 14 2C14 3.10417 14.8958 4 16 4C17.1042 4 18 3.10417 18 2C18 0.895833 17.1042 0 16 0ZM2 0C0.895833 0 0 0.895833 0 2C0 3.10417 0.895833 4 2 4C3.10417 4 4 3.10417 4 2C4 0.895833 3.10417 0 2 0Z"})})})]})})]})]}),(0,s.jsx)(i.Z,{children:(null!==(t=null==E?void 0:E.trim())&&void 0!==t?t:"")?(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:"".concat(E)}}):(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:H.svg}})})]}),(0,s.jsx)(d,{component:y}),(0,s.jsxs)("article",{children:[(0,s.jsx)("div",{className:"content",children:n}),M]}),(0,s.jsxs)("footer",{children:["Last updated: ",(0,s.jsx)("br",{}),(0,s.jsx)("time",{dateTime:L,title:"Last updated",children:(0,p.Z)((0,m.Z)(L),"d LLL, yyyy '/' HH:mm")})]})]},k)}},290:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(7437);function l(e){let{children:t,caption:n,height:l}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("figure",{className:"preview","data-caption":n,style:l?{maxBlockSize:"".concat(l,"px"),minBlockSize:"".concat(l,"px"),aspectRatio:"initial",width:"auto",height:"auto",padding:"48px"}:{},children:t}),n&&(0,s.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})]})}n(2265),n(3819)},9162:function(e,t,n){"use strict";var s=n(7437),l=n(2265),i=n(1396),a=n.n(i);n(785),t.Z=e=>{let{headings:t,component:n}=e,[i,c]=(0,l.useState)("");(0,l.useRef)(null),(0,l.useEffect)(()=>{let e=()=>{let e=window.scrollY;for(let n=t.length-1;n>=0;n--){let s=t[n],l=document.getElementById(s.slug);if(l&&l.offsetTop<=e+161){c(s.slug);break}}};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[t]);let r=e=>{c(e)};return(0,s.jsxs)("aside",{className:"toc",children:[(0,s.jsx)("span",{children:"On this page"}),(0,s.jsxs)("nav",{"data-name":t.length>0?"On this page":"",children:[(0,s.jsx)(a(),{href:"#top","data-id":"top","data-level":"1",onClick:()=>r("top"),passHref:!0,children:n},"#top"),t.map(e=>(0,s.jsx)(a(),{href:"#".concat(e.slug),className:"toc-link ".concat(i===e.slug?"active":""),"data-id":e.slug,"data-level":e.level,onClick:()=>r(e.slug),passHref:!0,children:e.text},"#".concat(e.slug)))]})]})}},3819:function(){},2550:function(){},785:function(){},7038:function(){},1163:function(){}},function(e){e.O(0,[250,474,311,971,938,744],function(){return e(e.s=1097)}),_N_E=e.O()}]);