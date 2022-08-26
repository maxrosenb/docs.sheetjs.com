"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3075],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(h,s(s({ref:t},p),{},{components:a})):n.createElement(h,s({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),r=a(7294),l=a(6010),s=a(2389),o=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function c(e){var t,a;const{lazy:s,block:c,defaultValue:m,values:h,groupId:k,className:y}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=h?h:v.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,o.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const S=null===m?m:null!=(t=null!=m?m:null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)?t:v[0].props.value;if(null!==S&&!b.some((e=>e.value===S)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+S+'" but none of its children has the corresponding value. Available values are: '+b.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:g,setTabGroupChoices:w}=(0,i.U)(),[N,T]=(0,r.useState)(S),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=k){const e=g[k];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,a=x.indexOf(t),n=b[a].value;n!==N&&(E(t),T(n),null!=k&&w(k,String(n)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=x.indexOf(e.currentTarget)+1;a=null!=(n=x[t])?n:x[0];break}case"ArrowLeft":{var r;const t=x.indexOf(e.currentTarget)-1;a=null!=(r=x[t])?r:x[x.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},y)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:j,onFocus:O,onClick:O},s,{className:(0,l.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":N===t})}),null!=a?a:t)}))),s?(0,r.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,n.Z)({key:String(t)},e))}},1439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(5488),s=a(5162);const o={title:"NoSQL Data Stores"},i=void 0,u={unversionedId:"demos/nosql",id:"demos/nosql",title:"NoSQL Data Stores",description:'So-called "Schema-less" databases allow for arbitrary keys and values within the',source:"@site/docs/03-demos/41-nosql.md",sourceDirName:"03-demos",slug:"/demos/nosql",permalink:"/docs/demos/nosql",draft:!1,tags:[],version:"current",sidebarPosition:41,frontMatter:{title:"NoSQL Data Stores"},sidebar:"tutorialSidebar",previous:{title:"HTTP Server Processing",permalink:"/docs/demos/server"},next:{title:"Headless Automation",permalink:"/docs/demos/headless"}},p={},d=[{value:"Arbitrary Data to Spreadsheets",id:"arbitrary-data-to-spreadsheets",level:2},{value:"Data Stores",id:"data-stores",level:2},{value:"Redis",id:"redis",level:3},{value:"Mapping",id:"mapping",level:4},{value:"Example",id:"example",level:4}],c={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'So-called "Schema-less" databases allow for arbitrary keys and values within the\nentries in the database.  K/V stores and Objects add additional restrictions.'),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"These data stores are capable of storing structured data.  Those use cases are\ncovered in the ",(0,r.kt)("a",{parentName:"p",href:"./database"},"Database demo"),".")),(0,r.kt)("h2",{id:"arbitrary-data-to-spreadsheets"},"Arbitrary Data to Spreadsheets"),(0,r.kt)("p",null,"There is no natural way to translate arbitrarily shaped schemas to worksheets\nin a workbook.  One common trick is to dedicate one worksheet to holding named\nkeys.  For example, considering the JS object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "SheetDB",\n  "metadata": {\n    "author": "SheetJS",\n    "code": 7262\n  },\n  "data": [\n    { "Name": "Barack Obama", "Index": 44 },\n    { "Name": "Donald Trump", "Index": 45 },\n  ]\n}\n')),(0,r.kt)("p",null,"A dedicated worksheet should store the one-off named values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|        A        |    B    |\n---+-----------------+---------+\n 1 | Path            | Value   |\n 2 | title           | SheetDB |\n 3 | metadata.author | SheetJS |\n 4 | metadata.code   |    7262 |\n")),(0,r.kt)("h2",{id:"data-stores"},"Data Stores"),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("p",null,'Redis has 5 core data types: "String", List", "Set", "Sorted Set", and "Hash".\nSince the keys and values are limited to simple strings (and numbers), it is\npossible to store complete databases in a single worksheet.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"/nosql/sheetjsredis.png",alt:"SheetJSRedis.xlsx"})),(0,r.kt)("h4",{id:"mapping"},"Mapping"),(0,r.kt)("p",null,"The first row holds the data type and the second row holds the property name."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"strings",label:"Strings",mdxType:"TabItem"},(0,r.kt)("p",null,"Strings can be stored in a unified String table. The first column holds keys\nand the second column holds values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|    A    |   B   |\n---+---------+-------+\n 1 | Strings |       |\n 2 |         |       |\n 3 | Hello   | World |\n 4 | Sheet   | JS    |\n")),(0,r.kt)("p",null,"The SheetJS array-of-arrays representation of the string table is an array of\nkey/value pairs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let aoa = ["Strings"]; aoa.length = 2; // [ "Strings", empty ]\nconst keys = await client.KEYS("*");\nfor(let key of keys) {\n  const type = await client.TYPE(key);\n  if(type == "string") aoa.push([key, await client.GET(key)]);\n}\n'))),(0,r.kt)(s.Z,{value:"list",label:"Lists",mdxType:"TabItem"},(0,r.kt)("p",null,"Lists are unidimensional and can be stored in their own columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|    C    |\n---+---------+\n 1 | List    |\n 2 | List1   |\n 3 | List1V1 |\n 4 | List1V2 |\n")),(0,r.kt)("p",null,"The SheetJS array-of-arrays representation of lists is a column of values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if(type == "list") {\n  let values = await client.LRANGE(key, 0, -1);\n  aoa = [ ["List"], [key] ].concat(values.map(v => [v]));\n}\n'))),(0,r.kt)(s.Z,{value:"set",label:"Sets",mdxType:"TabItem"},(0,r.kt)("p",null,"Sets are unidimensional and can be stored in their own columns."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|   D   |\n---+-------+\n 1 | Set   |\n 2 | Set1  |\n 3 | Set1A |\n 4 | Set1B |\n")),(0,r.kt)("p",null,"The SheetJS array-of-arrays representation of sets is a column of values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if(type == "set") {\n  let values = await client.SMEMBERS(key);\n  aoa = [ ["Set"], [key] ].concat(values.map(v => [v]));\n}\n'))),(0,r.kt)(s.Z,{value:"zset",label:"Sorted Sets",mdxType:"TabItem"},(0,r.kt)("p",null,"Sorted Sets have an associated score which can be stored in the second column."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|    E    | F |\n---+---------+---+\n 1 | Sorted  |   |\n 2 | ZSet1   |   |\n 3 | Key1    | 1 |\n 4 | Key2    | 2 |\n")),(0,r.kt)("p",null,"The SheetJS array-of-arrays representation is an array of key/score pairs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if(type == "zset") {\n  let values = await client.ZRANGE_WITHSCORES(key, 0, -1);\n  aoa = [ ["Sorted"], [key] ].concat(values.map(v => [v.value, v.score]));\n}\n'))),(0,r.kt)(s.Z,{value:"hashes",label:"Hashes",mdxType:"TabItem"},(0,r.kt)("p",null,"Hashes are stored like the string table, with key and value columns in order."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"XXX|   G   |   H   |\n---+-------+-------+\n 1 | Hash  |       |\n 2 | Hash1 |       |\n 3 | Key1  | Val1  |\n 4 | Key2  | Val2  |\n")),(0,r.kt)("p",null,"The SheetJS array-of-arrays representation is an array of key/value pairs."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'if(type == "hash") {\n  let values = await client.HGETALL(key);\n  aoa = [ ["Hash"], [key] ].concat(Object.entries(values));\n}\n')))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Complete Example")," (click to show)"),(0,r.kt)("p",null,"0) Set up and start a local Redis server"),(0,r.kt)("p",null,"1) Download the following scripts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///nosql/SheetJSRedis.mjs"},(0,r.kt)("inlineCode",{parentName:"a"},"SheetJSRedis.mjs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"pathname:///nosql/SheetJSRedisTest.mjs"},(0,r.kt)("inlineCode",{parentName:"a"},"SheetJSRedisTest.mjs")))),(0,r.kt)("p",null,"2) Install dependencies and run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save https://cdn.sheetjs.com/xlsx-latest/xlsx-latest.tgz redis\nnode SheetJSRedisTest.mjs\n")),(0,r.kt)("p",null,"Inspect the output and compare with the data in ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSRedisTest.mjs"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"SheetJSRedis.xlsx")," and verify the columns have the correct data")))}m.isMDXComponent=!0}}]);