(this["webpackJsonpmanage-landing-page"]=this["webpackJsonpmanage-landing-page"]||[]).push([[0],{19:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(20),i=n.n(a),s=(n(28),n(7)),l=(n(29),n(30),n(3)),o=(n(31),n(9)),u=n.n(o),d=n.p+"static/media/logo.66a57610.svg",h=n.p+"static/media/icon-hamburger.8dcf47cc.svg",j=n.p+"static/media/icon-close.d5ba0dc5.svg",b=(n(19),n(0));function m(e){var t=e.inverted,n=void 0!==t&&t,r=e.shadow,c=void 0===r||r;return Object(b.jsx)("a",{href:e.href,className:u()("btn",{shadow:c,inverted:n},"round"),children:e.children})}function f(e){var t=e.inverted,n=void 0!==t&&t;return Object(b.jsx)(m,{href:"#details",inverted:n,shadow:!0,children:"Get Started"})}var O=n(23),p=n(21),v=function e(t,n,r){Object(p.a)(this,e),this.firstName=t,this.secondName=n,this.text=r},g={anisha:n.p+"static/media/avatar-anisha.484e15bc.png",ali:n.p+"static/media/avatar-ali.88f9155c.png",richard:n.p+"static/media/avatar-richard.ace8e089.png",shanai:n.p+"static/media/avatar-shanai.4bbe2f95.png"},x=[{title:"Track company-wide progress",text:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."},{title:"Advanced built-in reports",text:"Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."},{title:"Everything you need in one place",text:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."}],y=[new v("Anisha","Li","\u201cManage has supercharged our team\u2019s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.\u201d"),new v("Ali","Bravo","\u201cWe have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.\u201d"),new v("Richard","Watts","\u201cManage allows us to provide structure and process. It keeps us organized and focused. I can\u2019t stop recommending them to everyone I talk to!\u201d"),new v("Shanai","Goug","\u201cTheir software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.\u201d")];function w(e,t){if(e){for(var n=Object(O.a)({},e.props),r=0,a=Object.keys(t);r<a.length;r++){var i=a[r];Object.prototype.hasOwnProperty.call(n,i)?n[i]="".concat(n[i]," ").concat(t[i]):n[i]=t[i]}return c.a.cloneElement(e,n)}}var N=Object(r.createContext)();N.displayName="mobileScreenContext";var C="/manage-landing-page";function k(e){var t=e.isMobile,n=e.show;return Object(b.jsxs)(b.Fragment,{children:[t&&Object(b.jsx)("div",{className:u()("nav-blackout",{show:n})}),Object(b.jsxs)("nav",{className:u()("dialog",{show:n}),children:[Object(b.jsx)(l.b,{to:"".concat(C,"/pricing"),className:"nav-item",children:"Pricing"}),Object(b.jsx)(l.b,{to:"".concat(C,"/product"),className:"nav-item",children:"Product"}),Object(b.jsx)(l.b,{to:"".concat(C,"/about"),className:"nav-item",children:"About Us"}),Object(b.jsx)(l.b,{to:"".concat(C,"/careers"),className:"nav-item",children:"Careers"}),Object(b.jsx)(l.b,{to:"".concat(C,"/community"),className:"nav-item",children:"Community"})]})]})}function E(){var e=Object(r.useContext)(N),t=Object(r.useState)(!1),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("header",{className:"app-header",children:[Object(b.jsx)(l.b,{to:C,children:Object(b.jsx)("img",{className:"logo",src:d,alt:"manage logo"})}),Object(b.jsx)("button",{className:u()("hamburger",{show:c}),onClick:function(){return a(!c)},children:Object(b.jsx)("img",{src:c?j:h,alt:"menu"})}),Object(b.jsx)(k,{isMobile:e,show:c}),Object(b.jsx)(f,{})]})}var P;n(41);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function I(e,t){var n=e.title,c=e.titleId,a=z(e,["title","titleId"]);return r.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:146,height:24,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,P||(P=r.createElement("g",{fill:"none",fillRule:"evenodd"},r.createElement("path",{fill:"#242D52",fillRule:"nonzero",d:"M40.014 16.809V8.553c0-1.577.366-2.82 1.098-3.73.733-.91 1.65-1.365 2.75-1.365 2.158 0 3.237 1.577 3.237 4.731v8.62h3.782v-9.58c0-2.415-.5-4.22-1.503-5.417C48.376.615 46.945.017 45.084.017c-1.222 0-2.34.234-3.352.703a6.833 6.833 0 00-2.56 2.043h-.066C38.126.932 36.486.017 34.184.017c-.969 0-1.902.217-2.799.653a6.976 6.976 0 00-2.353 1.878h-.05V.265H25.2v16.527h3.782V8.553c0-1.577.372-2.82 1.115-3.73.743-.91 1.693-1.365 2.849-1.365 2.19 0 3.286 1.577 3.286 4.731v8.62h3.782zm21.101.248c2.246 0 3.997-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C64.93.761 63.23.017 61.082.017a7.76 7.76 0 00-5.681 2.415c-.705.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.611 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.669 2.68a7.348 7.348 0 002.535 1.696 8.325 8.325 0 003.18.604zm.595-3.441c-1.399 0-2.538-.466-3.419-1.398-.88-.932-1.321-2.132-1.321-3.599 0-1.555.454-2.804 1.362-3.747.909-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.345 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.909.932-2.018 1.398-3.328 1.398zm27.112 3.193V7.064c0-2.393-.536-4.166-1.61-5.319C86.14.593 84.655.017 82.762.017a7.373 7.373 0 00-3.056.645 6.958 6.958 0 00-2.477 1.87h-.05V.264h-3.782v16.527h3.782V8.487c0-1.588.388-2.823 1.164-3.706.777-.882 1.814-1.323 3.113-1.323.595 0 1.104.077 1.528.231.424.155.796.406 1.115.753.32.348.556.819.71 1.415.154.595.231 1.323.231 2.183v8.769h3.782zm10.218.248c2.246 0 3.996-.827 5.252-2.482h.05v2.217h3.616V.265h-3.782V2.25h-.066C102.855.761 101.154.017 99.007.017a7.76 7.76 0 00-5.682 2.415c-.704.75-1.26 1.66-1.668 2.73a9.589 9.589 0 00-.61 3.44c0 1.258.203 2.416.61 3.475.408 1.059.964 1.952 1.668 2.68a7.348 7.348 0 002.536 1.696 8.325 8.325 0 003.179.604zm.594-3.441c-1.398 0-2.538-.466-3.418-1.398-.881-.932-1.322-2.132-1.322-3.599 0-1.555.455-2.804 1.363-3.747.908-.943 2.04-1.414 3.394-1.414 1.343 0 2.458.493 3.344 1.48.886.988 1.33 2.215 1.33 3.681 0 1.467-.455 2.667-1.363 3.599-.908.932-2.018 1.398-3.328 1.398zm19.07 10.125c1.2 0 2.274-.14 3.22-.422.947-.281 1.743-.673 2.387-1.175a6.385 6.385 0 001.602-1.844 8.14 8.14 0 00.916-2.383c.188-.86.281-1.803.281-2.829V.265h-3.782v1.737h-.066a7.059 7.059 0 00-2.353-1.49A7.62 7.62 0 00118.142 0c-1.508 0-2.862.358-4.062 1.075-1.2.717-2.134 1.713-2.8 2.987-.666 1.273-.999 2.705-.999 4.293 0 1.61.35 3.038 1.049 4.285.699 1.246 1.66 2.203 2.882 2.87 1.222.667 2.598 1.001 4.129 1.001 2.047 0 3.716-.673 5.004-2.018h.066v1.753c0 1.17-.43 2.14-1.288 2.912-.86.772-2.07 1.158-3.634 1.158-1.068 0-2.006-.132-2.816-.397-.809-.265-1.742-.678-2.799-1.24l-.892 3.341c.925.552 1.966.976 3.122 1.274 1.156.298 2.356.447 3.6.447zm.132-10.72c-1.365 0-2.491-.434-3.377-1.3-.887-.865-1.33-2.026-1.33-3.482 0-1.4.435-2.542 1.305-3.425.87-.882 2.004-1.323 3.402-1.323 1.332 0 2.442.435 3.328 1.307.886.871 1.33 2.002 1.33 3.391 0 1.401-.433 2.556-1.297 3.466-.864.91-1.985 1.365-3.361 1.365zm19.086 4.036c1.542 0 2.899-.281 4.071-.844 1.173-.562 2.133-1.323 2.882-2.283l-2.642-2.266c-1.035 1.301-2.406 1.952-4.113 1.952-1.21 0-2.237-.337-3.08-1.01-.842-.672-1.384-1.593-1.627-2.762h12.024c.066-.397.099-.9.099-1.506 0-1.599-.325-3.027-.975-4.285a7.198 7.198 0 00-2.807-2.961c-1.222-.717-2.632-1.075-4.228-1.075a8.191 8.191 0 00-3.188.62c-.99.414-1.844.99-2.56 1.729-.715.739-1.277 1.638-1.684 2.696-.407 1.06-.611 2.212-.611 3.458 0 1.688.369 3.185 1.106 4.492.738 1.307 1.746 2.308 3.023 3.003 1.277.695 2.714 1.042 4.31 1.042zm3.815-10.274h-8.257c.264-1.059.776-1.878 1.535-2.457.76-.579 1.663-.868 2.709-.868 1.057 0 1.93.298 2.618.893.688.596 1.153 1.406 1.395 2.432z"}),r.createElement("g",{fill:"#F3603C"},r.createElement("path",{d:"M2.786 10.286c1.538 0 2.785 1.279 2.785 2.857C5.571 14.72 4.324 16 2.786 16 1.247 16 0 14.72 0 13.143c0-1.578 1.247-2.857 2.786-2.857zM2.786 0C4.324 0 5.57 1.28 5.57 2.857c0 1.578-1.247 2.857-2.785 2.857C1.247 5.714 0 4.435 0 2.857 0 1.28 1.247 0 2.786 0zm10.028 0C14.353 0 15.6 1.28 15.6 2.857c0 1.578-1.247 2.857-2.786 2.857-1.538 0-2.785-1.279-2.785-2.857C10.029 1.28 11.276 0 12.814 0z"}),r.createElement("ellipse",{cx:12.814,cy:13.257,opacity:.5,rx:2.786,ry:2.857})))))}var F=r.forwardRef(I);n.p,n(42);function M(e){var t=Object(r.useState)(""),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(b.jsxs)("form",{className:"text-form",method:"get",onSubmit:function(e){alert("wys\u0142ano: "+c),e.preventDefault()},children:[Object(b.jsx)("input",{className:"round input",required:!0,type:"email",title:e.placeholder,placeholder:e.placeholder,value:c,onChange:function(e){return a(e.target.value)}}),Object(b.jsx)("input",{className:"btn round orange",type:"submit",title:e.btnValue,value:e.btnValue})]})}n(43);function V(e){return Object(b.jsx)("header",{className:"article-header",children:Object(b.jsx)("h4",{children:e.children})})}function R(e){var t=e.compact;return Object(b.jsx)("article",{className:u()("article-text",{compact:t}),children:e.children})}function A(e){return Object(b.jsxs)("section",{className:"article-section",children:[Object(b.jsx)(V,{children:e.title}),Object(b.jsx)(R,{children:e.children})]})}function T(){return Object(b.jsx)(b.Fragment,{children:x.map((function(e){return Object(b.jsx)(A,{title:e.title,children:e.text},e.title)}))})}function L(e){var t={WebkitTransition:"all",msTransition:"all",columnCount:e.columns};return Object(b.jsx)("div",{className:"multi-columns ".concat(e.columns,"-columns"),style:t,children:e.children})}var W;n(44);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function G(e,t){var n=e.title,c=e.titleId,a=H(e,["title","titleId"]);return r.createElement("svg",B({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,W||(W=r.createElement("path",{fill:"#FFF",d:"M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0z"})))}var _,D=r.forwardRef(G);n.p;function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function J(e,t){var n=e.title,c=e.titleId,a=q(e,["title","titleId"]);return r.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",width:21,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,_||(_=r.createElement("path",{fill:"#FFF",d:"M10.333 0c-5.522 0-10 4.478-10 10 0 5.523 4.478 10 10 10 5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10zm3.701 14.077c-1.752.12-5.653.12-7.402 0C4.735 13.947 4.514 13.018 4.5 10c.014-3.024.237-3.947 2.132-4.077 1.749-.12 5.651-.12 7.402 0 1.898.13 2.118 1.059 2.133 4.077-.015 3.024-.238 3.947-2.133 4.077zM8.667 8.048l4.097 1.949-4.097 1.955V8.048z"})))}var K,Q=r.forwardRef(J);n.p;function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function Z(e,t){var n=e.title,c=e.titleId,a=Y(e,["title","titleId"]);return r.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:21,height:18,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,K||(K=r.createElement("path",{fill:"#FFF",d:"M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"})))}var $,ee=r.forwardRef(Z);n.p;function te(){return(te=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function re(e,t){var n=e.title,c=e.titleId,a=ne(e,["title","titleId"]);return r.createElement("svg",te({xmlns:"http://www.w3.org/2000/svg",width:20,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,$||($=r.createElement("path",{fill:"#FFF",d:"M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"})))}var ce,ae=r.forwardRef(re);n.p;function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function se(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function le(e,t){var n=e.title,c=e.titleId,a=se(e,["title","titleId"]);return r.createElement("svg",ie({xmlns:"http://www.w3.org/2000/svg",width:21,height:20,ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,ce||(ce=r.createElement("path",{fill:"#FFF",d:"M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"})))}var oe=r.forwardRef(le),ue=(n.p,[[Object(b.jsx)(D,{}),"https://www.facebook.com/","facebook"],[Object(b.jsx)(Q,{}),"https://www.youtube.com/watch?v=dQw4w9WgXcQ","youtube"],[Object(b.jsx)(ee,{}),"https://twitter.com/","twitter"],[Object(b.jsx)(ae,{}),"https://pinterest.com","pin"],[Object(b.jsx)(oe,{}),"https://instagram.com","instagram"]]);function de(){return Object(b.jsx)("div",{className:"social-medias",children:ue.map((function(e){var t=Object(s.a)(e,3),n=t[0],r=t[1],c=t[2];return Object(b.jsx)("a",{href:r,className:"social-medias__item",children:w(n,{title:c,viewBox:"0 0 22 22"})},c)}))})}function he(){return Object(b.jsxs)("div",{className:"footer-grid",children:[Object(b.jsx)(M,{placeholder:"Updates in your inbox\u2026",btnValue:"Go"}),Object(b.jsxs)(L,{columns:2,children:[Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Home"),children:"Home"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Pricing"),children:"Pricing"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Products"),children:"Products"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/About"),children:"About Us"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Careers"),children:"Careers"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Community"),children:"Community"})}),Object(b.jsx)("p",{children:Object(b.jsx)(l.b,{className:"link",to:"".concat(C,"/Privacy"),children:"Privacy Policy"})})]}),Object(b.jsx)(de,{}),Object(b.jsx)(l.b,{to:C,children:Object(b.jsx)(F,{className:"logo",title:"manage logo"})}),Object(b.jsx)(R,{children:"Copyright 2020. All Rights Reserved"})]})}function je(){return Object(b.jsxs)("footer",{children:[Object(b.jsx)(he,{}),Object(b.jsxs)("div",{className:"attribution",children:["Challenge by"," ",Object(b.jsx)("a",{href:"https://www.frontendmentor.io?ref=challenge",target:"_blank",rel:"noreferrer",children:"Frontend Mentor"}),". Coded by"," ",Object(b.jsx)("a",{href:"https://github.com/KrutonS",target:"_blank",rel:"noreferrer",children:"KrutonS."})]})]})}n(45);var be=n(2),me=(n(46),n.p+"static/media/illustration-intro.cb9a8a95.svg");function fe(){return Object(b.jsx)("img",{src:me,alt:"statistics"})}n(47);var Oe=n(18);n(48);function pe(e){function t(e){(e<l||e>=y)&&(m(!0),e>=y&&(e-=y)),o(e)}var n=Object(r.useContext)(N),a=Object(r.useState)(0),i=Object(s.a)(a,2),l=i[0],o=i[1],d=Object(r.useState)(!1),h=Object(s.a)(d,2),j=h[0],m=h[1],f=Object(r.useState)({width:0,gap:0}),O=Object(s.a)(f,2),p=O[0],v=O[1],g=function(){if(void 0===e.children)return console.warn("no slideshow children"),[];var t=c.a.Children.map(e.children,(function(e,t){return w(e,{className:u()("slideshow-item",{active:t===l})})})),n=c.a.Children.count(t);return{children:c.a.Children.map([t[n-1]].concat(Object(Oe.a)(t),Object(Oe.a)(t),[t[0]]),(function(e,t){return w(e,{key:t})})),childrenCount:n}}(),x=g.children,y=g.childrenCount,C=new Array(y).fill().map((function(e,n){return Object(b.jsx)("button",{className:u()("slideshow-dot",{active:n===l}),onClick:function(){return t(n)}},n)})),k=Object(r.useRef)();Object(r.useEffect)((function(){var e=k.current;function t(){j&&(e.style.transition="none",m(!1))}return e.style.transition=null,e.addEventListener("transitionend",t),function(){return e.removeEventListener("transitionend",t)}}),[j]),Object(r.useEffect)((function(){v({width:void 0!==e.slideRef.current?e.slideRef.current.clientWidth:0,gap:parseInt(window.getComputedStyle(k.current).getPropertyValue("column-gap"))})}),[e.slideRef,n]),Object(r.useEffect)((function(){var e=setTimeout((function(){t(l+1),console.log("next")}),5e3);return function(){return clearTimeout(e)}}),[l]);var E=p.width,P=p.gap,S={transform:"translateX(".concat(-(E+P)/2-(E+P)*(l+(j?0:-y)),"px)")};return Object(b.jsxs)("section",{className:"slideshow",children:[Object(b.jsx)("div",{className:"slideshow-mask",children:Object(b.jsx)("div",{className:"slideshow-container",style:S,ref:k,children:x})}),n&&Object(b.jsx)("div",{className:"slideshow-dots-container",children:C})]})}var ve=Object(r.forwardRef)((function(e,t){return Object(b.jsxs)("div",{className:e.className,id:e.id,ref:t,children:[Object(b.jsx)("img",{className:"avatar",src:e.avatar,alt:"avatar"}),Object(b.jsx)("h3",{children:e.fullName}),Object(b.jsx)("blockquote",{children:e.children})]})}));function ge(){var e=Object(r.useRef)();return Object(b.jsxs)("section",{className:"opinions",children:[Object(b.jsx)("h2",{children:"What they\u2019ve said"}),Object(b.jsx)(pe,{slideRef:e,children:y&&y.map((function(t){var n=t.firstName+" "+t.secondName;return Object(b.jsx)(ve,{fullName:n,avatar:g[t.firstName.toLowerCase()],className:"opinions-item dialog",ref:e,children:t.text},n)}))})]})}ve.displayName="Slideshow-slide";var xe=Object(r.memo)(ge);n(49);function ye(e){return Object(b.jsx)("div",{className:"fancy-container",children:e.children})}function we(e){return Object(b.jsx)("section",{className:"grid-section "+e.className,children:e.children})}function Ne(){return Object(b.jsxs)("div",{className:"main-grid",children:[Object(b.jsx)(we,{className:"statistics",children:Object(b.jsx)(fe,{})}),Object(b.jsxs)(we,{className:"order1",children:[Object(b.jsx)("h1",{children:"Bring everyone together to build better products."}),Object(b.jsx)(R,{compact:!0,children:"Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."}),Object(b.jsx)(f,{})]}),Object(b.jsxs)(we,{class:"left",children:[Object(b.jsx)("h2",{children:"What\u2019s different about Manage?"}),Object(b.jsx)(R,{compact:!0,children:"Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams."})]}),Object(b.jsx)(we,{class:"right",children:Object(b.jsx)(T,{})})]})}function Ce(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Ne,{}),Object(b.jsx)(xe,{}),Object(b.jsx)(f,{}),Object(b.jsxs)(ye,{children:[Object(b.jsx)("h2",{children:"Simplify how your team works today."}),Object(b.jsx)(f,{inverted:!0})]})]})}function ke(){return Object(b.jsx)("h1",{children:"Community"})}function Ee(){return Object(b.jsx)("h1",{children:"Careers"})}function Pe(){return Object(b.jsx)("h1",{children:"About"})}function Se(){return Object(b.jsx)("h1",{children:"Pricing"})}function ze(){return Object(b.jsx)("h1",{children:"Product"})}function Ie(){return Object(b.jsx)("main",{children:Object(b.jsxs)(be.c,{children:[Object(b.jsx)(be.a,{exact:!0,path:C,children:Object(b.jsx)(Ce,{})}),Object(b.jsx)(be.a,{path:"".concat(C,"/community"),children:Object(b.jsx)(ke,{})}),Object(b.jsx)(be.a,{path:"".concat(C,"/careers"),children:Object(b.jsx)(Ee,{})}),Object(b.jsx)(be.a,{path:"".concat(C,"/about"),children:Object(b.jsx)(Pe,{})}),Object(b.jsx)(be.a,{path:"".concat(C,"/pricing"),children:Object(b.jsx)(Se,{})}),Object(b.jsx)(be.a,{path:"".concat(C,"/product"),children:Object(b.jsx)(ze,{})})]})})}function Fe(){var e=window.matchMedia("(min-width:1000px)"),t=Object(r.useState)(!e.matches),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){var t=function(){return a(!e.matches)};return e.addEventListener("change",t),function(){return e.removeEventListener("change",t)}}),[e]),c}var Me=function(){return Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(N.Provider,{value:Fe(),children:[Object(b.jsx)(E,{}),Object(b.jsx)(Ie,{}),Object(b.jsx)(je,{})]})})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(Me,{})}),document.getElementById("root")),Ve(console.log)}},[[50,1,2]]]);
//# sourceMappingURL=main.c86a6ba2.chunk.js.map