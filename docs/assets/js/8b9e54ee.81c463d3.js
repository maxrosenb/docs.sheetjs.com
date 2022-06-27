"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[281],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8136:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=n(2848),r=n(9213),i=(n(9496),n(9613)),o=["components"],l={sidebar_position:5},s="Interface Summary",p={unversionedId:"interface",id:"interface",title:"Interface Summary",description:"XLSX is the exposed variable in the browser and the exported node variable",source:"@site/docs/05-interface.md",sourceDirName:".",slug:"/interface",permalink:"/docs/interface",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Salesforce LWC",permalink:"/docs/getting-started/demos/salesforce"},next:{title:"Data Import",permalink:"/docs/solutions/input"}},d={},m=[{value:"Parsing functions",id:"parsing-functions",level:2},{value:"Writing functions",id:"writing-functions",level:2},{value:"Utilities",id:"utilities",level:2},{value:"Platform-Specific Functions",id:"platform-specific-functions",level:2},{value:"NodeJS Streaming Write functions",id:"nodejs-streaming-write-functions",level:3},{value:"ESM Helpers",id:"esm-helpers",level:3}],u={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"interface-summary"},"Interface Summary"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX")," is the exposed variable in the browser and the exported node variable"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.version")," is the version of the library (added by the build script)."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.SSF")," is an embedded version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/sheetjs/tree/master/packages/ssf"},"format library"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.CFB")," is an embedded version of the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sheetjs/js-cfb"},"container library"),"."),(0,i.kt)("h2",{id:"parsing-functions"},"Parsing functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.read(data, read_opts)")," attempts to parse ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.readFile(filename, read_opts)")," attempts to read ",(0,i.kt)("inlineCode",{parentName:"p"},"filename")," and parse."),(0,i.kt)("p",null,"Parse options are described in the ",(0,i.kt)("a",{parentName:"p",href:"./api/parse-options"},"Parsing Options")," section."),(0,i.kt)("h2",{id:"writing-functions"},"Writing functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.write(wb, write_opts)")," attempts to write the workbook ",(0,i.kt)("inlineCode",{parentName:"p"},"wb"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeXLSX(wb, write_opts)")," attempts to write the workbook in XLSX format."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFile(wb, filename, write_opts)")," attempts to write ",(0,i.kt)("inlineCode",{parentName:"p"},"wb")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),".\nIn browser-based environments, it will attempt to force a client-side download."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFileXLSX(wb, filename, write_opts)")," attempts to write an XLSX file."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFileAsync(filename, wb, o, cb)")," attempts to write ",(0,i.kt)("inlineCode",{parentName:"p"},"wb")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"filename"),".\nIf ",(0,i.kt)("inlineCode",{parentName:"p"},"o")," is omitted, the writer will use the third argument as the callback."),(0,i.kt)("p",null,"Write options are described in the ",(0,i.kt)("a",{parentName:"p",href:"./api/write-options"},"Writing Options")," section."),(0,i.kt)("h2",{id:"utilities"},"Utilities"),(0,i.kt)("p",null,"Utilities are available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.utils")," object."),(0,i.kt)("p",null,"The following are described in ",(0,i.kt)("a",{parentName:"p",href:"./csf/general#a1-utilities"},"A1 Utilities")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cell and cell address manipulation:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode_row / decode_row")," converts between 0-indexed rows and 1-indexed rows."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode_col / decode_col")," converts between 0-indexed columns and column names."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode_cell / decode_cell")," converts cell addresses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"encode_range / decode_range")," converts cell ranges.")),(0,i.kt)("p",null,"The following are described in the ",(0,i.kt)("a",{parentName:"p",href:"./api/utilities"},"Utility Functions"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Constructing:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"book_new")," creates an empty workbook"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"book_append_sheet")," adds a worksheet to a workbook")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Importing:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"aoa_to_sheet")," converts an array of arrays of JS data to a worksheet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"json_to_sheet")," converts an array of JS objects to a worksheet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"table_to_sheet")," converts a DOM TABLE element to a worksheet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_add_aoa")," adds an array of arrays of JS data to an existing worksheet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_add_json")," adds an array of JS objects to an existing worksheet."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_add_dom")," adds data from a DOM TABLE element to an existing worksheet.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Exporting:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_to_json")," converts a worksheet object to an array of JSON objects."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_to_csv")," generates delimiter-separated-values output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_to_txt")," generates UTF16 formatted text."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_to_html")," generates HTML output."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_to_formulae")," generates a list of the formulae (with value fallbacks).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Miscellaneous")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"format_cell")," generates the text value for a cell (using number formats)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sheet_set_array_formula")," adds an array formula to a worksheet")),(0,i.kt)("h2",{id:"platform-specific-functions"},"Platform-Specific Functions"),(0,i.kt)("h3",{id:"nodejs-streaming-write-functions"},"NodeJS Streaming Write functions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.stream")," contains a set of streaming write functions for NodeJS streams:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to_csv(sheet, opts)")," streams CSV rows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to_html(sheet, opts)")," streams an HTML table incrementally"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"to_json(sheet, opts)")," streams JS objects (object-mode stream)")),(0,i.kt)("h3",{id:"esm-helpers"},"ESM Helpers"),(0,i.kt)("p",null,"Due to broad inconsistencies in ESM implementations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"mjs")," build does not\nimport any dependencies.  Instead, they must be manually passed to the library:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.set_cptable")," sets the internal ",(0,i.kt)("inlineCode",{parentName:"p"},"codepage")," instance.  This provides support\nfor different language encodings."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.set_fs")," set ",(0,i.kt)("inlineCode",{parentName:"p"},"fs")," instance (using ",(0,i.kt)("inlineCode",{parentName:"p"},"readFileSync")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"writeFileSync"),"). This\nprovides NodeJS ESM support for ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.readFile")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.writeFile"),"."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"XLSX.utils.set_readable")," supplies a NodeJS ",(0,i.kt)("inlineCode",{parentName:"p"},"stream.Readable")," constructor.  This\nprovides NodeJS ESM support for the streaming operations."))}c.isMDXComponent=!0}}]);