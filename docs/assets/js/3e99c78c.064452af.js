"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8206],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=s(a),b=r,k=m["".concat(p,".").concat(b)]||m[b]||c[b]||o;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9360:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:17},l="Clipboard Data",i={unversionedId:"getting-started/demos/clipboard",id:"getting-started/demos/clipboard",title:"Clipboard Data",description:"Spreadsheet software like Excel typically support copying and pasting cells and",source:"@site/docs/04-getting-started/03-demos/17-clipboard.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/clipboard",permalink:"/docs/getting-started/demos/clipboard",draft:!1,tags:[],version:"current",sidebarPosition:17,frontMatter:{sidebar_position:17},sidebar:"tutorialSidebar",previous:{title:"Desktop Applications",permalink:"/docs/getting-started/demos/desktop"},next:{title:"JavaScript Engines",permalink:"/docs/getting-started/demos/engines"}},p={},s=[{value:"Browser Reading (paste)",id:"browser-reading-paste",level:2},{value:"Live Demo",id:"live-demo",level:3},{value:"Browser Writing (copy)",id:"browser-writing-copy",level:2},{value:"Live Demo",id:"live-demo-1",level:3},{value:"Electron",id:"electron",level:2}],d={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clipboard-data"},"Clipboard Data"),(0,r.kt)("p",null,'Spreadsheet software like Excel typically support copying and pasting cells and\ndata. This is implemented through the Clipboard ("Pasteboard" in OSX parlance).'),(0,r.kt)("p",null,"When copying a selection of cells, Excel for Windows stores a screenshot of the\nselected cells as an image.  It also creates and stores a number of strings and\nfiles for the various formats, including TSV, CSV, HTML, RTF, SYLK, DIF, XLSB,\nXLS (both '97-2004 and '95), and SpreadsheetML 2003."),(0,r.kt)("p",null,"Not all Clipboard APIs offer access to all clipboard types."),(0,r.kt)("h2",{id:"browser-reading-paste"},"Browser Reading (paste)"),(0,r.kt)("p",null,"Clipboard data can be read from a ",(0,r.kt)("inlineCode",{parentName:"p"},"paste")," event, accessible from the event\n",(0,r.kt)("inlineCode",{parentName:"p"},"clipboardData")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"document.onpaste = function(e) {\n  /* get TSV */\n  var str = e.clipboardData.getData('text/html');\n  /* parse */\n  var wb = XLSX.read(str, {type: \"string\"});\n  /* DO SOMETHING WITH wb HERE */\n};\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getData")," accepts one argument: the desired MIME type. Chrome 103 supports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MIME type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSV (tab separated values)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/html")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/rtf")),(0,r.kt)("td",{parentName:"tr",align:"left"},"RTF (rich text format)")))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getData")," returns a string compatible with the ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type for ",(0,r.kt)("inlineCode",{parentName:"p"},"XLSX.read"),"."),(0,r.kt)("h3",{id:"live-demo"},"Live Demo"),(0,r.kt)("p",null,'Open a file in Excel, copy some cells, then come back to this window.  Click on\n"RESULT" below and paste (Control+V for Windows, Command+V for Mac).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Clipboard() {\n  const [csvs, setCSVs] = React.useState([ "", "", "" ]);\n\n  /* Set up paste handler */\n  React.useEffect(async() => {\n    document.onpaste = function(e) {\n      /* this demo will read 3 different clipboard data types */\n      var mime_arr = [ \'text/plain\', \'text/html\', \'text/rtf\' ];\n      /* get clipboard data for each type */\n      var data_arr = mime_arr.map(mime => e.clipboardData.getData(mime));\n      /* parse each data string into a workbook */\n      var wb_arr = data_arr.map(str => XLSX.read(str, {type: "string"}));\n      /* get first worksheet from each workbook */\n      var ws_arr = wb_arr.map(wb => wb.Sheets[wb.SheetNames[0]]);\n      /* generate CSV for each "first worksheet" */\n      var result = ws_arr.map(ws => XLSX.utils.sheet_to_csv(ws));\n      setCSVs(result);\n    };\n  }, []);\n\n  return (\n    <>\n      {csvs[0] && (<pre><b>Data from clipboard TSV  (text/plain)</b><br/>{csvs[0]}</pre>)}\n      {csvs[1] && (<pre><b>Data from clipboard HTML (text/html)</b><br/>{csvs[1]}</pre>)}\n      {csvs[2] && (<pre><b>Data from clipboard RTF  (text/rtf)</b><br/>{csvs[2]}</pre>)}\n      {csvs.every(x => !x) && <b>Copy data in Excel, click here, and paste (Control+V)</b>}\n    </>\n  );\n}\n')),(0,r.kt)("h2",{id:"browser-writing-copy"},"Browser Writing (copy)"),(0,r.kt)("p",null,"Clipboard data can be written from a ",(0,r.kt)("inlineCode",{parentName:"p"},"copy")," event, accessible from the event\n",(0,r.kt)("inlineCode",{parentName:"p"},"clipboardData")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'document.oncopy = function(e) {\n  /* get HTML of first worksheet in workbook */\n  var str = XLSX.write(wb, {type: "string", bookType: "html"});\n  /* set HTML clipboard data */\n  e.clipboardData.setData(\'text/html\', str);\n\n  /* prevent the browser from copying the normal data */\n  e.preventDefault();\n};\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"setData")," accepts two arguments: MIME type and new data. Chrome 103 supports:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"MIME type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Data format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/plain")),(0,r.kt)("td",{parentName:"tr",align:"left"},"TSV (tab separated values)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"text/html")),(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML")))),(0,r.kt)("p",null,"Browsers do not currently support assigning to the ",(0,r.kt)("inlineCode",{parentName:"p"},"text/rtf")," clipboard type."),(0,r.kt)("h3",{id:"live-demo-1"},"Live Demo"),(0,r.kt)("p",null,"This demo creates a simple workbook from the following HTML table:"),(0,r.kt)("table",{id:"srcdata"},(0,r.kt)("tr",null,(0,r.kt)("td",null,"SheetJS"),(0,r.kt)("td",null,"Clipboard"),(0,r.kt)("td",null,"Demo")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"bookType"),(0,r.kt)("td",null,"RTF")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"source"),(0,r.kt)("td",null,"HTML Table"))),(0,r.kt)("p",null,"Create a new file in Excel then come back to this window.  Select the text\nbelow and copy (Control+C for Windows, Command+C for Mac).  Go back to the\nexcel"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function Clipboard() {\n  /* Set up copy handler */\n  React.useEffect(async() => {\n    document.oncopy = function(e) {\n      /* generate workbook from table */\n      var wb = XLSX.utils.table_to_book(document.getElementById("srcdata"));\n      /* get HTML of first worksheet in workbook */\n      var str = XLSX.write(wb, {type: "string", bookType: "html"});\n      /* set HTML clipboard data */\n      e.clipboardData.setData(\'text/html\', str);\n      /* prevent the browser from copying the normal data */\n      e.preventDefault();\n    };\n  }, []);\n\n  return (\n    <b>Select this text, copy (Control+C), and paste in Excel</b>\n  );\n}\n')),(0,r.kt)("h2",{id:"electron"},"Electron"),(0,r.kt)("p",null,"Electron ",(0,r.kt)("a",{parentName:"p",href:"https://www.electronjs.org/docs/latest/api/clipboard"},"Clipboard API"),"\nsupports HTML and RTF clipboards."),(0,r.kt)("p",null,"There are special methods for specific clipboard types:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"File Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Read Clipboard Data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Write Clipboard Data"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"RTF"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.readRTF")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.writeRTF"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TSV"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.readText")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.writeText"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"HTML"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.readHTML")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"clipboard.writeHTML"))))),(0,r.kt)("p",null,"Each method operates on JS strings."),(0,r.kt)("admonition",{title:"Experimental Buffer Clipboard Support",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Electron additionally supports binary operations using ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer"),' objects.  This\nsupport is considered "experimental" and is not guaranteed to work on any\nplatform.  Issues should be raised with the Electron project'),(0,r.kt)("p",{parentName:"admonition"},"On the ",(0,r.kt)("inlineCode",{parentName:"p"},"macOS")," platform, some versions of Excel store a packaged file with key\n",(0,r.kt)("inlineCode",{parentName:"p"},"dyn.ah62d4qmxhk4d425try1g44pdsm11g55gsu1en5pcqzwc4y5tsz3gg3k"),".  The package is\na simple CFB file that can be parsed:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const { clipboard } = require(\'electron\')\nconst XLSX = require("xlsx");\nconst buf = clipboard.readBuffer(\'dyn.ah62d4qmxhk4d425try1g44pdsm11g55gsu1en5pcqzwc4y5tsz3gg3k\');\nconst cfb = XLSX.CFB.read(buf, {type: "buffer"});\nconst pkg = XLSX.CFB.find(cfb, "Package").content;\nconst wb = XLSX.read(pkg);\n'))))}c.isMDXComponent=!0}}]);