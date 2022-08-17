"use strict";(self.webpackChunkel_furnia=self.webpackChunkel_furnia||[]).push([[50],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(a),h=n,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||l;return a?r.createElement(k,i(i({ref:t},p),{},{components:a})):r.createElement(k,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const l={slug:"osu-searcher-guidelines",title:"osu!searcher \u4f7f\u7528\u6559\u7a0b",authors:"el",date:new Date("2022-08-08T00:00:00.000Z"),tags:["\u5de5\u5177","osu!","Python"]},i=void 0,o={permalink:"/blog/osu-searcher-guidelines",editUrl:"https://github.com/syzomnia-el/el-furnia/edit/main/blog/osu-searcher-guidelines.md",source:"@site/blog/osu-searcher-guidelines.md",title:"osu!searcher \u4f7f\u7528\u6559\u7a0b",description:"osu!searcher \u662f\u4e00\u4e2a\u4e3a osu! \u5f00\u53d1\u7684\u672c\u5730\u8c31\u9762\u67e5\u627e\u5de5\u5177\uff0c\u65e0\u9700\u542f\u52a8",date:"2022-08-08T00:00:00.000Z",formattedDate:"2022\u5e748\u67088\u65e5",tags:[{label:"\u5de5\u5177",permalink:"/blog/tags/\u5de5\u5177"},{label:"osu!",permalink:"/blog/tags/osu"},{label:"Python",permalink:"/blog/tags/python"}],hasTruncateMarker:!0,authors:[{name:"Syzomnia El",title:"El Furnia \u6240\u6709\u8005",url:"https://syzomnia-el.github.io",imageURL:"https://s2.loli.net/2022/08/10/MubvVT5IHen2LGx.webp",key:"el"}],frontMatter:{slug:"osu-searcher-guidelines",title:"osu!searcher \u4f7f\u7528\u6559\u7a0b",authors:"el",date:"2022-08-08T00:00:00.000Z",tags:["\u5de5\u5177","osu!","Python"]}},s={authorsImageUrls:[void 0]},u=[{value:"\u529f\u80fd",id:"\u529f\u80fd",level:2},{value:"\u8981\u6c42",id:"\u8981\u6c42",level:2},{value:"\u4e0b\u8f7d",id:"\u4e0b\u8f7d",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u547d\u4ee4",id:"\u547d\u4ee4",level:2},{value:"\u8bb8\u53ef\u8bc1",id:"\u8bb8\u53ef\u8bc1",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/syzomnia-el/osu-searcher"},"osu!searcher")," \u662f\u4e00\u4e2a\u4e3a ",(0,n.kt)("a",{parentName:"p",href:"https://osu.ppy.sh"},"osu!")," \u5f00\u53d1\u7684\u672c\u5730\u8c31\u9762\u67e5\u627e\u5de5\u5177\uff0c\u65e0\u9700\u542f\u52a8\nosu! \u5373\u53ef\u5feb\u901f\u67e5\u627e\u5df2\u4e0b\u8f7d\u7684\u8c31\u9762\u3002"),(0,n.kt)("h2",{id:"\u529f\u80fd"},"\u529f\u80fd"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u67e5\u770b\u672c\u5730\u8c31\u9762"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u6309\u5173\u952e\u5b57\u7b5b\u9009\u8c31\u9762"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","\u68c0\u67e5\u91cd\u590d\u7684\u8c31\u9762"),(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u5bf9\u7279\u5b9a\u6761\u4ef6\uff0c\u5982\u8c31\u9762\u7f16\u53f7\u3001\u6b4c\u540d\u3001\u827a\u672f\u5bb6\u3001\u8c31\u5e08\u7b49\uff0c\u6309\u5173\u952e\u5b57\u7b5b\u9009\u8c31\u9762")),(0,n.kt)("h2",{id:"\u8981\u6c42"},"\u8981\u6c42"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.python.org/downloads"},"Python 3.7")," \u6216\u66f4\u9ad8\u7248\u672c")),(0,n.kt)("h2",{id:"\u4e0b\u8f7d"},"\u4e0b\u8f7d"),(0,n.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u4f4d\u4e8e Github \u7684\u9879\u76ee\u4ed3\u5e93\u4e2d\u4e0b\u8f7d osu!searcher \u7684\u6e90\u4ee3\u7801\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u9879\u76ee\u5730\u5740\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/syzomnia-el/osu-searcher"},"https://github.com/syzomnia-el/osu-searcher")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u4f7f\u7528 git \u5c06\u9879\u76ee\u4ed3\u5e93\u590d\u5236\u5230\u672c\u5730\uff1a",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/syzomnia-el/osu-searcher\n"))),(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u4e0b\u8f7d\u538b\u7f29\u5305\u6765\u83b7\u53d6\u3002")),(0,n.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 osu!searcher \u7684\u6240\u5728\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"startup.cmd"),"\uff08\u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"startup.sh"),"\uff09\u811a\u672c\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u9996\u6b21\u4f7f\u7528\u65f6\uff0c\u9700\u8981\u5148\u8f93\u5165\u8c31\u9762\u6240\u5728\u6587\u4ef6\u5939\u7684\u7edd\u5bf9\u8def\u5f84\u3002")),(0,n.kt)("h2",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u547d\u4ee4"),(0,n.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"check"),(0,n.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u91cd\u590d\u7684\u8c31\u9762")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"exit"),(0,n.kt)("td",{parentName:"tr",align:null},"\u9000\u51fa osu!searcher")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"find ","<","keyword",">"),(0,n.kt)("td",{parentName:"tr",align:null},"\u6309\u5173\u952e\u8bcd\u7b5b\u9009\u8c31\u9762")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"flush"),(0,n.kt)("td",{parentName:"tr",align:null},"\u5237\u65b0\u8c31\u9762\u4fe1\u606f\u7f13\u5b58")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"list"),(0,n.kt)("td",{parentName:"tr",align:null},"\u67e5\u770b\u6240\u6709\u672c\u5730\u8c31\u9762")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"path"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4fee\u6539\u8c31\u9762\u5b58\u50a8\u8def\u5f84")))),(0,n.kt)("h2",{id:"\u8bb8\u53ef\u8bc1"},"\u8bb8\u53ef\u8bc1"),(0,n.kt)("p",null,"osu!searcher \u57fa\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://opensource.org/licenses/MIT"},"MIT License"),"\n\u6388\u4e88\u8bb8\u53ef\u3002\u8be6\u60c5\u8bf7\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://github.com/syzomnia-el/osu-searcher/blob/main/LICENSE"},"\u8bb8\u53ef\u8bc1"),"\u3002"))}c.isMDXComponent=!0}}]);