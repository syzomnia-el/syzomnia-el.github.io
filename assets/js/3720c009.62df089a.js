"use strict";(self.webpackChunkel_furnia=self.webpackChunkel_furnia||[]).push([["2898"],{9120:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(5893);a(7294);var r=a(7026),s=a(357),l=a(6171),i=a(2869),c=a(959),u=a(2901),o=a(6055);function g(e){let{title:t}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.d,{title:t}),(0,n.jsx)(u.Z,{tag:"doc_tags_list"})]})}function h(e){let{tags:t,title:a}=e;return(0,n.jsx)(s.FG,{className:(0,r.Z)(l.k.page.docsTagsListPage),children:(0,n.jsx)("div",{className:"container margin-vert--lg",children:(0,n.jsx)("div",{className:"row",children:(0,n.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,n.jsx)(o.Z,{as:"h1",children:a}),(0,n.jsx)(c.Z,{tags:t})]})})})})}function d(e){let t=(0,i.M)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{...e,title:t}),(0,n.jsx)(h,{...e,title:t})]})}},2684:function(e,t,a){a.d(t,{Z:()=>i});var n=a("5893");a("7294");var r=a("7026"),s=a("3367");let l={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i,description:c}=e;return(0,n.jsxs)(s.Z,{href:t,title:c,className:(0,r.Z)(l.tag,i?l.tagWithCount:l.tagRegular),children:[a,i&&(0,n.jsx)("span",{children:i})]})}},959:function(e,t,a){a.d(t,{Z:()=>c});var n=a("5893");a("7294");var r=a("2869"),s=a("2684"),l=a("6055");function i(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(l.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map(e=>(0,n.jsx)("li",{className:"tag_Nnez",children:(0,n.jsx)(s.Z,{...e})},e.permalink))}),(0,n.jsx)("hr",{})]})}function c(e){let{tags:t}=e,a=(0,r.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:a.map(e=>(0,n.jsx)(i,{letterEntry:e},e.letter))})}},2869:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return s}});var n=a(7670);let r=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function s(e){let t={};return Object.values(e).forEach(e=>{let a=e.label[0].toUpperCase();t[a]??=[],t[a].push(e)}),Object.entries(t).sort((e,t)=>{let[a]=e,[n]=t;return a.localeCompare(n)}).map(e=>{let[t,a]=e;return{letter:t,tags:a.sort((e,t)=>e.label.localeCompare(t.label))}})}}}]);