"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5578],{9613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,h=u["".concat(i,".").concat(m)]||u[m]||d[m]||s;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7795:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var n=a(2848),r=a(9213),s=(a(9496),a(9613)),o=["components"],l={sidebar_position:8,title:"Typed Arrays and ML"},i=void 0,c={unversionedId:"getting-started/demos/ml",id:"getting-started/demos/ml",title:"Typed Arrays and ML",description:'Machine learning libraries in JS typically use "Typed Arrays". Typed Arrays are',source:"@site/docs/04-getting-started/03-demos/08-ml.mdx",sourceDirName:"04-getting-started/03-demos",slug:"/getting-started/demos/ml",permalink:"/docs/getting-started/demos/ml",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,title:"Typed Arrays and ML"},sidebar:"tutorialSidebar",previous:{title:"Headless Automation",permalink:"/docs/getting-started/demos/headless"},next:{title:"Interface Summary",permalink:"/docs/interface"}},p={},d=[{value:"CSV Data Interchange",id:"csv-data-interchange",level:2},{value:"JS Array Interchange",id:"js-array-interchange",level:2},{value:"Low-Level Operations",id:"low-level-operations",level:2},{value:"Data Transposition",id:"data-transposition",level:3},{value:"Typed Arrays and Columns",id:"typed-arrays-and-columns",level:4},{value:"Exporting Datasets to a Worksheet",id:"exporting-datasets-to-a-worksheet",level:3},{value:"Importing Data from a Spreadsheet",id:"importing-data-from-a-spreadsheet",level:3},{value:"TF.js Tensors",id:"tfjs-tensors",level:3}],u={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("head",null,(0,s.kt)("script",{src:"https://unpkg.com/@tensorflow/tfjs@3.18.0/dist/tf.min.js"})),(0,s.kt)("p",null,'Machine learning libraries in JS typically use "Typed Arrays". Typed Arrays are\nnot JS Arrays! SheetJS expects bona fide JS Arrays. With some data wrangling,\ntranslating between SheetJS worksheets and typed arrays is straightforward.'),(0,s.kt)("p",null,"This demo covers conversions between worksheets and Typed Arrays for use with\n",(0,s.kt)("a",{parentName:"p",href:"https://js.tensorflow.org/js/"},"TensorFlow.js")," and other ML libraries."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"The live code blocks in this demo load the standalone TensorFlow.js build:"),(0,s.kt)("pre",{parentName:"div"},(0,s.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@tensorflow/tfjs@3.18.0/dist/tf.min.js"><\/script>\n')))),(0,s.kt)("h2",{id:"csv-data-interchange"},"CSV Data Interchange"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"tf.data.csv")," generates a Dataset from CSV data.  The function expects a URL.\nFortunately blob URLs are supported, making data import straightforward:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function worksheet_to_csv_url(worksheet) {\n  /* generate CSV */\n  const csv = XLSX.utils.sheet_to_csv(worksheet);\n\n  /* CSV -> Uint8Array -> Blob */\n  const u8 = new TextEncoder().encode(csv);\n  const blob = new Blob([u8], { type: "text/csv" });\n\n  /* generate a blob URL */\n  return URL.createObjectURL(blob);\n}\n')),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://js.tensorflow.org/api/latest/#data.csv"},"This demo mirrors TFjs docs"),",\nfetching ",(0,s.kt)("a",{parentName:"p",href:"https://sheetjs.com/bht.xlsx"},"an XLSX export of the example dataset"),"."),(0,s.kt)("details",null,(0,s.kt)("summary",null,(0,s.kt)("b",null,"TF CSV Demo using XLSX files")," (click to show)"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function SheetJSToTFJSCSV() {\n  const [output, setOutput] = React.useState("");\n  const doit = React.useCallback(async () => {\n    /* fetch file */\n    const f = await fetch("https://sheetjs.com/bht.xlsx");\n    const ab = await f.arrayBuffer();\n    /* parse file and get first worksheet */\n    const wb = XLSX.read(ab);\n    const ws = wb.Sheets[wb.SheetNames[0]];\n\n    /* generate CSV */\n    const csv = XLSX.utils.sheet_to_csv(ws);\n\n    /* generate blob URL */\n    const u8 = new TextEncoder().encode(csv);\n    const blob = new Blob([u8], {type: "text/csv"});\n    const url = URL.createObjectURL(blob);\n\n    /* feed to tfjs */\n    const dataset = tf.data.csv(url, {columnConfigs:{"medv":{isLabel:true}}});\n\n    /* this part mirrors the tf.data.csv docs */\n    const flat = dataset.map(({xs,ys}) => ({xs: Object.values(xs), ys: Object.values(ys)})).batch(10);\n    const model = tf.sequential();\n    model.add(tf.layers.dense({inputShape: [(await dataset.columnNames()).length - 1], units: 1}));\n    model.compile({ optimizer: tf.train.sgd(0.000001), loss: \'meanSquaredError\' });\n    let base = output;\n    await model.fitDataset(flat, { epochs: 10, callbacks: { onEpochEnd: async (epoch, logs) => {\n      setOutput(base += "\\n" + epoch + ":" + logs.loss); \n    }}});\n    model.summary();\n  });\n  return ( <pre><b><a href="https://js.tensorflow.org/api/latest/#data.csv">Original CSV demo</a></b><br/><br/>\n    <button onClick={doit}>Click to run</button>\n    {output}\n  </pre> );\n}\n'))),(0,s.kt)("p",null,"In the other direction, ",(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.read")," will readily parse CSV exports."),(0,s.kt)("h2",{id:"js-array-interchange"},"JS Array Interchange"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/js/tutorials/training/linear_regression"},"The official Linear Regression tutorial"),"\nloads data from a JSON file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "Name": "chevrolet chevelle malibu",\n    "Miles_per_Gallon": 18,\n    "Cylinders": 8,\n    "Displacement": 307,\n    "Horsepower": 130,\n    "Weight_in_lbs": 3504,\n    "Acceleration": 12,\n    "Year": "1970-01-01",\n    "Origin": "USA"\n  },\n  {\n    "Name": "buick skylark 320",\n    "Miles_per_Gallon": 15,\n    "Cylinders": 8,\n    "Displacement": 350,\n    "Horsepower": 165,\n    "Weight_in_lbs": 3693,\n    "Acceleration": 11.5,\n    "Year": "1970-01-01",\n    "Origin": "USA"\n  },\n  // ...\n]\n')),(0,s.kt)("p",null,"In real use cases, data is stored in ",(0,s.kt)("a",{parentName:"p",href:"https://sheetjs.com/cd.xls"},"spreadsheets")),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"/files/cd.png",alt:"cd.xls screenshot"})),(0,s.kt)("p",null,"Following the tutorial, the data fetching method is easily adapted. Differences\nfrom the official example are highlighted below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * Get the car data reduced to just the variables we are interested\n * and cleaned of missing data.\n */\nasync function getData() {\n  // highlight-start\n  /* fetch file */\n  const carsDataResponse = await fetch('https://sheetjs.com/cd.xls');\n  /* get file data (ArrayBuffer) */\n  const carsDataAB = await carsDataResponse.arrayBuffer();\n  /* parse */\n  const carsDataWB = XLSX.read(carsDataAB);\n  /* get first worksheet */\n  const carsDataWS = carsDataWB.Sheets[carsDataWB.SheetNames[0]];\n  /* generate array of JS objects */\n  const carsData = XLSX.utils.sheet_to_json(carsDataWS);\n  // highlight-end\n  const cleaned = carsData.map(car => ({\n    mpg: car.Miles_per_Gallon,\n    horsepower: car.Horsepower,\n  }))\n  .filter(car => (car.mpg != null && car.horsepower != null));\n\n  return cleaned;\n}\n")),(0,s.kt)("h2",{id:"low-level-operations"},"Low-Level Operations"),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"While it is more efficient to use low-level operations, JS or CSV interchange\nis strongly recommended when possible.  "))),(0,s.kt)("h3",{id:"data-transposition"},"Data Transposition"),(0,s.kt)("p",null,"A typical dataset in a spreadsheet will start with one header row and represent\neach data record in its own row.  For example, the Iris dataset might look like"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"/files/iris.png",alt:"Iris dataset"})),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.sheet_to_json")," will translate this into an array of row objects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var aoo = [\n  {"sepal length": 5.1, "sepal width": 3.5, ...},\n  {"sepal length": 4.9, "sepal width":   3, ...},\n  ...\n];\n')),(0,s.kt)("p",null,"TF.js and other libraries tend to operate on individual columns, equivalent to:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var sepal_lengths = [5.1, 4.9, ...];\nvar sepal_widths  = [3.5, 3, ...];\n")),(0,s.kt)("p",null,"When a 2D tensor can be exported, it will look different from the spreadsheet:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var data_set_2d = [\n  [5.1, 4.9, ...],\n  [3.5, 3, ...],\n  ...\n]\n")),(0,s.kt)("p",null,"This is the transpose of how people use spreadsheets!"),(0,s.kt)("h4",{id:"typed-arrays-and-columns"},"Typed Arrays and Columns"),(0,s.kt)("p",null,"A single typed array can be converted to a pure JS array with ",(0,s.kt)("inlineCode",{parentName:"p"},"Array.from"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var column = Array.from(dataset_typedarray);\n")),(0,s.kt)("p",null,"Similarly, ",(0,s.kt)("inlineCode",{parentName:"p"},"Float32Array.from")," generates a typed array from a normal array:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"var dataset = Float32Array.from(column);\n")),(0,s.kt)("h3",{id:"exporting-datasets-to-a-worksheet"},"Exporting Datasets to a Worksheet"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"XLSX.utils.aoa_to_sheet"),' can generate a worksheet from an array of arrays.\nML libraries typically provide APIs to pull an array of arrays, but it will\nbe transponsed\na row-major array of arrays.  To export multiple data\nsets, "transpose" the data:'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* assuming data is an array of typed arrays */\nvar aoa = [];\nfor(var i = 0; i < data.length; ++i) {\n  for(var j = 0; j < data[i].length; ++j) {\n    if(!aoa[j]) aoa[j] = [];\n    aoa[j][i] = data[i][j];\n  }\n}\n/* aoa can be directly converted to a worksheet object */\nvar ws = XLSX.utils.aoa_to_sheet(aoa);\n")),(0,s.kt)("h3",{id:"importing-data-from-a-spreadsheet"},"Importing Data from a Spreadsheet"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sheet_to_json")," with the option ",(0,s.kt)("inlineCode",{parentName:"p"},"header:1")," will generate a row-major array of\narrays that can be transposed.  However, it is more efficient to walk the sheet\nmanually:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"/* find worksheet range */\nvar range = XLSX.utils.decode_range(ws['!ref']);\nvar out = []\n/* walk the columns */\nfor(var C = range.s.c; C <= range.e.c; ++C) {\n  /* create the typed array */\n  var ta = new Float32Array(range.e.r - range.s.r + 1);\n  /* walk the rows */\n  for(var R = range.s.r; R <= range.e.r; ++R) {\n    /* find the cell, skip it if the cell isn't numeric or boolean */\n    var cell = ws[XLSX.utils.encode_cell({r:R, c:C})];\n    if(!cell || cell.t != 'n' && cell.t != 'b') continue;\n    /* assign to the typed array */\n    ta[R - range.s.r] = cell.v;\n  }\n  out.push(ta);\n}\n")),(0,s.kt)("p",null,"If the data set has a header row, the loop can be adjusted to skip those rows."),(0,s.kt)("h3",{id:"tfjs-tensors"},"TF.js Tensors"),(0,s.kt)("p",null,"A single ",(0,s.kt)("inlineCode",{parentName:"p"},"Array#map")," can pull individual named fields from the result, which\ncan be used to construct TensorFlow.js tensor objects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'const aoo = XLSX.utils.sheet_to_json(worksheet);\nconst lengths = aoo.map(row => row["sepal length"]);\nconst tensor = tf.tensor1d(lengths);\n')),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"tf.Tensor")," objects can be directly transposed using ",(0,s.kt)("inlineCode",{parentName:"p"},"transpose"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'var aoo = XLSX.utils.sheet_to_json(worksheet);\n// "x" and "y" are the fields we want to pull from the data\nvar data = aoo.map(row => ([row["x"], row["y"]]));\n\n// create a tensor representing two column datasets\nvar tensor = tf.tensor2d(data).transpose();\n\n// individual columns can be accessed\nvar col1 = tensor.slice([0,0], [1,tensor.shape[1]]).flatten();\nvar col2 = tensor.slice([1,0], [1,tensor.shape[1]]).flatten();\n')),(0,s.kt)("p",null,"For exporting, ",(0,s.kt)("inlineCode",{parentName:"p"},"stack")," can be used to linearize the columns:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/* pull data into a Float32Array */\nvar result = tf.stack([col1, col2]).transpose();\nvar shape = tensor.shape;\nvar f32 = tensor.dataSync();\n\n/* construct an array of arrays of the data in spreadsheet order */\nvar aoa = [];\nfor(var j = 0; j < shape[0]; ++j) {\n  aoa[j] = [];\n  for(var i = 0; i < shape[1]; ++i) aoa[j][i] = f32[j * shape[1] + i];\n}\n\n/* add headers to the top */\naoa.unshift(["x", "y"]);\n\n/* generate worksheet */\nvar worksheet = XLSX.utils.aoa_to_sheet(aoa);\n')))}m.isMDXComponent=!0}}]);