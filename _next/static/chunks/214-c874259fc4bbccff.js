(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{7561:function(){},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(2265);let l=["light","dark"],a="(prefers-color-scheme: dark)",o="undefined"==typeof window,i=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:s},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(f,e),d=["light","dark"],f=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:o=!0,storageKey:s="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:f="data-theme",value:g,children:v,nonce:b})=>{let[E,_]=(0,r.useState)(()=>h(s,c)),[S,w]=(0,r.useState)(()=>h(s)),C=g?Object.values(g):u,L=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let a=g?g[r]:r,i=t?p():null,s=document.documentElement;if("class"===f?(s.classList.remove(...C),a&&s.classList.add(a)):a?s.setAttribute(f,a):s.removeAttribute(f),o){let e=l.includes(c)?c:null,t=l.includes(r)?r:e;s.style.colorScheme=t}null==i||i()},[]),M=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),T=(0,r.useCallback)(t=>{w(y(t)),"system"===E&&n&&!e&&L("system")},[E,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&M(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[M]),(0,r.useEffect)(()=>{L(null!=e?e:E)},[e,E]);let $=(0,r.useMemo)(()=>({theme:E,setTheme:M,forcedTheme:e,resolvedTheme:"system"===E?S:E,themes:n?[...u,"system"]:u,systemTheme:n?S:void 0}),[E,M,e,S,n,u]);return r.createElement(i.Provider,{value:$},r.createElement(m,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:o,storageKey:s,themes:u,defaultTheme:c,attribute:f,value:g,children:v,attrs:C,nonce:b}),v)},m=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:o,enableColorScheme:i,defaultTheme:s,value:u,attrs:c,nonce:d})=>{let f="system"===s,m="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?l.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,r=!0)=>{let a=u?u[e]:e,o=t?e+"|| ''":`'${a}'`,s="";return i&&r&&!t&&l.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||a?`c.add(${o})`:"null":a&&(s+=`d[s](n,${o})`),s},y=e?`!function(){${m}${p(e)}}()`:o?`!function(){try{${m}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${f})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${p(u?"x[e]":"e",!0)}}${f?"":"else{"+p(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${m}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${p(u?"x[e]":"e",!0)}}else{${p(s,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:y}})},()=>!0),h=(e,t)=>{let n;if(!o){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return a},default:function(){return o}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function l(e){let{type:t,props:n}=e,l=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let a=r[e]||e.toLowerCase();"script"===t&&("async"===a||"defer"===a||"noModule"===a)?l[a]=!!n[e]:l.setAttribute(a,n[e])}let{children:a,dangerouslySetInnerHTML:o}=n;return o?l.innerHTML=o.__html||"":a&&(l.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):""),l}function a(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function o(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,l="";if(r){let{children:e}=r.props;l="string"==typeof e?e:Array.isArray(e)?e.join(""):""}l!==document.title&&(document.title=l),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),o=Number(r.content),i=[];for(let t=0,n=r.previousElementSibling;t<o;t++,n=(null==n?void 0:n.previousElementSibling)||null){var s;(null==n?void 0:null==(s=n.tagName)?void 0:s.toLowerCase())===e&&i.push(n)}let u=t.map(l).filter(e=>{for(let t=0,n=i.length;t<n;t++)if(a(i[t],e))return i.splice(t,1),!1;return!0});i.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),u.forEach(e=>n.insertBefore(e,r)),r.content=(o-i.length+u.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return p},initScriptLoader:function(){return y},default:function(){return v}});let r=n(6451),l=n(3364),a=r._(n(4887)),o=l._(n(2265)),i=n(3634),s=n(3313),u=n(2185),c=new Map,d=new Set,f=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],m=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}{let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},h=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:l=null,dangerouslySetInnerHTML:a,children:o="",strategy:i="afterInteractive",onError:u,stylesheets:h}=e,p=n||t;if(p&&d.has(p))return;if(c.has(t)){d.add(p),c.get(t).then(r,u);return}let y=()=>{l&&l(),d.add(p)},g=document.createElement("script"),v=new Promise((e,t)=>{g.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),g.addEventListener("error",function(e){t(e)})}).catch(function(e){u&&u(e)});for(let[n,r]of(a?(g.innerHTML=a.__html||"",y()):o?(g.textContent="string"==typeof o?o:Array.isArray(o)?o.join(""):"",y()):t&&(g.src=t,c.set(t,v)),Object.entries(e))){if(void 0===r||f.includes(n))continue;let e=s.DOMAttributeNames[n]||n.toLowerCase();g.setAttribute(e,r)}"worker"===i&&g.setAttribute("type","text/partytown"),g.setAttribute("data-nscript",i),h&&m(h),document.body.appendChild(g)};function p(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))}):h(e)}function y(e){e.forEach(p),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");d.add(t)})}function g(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:l=null,strategy:s="afterInteractive",onError:c,stylesheets:f,...m}=e,{updateScripts:p,scripts:y,getIsSsr:g,appDir:v,nonce:b}=(0,o.useContext)(i.HeadManagerContext),E=(0,o.useRef)(!1);(0,o.useEffect)(()=>{let e=t||n;E.current||(l&&e&&d.has(e)&&l(),E.current=!0)},[l,t,n]);let _=(0,o.useRef)(!1);if((0,o.useEffect)(()=>{!_.current&&("afterInteractive"===s?h(e):"lazyOnload"===s&&("complete"===document.readyState?(0,u.requestIdleCallback)(()=>h(e)):window.addEventListener("load",()=>{(0,u.requestIdleCallback)(()=>h(e))})),_.current=!0)},[e,s]),("beforeInteractive"===s||"worker"===s)&&(p?(y[s]=(y[s]||[]).concat([{id:t,src:n,onLoad:r,onReady:l,onError:c,...m}]),p(y)):g&&g()?d.add(t||n):g&&!g()&&h(e)),v){if(f&&f.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===s)return n?(a.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"}),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n])+")"}})):(m.dangerouslySetInnerHTML&&(m.children=m.dangerouslySetInnerHTML.__html,delete m.dangerouslySetInnerHTML),o.default.createElement("script",{nonce:b,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...m}])+")"}}));"afterInteractive"===s&&n&&a.default.preload(n,m.integrity?{as:"script",integrity:m.integrity}:{as:"script"})}return null}Object.defineProperty(g,"__nextScript",{value:!0});let v=g;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4033:function(e,t,n){e.exports=n(5313)}}]);