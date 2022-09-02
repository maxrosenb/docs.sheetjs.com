"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8233],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=d(a),c=r,h=u["".concat(s,".").concat(c)]||u[c]||p[c]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4539:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Dates and Times",l={unversionedId:"csf/features/dates",id:"csf/features/dates",title:"Dates and Times",description:"Lotus 1-2-3, Excel, and other spreadsheet software do not have a true concept",source:"@site/docs/07-csf/07-features/03-dates.md",sourceDirName:"07-csf/07-features",slug:"/csf/features/dates",permalink:"/docs/csf/features/dates",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hyperlinks",permalink:"/docs/csf/features/hyperlinks"},next:{title:"Cell Comments",permalink:"/docs/csf/features/comments"}},s={},d=[{value:"How Spreadsheets Understand Time",id:"how-spreadsheets-understand-time",level:2},{value:"Date and Time Number Formats",id:"date-and-time-number-formats",level:3},{value:"1904 and 1900 Date Systems",id:"1904-and-1900-date-systems",level:3},{value:"Relative Epochs",id:"relative-epochs",level:3},{value:"How Files Store Dates and Times",id:"how-files-store-dates-and-times",level:2},{value:"How SheetJS handles Dates and Times",id:"how-sheetjs-handles-dates-and-times",level:2},{value:"Utility Functions",id:"utility-functions",level:3},{value:"Number Formats",id:"number-formats",level:3}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dates-and-times"},"Dates and Times"),(0,r.kt)("p",null,"Lotus 1-2-3, Excel, and other spreadsheet software do not have a true concept\nof date or time.  Instead, dates and times are stored as offsets from an epoch.\nThe magic behind date interpretations is hidden in functions or number formats."),(0,r.kt)("p",null,"SheetJS attempts to create a friendly JS date experience while also exposing\noptions to use the traditional date codes"),(0,r.kt)("h2",{id:"how-spreadsheets-understand-time"},"How Spreadsheets Understand Time"),(0,r.kt)("p",null,"Excel stores dates as numbers.  When displaying dates, the format code should\ninclude special date and time tokens like ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyyy")," for long year. ",(0,r.kt)("inlineCode",{parentName:"p"},"EDATE")," and\nother date functions operate on and return date numbers."),(0,r.kt)("p",null,"For date formats like ",(0,r.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd"),", the integer part represents the number of\ndays from a starting epoch.  For example, the date ",(0,r.kt)("inlineCode",{parentName:"p"},"19-Feb-17")," is stored as the\nnumber ",(0,r.kt)("inlineCode",{parentName:"p"},"42785")," with a number format of ",(0,r.kt)("inlineCode",{parentName:"p"},"d-mmm-yy"),"."),(0,r.kt)("p",null,"The fractional part of the date code serves as the time marker.  Excel assumes\neach day has exactly 86400 seconds.  For example, the date code ",(0,r.kt)("inlineCode",{parentName:"p"},"0.25")," has a\ntime component corresponding to 6:00 AM."),(0,r.kt)("p",null,"For absolute time formats like ",(0,r.kt)("inlineCode",{parentName:"p"},"[hh]:mm"),", the integer part represents a whole\nnumber of 24-hour (or 1440 minute) intervals.  The value ",(0,r.kt)("inlineCode",{parentName:"p"},"1.5")," in the format\n",(0,r.kt)("inlineCode",{parentName:"p"},"[hh]:mm")," is interpreted as 36 hours 0 minutes."),(0,r.kt)("h3",{id:"date-and-time-number-formats"},"Date and Time Number Formats"),(0,r.kt)("p",null,'Assuming a cell has a formatted date, re-formatting as "General" will reveal\nthe underlying value.  Alternatively, the ',(0,r.kt)("inlineCode",{parentName:"p"},"TEXT")," function can be used to return\nthe date code."),(0,r.kt)("p",null,"The following table covers some common formats:"),(0,r.kt)("details",{open:!0},(0,r.kt)("summary",null,(0,r.kt)("b",null,"Common Date-Time Formats")," (click to hide)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Fragment"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Interpretation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (2-digit) year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"yyyy")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (4-digit) year")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"m")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (1-digit) month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (2-digit) month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mmm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (3-letter) month name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mmmm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Full month name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mmmmm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"First letter of month name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"d")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (1-digit) day of month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (2-digit) day of month")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ddd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (3-letter) day of week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dddd")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Full day of week")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"h")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (1-digit) hours")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hh")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (2-digit) hours")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"m")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (1-digit) minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"mm")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (2-digit) minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"s")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short (1-digit) seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ss")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Long (2-digit) seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"A/P")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Meridiem ("A" or "P")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AM/PM")),(0,r.kt)("td",{parentName:"tr",align:"left"},'Meridiem ("AM" or "PM")')))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"m")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"mm"),' are context-dependent.  It is interpreted as "minutes" when the\nprevious or next date token represents a time (hours or seconds):'),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"yyyy-mm-dd hh:mm:ss\n     ^^       ^^\n    month    minutes\n")))),(0,r.kt)("h3",{id:"1904-and-1900-date-systems"},"1904 and 1900 Date Systems"),(0,r.kt)("p",null,"The interpretation of date codes requires a shared understanding of date code\n",(0,r.kt)("inlineCode",{parentName:"p"},"0"),', otherwise known as the "epoch".  Excel supports two epochs:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'The default epoch is "January 0 1900". The ',(0,r.kt)("inlineCode",{parentName:"p"},"0")," value is 00:00 on December 31\nof the year 1899, but it is formatted as January 0 1900.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Enabling "1904 Date System" sets the default epoch to "January 1 1904".  The\n',(0,r.kt)("inlineCode",{parentName:"p"},"0")," value is 00:00 on January 1 of the year 1904."))),(0,r.kt)("p",null,"The workbook's epoch can be determined by examining the workbook's ",(0,r.kt)("inlineCode",{parentName:"p"},"wb.Workbook.WBProps.date1904")," property:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if(!(wb?.Workbook?.WBProps?.date1904)) {\n  /* uses 1904 date system */\n} else {\n  /* uses 1900 date system */\n}\n")),(0,r.kt)("admonition",{title:"Why does the 1904 date system exist?",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"1900 was not a leap year.  For the Gregorian calendar, the general rules are:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"every multiple of 400 is a leap year"),(0,r.kt)("li",{parentName:"ul"},"every multiple of 100 that is not a multiple of 400 is not a leap year"),(0,r.kt)("li",{parentName:"ul"},"every multiple of 4 that is not a multiple of 100 is a leap year"),(0,r.kt)("li",{parentName:"ul"},"all other years are not leap years.")),(0,r.kt)("p",{parentName:"admonition"},"Lotus 1-2-3 erroneously treated 1900 as a leap year. This can be verified with\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"@date")," function:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"@date(0,2,28) -> 59    // Lotus accepts 2/28/1900\n@date(0,2,29) -> 60    // <--2/29/1900 was not a real date\n@date(0.2,30) -> ERR   // Lotus rejects 2/30/1900\n")),(0,r.kt)("p",{parentName:"admonition"},"Excel extends the tradition in the default date system.  The 1904 date system\nstarts the count in 1904, skipping the bad date.")),(0,r.kt)("h3",{id:"relative-epochs"},"Relative Epochs"),(0,r.kt)("p",null,"The epoch is based on the system timezone.  The epoch in New York is midnight\nin Eastern time, while the epoch in Seattle is midnight in Pacific time."),(0,r.kt)("p",null,'This design has the advantage of uniform time display: "12 PM" is 12 PM\nirrespective of the timezone of the viewer.  However, this design precludes any\ninternational coordination (there is no way to create a value that represents\nan absolute time) and makes JavaScript processing somewhat ambiguous (since\nJavaScript Date objects are timezone-aware)'),(0,r.kt)("p",null,"This is a deficiency of the spreadsheet software. Excel has no native concept\nof universal time."),(0,r.kt)("p",null,"The library attempts to normalize the dates.  All times are specified in the\nlocal time zone.  SheetJS cannot magically fix the technical problems with\nExcel and other spreadsheet software, but this represents ."),(0,r.kt)("h2",{id:"how-files-store-dates-and-times"},"How Files Store Dates and Times"),(0,r.kt)("p",null,"XLS, XLSB, and most binary formats store the raw date codes.  Special number\nformats are used to indicate that the values are intended to be dates/times."),(0,r.kt)("p",null,"CSV and other text formats typically store actual formatted date values.  They\nare interpreted as dates and times in the user timezone."),(0,r.kt)("p",null,"XLSX actually supports both!  Typically dates are stored as ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," numeric cells,\nbut the format supports a special type ",(0,r.kt)("inlineCode",{parentName:"p"},"d")," where the data is an ISO 8601 date\nstring. This is not used in the default Excel XLSX export and third-party\nsupport is poor."),(0,r.kt)("p",null,"ODS does support absolute time values but drops the actual timezone indicator\nwhen parsing.  In that sense, LibreOffice follows the same behavior as Excel."),(0,r.kt)("h2",{id:"how-sheetjs-handles-dates-and-times"},"How SheetJS handles Dates and Times"),(0,r.kt)("p",null,"The default behavior for all parsers is to generate number cells.  Passing the\n",(0,r.kt)("inlineCode",{parentName:"p"},"cellDates")," to true will force the parsers to store dates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// cell A1 will be { t: \'n\', v: 44721 }\nvar wb_sans_date = XLSX.read("6/9/2022", {type:"binary"});\n\n// cell A1 will be { t: \'d\', v: <Date object representing June 9 2022> }\nvar wb_with_date = XLSX.read("6/9/2022", {type:"binary", cellDates: true});\n')),(0,r.kt)("p",null,"When writing, date cells are automatically translated back to numeric cells\nwith an appropriate number format."),(0,r.kt)("p",null,"The actual values stored in cells are intended to be correct from the\nperspective of an Excel user in the current timezone."),(0,r.kt)("p",null,"The value formatting logic understands date formats and converts when relevant."),(0,r.kt)("h3",{id:"utility-functions"},"Utility Functions"),(0,r.kt)("p",null,"Utility functions that deal with JS data accept a ",(0,r.kt)("inlineCode",{parentName:"p"},"cellDates")," argument which\ndictates how dates should be handled."),(0,r.kt)("p",null,"Functions that create a worksheet will adjust date cells and use a number\nformat like ",(0,r.kt)("inlineCode",{parentName:"p"},"m/d/yy")," to mark dates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Cell A1 will be a numeric cell whose value is the date code\nvar ws = XLSX.utils.aoa_to_sheet([[new Date()]]);\n\n// Cell A1 will be a date cell\nvar ws = XLSX.utils.aoa_to_sheet([[new Date()]], { cellDates: true });\n")),(0,r.kt)("p",null,"Functions that create an array of JS objects with raw values will keep the\nnative representation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Cell A1 is numeric -> output is a number\nvar ws = XLSX.utils.aoa_to_sheet([[new Date()]]);\nvar A1 = XLSX.utils.sheet_to_json(ws, { header: 1 })[0][0];\n\n// Cell A1 is a date -> output is a date\nvar ws = XLSX.utils.aoa_to_sheet([[new Date()]], { cellDates: true });\nvar A1 = XLSX.utils.sheet_to_json(ws, { header: 1 })[0][0];\n")),(0,r.kt)("h3",{id:"number-formats"},"Number Formats"),(0,r.kt)("p",null,"By default, the number formats are not emitted.  For Excel-based file formats,\npassing the option ",(0,r.kt)("inlineCode",{parentName:"p"},"cellNF: true")," adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," field."),(0,r.kt)("p",null,"The helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"XLSX.SSF.is_date")," parses formats and returns ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if the\nformat represents a date or time:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'XLSX.SSF.is_date("yyyy-mm-dd"); // true\n\nXLSX.SSF.is_date("0.00"); // false\n')),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Live Demo")," (click to show)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'function SSFIsDate() {\n  const [format, setFormat] = React.useState("yyyy-mm-dd");\n  const cb = React.useCallback((evt) => {\n    setFormat(evt.target.value);\n  });\n  const is_date = XLSX.SSF.is_date(format);\n  return (<>\n    <div>Format <b>|{format}|</b> is {is_date ? "" : "not"} a date/time</div>\n    <input type="text" onChange={cb}/>\n  </>)\n}\n'))))}p.isMDXComponent=!0}}]);