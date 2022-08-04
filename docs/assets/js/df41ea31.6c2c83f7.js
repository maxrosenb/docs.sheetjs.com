"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3499],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9628:(e,t,r)=>{r.d(t,{Z:()=>n});const n="0.18.10"},8410:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(9628);const s={sidebar_position:7,sidebar_custom_props:{summary:"Download and Import ECMAScript Modules"}},l="Bun",p={unversionedId:"installation/bun",id:"installation/bun",title:"Bun",description:"Bun is a JavaScript runtime powered by JavaScriptCore.",source:"@site/docs/02-installation/07-bun.md",sourceDirName:"02-installation",slug:"/installation/bun",permalink:"/docs/installation/bun",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_custom_props:{summary:"Download and Import ECMAScript Modules"}},sidebar:"tutorialSidebar",previous:{title:"AMD (define)",permalink:"/docs/installation/amd"},next:{title:"Complete Example",permalink:"/docs/example"}},i={},c=[{value:"XLS Support",id:"xls-support",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bun"},"Bun"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," is a JavaScript runtime powered by JavaScriptCore."),(0,a.kt)("admonition",{title:"Bun support is considered experimental.",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Great open source software grows with user tests and reports. Any issues should\nbe reported to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/sheetjs/issues"},"SheetJS project"),"\nfor further diagnosis.")),(0,a.kt)("p",null,"Each standalone release script is available at ",(0,a.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com/"},"https://cdn.sheetjs.com/"),"."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/package/xlsx.mjs"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/package/xlsx.mjs")," is the URL for ",o.Z),(0,a.kt)("br",null),(0,a.kt)("p",null,"After downloading the script, it can be directly imported:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import * as XLSX from './xlsx.mjs';\n")),(0,a.kt)("h2",{id:"xls-support"},"XLS Support"),(0,a.kt)("p",null,"If XLS support is required, ",(0,a.kt)("inlineCode",{parentName:"p"},"cpexcel.full.mjs")," must be manually imported."),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+o.Z+"/package/dist/cpexcel.full.mjs"},"https://cdn.sheetjs.com/xlsx-",o.Z,"/package/dist/cpexcel.full.mjs")," is the URL for ",o.Z),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"/* load the codepage support library for extended support with older formats  */\nimport * as cptable from './cpexcel.full.mjs';\nXLSX.set_cptable(cptable);\n")))}d.isMDXComponent=!0}}]);