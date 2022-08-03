"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3496],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var i=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var i=n(2848),r=n(9213),a=(n(9496),n(9613)),o=["components"],l={sidebar_position:4},s="NetSuite",p={unversionedId:"getting-started/demos/netsuite",id:"getting-started/demos/netsuite",title:"NetSuite",description:"This demo discusses the key SheetJS operations.  Familiarity with SuiteScript 2",source:"@site/docs/04-getting-started/03-demos/04-netsuite.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/netsuite",permalink:"/docs/getting-started/demos/netsuite",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Databases and SQL",permalink:"/docs/getting-started/demos/database"},next:{title:"Google Sheets",permalink:"/docs/getting-started/demos/gsheet"}},c={},d=[{value:"Loading the SheetJS Standalone Script",id:"loading-the-sheetjs-standalone-script",level:2},{value:"Reading Files",id:"reading-files",level:2},{value:"Writing Files",id:"writing-files",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"netsuite"},"NetSuite"),(0,a.kt)("p",null,"This demo discusses the key SheetJS operations.  Familiarity with SuiteScript 2\nis assumed.  The following sections of the SuiteScript documentation should be\nperused before reading this demo:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4387172221.html"},"SuiteScript 2.x API Introduction"),"\nis an introduction that includes a simple example with deployment details,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_4704097697.html"},"SuiteScript 2.x Custom Modules"),"\ncovers custom modules and adding third party scripts to modules."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4205693274.html"},(0,a.kt)("inlineCode",{parentName:"a"},"N/file")," Module"),"\ncovers the ",(0,a.kt)("inlineCode",{parentName:"li"},"N/file")," module.  It is the main API for interacting with files.")),(0,a.kt)("p",null,"The library plays nice with each script type, including RESTlets and Suitelets."),(0,a.kt)("h2",{id:"loading-the-sheetjs-standalone-script"},"Loading the SheetJS Standalone Script"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js"},"This script"),"\nplays nice with SuiteScript ",(0,a.kt)("inlineCode",{parentName:"p"},"define"),".  It should be downloaded and uploaded to\nthe File Cabinet."),(0,a.kt)("p",null,"After uploading, create a JSON configuration file (or add the alias to an\nexisting config file).  The reference points to the file and omits the ",(0,a.kt)("inlineCode",{parentName:"p"},".js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "paths": {\n    // highlight-next-line\n    "xlsx": "/SuiteScripts/xlsx.full.min"\n  }\n}\n')),(0,a.kt)("p",null,"This config file should be referenced in SuiteScripts using ",(0,a.kt)("inlineCode",{parentName:"p"},"@NAmdConfig"),". This\npart is documented in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4704111062.html#bridgehead_4738199877"},'"Import a third-party JavaScript Library"'),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"/**\n* @NApiVersion 2.x\n// highlight-next-line\n* @NAmdConfig  ./JsLibraryConfig.json\n* ... more options ...\n*/\n// highlight-next-line\ndefine(['N/file', 'xlsx'], function(file, XLSX) {\n  ...\n});\n")),(0,a.kt)("h2",{id:"reading-files"},"Reading Files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"N/file")," provides ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4226574300.html"},(0,a.kt)("inlineCode",{parentName:"a"},"file.load")),"\nfor pulling files:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4229269811.html"},(0,a.kt)("inlineCode",{parentName:"a"},"File#getContents")),"\nreturns the data as a Base64-encoded string which can be read with ",(0,a.kt)("inlineCode",{parentName:"p"},"XLSX.read"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* load file */\nvar f = file.load({ id: id_of_file });\n/* parse */\nvar workbook = XLSX.read(f.getContents(), {type: "base64"});\n')),(0,a.kt)("h2",{id:"writing-files"},"Writing Files"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"N/file")," provides ",(0,a.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4223861820.html"},(0,a.kt)("inlineCode",{parentName:"a"},"file.create")),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"file.load")," for creating and loading files respectively."),(0,a.kt)("p",null,"Binary content must be base64-encoded.  Fortunately, ",(0,a.kt)("inlineCode",{parentName:"p"},"XLSX.write")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"base64"),"\ntype will generate compatible Base64 strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'/* write XLSX workbook as base64 string */\nvar out = XLSX.write(workbook, { bookType: "xlsx", type: "base64" });\n/* create file */\nvar newfile = file.create({\n  name: \'test.xlsx\', // replace with desired name\n  fileType: file.Type.EXCEL,\n  contents: out\n});\n/* save */\nnewfile.save();\n')))}m.isMDXComponent=!0}}]);