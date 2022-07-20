"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5616],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,u=m["".concat(l,".").concat(h)]||m[h]||c[h]||o;return n?a.createElement(u,s(s({ref:t},d),{},{components:n})):a.createElement(u,s({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4288:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var a=n(2848),r=n(9213),o=(n(9496),n(9613)),s=["components"],i={sidebar_position:7},l="Headless Automation",p={unversionedId:"getting-started/demos/headless",id:"getting-started/demos/headless",title:"Headless Automation",description:'Headless automation involves controlling "headless browsers" to access websites',source:"@site/docs/04-getting-started/03-demos/07-headless.md",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/headless",permalink:"/docs/getting-started/demos/headless",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Clipboard Data",permalink:"/docs/getting-started/demos/clipboard"},next:{title:"Typed Arrays and ML",permalink:"/docs/getting-started/demos/ml"}},d={},c=[{value:"Use Case",id:"use-case",level:2},{value:"Puppeteer",id:"puppeteer",level:2},{value:"Playwright",id:"playwright",level:2},{value:"PhantomJS",id:"phantomjs",level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"headless-automation"},"Headless Automation"),(0,o.kt)("p",null,'Headless automation involves controlling "headless browsers" to access websites\nand submit or download data.  It is also possible to automate browsers using\ncustom browser extensions.'),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../../installation/standalone"},"SheetJS standalone script")," can be added to\nany website by inserting a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRIPT")," tag.  Headless browsers usually provide\nutility functions for running custom snippets in the browser and passing data\nback to the automation script."),(0,o.kt)("h2",{id:"use-case"},"Use Case"),(0,o.kt)("p",null,"This demo focuses on exporting table data to a workbook.  Headless browsers do\nnot generally support passing objects between the browser context and the\nautomation script, so the file data must be generated in the browser context\nand sent back to the automation script for saving in the filesystem.  Steps:"),(0,o.kt)("p",null,"1) Launch the headless browser and load the target webpage."),(0,o.kt)("p",null,"2) Add the standalone SheetJS build to the page in a ",(0,o.kt)("inlineCode",{parentName:"p"},"SCRIPT")," tag."),(0,o.kt)("p",null,"3) Add a script to the page (in the browser context) that will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make a workbook object from the first table using ",(0,o.kt)("inlineCode",{parentName:"li"},"XLSX.utils.table_to_book")),(0,o.kt)("li",{parentName:"ul"},"Generate the bytes for an XLSB file using ",(0,o.kt)("inlineCode",{parentName:"li"},"XLSX.write")),(0,o.kt)("li",{parentName:"ul"},"Send the bytes back to the automation script")),(0,o.kt)("p",null,"4) When the automation context receives data, save to a file"),(0,o.kt)("p",null,"This demo exports data from ",(0,o.kt)("a",{parentName:"p",href:"https://sheetjs.com/demos/table"},"https://sheetjs.com/demos/table"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is also possible to parse files from the browser context, but parsing from\nthe automation context is more performant and strongly recommended."))),(0,o.kt)("h2",{id:"puppeteer"},"Puppeteer"),(0,o.kt)("p",null,"Puppeteer enables headless Chromium automation for NodeJS.  Releases ship with\nan installer script.  Installation is straightforward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz puppeteer\n")),(0,o.kt)("p",null,"Binary strings are the favored data type.  They can be safely passed from the\nbrowser context to the automation script.  NodeJS provides an API to write\nbinary strings to file (",(0,o.kt)("inlineCode",{parentName:"p"},"fs.writeFileSync")," using encoding ",(0,o.kt)("inlineCode",{parentName:"p"},"binary"),")."),(0,o.kt)("p",null,"To run the example, after installing the packages, save the following script to\n",(0,o.kt)("inlineCode",{parentName:"p"},"SheetJSPuppeteer.js")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"node SheetJSPuppeteer.js"),".  Steps are commented:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SheetJSPuppeteer.js"',title:'"SheetJSPuppeteer.js"'},'const fs = require("fs");\nconst puppeteer = require(\'puppeteer\');\n(async () => {\n  /* (1) Load the target page */\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on("console", msg => console.log("PAGE LOG:", msg.text()));\n  await page.setViewport({width: 1920, height: 1080});\n  await page.goto(\'https://sheetjs.com/demos/table\');\n\n  /* (2) Load the standalone SheetJS build from the CDN */\n  await page.addScriptTag({ url: \'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js\' });\n\n  /* (3) Run the snippet in browser and return data */\n  const bin = await page.evaluate(() => {\n    /* NOTE: this function will be evaluated in the browser context.\n       `page`, `fs` and `puppeteer` are not available.\n       `XLSX` will be available thanks to step 2 */\n\n    /* find first table */\n    var table = document.body.getElementsByTagName(\'table\')[0];\n\n    /* call table_to_book on first table */\n    var wb = XLSX.utils.table_to_book(table);\n\n    /* generate XLSB and return binary string */\n    return XLSX.write(wb, {type: "binary", bookType: "xlsb"});\n  });\n\n  /* (4) write data to file */\n  fs.writeFileSync("SheetJSPuppeteer.xlsb", bin, { encoding: "binary" });\n\n  await browser.close();\n})();\n')),(0,o.kt)("h2",{id:"playwright"},"Playwright"),(0,o.kt)("p",null,"Playwright presents a unified scripting framework for Chromium, WebKit, and\nother browsers.  It draws inspiration from Puppeteer.  In fact, the example\ncode is almost identical!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz playwright\n")),(0,o.kt)("p",null,"To run the example, after installing the packages, save the following script to\n",(0,o.kt)("inlineCode",{parentName:"p"},"SheetJSPlaywright.js")," and run ",(0,o.kt)("inlineCode",{parentName:"p"},"node SheetJSPlaywright.js"),".  Import divergences\nfrom the Puppeteer example are highlighted below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SheetJSPlaywright.js"',title:'"SheetJSPlaywright.js"'},'const fs = require("fs");\n// highlight-next-line\nconst { webkit } = require(\'playwright\'); // import desired browser\n(async () => {\n  /* (1) Load the target page */\n  // highlight-next-line\n  const browser = await webkit.launch(); // launch desired browser\n  const page = await browser.newPage();\n  page.on("console", msg => console.log("PAGE LOG:", msg.text()));\n  // highlight-next-line\n  await page.setViewportSize({width: 1920, height: 1080}); // different name :(\n  await page.goto(\'https://sheetjs.com/demos/table\');\n\n  /* (2) Load the standalone SheetJS build from the CDN */\n  await page.addScriptTag({ url: \'https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js\' });\n\n  /* (3) Run the snippet in browser and return data */\n  const bin = await page.evaluate(() => {\n    /* NOTE: this function will be evaluated in the browser context.\n       `page`, `fs` and the browser engine are not available.\n       `XLSX` will be available thanks to step 2 */\n\n    /* find first table */\n    var table = document.body.getElementsByTagName(\'table\')[0];\n\n    /* call table_to_book on first table */\n    var wb = XLSX.utils.table_to_book(table);\n\n    /* generate XLSB and return binary string */\n    return XLSX.write(wb, {type: "binary", bookType: "xlsb"});\n  });\n\n  /* (4) write data to file */\n  fs.writeFileSync("SheetJSPlaywright.xlsb", bin, { encoding: "binary" });\n\n  await browser.close();\n})();\n')),(0,o.kt)("h2",{id:"phantomjs"},"PhantomJS"),(0,o.kt)("p",null,"PhantomJS is a headless web browser powered by WebKit.  Standalone binaries are\navailable at ",(0,o.kt)("a",{parentName:"p",href:"https://phantomjs.org/download.html"},"https://phantomjs.org/download.html")),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This information is provided for legacy deployments.  PhantomJS development has\nbeen suspended and there are known vulnerabilities, so new projects should use\nalternatives.  For WebKit automation, new projects should use Playwright."))),(0,o.kt)("p",null,"Binary strings are the favored data type.  They can be safely passed from the\nbrowser context to the automation script.  PhantomJS provides an API to write\nbinary strings to file (",(0,o.kt)("inlineCode",{parentName:"p"},"fs.write")," using mode ",(0,o.kt)("inlineCode",{parentName:"p"},"wb"),")."),(0,o.kt)("p",null,"To run the example, save the following script to ",(0,o.kt)("inlineCode",{parentName:"p"},"SheetJSPhantom.js")," in the same\nfolder as ",(0,o.kt)("inlineCode",{parentName:"p"},"phantomjs.exe")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"phantomjs")," and run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./phantomjs SheetJSPhantom.js     ## macOS / Linux\n.\\phantomjs.exe SheetJSPhantom.js ## windows\n")),(0,o.kt)("p",null,"The steps are marked in the comments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="SheetJSPhantom.js"',title:'"SheetJSPhantom.js"'},'var page = require(\'webpage\').create();\npage.onConsoleMessage = function(msg) { console.log(msg); };\n\n/* (1) Load the target page */\npage.open(\'https://sheetjs.com/demos/table\', function() {\n\n  /* (2) Load the standalone SheetJS build from the CDN */\n  page.includeJs("https://cdn.sheetjs.com/xlsx-latest/package/dist/xlsx.full.min.js", function() {\n\n    /* (3) Run the snippet in browser and return data */\n    var bin = page.evaluateJavaScript([ "function(){",\n\n      /* find first table */\n      "var table = document.body.getElementsByTagName(\'table\')[0];",\n\n      /* call table_to_book on first table */\n      "var wb = XLSX.utils.table_to_book(table);",\n\n      /* generate XLSB file and return binary string */\n      "return XLSX.write(wb, {type: \'binary\', bookType: \'xlsb\'});",\n    "}" ].join(""));\n\n    /* (4) write data to file */\n    require("fs").write("SheetJSPhantomJS.xlsb", bin, "wb");\n\n    phantom.exit();\n  });\n});\n')),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"PhantomJS is very finicky and will hang if there are script errors.  It is\nstrongly recommended to add verbose logging and to lint scripts before use."))))}h.isMDXComponent=!0}}]);