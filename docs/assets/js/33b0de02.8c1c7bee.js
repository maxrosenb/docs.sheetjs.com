"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8995],{9613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(9496);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),f=c(n),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return n?r.createElement(d,i(i({ref:e},u),{},{components:n})):r.createElement(d,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7603:function(t,e,n){n(9496),n(2934),n(3662)},1866:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return f}});var r=n(2848),o=n(9213),a=(n(9496),n(9613)),i=(n(7603),n(6269)),s=["components"],l={hide_table_of_contents:!0},c="Installation",u={unversionedId:"installation/index",id:"installation/index",title:"Installation",description:"is the primary software distribution site.  Please",source:"@site/docs/02-installation/index.md",sourceDirName:"02-installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"SheetJS CE",permalink:"/docs/"},next:{title:"Standalone Browser Scripts",permalink:"/docs/installation/standalone"}},p={},f=[],m={toc:f};function d(t){var e=t.components,n=(0,o.Z)(t,s);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com"},"https://cdn.sheetjs.com")," is the primary software distribution site.  Please\nread the installation instructions for your use case:"),(0,a.kt)("ul",null,(0,i.jA)().items.map((function(t,e){var n,o,i,s=null!=(n=t.customProps)&&n.icon?{listStyleImage:'url("'+t.customProps.icon+'")'}:{};return(0,a.kt)("li",(0,r.Z)({style:s},null!=(o=t.customProps)&&o.class?{className:t.customProps.class}:{}),(0,a.kt)("a",{href:t.href},t.label),(null==(i=t.customProps)?void 0:i.summary)&&" - "+t.customProps.summary)}))))}d.isMDXComponent=!0}}]);