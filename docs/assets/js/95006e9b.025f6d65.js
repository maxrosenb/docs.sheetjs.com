"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1042],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6762:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(2848),r=n(9213),o=(n(9496),n(9613)),s=["components"],i={sidebar_position:4},l="Excel JavaScript API",c={unversionedId:"getting-started/demos/excel",id:"getting-started/demos/excel",title:"Excel JavaScript API",description:"Office 2016 introduced a JavaScript API for interacting with the application.",source:"@site/docs/04-getting-started/03-demos/03-excel.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/excel",permalink:"/docs/getting-started/demos/excel",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Adobe Apps",permalink:"/docs/getting-started/demos/extendscript"},next:{title:"NetSuite",permalink:"/docs/getting-started/demos/netsuite"}},p={},u=[{value:"Creating a new Add-in",id:"creating-a-new-add-in",level:2},{value:"Integrating the SheetJS Library",id:"integrating-the-sheetjs-library",level:2},{value:"Dynamic Arrays and SheetJS Array of Arrays",id:"dynamic-arrays-and-sheetjs-array-of-arrays",level:2},{value:"Fetching Files from the Internet",id:"fetching-files-from-the-internet",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"excel-javascript-api"},"Excel JavaScript API"),(0,o.kt)("p",null,"Office 2016 introduced a JavaScript API for interacting with the application.\nIt offers solutions for custom functions as well as task panes."),(0,o.kt)("p",null,"Excel currently does not provide support for working with Apple Numbers files\nand some legacy file formats.  SheetJS fills the gap."),(0,o.kt)("p",null,"This demo creates a new custom function to add much-needed functionality:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SHEETJS.EXTERN()")," tries to fetch an external spreadsheet and insert the data\ninto the worksheet.")),(0,o.kt)("p",null,"This demo focuses on the basic mechanics.  Advanced topics like Excel Custom\nFunction parameters are covered in the official Office JavaScript API docs.\nSheetJS worksheet metadata and other properties are covered in this doc site."),(0,o.kt)("h2",{id:"creating-a-new-add-in"},"Creating a new Add-in"),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Initial Platform Setup")," (click to show)"),(0,o.kt)("p",null,"The tool for generating Office Add-ins depends on NodeJS and various libraries.\n",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/"},"Install NodeJS")," and the required dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm install -g yo bower generator-office\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Creating a new Project")," (click to show)"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"yo office")," from the command line.  It will ask a few questions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"Choose a project type": "Excel Custom Functions Add-in project"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"Choose a script type": "JavaScript",')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'"What do you want to name your add-in?": "SheetJSImport"'))),(0,o.kt)("p",null,"You will see a screen like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Choose a project type: Excel Custom Functions Add-in project\n? Choose a script type: JavaScript\n? What do you want to name your add-in? SheetJSImport\n\n----------------------------------------------------------------------------------\n\n      Creating SheetJSImport add-in for Excel using JavaScript and Excel-functions\nat C:\\Users\\SheetJS\\Documents\\SheetJSImport\n\n----------------------------------------------------------------------------------\n")),(0,o.kt)("p",null,"It helpfully prints out the next steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"cd SheetJSImport\nnpm run build\nnpm start\n")),(0,o.kt)("p",null,"If you have ",(0,o.kt)("a",{parentName:"p",href:"https://vscodium.com/"},"VSCodium")," installed, the folder can be opened with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"codium .\n"))),(0,o.kt)("p",null,"Running ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," will open up a terminal window and a new Excel window with\nthe loaded add-in.  Keep the terminal window open (it can be minimized).  When\nyou make a change, close both the Excel window and the terminal window before\nrunning ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," again."),(0,o.kt)("h2",{id:"integrating-the-sheetjs-library"},"Integrating the SheetJS Library"),(0,o.kt)("p",null,"The library can be installed like any other NodeJS module:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},"npm i --save https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz\n")),(0,o.kt)("p",null,"To be sure the library is loaded, remove all of the existing functions from\n",(0,o.kt)("inlineCode",{parentName:"p"},"src\\functions\\functions.js"),".  The new contents should be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"src\\functions\\functions.js","src\\functions\\functions.js":!0},'var XLSX = require("xlsx");\n\n/**\n * Print SheetJS Library Version\n * @customfunction\n * @returns {string[][]} The SheetJS Library Version.\n */\nfunction version() {\n  return [[XLSX.version]];\n}\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"manifest.xml")," should also be updated to reflect the function namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'        <bt:String id="Functions.Namespace" DefaultValue="SHEETJS"/>\n')),(0,o.kt)("p",null,"After making the change, save the files.  Close the terminal window and the\nExcel window (do not save the Excel file).  Re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,o.kt)("p",null,"In the new Excel window, enter the formula ",(0,o.kt)("inlineCode",{parentName:"p"},"=SHEETJS.VERSION()")," in cell E1. You\nshould see something similar to the following screenshot:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/files/xlcfversion.png",alt:"`SHEETJS.VERSION` output"})),(0,o.kt)("p",null,"This indicates that the SheetJS library has been loaded."),(0,o.kt)("h2",{id:"dynamic-arrays-and-sheetjs-array-of-arrays"},"Dynamic Arrays and SheetJS Array of Arrays"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../../api/utilities#json"},(0,o.kt)("inlineCode",{parentName:"a"},"sheet_to_json"))," helper function can generate\narrays of arrays of values based on the worksheet data.  Excel custom functions\ntransparently treat these as Dynamic Arrays."),(0,o.kt)("h2",{id:"fetching-files-from-the-internet"},"Fetching Files from the Internet"),(0,o.kt)("p",null,"For the next step, we will try to fetch data from an external resource.\n",(0,o.kt)("a",{parentName:"p",href:"https://sheetjs.com/pres.numbers"},"https://sheetjs.com/pres.numbers")," is an Apple Numbers file.  Excel does not\nunderstand Numbers files and it will not open them."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("b",null,"Excel bug related to `fetch`")," (click to show)"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"fetch")," is available to custom functions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function extern() {\n  try {\n    const url = "https://sheetjs.com/pres.numbers"; // URL to download\n    const res = await fetch(url); // fetch data\n    const ab = await res.arrayBuffer(); // get data as an array buffer\n\n    // DO SOMETHING WITH THE DATA HERE\n\n  } catch(e) { return e; } // pass error back to Excel\n}\n')),(0,o.kt)("p",null,"When fetching data, functions typically receive an ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," which stores\nthe file data.  This is readily parsed with ",(0,o.kt)("inlineCode",{parentName:"p"},"read"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var wb = XLSX.read(ab); // parse workbook\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This is how it should work"),"."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/OfficeDev/office-js/issues/2186"},"There are outstanding bugs in Excel.")),(0,o.kt)("p",null,"For the purposes of this demo, a Base64-encoded file will be used.  The\nworkaround involves fetching that Base64 file, getting the text, and parsing\nwith the ",(0,o.kt)("a",{parentName:"p",href:"../../api/parse-options#input-type"},(0,o.kt)("inlineCode",{parentName:"a"},"base64")," type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'async function extern() {\n  try {\n    const url = "https://sheetjs.com/pres.numbers.b64"; // URL to download\n    const res = await fetch(url); // fetch data\n    const text = await res.text(); // get data as an array buffer\n\n    var wb = XLSX.read(text, { type: "base64" });\n    // DO SOMETHING WITH THE DATA HERE\n\n  } catch(e) { return e; } // pass error back to Excel\n}\n')),(0,o.kt)("p",null,"Base64-encoded files can be generated with PowerShell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-powershell"},'[convert]::ToBase64String([System.IO.File]::ReadAllBytes((Resolve-Path "path\\to\\file"))) > file.b64\n'))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".Sheets")," property of the workbook object holds all of the worksheets and\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},".SheetNames")," property is an array of worksheet names.  Picking the first\nworksheet is fairly straightforward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var ws = wb.Sheets[wb.SheetNames[0]]; // get first worksheet\n")),(0,o.kt)("p",null,"This data can be converted to an Array of Arrays in one line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"var aoa = XLSX.utils.sheet_to_json(ws, {header: 1}); // get data as array of arrays\n")),(0,o.kt)("p",null,'To demonstrate the parsing ability, a Base64-encoded version of the file will\nbe used.  This file contains no binary characters and should "just work".  Once\nthe aforementioned Excel bug is fixed, the non-Base64 version can be used.'),(0,o.kt)("p",null,"This new function should be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"src\\functions\\functions.js"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"src\\functions\\functions.js","src\\functions\\functions.js":!0},'/**\n * Download file and write data\n * @customfunction\n * @returns {any[][]} Worksheet data\n */\nasync function extern() {\n  try {\n    /* URL */\n    // const url = "https://sheetjs.com/pres.numbers"; // Once Excel bug is fixed\n    const url = "https://sheetjs.com/pres.numbers.b64"; // workaround\n\n    /* Fetch Data */\n    const res = await fetch(url);\n\n    /* Get Data */\n    // const ab = await res.arrayBuffer(); // Once Excel bug is fixed\n    const b64 = await res.text(); // workaround\n\n    /* Parse Data */\n    // var wb = XLSX.read(ab); // Once Excel bug is fixed\n    var wb = XLSX.read(b64, { type: "base64" }); // workaround\n\n    /* get and return data */\n    var ws = wb.Sheets[wb.SheetNames[0]]; // get first worksheet\n    var aoa = XLSX.utils.sheet_to_json(ws, { header: 1 }); // get data as array of arrays\n    return [[url]];\n  } catch(e) { return [[e]]; } // pass error back to Excel\n}\n')),(0,o.kt)("p",null,"After making the change, save the files.  Close the terminal window and the\nExcel window (do not save the Excel file).  Re-run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start"),"."),(0,o.kt)("p",null,"Enter the formula ",(0,o.kt)("inlineCode",{parentName:"p"},"=SHEETJS.EXTERN()")," in cell D1 and hit Enter.  Excel should\npull in the data and generate a dynamic array:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/files/xlcfextern1.png",alt:"`SHEETJS.VERSION` output"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://sheetjs.com/pro"},"SheetJS Pro")," offers additional features that can be\nused in Excel Custom Functions and Add-ins"))}h.isMDXComponent=!0}}]);