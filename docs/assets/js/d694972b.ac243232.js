"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8812:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,hide_table_of_contents:!0},l="Demo Projects",o={unversionedId:"demos/index",id:"demos/index",title:"Demo Projects",description:"The demo projects include small runnable examples and short explainers.",source:"@site/docs/03-demos/index.md",sourceDirName:"03-demos",slug:"/demos/",permalink:"/docs/demos/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"Zen of SheetJS",permalink:"/docs/getting-started/zen"},next:{title:"Salesforce LWC",permalink:"/docs/demos/salesforce"}},p={},m=[{value:"JavaScript APIs",id:"javascript-apis",level:3},{value:"Frameworks",id:"frameworks",level:3},{value:"Front-End UI Components",id:"front-end-ui-components",level:3},{value:"Platforms and Integrations",id:"platforms-and-integrations",level:3},{value:"Bundlers and Tooling",id:"bundlers-and-tooling",level:3}],s={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"demo-projects"},"Demo Projects"),(0,r.kt)("p",null,"The demo projects include small runnable examples and short explainers."),(0,r.kt)("h3",{id:"javascript-apis"},"JavaScript APIs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./network"},(0,r.kt)("inlineCode",{parentName:"a"},"XMLHttpRequest and fetch"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./clipboard"},(0,r.kt)("inlineCode",{parentName:"a"},"Clipboard Data"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./ml"},(0,r.kt)("inlineCode",{parentName:"a"},"Typed Arrays for Machine Learning"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./database#localstorage-and-sessionstorage"},(0,r.kt)("inlineCode",{parentName:"a"},"LocalStorage and SessionStorage"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./database#websql"},(0,r.kt)("inlineCode",{parentName:"a"},"Web SQL Database"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./database#indexeddb"},(0,r.kt)("inlineCode",{parentName:"a"},"IndexedDB")))),(0,r.kt)("h3",{id:"frameworks"},"Frameworks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./legacy#angularjs"},(0,r.kt)("inlineCode",{parentName:"a"},"Angular.JS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/angular2/"},(0,r.kt)("inlineCode",{parentName:"a"},"Angular 2+ and Ionic"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./legacy#knockout"},(0,r.kt)("inlineCode",{parentName:"a"},"Knockout"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./react"},(0,r.kt)("inlineCode",{parentName:"a"},"React"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/vue/"},(0,r.kt)("inlineCode",{parentName:"a"},"VueJS")))),(0,r.kt)("h3",{id:"front-end-ui-components"},"Front-End UI Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./grid#canvas-datagrid"},(0,r.kt)("inlineCode",{parentName:"a"},"canvas-datagrid"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/xspreadsheet/"},(0,r.kt)("inlineCode",{parentName:"a"},"x-spreadsheet"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/react/modify/"},(0,r.kt)("inlineCode",{parentName:"a"},"react-data-grid"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/vue/modify/"},(0,r.kt)("inlineCode",{parentName:"a"},"vue3-table-light"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./grid#angular-ui-grid"},(0,r.kt)("inlineCode",{parentName:"a"},"angular-ui-grid")))),(0,r.kt)("h3",{id:"platforms-and-integrations"},"Platforms and Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./cli"},(0,r.kt)("inlineCode",{parentName:"a"},"Command-Line Tools"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./mobile"},(0,r.kt)("inlineCode",{parentName:"a"},"iOS and Android Mobile Applications"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/server/"},(0,r.kt)("inlineCode",{parentName:"a"},"NodeJS Server-Side Processing"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./content"},(0,r.kt)("inlineCode",{parentName:"a"},"Content Management and Static Sites"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./desktop#electron"},(0,r.kt)("inlineCode",{parentName:"a"},"Electron"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./desktop#nwjs"},(0,r.kt)("inlineCode",{parentName:"a"},"NW.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./desktop#tauri"},(0,r.kt)("inlineCode",{parentName:"a"},"Tauri"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./chromium"},(0,r.kt)("inlineCode",{parentName:"a"},"Chrome and Chromium Extensions"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./gsheet"},(0,r.kt)("inlineCode",{parentName:"a"},"Google Sheets API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./extendscript"},(0,r.kt)("inlineCode",{parentName:"a"},"ExtendScript for Adobe Apps"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./netsuite"},(0,r.kt)("inlineCode",{parentName:"a"},"NetSuite SuiteScript"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./salesforce"},(0,r.kt)("inlineCode",{parentName:"a"},"SalesForce Lightning Web Components"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./excel"},(0,r.kt)("inlineCode",{parentName:"a"},"Excel JavaScript API"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./headless"},(0,r.kt)("inlineCode",{parentName:"a"},"Headless Automation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./engines"},(0,r.kt)("inlineCode",{parentName:"a"},"Other JavaScript Engines"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SheetJS/SheetJS/tree/master/demos/function/"},(0,r.kt)("inlineCode",{parentName:"a"},'"serverless" functions'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./database"},(0,r.kt)("inlineCode",{parentName:"a"},"Databases and Structured Data Stores"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./nosql"},(0,r.kt)("inlineCode",{parentName:"a"},"NoSQL and Unstructured Data Stores"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./legacy#internet-explorer"},(0,r.kt)("inlineCode",{parentName:"a"},"Legacy Internet Explorer")))),(0,r.kt)("h3",{id:"bundlers-and-tooling"},"Bundlers and Tooling"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#browserify"},(0,r.kt)("inlineCode",{parentName:"a"},"browserify"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#bun"},(0,r.kt)("inlineCode",{parentName:"a"},"bun"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#esbuild"},(0,r.kt)("inlineCode",{parentName:"a"},"esbuild"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#parcel"},(0,r.kt)("inlineCode",{parentName:"a"},"parcel"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#requirejs"},(0,r.kt)("inlineCode",{parentName:"a"},"requirejs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#rollup"},(0,r.kt)("inlineCode",{parentName:"a"},"rollup"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#snowpack"},(0,r.kt)("inlineCode",{parentName:"a"},"snowpack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#swc"},(0,r.kt)("inlineCode",{parentName:"a"},"swc"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#systemjs"},(0,r.kt)("inlineCode",{parentName:"a"},"systemjs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#vite"},(0,r.kt)("inlineCode",{parentName:"a"},"vite"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#webpack"},(0,r.kt)("inlineCode",{parentName:"a"},"webpack"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./bundler#wmr"},(0,r.kt)("inlineCode",{parentName:"a"},"wmr")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If a demo for a library or framework is not included here, please leave a note.")))}d.isMDXComponent=!0}}]);