"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?o.createElement(k,i(i({ref:t},d),{},{components:n})):o.createElement(k,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8559:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:15,title:"Chrome and Chromium"},i=void 0,l={unversionedId:"getting-started/demos/chromium",id:"getting-started/demos/chromium",title:"Chrome and Chromium",description:"This demo was written using the Manifest V2 extension platform.  Chrome Web",source:"@site/docs/04-getting-started/03-demos/15-chromium.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/chromium",permalink:"/docs/getting-started/demos/chromium",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,title:"Chrome and Chromium"},sidebar:"tutorialSidebar",previous:{title:"Data Grids and UI",permalink:"/docs/getting-started/demos/grid"},next:{title:"Desktop Applications",permalink:"/docs/getting-started/demos/desktop"}},s={},p=[{value:"Relevant Operations",id:"relevant-operations",level:2},{value:"Generating Downloads",id:"generating-downloads",level:3},{value:"Content Script Table Scraping",id:"content-script-table-scraping",level:3},{value:"Demo",id:"demo",level:2},{value:"Bookmark Exporter",id:"bookmark-exporter",level:3},{value:"Table Exporter",id:"table-exporter",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},'This demo was written using the Manifest V2 extension platform.  Chrome Web\nStore will not accept new V2 extensions, but these can be sideloaded using the\n"Load unpacked" extension option.')),(0,r.kt)("p",null,"This library is compatible with Chrome and Chromium extensions and should just\nwork out of the box.  Specific API support is listed in the Chrome extensions\nAPI documentation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"pathname:///chromium/SheetJSDemo.crx"},"Right-Click and download the final crx")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"New releases of Chrome / Chromium will block with ",(0,r.kt)("inlineCode",{parentName:"p"},"CRX_REQUIRED_PROOF_MISSING"),"."),(0,r.kt)("p",{parentName:"admonition"},"To try the extension:"),(0,r.kt)("p",{parentName:"admonition"},'1) Right-click and select "Save Link As ..." to save the CRX file'),(0,r.kt)("p",{parentName:"admonition"},"2) Open ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://extensions/")," in the browser and enable Developer mode"),(0,r.kt)("p",{parentName:"admonition"},"3) Click and drag the downloaded CRX file into the Extensions page to install.")),(0,r.kt)("h2",{id:"relevant-operations"},"Relevant Operations"),(0,r.kt)("h3",{id:"generating-downloads"},"Generating Downloads"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"writeFile")," function works in a Chrome or Chromium extension:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.writeFile(wb, "export.xlsx");\n')),(0,r.kt)("p",null,"Under the hood, it uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome.downloads")," API.  ",(0,r.kt)("inlineCode",{parentName:"p"},'"downloads"')," permission\nshould be set in ",(0,r.kt)("inlineCode",{parentName:"p"},"manifest.json"),"."),(0,r.kt)("h3",{id:"content-script-table-scraping"},"Content Script Table Scraping"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"table_to_book")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"table_to_sheet")," can help build workbooks from DOM tables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var tables = document.getElementsByTagName("table");\nvar wb = XLSX.utils.book_new();\nfor(var i = 0; i < tables.length; ++i) {\n  var ws = XLSX.utils.table_to_sheet(tables[i]);\n  XLSX.utils.book_append_sheet(wb, ws, "Table" + i);\n}\n')),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"The demo extension includes multiple features to demonstrate sample usage.\nProduction extensions should include proper error handling."),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Testing Unpacked Extension")," (click to show)"),(0,r.kt)("p",null,"1) ",(0,r.kt)("a",{parentName:"p",href:"pathname:///chromium/SheetJSChromiumUnpacked.zip"},"Right-Click and download the zip")),(0,r.kt)("p",null,"2) Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSChromium")," folder in your Downloads directory, move the zip\nfile into the folder, and extract the zip file."),(0,r.kt)("p",null,"3) Open ",(0,r.kt)("inlineCode",{parentName:"p"},"chrome://extensions/")," in the browser and enable Developer mode"),(0,r.kt)("p",null,'4) Click "Load Unpacked" and select the ',(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSChromium")," folder.")),(0,r.kt)("h3",{id:"bookmark-exporter"},"Bookmark Exporter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"chrome.bookmarks"),' API enables bookmark tree traversal.  The "Export Bookmarks"\nbutton in the extension pop-up recursively walks the bookmark tree, pushes the\nbookmark URLs into a data array, and exports into a simple spreadsheet:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"/* walk the bookmark tree */\nfunction recurse_bookmarks(data, tree) {\n  if(tree.url) data.push({Name: tree.title, Location: tree.url});\n  (tree.children||[]).forEach(function(child) { recurse_bookmarks(data, child); });\n}\n\n/* get bookmark data */\nchrome.bookmarks.getTree(function(res) {\n  /* load into an array */\n  var data = [];\n  res.forEach(function(t) { recurse_bookmarks(data, t); });\n\n  /* create worksheet */\n  var ws = XLSX.utils.json_to_sheet(data, { header: ['Name', 'Location'] });\n\n  /* create workbook and export */\n  var wb = XLSX.utils.book_new();\n  XLSX.utils.book_append_sheet(wb, ws, 'Bookmarks');\n  XLSX.writeFile(wb, \"bookmarks.xlsx\");\n});\n")),(0,r.kt)("h3",{id:"table-exporter"},"Table Exporter"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"content.js")," content script converts a table in the DOM to workbook object\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"table_to_book")," utility function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// event page script trigger\nchrome.tabs.sendMessage(tab.id);\n// content script convert\nvar wb = XLSX.utils.table_to_book(elt);\n// event page script callback\nXLSX.writeFile(wb, "export.xlsx");\n')),(0,r.kt)("p",null,"Since the workbook object is a plain JS object, the object is sent back to an\nevent page script which generates the file and attempts a download."))}c.isMDXComponent=!0}}]);