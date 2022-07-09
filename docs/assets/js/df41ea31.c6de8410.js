"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3499],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4154:function(e,t){t.Z="0.18.9"},8791:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return m}});var r=n(2848),a=n(9213),o=(n(9496),n(9613)),i=n(4154),s=["components"],p={sidebar_position:7,sidebar_custom_props:{summary:"Download and Import ECMAScript Modules"}},l="Bun",c={unversionedId:"installation/bun",id:"installation/bun",title:"Bun",description:"Bun is a JavaScript runtime powered by JavaScriptCore.",source:"@site/docs/02-installation/07-bun.md",sourceDirName:"02-installation",slug:"/installation/bun",permalink:"/docs/installation/bun",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_custom_props:{summary:"Download and Import ECMAScript Modules"}},sidebar:"tutorialSidebar",previous:{title:"AMD (define)",permalink:"/docs/installation/amd"},next:{title:"Complete Example",permalink:"/docs/example"}},u={},m=[{value:"XLS Support",id:"xls-support",level:2}],d={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"bun"},"Bun"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," is a JavaScript runtime powered by JavaScriptCore."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Bun support is considered experimental.")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Great open source software grows with user tests and reports. Any issues should\nbe reported to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/sheetjs/issues"},"SheetJS project"),"\nfor further diagnosis."))),(0,o.kt)("p",null,"Each standalone release script is available at ",(0,o.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com/"},"https://cdn.sheetjs.com/"),"."),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+i.Z+"/package/xlsx.mjs"},"https://cdn.sheetjs.com/xlsx-",i.Z,"/package/xlsx.mjs")," is the URL for ",i.Z),(0,o.kt)("br",null),(0,o.kt)("p",null,"After downloading the script, it can be directly imported:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import * as XLSX from './xlsx.mjs';\n")),(0,o.kt)("h2",{id:"xls-support"},"XLS Support"),(0,o.kt)("p",null,"If XLS support is required, ",(0,o.kt)("inlineCode",{parentName:"p"},"cpexcel.full.mjs")," must be manually imported."),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://cdn.sheetjs.com/xlsx-"+i.Z+"/package/dist/cpexcel.full.mjs"},"https://cdn.sheetjs.com/xlsx-",i.Z,"/package/dist/cpexcel.full.mjs")," is the URL for ",i.Z),(0,o.kt)("br",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/* load the codepage support library for extended support with older formats  */\nimport * as cptable from './cpexcel.full.mjs';\nXLSX.set_cptable(cptable);\n")))}f.isMDXComponent=!0}}]);