"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4872],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8264:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(9496),r=n(1626),l="tabItem_ZP9l";function i(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},114:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(2848),r=n(9496),l=n(3026),i=n(8658),s=n(1823),o=n(4807),u=n(1626),p="tabList_XleC",c="tabItem_hpFr";function d(e){var t,n,l,d=e.lazy,m=e.block,f=e.defaultValue,h=e.values,k=e.groupId,b=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=h?h:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===f?f:null!=(t=null!=f?f:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,s.U)(),w=T.tabGroupChoices,C=T.setTabGroupChoices,x=(0,r.useState)(N),E=x[0],O=x[1],S=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=w[k];null!=j&&j!==E&&y.some((function(e){return e.value===j}))&&O(j)}var Z=function(e){var t=e.currentTarget,n=S.indexOf(t),a=y[n].value;a!==E&&(_(t),O(a),null!=k&&C(k,a))},I=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=S.indexOf(e.currentTarget)+1;n=S[a]||S[0];break;case"ArrowLeft":var r=S.indexOf(e.currentTarget)-1;n=S[r]||S[S.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,u.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":m},b)},y.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return S.push(e)},onKeyDown:I,onFocus:Z,onClick:Z},l,{className:(0,u.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),d?(0,r.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,l.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4012:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return m}});var a=n(2848),r=n(9213),l=(n(9496),n(9613)),i=n(114),s=n(8264),o=["components"],u={sidebar_position:4,hide_table_of_contents:!0},p="Testing",c={unversionedId:"miscellany/testing",id:"miscellany/testing",title:"Testing",description:"make test will run the node-based tests.  By default it runs tests on files in",source:"@site/docs/09-miscellany/04-testing.md",sourceDirName:"09-miscellany",slug:"/miscellany/testing",permalink:"/docs/miscellany/testing",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,hide_table_of_contents:!0},sidebar:"tutorialSidebar",previous:{title:"File Formats",permalink:"/docs/miscellany/formats"},next:{title:"Contributing",permalink:"/docs/miscellany/contributing"}},d={},m=[{value:"Tested Environments",id:"tested-environments",level:3},{value:"Test Files",id:"test-files",level:3},{value:"Latest Snapshot",id:"latest-snapshot",level:4}],f={toc:m};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"testing"},"Testing"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"nodejs",label:"NodeJS",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make test")," will run the node-based tests.  By default it runs tests on files in\nevery supported format.  To test a specific file type, set ",(0,l.kt)("inlineCode",{parentName:"p"},"FMTS")," to the format\nyou want to test.  Feature-specific tests are available with ",(0,l.kt)("inlineCode",{parentName:"p"},"make test_misc")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make test_misc   # run core tests\n$ make test        # run full tests\n")),(0,l.kt)("p",null,"To enable all errors, set the environment variable ",(0,l.kt)("inlineCode",{parentName:"p"},"WTF=1"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make test        # run full tests\n$ WTF=1 make test  # enable all error messages\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"flow")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"eslint")," checks are available:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ make lint        # eslint checks\n$ make tslint      # check TS definitions\n"))),(0,l.kt)(s.Z,{value:"browser",label:"Browser",mdxType:"TabItem"},(0,l.kt)("p",null,"The core in-browser tests are available at ",(0,l.kt)("inlineCode",{parentName:"p"},"tests/index.html")," within this repo.\nStart a local server and navigate to that directory to run the tests.\n",(0,l.kt)("inlineCode",{parentName:"p"},"make ctestserv")," will start a server on port 8000."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make ctest")," will generate the browser fixtures.  To add more files, edit the\n",(0,l.kt)("inlineCode",{parentName:"p"},"tests/fixtures.lst")," file and add the paths.")),(0,l.kt)(s.Z,{value:"deno",label:"Deno",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make test-deno")," will run the full Deno test suite and ",(0,l.kt)("inlineCode",{parentName:"p"},"make test-deno_misc"),"\nwill run the smaller feature-specific tests.")),(0,l.kt)(s.Z,{value:"extendscript",label:"Extendscript",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"make dist")," will build ",(0,l.kt)("inlineCode",{parentName:"p"},"xlsx.extendscript.js"),"."),(0,l.kt)("p",null,"The script ",(0,l.kt)("inlineCode",{parentName:"p"},"estk.jsx")," at the root of the project is configured to run in\nExtendScript Toolkit.  It will read ",(0,l.kt)("inlineCode",{parentName:"p"},"sheetjs.xlsx")," and attempt to write test\nfiles in a number of file formats."),(0,l.kt)("p",null,"ExtendScript Toolkit 3.5 is available as a standalone download for Windows."))),(0,l.kt)("h3",{id:"tested-environments"},"Tested Environments"),(0,l.kt)("details",null,(0,l.kt)("summary",null,"(click to show)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"NodeJS ",(0,l.kt)("inlineCode",{parentName:"li"},"0.8"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0.10"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"0.12"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"4.x"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"5.x"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"6.x"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"7.x"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"8.x")),(0,l.kt)("li",{parentName:"ul"},"IE 6/7/8/9/10/11 (IE 6-9 require shims)"),(0,l.kt)("li",{parentName:"ul"},"Chrome 24+ (including Android 4.0+)"),(0,l.kt)("li",{parentName:"ul"},"Safari 6+ (iOS and Desktop)"),(0,l.kt)("li",{parentName:"ul"},"Edge 13+, FF 18+, and Opera 12+")),(0,l.kt)("p",null,"Tests utilize the mocha testing framework."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://saucelabs.com/u/sheetjs"},"https://saucelabs.com/u/sheetjs")," for XLS","*"," modules using Sauce Labs")),(0,l.kt)("p",null,"The test suite also includes tests for various time zones.  To change\nthe timezone locally, set the TZ environment variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ env TZ="Asia/Kolkata" WTF=1 make test_misc\n'))),(0,l.kt)("h3",{id:"test-files"},"Test Files"),(0,l.kt)("p",null,"Test files are housed in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/test_files"},"another repo"),"."),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"make init")," will refresh the ",(0,l.kt)("inlineCode",{parentName:"p"},"test_files")," submodule and get the files.\nNote that this requires ",(0,l.kt)("inlineCode",{parentName:"p"},"svn"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"git"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hg")," and other commands that may not be\navailable.  If ",(0,l.kt)("inlineCode",{parentName:"p"},"make init")," fails, please download the latest version of the test\nfiles snapshot from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/SheetJS/test_files/releases"},"the repo")),(0,l.kt)("h4",{id:"latest-snapshot"},"Latest Snapshot"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://github.com/SheetJS/test_files/releases/download/20170409/test_files.zip"},"http://github.com/SheetJS/test_files/releases/download/20170409/test_files.zip")),(0,l.kt)("p",null,"(download and unzip to the ",(0,l.kt)("inlineCode",{parentName:"p"},"test_files")," subdirectory)"))}h.isMDXComponent=!0}}]);