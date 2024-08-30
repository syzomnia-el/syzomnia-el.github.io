"use strict";(self.webpackChunkel_furnia=self.webpackChunkel_furnia||[]).push([[8488],{6731:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var a=n(4848),t=n(8453);const l={title:"\u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5426\u4e3a\u8d28\u6570\u2014\u2014\u4f18\u5316\u5e38\u89c1O(sqrt(n)/2)\u590d\u6742\u5ea6\u7b97\u6cd5\u5b58\u5728\u7684\u95ee\u9898",authors:"el",tags:["C/C++","\u7b97\u6cd5"]},i=void 0,c={permalink:"/blog/2020/03/19/PTA-solution",editUrl:"https://github.com/syzomnia-el/el-furnia/edit/main/blog/2020-03-19-PTA-solution.md",source:"@site/blog/2020-03-19-PTA-solution.md",title:"\u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5426\u4e3a\u8d28\u6570\u2014\u2014\u4f18\u5316\u5e38\u89c1O(sqrt(n)/2)\u590d\u6742\u5ea6\u7b97\u6cd5\u5b58\u5728\u7684\u95ee\u9898",description:"$O(\\dfrac{\\sqrt n})$ \u590d\u6742\u5ea6\u7b97\u6cd5\u4f5c\u4e3a\u5e38\u89c1 $O(\\sqrt n)$",date:"2020-03-19T00:00:00.000Z",tags:[{inline:!0,label:"C/C++",permalink:"/blog/tags/c-c"},{inline:!0,label:"\u7b97\u6cd5",permalink:"/blog/tags/\u7b97\u6cd5"}],readingTime:1.01,hasTruncateMarker:!0,authors:[{name:"El Syzomnia",title:"El Furnia \u6240\u6709\u8005",url:"https://syzomnia-el.github.io",imageURL:"https://s2.loli.net/2023/02/20/YlzB9KxPApraweM.webp",key:"el",page:null}],frontMatter:{title:"\u5224\u65ad\u4e00\u4e2a\u6570\u662f\u5426\u4e3a\u8d28\u6570\u2014\u2014\u4f18\u5316\u5e38\u89c1O(sqrt(n)/2)\u590d\u6742\u5ea6\u7b97\u6cd5\u5b58\u5728\u7684\u95ee\u9898",authors:"el",tags:["C/C++","\u7b97\u6cd5"]},unlisted:!1,prevItem:{title:"7-3 \u8d77\u6ce1\u6392\u5e8f\u2014\u2014\u4ece\u5192\u6ce1\u5230\u5f52\u5e76",permalink:"/blog/2021/09/30/PTA-solution"},nextItem:{title:"\u521d\u89c1\u9012\u5f52\uff5c\u9012\u5f52\u51fd\u6570\u6c42\u7334\u5b50\u5403\u6843\u2014\u2014\u5e38\u89c4\u5403\u6843\u95ee\u9898\u7684\u4e00\u79cd\u53d8\u5f62",permalink:"/blog/2020/03/12/PTA-solution"}},r={authorsImageUrls:[void 0]},m=[];function h(s){const e={annotation:"annotation",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msqrt:"msqrt",mstyle:"mstyle",p:"p",path:"path",semantics:"semantics",span:"span",svg:"svg",...(0,t.R)(),...s.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:[(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.mstyle,{displaystyle:"true",scriptlevel:"0",children:(0,a.jsxs)(e.mfrac,{children:[(0,a.jsx)(e.msqrt,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.mn,{children:"2"})]})}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\dfrac{\\sqrt n}{2})"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"2.1633em",verticalAlign:"-0.686em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsxs)(e.span,{className:"mord",children:[(0,a.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,a.jsx)(e.span,{className:"mfrac",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"1.4773em"},children:[(0,a.jsxs)(e.span,{style:{top:"-2.314em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mord",children:"2"})})]}),(0,a.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,a.jsxs)(e.span,{style:{top:"-3.677em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord",children:(0,a.jsx)(e.span,{className:"mord sqrt",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8003em"},children:[(0,a.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{paddingLeft:"0.833em"},children:"n"})]}),(0,a.jsxs)(e.span,{style:{top:"-2.7603em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,a.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2397em"},children:(0,a.jsx)(e.span,{})})})]})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.686em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]})," \u590d\u6742\u5ea6\u7b97\u6cd5\u4f5c\u4e3a\u5e38\u89c1 ",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsxs)(e.mrow,{children:[(0,a.jsx)(e.mi,{children:"O"}),(0,a.jsx)(e.mo,{stretchy:"false",children:"("}),(0,a.jsx)(e.msqrt,{children:(0,a.jsx)(e.mi,{children:"n"})}),(0,a.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"O(\\sqrt n)"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"1.0503em",verticalAlign:"-0.25em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"O"}),(0,a.jsx)(e.span,{className:"mopen",children:"("}),(0,a.jsx)(e.span,{className:"mord sqrt",children:(0,a.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,a.jsxs)(e.span,{className:"vlist-r",children:[(0,a.jsxs)(e.span,{className:"vlist",style:{height:"0.8003em"},children:[(0,a.jsxs)(e.span,{className:"svg-align",style:{top:"-3em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"mord mathnormal",style:{paddingLeft:"0.833em"},children:"n"})]}),(0,a.jsxs)(e.span,{style:{top:"-2.7603em"},children:[(0,a.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,a.jsx)(e.span,{className:"hide-tail",style:{minWidth:"0.853em",height:"1.08em"},children:(0,a.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,a.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,a.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,a.jsx)(e.span,{className:"vlist-r",children:(0,a.jsx)(e.span,{className:"vlist",style:{height:"0.2397em"},children:(0,a.jsx)(e.span,{})})})]})}),(0,a.jsx)(e.span,{className:"mclose",children:")"})]})})]}),"\n\u590d\u6742\u5ea6\u7b97\u6cd5\u7684\u4f18\u5316\u7248\u672c\uff0c\u80fd\u591f\u51cf\u5c11\u540e\u8005\u7684\u4e00\u534a\u590d\u6742\u5ea6\uff0c\u4f46\u5e38\u89c1\u4f18\u5316\u7b97\u6cd5\u6216\u591a\u6216\u5c11\u5b58\u5728\u4e00\u4e9b\u95ee\u9898\uff1a\u6709\u7684\u65e0\u6cd5\u5bf9\u4e2a\u4f4d\u6570\u6b63\u786e\u5224\u65ad\u3001\u6709\u7684\u65e0\u6cd5\u5bf9\u8d1f\u6570\u6b63\u786e\u5224\u65ad\u2026\u2026"]}),"\n",(0,a.jsx)(e.p,{children:"\u8fd9\u7bc7\u535a\u5ba2\u5c06\u7ed9\u51fa\u4e00\u79cd\u4f18\u5316\u7248\u672c\u89e3\u51b3\u63d0\u5230\u7684\u95ee\u9898\u3002"})]})}function p(s={}){const{wrapper:e}={...(0,t.R)(),...s.components};return e?(0,a.jsx)(e,{...s,children:(0,a.jsx)(h,{...s})}):h(s)}},8453:(s,e,n)=>{n.d(e,{R:()=>i,x:()=>c});var a=n(6540);const t={},l=a.createContext(t);function i(s){const e=a.useContext(l);return a.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function c(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:i(s.components),a.createElement(l.Provider,{value:e},s.children)}}}]);