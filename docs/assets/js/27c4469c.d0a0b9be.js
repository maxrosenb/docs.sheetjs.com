"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1976],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(4334);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(4334),o=n(2389),i=n(7392),s=n(7094),p=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:h,values:m,groupId:k,className:f}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=m?m:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),g=(0,i.l)(v,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===h?h:null!=(t=null!=h?h:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==w&&!v.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:y}=(0,s.U)(),[S,N]=(0,r.useState)(w),C=[],{blockElementScrollPositionUntilNextRender:F}=(0,p.o5)();if(null!=k){const e=x[k];null!=e&&e!==S&&v.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==S&&(F(t),N(a),null!=k&&y(k,String(a)))},A=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>C.push(e),onKeyDown:A,onFocus:P,onClick:P},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(b.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},5318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));n(5488),n(5162);const l={sidebar_position:2},o="Adobe Apps",i={unversionedId:"getting-started/demos/extendscript",id:"getting-started/demos/extendscript",title:"Adobe Apps",description:"Photoshop, InDesign and other Adobe Creative Suite applications offer extension",source:"@site/docs/04-getting-started/03-demos/02-extendscript.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/extendscript",permalink:"/docs/getting-started/demos/extendscript",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Salesforce LWC",permalink:"/docs/getting-started/demos/salesforce"},next:{title:"Databases and SQL",permalink:"/docs/getting-started/demos/database"}},s={},p=[{value:"ExtendScript Scripts",id:"extendscript-scripts",level:2},{value:"Reading Files",id:"reading-files",level:3},{value:"Writing Files",id:"writing-files",level:3},{value:"CEP",id:"cep",level:2},{value:"UXP",id:"uxp",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adobe-apps"},"Adobe Apps"),(0,r.kt)("p",null,"Photoshop, InDesign and other Adobe Creative Suite applications offer extension\nsupport.  Over the years there have been a few different JavaScript platforms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"ExtendScript": This uses an old JavaScript dialect but is supported in older\nversions of Creative Suite and Creative Cloud.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"CEP": This was recommended in CS6 but eventually deprecated.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'"UXP": This is the current Adobe recommendation for new CC extensions.'))),(0,r.kt)("p",null,"This demo intends to cover the SheetJS-related parts.  General setup as well as\ngeneral Adobe considerations are not covered here.  A basic familiarity with\nextension development is assumed."),(0,r.kt)("h2",{id:"extendscript-scripts"},"ExtendScript Scripts"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../installation/extendscript"},"Installation is straightforward:")," download a\nscript and move it to your project directory."),(0,r.kt)("h3",{id:"reading-files"},"Reading Files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XLSX.readFile")," can directly accept an absolute URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var workbook = XLSX.readFile("~/Documents/test.xlsx");\n')),(0,r.kt)("p",null,"The path can be user-configurable using ",(0,r.kt)("inlineCode",{parentName:"p"},"File.openDialog"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/* Show File Picker */\nvar thisFile = File.openDialog("Select a spreadsheet");\nif(!thisFile) { alert("File not found!"); return; }\n\n/* Read file from disk */\nvar workbook = XLSX.readFile(thisFile.absoluteURI);\n')),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Complete Example")," (click to hide)"),(0,r.kt)("p",null,"In this example, the script will show a dialog to select a file.  After reading\nthe file, the workbook Author property will be extracted and the Photoshop doc\nauthor (",(0,r.kt)("inlineCode",{parentName:"p"},"activeDocument.info.author"),") will be changed accordingly."),(0,r.kt)("p",null,"This demo was verified in Photoshop CS6 64-bit on Windows 10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'#target photoshop\n#include "xlsx.extendscript.js";\n\nfunction main_parse() {\n  /* Show File Picker */\n  var thisFile = File.openDialog("Select a spreadsheet");\n  if(!thisFile) { alert("File not found!"); return; }\n\n  /* Read file from disk */\n  var workbook = XLSX.readFile(thisFile.absoluteURI);\n\n  /* Get Workbook Author */\n  var Props = workbook.Props; if(!Props) { alert("Missing Author!"); return; }\n  var Author = Props.Author; if(!Author) { alert("Missing Author!"); return; }\n\n  /* Change Document Author to Workbook Author */\n  var info = activeDocument.info;\n  alert("Changing Author from |" + info.author + "| to |" + Author + "|");\n  info.author = Author;\n}\n\nmain_parse();\n')),(0,r.kt)("p",null,"0) Download the ",(0,r.kt)("a",{parentName:"p",href:"pathname:///files/SheetJS.xlsb"},"test workbook"),"."),(0,r.kt)("p",null,"1) Download the following scripts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.extendscript.js"},(0,r.kt)("inlineCode",{parentName:"a"},"xlsx.extendscript.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///live/parse.jsx"},(0,r.kt)("inlineCode",{parentName:"a"},"parse.jsx")))),(0,r.kt)("p",null,"and place in the scripts directory.  For CS6 Windows 10 the path is typically"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Adobe\\Adobe Photoshop CS6 (64 Bit)\\Presets\\Scripts")),(0,r.kt)("p",null,"2) Restart Photoshop and open a file (or create a new one)"),(0,r.kt)("p",null,"3) File > Scripts > parse and select the test workbook"),(0,r.kt)("p",null,"4) An alert will confirm that the file was read and the author will be changed:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/files/psparse.png",alt:'"Changing Author" popup'})),(0,r.kt)("p",null,"5) File > File Info... should show the updated Author field!")),(0,r.kt)("h3",{id:"writing-files"},"Writing Files"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"XLSX.writeFile")," can directly accept an absolute URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.writeFile(workbook, "~/Documents/test.xlsx");\n')),(0,r.kt)("p",null,"The path can be user-configurable using ",(0,r.kt)("inlineCode",{parentName:"p"},"File.saveDialog"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/* Show File Picker */\nvar thisFile = File.saveDialog("Select an output file", "*.xlsx;*.xls");\nif(!thisFile) { alert("File not found!"); return; }\n\n/* Write file to disk */\nXLSX.writeFile(workbook, thisFile.absoluteURI);\n')),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Complete Example")," (click to hide)"),(0,r.kt)("p",null,'In this example, the script will show a dialog to select an output file.  Once\nselected, the library will create a new workbook with one worksheet.  Cell A1\nwill be "Author" and cell B1 will be the active Photoshop document Author.\nThe PS author is available as ',(0,r.kt)("inlineCode",{parentName:"p"},"activeDocument.info.author"),"."),(0,r.kt)("p",null,"This demo was verified in Photoshop CS6 64-bit on Windows 10."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'#target photoshop\n#include "xlsx.extendscript.js";\n\nfunction main_write() {\n  /* Show File Picker */\n  var thisFile = File.saveDialog("Select an output file", "*.xlsx;*.xls");\n  if(!thisFile) { alert("File not found!"); return; }\n\n  /* Create new Worksheet */\n  var ws = XLSX.utils.aoa_to_sheet([\n    ["Author", activeDocument.info.author]\n  ]);\n\n  /* Create new Workbook and add worksheet */\n  var wb = XLSX.utils.book_new();\n  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");\n\n  /* Write file to disk */\n  XLSX.writeFile(wb, thisFile.absoluteURI);\n  alert("Created File " + thisFile.absoluteURI);\n}\n\nmain_write();\n')),(0,r.kt)("p",null,"1) Download the following scripts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.extendscript.js"},(0,r.kt)("inlineCode",{parentName:"a"},"xlsx.extendscript.js"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///live/write.jsx"},(0,r.kt)("inlineCode",{parentName:"a"},"write.jsx")))),(0,r.kt)("p",null,"and place in the scripts directory.  For CS6 Windows 10 the path is typically"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"C:\\Program Files\\Adobe\\Adobe Photoshop CS6 (64 Bit)\\Presets\\Scripts")),(0,r.kt)("p",null,"2) Restart Photoshop and open a file (or create a new one)"),(0,r.kt)("p",null,"3) File > File Info ... and confirm there is an Author. If not, set to ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJS")),(0,r.kt)("p",null,"4) File > Scripts > write and use the popup to select the Documents folder.\nEnter ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSPSTest.xlsx"),' and hit "Save"'),(0,r.kt)("p",null,"4) An alert will confirm that the file was created:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/files/pswrite.png",alt:'"Created File" popup'})),(0,r.kt)("p",null,"5) Open the generated ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSPSTest.xlsx")," file and compare to Photoshop author")),(0,r.kt)("h2",{id:"cep"},"CEP"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../installation/standalone"},"The standalone scripts")," can be added to CEP\nextension HTML"),(0,r.kt)("h2",{id:"uxp"},"UXP"),(0,r.kt)("p",null,"UXP officially recommends ",(0,r.kt)("inlineCode",{parentName:"p"},"require")," and NodeJS Modules for third party support."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../installation/frameworks"},'Use the "Frameworks" instructions to download.')))}c.isMDXComponent=!0}}]);