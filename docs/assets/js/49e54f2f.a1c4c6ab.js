"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3215],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8264:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(9496),r=n(1626),l="tabItem_ZP9l";function o(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},114:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(2848),r=n(9496),l=n(3026),o=n(8658),i=n(1823),s=n(4807),u=n(1626),p="tabList_XleC",c="tabItem_hpFr";function m(e){var t,n,l,m=e.lazy,d=e.block,f=e.defaultValue,k=e.values,N=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=k?k:g.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),S=(0,o.l)(b,(function(e,t){return e.value===t.value}));if(S.length>0)throw new Error('Docusaurus error: Duplicate values "'+S.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(t=null!=f?f:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=g[0])?void 0:l.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var A=(0,i.U)(),C=A.tabGroupChoices,E=A.setTabGroupChoices,T=(0,r.useState)(y),v=T[0],w=T[1],I=[],F=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=N){var O=C[N];null!=O&&O!==v&&b.some((function(e){return e.value===O}))&&w(O)}var R=function(e){var t=e.currentTarget,n=I.indexOf(t),a=b[n].value;a!==v&&(F(t),w(a),null!=N&&E(N,a))},x=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":d},h)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:function(e){return I.push(e)},onKeyDown:x,onFocus:R,onClick:R},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":v===t})}),null!=n?n:t)}))),m?(0,r.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},123:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),o=n(114),i=n(8264),s=["components"],u={sidebar_position:1},p="Formulae",c={unversionedId:"csf/features/formulae",id:"csf/features/formulae",title:"Formulae",description:"Formulae File Format Support (click to show)",source:"@site/docs/07-csf/07-features/01-formulae.md",sourceDirName:"07-csf/07-features",slug:"/csf/features/formulae",permalink:"/docs/csf/features/formulae",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Spreadsheet Features",permalink:"/docs/csf/features/"},next:{title:"Hyperlinks",permalink:"/docs/csf/features/hyperlinks"}},m={},d=[{value:"A1-Style Formulae",id:"a1-style-formulae",level:2},{value:"Single-Cell Formulae",id:"single-cell-formulae",level:2},{value:"Array Formulae",id:"array-formulae",level:2},{value:"Dynamic Array Formulae",id:"dynamic-array-formulae",level:3},{value:"Localization",id:"localization",level:2},{value:"Prefixed &quot;Future Functions&quot;",id:"prefixed-future-functions",level:2}],f={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"formulae"},"Formulae"),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null,"Formulae File Format Support")," (click to show)"),(0,l.kt)("p",null,"The parser will translate from the storage representation to A1-style strings,\nwhile the writer will translate from A1-style strings to the file format."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Formats"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Parse"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Write"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Array"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Dynamic"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Storage Representation"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"XLSX / XLSM"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A1-style strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"XLSB"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"left"},"BIFF parsed tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"XLS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"BIFF parsed tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"XLML"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"RC-style strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"SYLK"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A1 / RC-style strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"CSV / TXT"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"A1-style strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"ODS / FODS / UOS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"OpenFormula strings")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WK","*"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Lotus parsed tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"WQ","*"," / WB","*"," / QPW"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Quattro Pro tokens")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"NUMBERS"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"Numbers parsed tokens"))))),(0,l.kt)("p",null,"SheetJS supports reading and writing formulae for a number of file formats. When\nsupported, formulae will always be exported."),(0,l.kt)("p",null,"By default, formulae are not always imported.  To ensure formula parsing, the\noption ",(0,l.kt)("inlineCode",{parentName:"p"},"cellFormula: true")," should be passed to the parser."),(0,l.kt)(o.Z,{mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,l.kt)("p",null,"Typically file data will be available as an ",(0,l.kt)("inlineCode",{parentName:"p"},"ArrayBuffer"),", either downloaded\nwith ",(0,l.kt)("inlineCode",{parentName:"p"},"fetch")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"XMLHttpRequest")," or user-submitted with a File Input element.\n",(0,l.kt)("inlineCode",{parentName:"p"},"cellFormula: true")," should be added to the second options argument:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* using read in the browser, `cellFormula` is in the second argument */\nconst ab = await (await fetch("test.xlsx")).arrayBuffer();\nconst workbook = XLSX.read(ab, { cellFormula: true });\n// ------------------------------^^^^^^^^^^^^^^^^^\n'))),(0,l.kt)(i.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("p",null,"Typically file data will be available as a ",(0,l.kt)("inlineCode",{parentName:"p"},"Buffer")," from a network request / API\nor stored in the filesystem.  ",(0,l.kt)("inlineCode",{parentName:"p"},"cellFormula: true")," should be added to the second\noptions argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"readFile"),":"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"XLSX.read"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* using read in NodeJS, `cellFormula` is in the second argument */\nconst ab = await (await fetch("test.xlsx")).arrayBuffer();\nconst workbook = XLSX.read(ab, { cellFormula: true });\n// ------------------------------^^^^^^^^^^^^^^^^^\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"XLSX.readFile"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* using readFile in NodeJS, add `cellFormula` to the second argument */\nconst workbook = XLSX.readFile("test.xlsx", { cellFormula: true });\n// -------------------------------------------^^^^^^^^^^^^^^^^^\n'))),(0,l.kt)(i.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,l.kt)("p",null,"Typically file data will be available as a ",(0,l.kt)("inlineCode",{parentName:"p"},"Uint8Array")," / ",(0,l.kt)("inlineCode",{parentName:"p"},"ArrayBuffer")," from an\nAPI or stored in the filesystem.  ",(0,l.kt)("inlineCode",{parentName:"p"},"cellFormula: true")," should be added to the\nsecond options argument to ",(0,l.kt)("inlineCode",{parentName:"p"},"read")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"readFile"),":"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"XLSX.read"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* using read in Deno, `cellFormula` is in the second argument */\nconst ab = await (await fetch("test.xlsx")).arrayBuffer();\nconst workbook = XLSX.read(ab, { cellFormula: true });\n// ------------------------------^^^^^^^^^^^^^^^^^\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"XLSX.readFile"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'/* using readFile in Deno, add `cellFormula` to the second argument */\nconst workbook = XLSX.readFile("test.xlsx", { cellFormula: true });\n// -------------------------------------------^^^^^^^^^^^^^^^^^\n')))),(0,l.kt)("h2",{id:"a1-style-formulae"},"A1-Style Formulae"),(0,l.kt)("p",null,"The A1-style formula string is stored in the ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," field of the cell object.\nSpreadsheet software typically represent formulae with a leading ",(0,l.kt)("inlineCode",{parentName:"p"},"=")," sign, but\nSheetJS formulae omit the ",(0,l.kt)("inlineCode",{parentName:"p"},"="),"."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../general#a1-style"},'"A1-Style"')," describes A1 style in more detail."),(0,l.kt)("p",null,"For example, consider ",(0,l.kt)("a",{parentName:"p",href:"pathname:///files/concat.xlsx"},"this test file"),":"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"/files/concat.png",alt:'D1=CONCAT("Sheet", "JS")'})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'/* The live editor requires this function wrapper */\nfunction ConcatFormula(props) {\n  const [text, setText] = React.useState([]);\n\n  /* Fetch and display formula */\n  React.useEffect(async() => {\n    /* Fetch file */\n    const ab = await (await fetch("/files/concat.xlsx")).arrayBuffer();\n\n    /* Parse file */\n    const wb = XLSX.read(ab, {cellFormula: true});\n    const ws = wb.Sheets[wb.SheetNames[0]];\n\n    /* Look at cell D1 */\n    const addr = "D1";\n    const { t, v, f } = ws[addr];\n    setText(`\\\nCELL ADDRESS: ${addr}\\n\\\nCELL FORMULA: ${f}\\n\\\nVALUE (TYPE): "${v}" ("${t}")\\n\\\n`);\n  }, []);\n\n  return (<pre>{text}</pre>);\n}\n')),(0,l.kt)("h2",{id:"single-cell-formulae"},"Single-Cell Formulae"),(0,l.kt)("p",null,"For simple formulae, the ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," key of the desired cell can be set to the actual\nformula text.  This worksheet represents ",(0,l.kt)("inlineCode",{parentName:"p"},"A1=1"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"A2=2"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"A3=A1+A2"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var worksheet = {\n  "!ref": "A1:A3", // Worksheet range A1:A3\n  A1: { t: "n", v: 1 }, // A1 is a number (1)\n  A2: { t: "n", v: 2 }, // A2 is a number (2)\n  A3: { t: "n", v: 3, f: "A1+A2" } // A3 =A1+A2\n};\n')),(0,l.kt)("p",null,"Utilities like ",(0,l.kt)("inlineCode",{parentName:"p"},"aoa_to_sheet")," will accept cell objects in lieu of values:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var worksheet = XLSX.utils.aoa_to_sheet([\n  [ 1 ], // A1\n  [ 2 ], // A2\n  [ {t: "n", v: 3, f: "A1+A2"} ] // A3\n]);\n')),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,(0,l.kt)("b",null,"Live Example")," (click to show)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'/* The live editor requires this function wrapper */\nfunction ExportSimpleFormula(props) {\n\n  /* Callback invoked when the button is clicked */\n  const xport = React.useCallback(() => {\n    /* Create worksheet with A1=1, A2=2, A3=A1+A2 */\n    var ws = XLSX.utils.aoa_to_sheet([\n      [ 1 ], // A1\n      [ 2 ], // A2\n      [ {t: "n", v: 3, f: "A1+A2"} ] // A3\n    ]);\n\n    /* Export to file (start a download) */\n    var wb = XLSX.utils.book_new();\n    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");\n    XLSX.writeFile(wb, "SheetJSFormula1.xlsx");\n  });\n\n  return (<>\n    <button onClick={xport}><b>Export XLSX!</b></button>\n  </>);\n}\n'))),(0,l.kt)("p",null,"Cells with formula entries but no value will be serialized in a way that Excel\nand other spreadsheet tools will recognize.  This library will not automatically\ncompute formula results!  For example, the following worksheet will include the\n",(0,l.kt)("inlineCode",{parentName:"p"},"BESSELJ")," function but the result will not be available in JavaScript:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'var worksheet = XLSX.utils.aoa_to_sheet([\n  [ 3.14159, 2 ], // Row "1"\n  [ { t: "n", f: "BESSELJ(A1,B1)" } ] // Row "2" will be calculated on file open\n])\n')),(0,l.kt)("p",null,"If the actual results are needed in JS, ",(0,l.kt)("a",{parentName:"p",href:"https://sheetjs.com/pro"},"SheetJS Pro"),"\noffers a formula calculator component for evaluating expressions, updating\nvalues and dependent cells, and refreshing entire workbooks."),(0,l.kt)("h2",{id:"array-formulae"},"Array Formulae"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Assign an array formula")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"XLSX.utils.sheet_set_array_formula(worksheet, range, formula);\n")),(0,l.kt)("p",null,"Array formulae are stored in the top-left cell of the array block.  All cells\nof an array formula have a ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," field corresponding to the range.  A single-cell\nformula can be distinguished from a plain formula by the presence of ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," field."),(0,l.kt)("p",null,"The following snippet sets cell ",(0,l.kt)("inlineCode",{parentName:"p"},"C1")," to the array formula ",(0,l.kt)("inlineCode",{parentName:"p"},"{=SUM(A1:A3*B1:B3)}"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// API function\nXLSX.utils.sheet_set_array_formula(worksheet, "C1", "SUM(A1:A3*B1:B3)");\n\n// ... OR raw operations\nworksheet["C1"] = { t: "n", f: "SUM(A1:A3*B1:B3)", F: "C1:C1" };\n')),(0,l.kt)("p",null,"For a multi-cell array formula, every cell has the same array range but only the\nfirst cell specifies the formula.  Consider ",(0,l.kt)("inlineCode",{parentName:"p"},"D1:D3=A1:A3*B1:B3"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// API function\nXLSX.utils.sheet_set_array_formula(worksheet, "D1:D3", "A1:A3*B1:B3");\n\n// ... OR raw operations\nworksheet["D1"] = { t: "n", F: "D1:D3", f: "A1:A3*B1:B3" };\nworksheet["D2"] = { t: "n", F: "D1:D3" };\nworksheet["D3"] = { t: "n", F: "D1:D3" };\n')),(0,l.kt)("p",null,"Utilities and writers are expected to check for the presence of a ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," field and\nignore any possible formula element ",(0,l.kt)("inlineCode",{parentName:"p"},"f")," in cells other than the starting cell.\nThey are not expected to perform validation of the formulae!"),(0,l.kt)("h3",{id:"dynamic-array-formulae"},"Dynamic Array Formulae"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Assign a dynamic array formula")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"XLSX.utils.sheet_set_array_formula(worksheet, range, formula, true);\n")),(0,l.kt)("p",null,"Released in 2020, Dynamic Array Formulae are supported in the XLSX/XLSM and XLSB\nfile formats.  They are represented like normal array formulae but have special\ncell metadata indicating that the formula should be allowed to adjust the range."),(0,l.kt)("p",null,"An array formula can be marked as dynamic by setting the cell ",(0,l.kt)("inlineCode",{parentName:"p"},"D")," property to\ntrue.  The ",(0,l.kt)("inlineCode",{parentName:"p"},"F")," range is expected but can be the set to the current cell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// API function\nXLSX.utils.sheet_set_array_formula(worksheet, "C1", "_xlfn.UNIQUE(A1:A3)", 1);\n\n// ... OR raw operations\nworksheet["C1"] = { t: "s", f: "_xlfn.UNIQUE(A1:A3)", F:"C1", D: 1 }; // dynamic\n')),(0,l.kt)("h2",{id:"localization"},"Localization"),(0,l.kt)("p",null,"SheetJS operates at the file level.  Excel stores formula expressions using the\nEnglish (United States) function names.  For non-English users, Excel uses a\nlocalized set of function names."),(0,l.kt)("p",null,"For example, when the computer language and region is set to Spanish, Excel\ninterprets ",(0,l.kt)("inlineCode",{parentName:"p"},"=CONTAR(A1:C3)")," as if ",(0,l.kt)("inlineCode",{parentName:"p"},"CONTAR")," is the ",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT")," function.  However,\nin the actual file, Excel stores ",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT(A1:C3)"),"."),(0,l.kt)("p",null,"Function arguments are separated with commas. For example, the Spanish Excel\nformula ",(0,l.kt)("inlineCode",{parentName:"p"},"=CONTAR(A1:C3;B4:D6)")," is equivalent to the SheetJS formula string\n",(0,l.kt)("inlineCode",{parentName:"p"},"COUNT(A1:A3,B4:D6)")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://oss.sheetjs.com/notes/fmla/table.json"},"JSON Translation table"),"."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,(0,l.kt)("b",null,"Function Name Translator")," (click to show)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'/* The live editor requires this function wrapper */\nfunction Translator(props) {\n  const [locales, setLocales] = React.useState([]);\n  const [data, setData] = React.useState({});\n  const [names, setNames] = React.useState([]);\n  const [name, setName] = React.useState("Enter a function name");\n  /* Fetch and display formula */\n  React.useEffect(async() => {\n    /* Fetch data */\n    const json = await (await fetch("https://oss.sheetjs.com/notes/fmla/table.json")).json();\n    setLocales(Object.keys(json));\n    setData(json);\n    setNames(json.en);\n    setName(json.es[0])\n  }, []);\n\n  const update_name = React.useCallback(() => {\n    const nameelt = document.getElementById("fmla");\n    const idx = nameelt.options[nameelt.selectedIndex].value;\n    const toelt = document.getElementById("tolocale");\n    const tovalue = toelt.options[toelt.selectedIndex].value;\n    setName(data[tovalue][idx]);\n  });\n\n  const update_from = React.useCallback(() => {\n    const fromelt = document.getElementById("fromlocale");\n    const fromvalue = fromelt.options[fromelt.selectedIndex].value;\n    setNames(data[fromvalue]);\n  });\n\n  return (<>\n    <b>Name: </b><select id="fmla" onChange={update_name}>\n    {names.map((n, idx) => (<option value={idx}>{n}</option>))}\n    </select><br/>\n    <b>From: </b><select id="fromlocale" onChange={update_from}>\n    {locales.map(l => (<option value={l} selected={l=="en"}>{l}</option>))}\n    </select>\n    <b> To: </b><select id="tolocale" onChange={update_name}>\n    {locales.map(l => (<option value={l} selected={l=="es"}>{l}</option>))}\n    </select><br/>\n    <b> Translation: </b><pre id="out">{name}</pre>\n  </>);\n}\n'))),(0,l.kt)("h2",{id:"prefixed-future-functions"},'Prefixed "Future Functions"'),(0,l.kt)("p",null,"Functions introduced in newer versions of Excel are prefixed with ",(0,l.kt)("inlineCode",{parentName:"p"},"_xlfn.")," when\nstored in files.  When writing formula expressions using these functions, the\nprefix is required for maximal compatibility:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'// Broadest compatibility\nXLSX.utils.sheet_set_array_formula(worksheet, "C1", "_xlfn.UNIQUE(A1:A3)", 1);\n\n// Can cause errors in spreadsheet software\nXLSX.utils.sheet_set_array_formula(worksheet, "C1", "UNIQUE(A1:A3)", 1);\n')),(0,l.kt)("p",null,"When reading a file, the ",(0,l.kt)("inlineCode",{parentName:"p"},"xlfn")," option preserves the prefixes."),(0,l.kt)("details",null,(0,l.kt)("summary",null,(0,l.kt)("b",null," Functions requiring `_xlfn.` prefix")," (click to show)"),(0,l.kt)("p",null,"This list is growing with each Excel release."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"ACOT\nACOTH\nAGGREGATE\nARABIC\nBASE\nBETA.DIST\nBETA.INV\nBINOM.DIST\nBINOM.DIST.RANGE\nBINOM.INV\nBITAND\nBITLSHIFT\nBITOR\nBITRSHIFT\nBITXOR\nBYCOL\nBYROW\nCEILING.MATH\nCEILING.PRECISE\nCHISQ.DIST\nCHISQ.DIST.RT\nCHISQ.INV\nCHISQ.INV.RT\nCHISQ.TEST\nCOMBINA\nCONFIDENCE.NORM\nCONFIDENCE.T\nCOT\nCOTH\nCOVARIANCE.P\nCOVARIANCE.S\nCSC\nCSCH\nDAYS\nDECIMAL\nERF.PRECISE\nERFC.PRECISE\nEXPON.DIST\nF.DIST\nF.DIST.RT\nF.INV\nF.INV.RT\nF.TEST\nFIELDVALUE\nFILTERXML\nFLOOR.MATH\nFLOOR.PRECISE\nFORMULATEXT\nGAMMA\nGAMMA.DIST\nGAMMA.INV\nGAMMALN.PRECISE\nGAUSS\nHYPGEOM.DIST\nIFNA\nIMCOSH\nIMCOT\nIMCSC\nIMCSCH\nIMSEC\nIMSECH\nIMSINH\nIMTAN\nISFORMULA\nISOMITTED\nISOWEEKNUM\nLAMBDA\nLET\nLOGNORM.DIST\nLOGNORM.INV\nMAKEARRAY\nMAP\nMODE.MULT\nMODE.SNGL\nMUNIT\nNEGBINOM.DIST\nNORM.DIST\nNORM.INV\nNORM.S.DIST\nNORM.S.INV\nNUMBERVALUE\nPDURATION\nPERCENTILE.EXC\nPERCENTILE.INC\nPERCENTRANK.EXC\nPERCENTRANK.INC\nPERMUTATIONA\nPHI\nPOISSON.DIST\nQUARTILE.EXC\nQUARTILE.INC\nQUERYSTRING\nRANDARRAY\nRANK.AVG\nRANK.EQ\nREDUCE\nRRI\nSCAN\nSEC\nSECH\nSEQUENCE\nSHEET\nSHEETS\nSKEW.P\nSORTBY\nSTDEV.P\nSTDEV.S\nT.DIST\nT.DIST.2T\nT.DIST.RT\nT.INV\nT.INV.2T\nT.TEST\nUNICHAR\nUNICODE\nUNIQUE\nVAR.P\nVAR.S\nWEBSERVICE\nWEIBULL.DIST\nXLOOKUP\nXOR\nZ.TEST\n"))))}k.isMDXComponent=!0}}]);