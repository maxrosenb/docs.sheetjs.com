"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,d=c["".concat(l,".").concat(h)]||c[h]||k[h]||a;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>k,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:3},s="Data Processing",i={unversionedId:"solutions/processing",id:"solutions/processing",title:"Data Processing",description:'The "Common Spreadsheet Format" is a simple object',source:"@site/docs/06-solutions/03-processing.md",sourceDirName:"06-solutions",slug:"/solutions/processing",permalink:"/docs/solutions/processing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Data Import",permalink:"/docs/solutions/input"},next:{title:"Data Export",permalink:"/docs/solutions/output"}},l={},p=[{value:"Modifying Workbook Structure",id:"modifying-workbook-structure",level:2},{value:"API",id:"api",level:4},{value:"Examples",id:"examples",level:4},{value:"Modifying Cell Values",id:"modifying-cell-values",level:2},{value:"API",id:"api-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Modifying Other Worksheet / Workbook / Cell Properties",id:"modifying-other-worksheet--workbook--cell-properties",level:2}],u={toc:p};function k(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-processing"},"Data Processing"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../csf/general"},'"Common Spreadsheet Format"')," is a simple object\nrepresentation of the core concepts of a workbook.  The utility functions work\nwith the object representation and are intended to handle common use cases."),(0,o.kt)("h2",{id:"modifying-workbook-structure"},"Modifying Workbook Structure"),(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Append a Worksheet to a Workbook")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"XLSX.utils.book_append_sheet(workbook, worksheet, sheet_name);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"book_append_sheet")," utility function appends a worksheet to the workbook.\nThe third argument specifies the desired worksheet name. Multiple worksheets can\nbe added to a workbook by calling the function multiple times.  If the worksheet\nname is already used in the workbook, it will throw an error."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Append a Worksheet to a Workbook and find a unique name")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var new_name = XLSX.utils.book_append_sheet(workbook, worksheet, name, true);\n")),(0,o.kt)("p",null,"If the fourth argument is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the function will start with the specified\nworksheet name.  If the sheet name exists in the workbook, a new worksheet name\nwill be chosen by finding the name stem and incrementing the counter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.utils.book_append_sheet(workbook, sheetA, "Sheet2", true); // Sheet2\nXLSX.utils.book_append_sheet(workbook, sheetB, "Sheet2", true); // Sheet3\nXLSX.utils.book_append_sheet(workbook, sheetC, "Sheet2", true); // Sheet4\nXLSX.utils.book_append_sheet(workbook, sheetD, "Sheet2", true); // Sheet5\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"List the Worksheet names in tab order")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var wsnames = workbook.SheetNames;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SheetNames"),' property of the workbook object is a list of the worksheet\nnames in "tab order".  API functions will look at this array.'),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Replace a Worksheet in place")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"workbook.Sheets[sheet_name] = new_worksheet;\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Sheets")," property of the workbook object is an object whose keys are names\nand whose values are worksheet objects.  By reassigning to a property of the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Sheets")," object, the worksheet object can be changed without disrupting the\nrest of the worksheet structure."),(0,o.kt)("h4",{id:"examples"},"Examples"),(0,o.kt)("p",null,"This example uses ",(0,o.kt)("a",{parentName:"p",href:"../api/utilities#array-of-arrays-input"},(0,o.kt)("inlineCode",{parentName:"a"},"XLSX.utils.aoa_to_sheet")),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var ws_name = "SheetJS";\n\n/* Create worksheet */\nvar ws_data = [\n  [ "S", "h", "e", "e", "t", "J", "S" ],\n  [  1 ,  2 ,  3 ,  4 ,  5 ]\n];\nvar ws = XLSX.utils.aoa_to_sheet(ws_data);\n\n/* Add the worksheet to the workbook */\nXLSX.utils.book_append_sheet(wb, ws, ws_name);\n')),(0,o.kt)("h2",{id:"modifying-cell-values"},"Modifying Cell Values"),(0,o.kt)("h4",{id:"api-1"},"API"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Modify a single cell value in a worksheet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"XLSX.utils.sheet_add_aoa(worksheet, [[new_value]], { origin: address });\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Modify multiple cell values in a worksheet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"XLSX.utils.sheet_add_aoa(worksheet, aoa, opts);\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sheet_add_aoa")," utility function modifies cell values in a worksheet.  The\nfirst argument is the worksheet object.  The second argument is an array of\narrays of values.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," key of the third argument controls where cells\nwill be written.  The following snippet sets ",(0,o.kt)("inlineCode",{parentName:"p"},"B3=1")," and ",(0,o.kt)("inlineCode",{parentName:"p"},'E5="abc"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.utils.sheet_add_aoa(worksheet, [\n  [1],                             // <-- Write 1 to cell B3\n  ,                                // <-- Do nothing in row 4\n  [/*B5*/, /*C5*/, /*D5*/, "abc"]  // <-- Write "abc" to cell E5\n], { origin: "B3" });\n')),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../api/utilities#array-of-arrays-input"},'"Array of Arrays Input"')," describes the\nfunction and the optional ",(0,o.kt)("inlineCode",{parentName:"p"},"opts")," argument in more detail."),(0,o.kt)("h4",{id:"examples-1"},"Examples"),(0,o.kt)("p",null,"The special origin value ",(0,o.kt)("inlineCode",{parentName:"p"},"-1")," instructs ",(0,o.kt)("inlineCode",{parentName:"p"},"sheet_add_aoa")," to start in column A of\nthe row after the last row in the range, appending the data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.utils.sheet_add_aoa(worksheet, [\n  ["first row after data", 1],\n  ["second row after data", 2]\n], { origin: -1 });\n')),(0,o.kt)("h2",{id:"modifying-other-worksheet--workbook--cell-properties"},"Modifying Other Worksheet / Workbook / Cell Properties"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../csf/general"},'"Common Spreadsheet Format"')," section describes\nthe object structures in greater detail."))}k.isMDXComponent=!0}}]);