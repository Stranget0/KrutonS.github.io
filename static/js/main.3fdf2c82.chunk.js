(this["webpackJsonpmanage-landing-page"]=this["webpackJsonpmanage-landing-page"]||[]).push([[0],[,,,,,,,,function(e,t,n){},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),i=n.n(a),s=(n(16),n(2)),l=(n(17),n(18),n(19),n(3)),o=n.n(l),u=n.p+"images/66a576108be35c08eb2ca3e40c17d151-logo.svg",h=n.p+"images/8dcf47cc6f3180ad040f1173f3592504-icon-hamburger.svg",d=n.p+"images/d5ba0dc53461cfc81979638f3b9fcf2e-icon-close.svg",f=(n(8),n(0));function j(e){var t=e.inverted,n=void 0!==t&&t,r=e.shadow,c=void 0===r||r;return Object(f.jsx)("a",{href:e.href,className:o()("btn",{shadow:c,inverted:n},"round"),children:e.children})}function b(e){var t=e.inverted,n=void 0!==t&&t;return Object(f.jsx)(j,{href:"#details",inverted:n,shadow:!0,children:"Get Started"})}var m=n(11),O=n(10),p=function e(t,n,r){Object(O.a)(this,e),this.firstName=t,this.secondName=n,this.text=r},v={anisha:n.p+"static/media/avatar-anisha.484e15bc.png",ali:n.p+"static/media/avatar-ali.88f9155c.png",richard:n.p+"static/media/avatar-richard.ace8e089.png",shanai:n.p+"static/media/avatar-shanai.4bbe2f95.png"},g=[{title:"Track company-wide progress",text:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{title:"Advanced built-in reports",text:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."},{title:"Everything you need in one place",text:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}],x=[new p("Anisha","Li","\u201cManage has supercharged our team\u2019s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\u201d"),new p("Ali","Bravo","\u201cWe have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.\u201d"),new p("Richard","Watts","\u201cManage allows us to provide structure and process. It keeps us organized and focused. I can\u2019t stop recommending them to everyone I talk to!\u201d"),new p("Shanai","Goug","\u201cTheir software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.\u201d")];function y(e,t){if(e){for(var n=Object(m.a)({},e.props),r=0,a=Object.keys(t);r<a.length;r++){var i=a[r];n.hasOwnProperty(i)?n[i]="".concat(n[i]," ").concat(t[i]):n[i]=t[i]}return c.a.cloneElement(e,n)}}var w=Object(r.createContext)();function N(e){var t=e.isMobile,n=e.show;return Object(f.jsxs)(r.Fragment,{children:[t&&Object(f.jsx)("div",{className:o()("nav-blackout",{show:n})}),Object(f.jsxs)("nav",{className:o()("dialog",{show:n}),children:[Object(f.jsx)("a",{href:"#pricing",className:"nav-item",children:"Pricing"}),Object(f.jsx)("a",{href:"#product",className:"nav-item",children:"Product"}),Object(f.jsx)("a",{href:"#about-us",className:"nav-item",children:"About Us"}),Object(f.jsx)("a",{href:"#careers",className:"nav-item",children:"Careers"}),Object(f.jsx)("a",{href:"#community",className:"nav-item",children:"Community"})]})]})}function k(e){var t=Object(r.useContext)(w),n=Object(r.useState)(!1),c=Object(s.a)(n,2),a=c[0],i=c[1];return Object(f.jsxs)("header",{className:"app-header",children:[Object(f.jsx)("a",{href:"/",children:Object(f.jsx)("img",{className:"logo",src:u,alt:"manage logo"})}),Object(f.jsx)("img",{src:a?d:h,alt:"menu",className:o()("hamburger",{show:a}),onClick:function(){return i(!a)}}),Object(f.jsx)(N,{isMobile:t,show:a}),Object(f.jsx)(b,{})]})}w.displayName="mobileScreenContext";var C;n(21);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function S(e,t){var n=e.title,c=e.titleId,a=P(e,["title","titleId"]);return r.createElement("svg",E({xmlns:"http://www.w3.org/2000/svg",width:146,height:24,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,C||(C=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"#242D52",fillRule:"nonzero",d:"M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"}),r.createElement("g",{fill:"#F3603C"},r.createElement("path",{d:"M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z"}),r.createElement("ellipse",{cx:12.814,cy:13.257,opacity:.5,rx:2.786,ry:2.857})))))}var z=r.forwardRef(S);n.p,n(22);function I(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(f.jsxs)("form",{className:"text-form",method:"get",onSubmit:function(e){alert("wys\u0142ano: "+c),e.preventDefault()},children:[Object(f.jsx)("input",{className:"round input",required:!0,type:"email",title:e.placeholder,placeholder:e.placeholder,value:c,onChange:function(e){return a(e.target.value)}}),Object(f.jsx)("input",{className:"btn round orange",type:"submit",title:e.btnValue,value:e.btnValue})]})}n(23);function F(e){return Object(f.jsx)("header",{className:"article-header",children:Object(f.jsx)("h4",{children:e.children})})}function M(e){var t=e.compact;return Object(f.jsx)("article",{className:o()("article-text",{compact:t}),children:e.children})}function V(e){return Object(f.jsxs)("section",{className:"article-section",children:[Object(f.jsx)(F,{children:e.title}),Object(f.jsx)(M,{children:e.children})]})}function R(){return Object(f.jsx)(f.Fragment,{children:g.map((function(e){return Object(f.jsx)(V,{title:e.title,children:e.text},e.title)}))})}function A(e){var t={WebkitTransition:"all",msTransition:"all",columnCount:e.columns};return Object(f.jsx)("div",{className:"multi-columns ".concat(e.columns,"-columns"),style:t,children:e.children})}var T;n(24);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function B(e,t){var n=e.title,c=e.titleId,a=W(e,["title","titleId"]);return r.createElement("svg",L({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,T||(T=r.createElement("path",{fill:"#FFF",d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"})))}var H,G=r.forwardRef(B);n.p;function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function q(e,t){var n=e.title,c=e.titleId,a=U(e,["title","titleId"]);return r.createElement("svg",D({xmlns:"http://www.w3.org/2000/svg",width:21,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,H||(H=r.createElement("path",{fill:"#FFF",d:"M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"})))}var J,K=r.forwardRef(q);n.p;function Q(){return(Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function _(e,t){var n=e.title,c=e.titleId,a=X(e,["title","titleId"]);return r.createElement("svg",Q({xmlns:"http://www.w3.org/2000/svg",width:21,height:18,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,J||(J=r.createElement("path",{fill:"#FFF",d:"M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"})))}var Y,Z=r.forwardRef(_);n.p;function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function te(e,t){var n=e.title,c=e.titleId,a=ee(e,["title","titleId"]);return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,Y||(Y=r.createElement("path",{fill:"#FFF",d:"M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"})))}var ne,re=r.forwardRef(te);n.p;function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function ie(e,t){var n=e.title,c=e.titleId,a=ae(e,["title","titleId"]);return r.createElement("svg",ce({xmlns:"http://www.w3.org/2000/svg",width:21,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,ne||(ne=r.createElement("path",{fill:"#FFF",d:"M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"})))}var se=r.forwardRef(ie),le=(n.p,[[Object(f.jsx)(G,{}),"https://www.facebook.com/","facebook"],[Object(f.jsx)(K,{}),"https://www.youtube.com/watch?v=dQw4w9WgXcQ","youtube"],[Object(f.jsx)(Z,{}),"https://twitter.com/","twitter"],[Object(f.jsx)(re,{}),"https://pinterest.com","pin"],[Object(f.jsx)(se,{}),"https://instagram.com","instagram"]]);function oe(e){return Object(f.jsx)("div",{className:"social-medias",children:le.map((function(e){var t=Object(s.a)(e,3),n=t[0],r=t[1],c=t[2];return Object(f.jsx)("a",{href:r,children:y(n,{title:c,viewBox:"0 0 22 22"})},c)}))})}function ue(e){return Object(f.jsxs)("div",{className:"footer-grid",children:[Object(f.jsx)(I,{placeholder:"Updates in your inbox\u2026",btnValue:"Go"}),Object(f.jsxs)(A,{columns:2,children:[Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Home",children:"Home"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Pricing",children:"Pricing"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Products",children:"Products"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"About",children:"About Us"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Careers",children:"Careers"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Community",children:"Community"})}),Object(f.jsx)("p",{children:Object(f.jsx)("a",{className:"link",href:"Privacy",children:"Privacy Policy"})})]}),Object(f.jsx)(oe,{}),Object(f.jsx)("a",{href:"/",children:Object(f.jsx)(z,{className:"logo",title:"manage logo"})}),Object(f.jsx)(M,{children:"Copyright 2020. All Rights Reserved"})]})}function he(e){return Object(f.jsxs)("footer",{children:[Object(f.jsx)(ue,{}),Object(f.jsxs)("div",{className:"attribution",children:["Challenge by"," ",Object(f.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",Object(f.jsx)("a",{href:"https://github.com/KrutonS",target:"_blank",rel:"noreferrer",children:"KrutonS."})]})]})}n(25);var de=n.p+"images/cb9a8a9551ca99f99a125230d38a2c36-illustration-intro.svg";function fe(e){return Object(f.jsx)("img",{src:de,alt:"statistics"})}n(26);var je=n(7);n(27);function be(e){function t(e){(e<l||e>=N)&&(b(!0),e>=N&&(e-=N)),u(e)}var n=Object(r.useContext)(w),a=Object(r.useState)(0),i=Object(s.a)(a,2),l=i[0],u=i[1],h=Object(r.useState)(!1),d=Object(s.a)(h,2),j=d[0],b=d[1],m=Object(r.useState)({width:0,gap:0}),O=Object(s.a)(m,2),p=O[0],v=O[1],g=function(){if(void 0===e.children)return console.warn("no slideshow children"),[];var t=c.a.Children.map(e.children,(function(e,t){return y(e,{className:o()("slideshow-item",{active:t===l})})})),n=c.a.Children.count(t);return{children:c.a.Children.map([t[n-1]].concat(Object(je.a)(t),Object(je.a)(t),[t[0]]),(function(e,t){return y(e,{key:t})})),childrenCount:n}}(),x=g.children,N=g.childrenCount,k=new Array(N).fill().map((function(e,n){return Object(f.jsx)("span",{className:o()("slideshow-dot",{active:n===l}),onClick:function(){return t(n)}},n)})),C=Object(r.useRef)();Object(r.useEffect)((function(){var e=C.current;function t(){j&&(e.style.transition="none",b(!1))}return e.style.transition=null,e.addEventListener("transitionend",t),function(){return e.removeEventListener("transitionend",t)}}),[j]),Object(r.useEffect)((function(){v({width:void 0!==e.slideRef.current?e.slideRef.current.clientWidth:0,gap:parseInt(window.getComputedStyle(C.current).getPropertyValue("column-gap"))})}),[e.slideRef,n]),Object(r.useEffect)((function(){var e=setTimeout((function(){t(l+1),console.log("next")}),5e3);return function(){return clearTimeout(e)}}),[l]);var E=p.width,P=p.gap,S={transform:"translateX(".concat(-(E+P)/2-(E+P)*(l+(j?0:-N)),"px)")};return Object(f.jsxs)("section",{className:"slideshow",children:[Object(f.jsx)("div",{className:"slideshow-mask",children:Object(f.jsx)("div",{className:"slideshow-container",style:S,ref:C,children:x})}),n&&Object(f.jsx)("div",{className:"slideshow-dots-container",children:k})]})}var me=Object(r.forwardRef)((function(e,t){return Object(f.jsxs)("div",{className:e.className,id:e.id,ref:t,children:[Object(f.jsx)("img",{className:"avatar",src:e.avatar,alt:"avatar"}),Object(f.jsx)("h3",{children:e.fullName}),Object(f.jsx)("blockquote",{children:e.children})]})}));function Oe(e){var t=Object(r.useRef)();return Object(f.jsxs)("section",{className:"opinions",children:[Object(f.jsx)("h2",{children:"What they\u2019ve said"}),Object(f.jsx)(be,{slideRef:t,children:x&&x.map((function(e){var n=e.firstName+" "+e.secondName;return Object(f.jsx)(me,{fullName:n,avatar:v[e.firstName.toLowerCase()],className:"opinions-item dialog",ref:t,children:e.text},n)}))})]})}n(28);function pe(e){return Object(f.jsx)("div",{className:"fancy-container",children:e.children})}function ve(e){return Object(f.jsx)("section",{className:"grid-section "+e.className,children:e.children})}function ge(e){return Object(f.jsxs)("div",{className:"main-grid",children:[Object(f.jsx)(ve,{className:"statistics",children:Object(f.jsx)(fe,{})}),Object(f.jsxs)(ve,{className:"order1",children:[Object(f.jsx)("h1",{children:"Bring everyone together to build better products."}),Object(f.jsx)(M,{compact:!0,children:"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."}),Object(f.jsx)(b,{})]}),Object(f.jsxs)(ve,{class:"left",children:[Object(f.jsx)("h2",{children:"What\u2019s different about Manage?"}),Object(f.jsx)(M,{compact:!0,children:"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."})]}),Object(f.jsx)(ve,{class:"right",children:Object(f.jsx)(R,{})})]})}function xe(e){return Object(f.jsxs)("main",{children:[Object(f.jsx)(ge,{}),Object(f.jsx)(Oe,{}),Object(f.jsx)(b,{}),Object(f.jsxs)(pe,{children:[Object(f.jsx)("h2",{children:"Simplify how your team works today."}),Object(f.jsx)(b,{inverted:!0})]})]})}function ye(){var e=window.matchMedia("(min-width:1440px)"),t=Object(r.useState)(!e.matches),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){return a(!e.matches)};return e.addEventListener("change",t),function(){return e.removeEventListener("change",t)}})),c}var we=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsxs)(w.Provider,{value:ye(),children:[Object(f.jsx)(k,{}),Object(f.jsx)(xe,{}),Object(f.jsx)(he,{})]})})},Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(we,{})}),document.getElementById("root")),Ne()}],[[29,1,2]]]);
//# sourceMappingURL=main.3fdf2c82.chunk.js.map