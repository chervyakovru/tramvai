"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3048],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?t.createElement(m,i(i({ref:r},p),{},{components:n})):t.createElement(m,i({ref:r},p))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4289:(e,r,n)=>{n.r(r),n.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>p,default:()=>u});var t=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"error-handlers",title:"error-handlers"},s=void 0,c={unversionedId:"references/libs/error-handlers",id:"references/libs/error-handlers",title:"error-handlers",description:"Library for logging of global errors and unhandled promise rejections. May work in browsers and nodejs.",source:"@site/tmp-docs/references/libs/error-handlers.md",sourceDirName:"references/libs",slug:"/references/libs/error-handlers",permalink:"/en/docs/references/libs/error-handlers",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/error-handlers.md",tags:[],version:"current",frontMatter:{id:"error-handlers",title:"error-handlers"},sidebar:"docs",previous:{title:"browserslist-config",permalink:"/en/docs/references/libs/browserslist-config"},next:{title:"eslint-plugin-tramvai",permalink:"/en/docs/references/libs/eslint-plugin-tramvai"}},p=[{value:"Api",id:"api",children:[{value:"Parameters",id:"parameters",children:[],level:3}],level:2}],d={toc:p};function u(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Library for logging of global errors and unhandled promise rejections. May work in browsers and nodejs."),(0,a.kt)("h2",{id:"api"},"Api"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"globalErrorHandler = (logger: Logger = console)")," - init logging of global errors"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"unhandledRejectionHandler = (logger: Logger = console)")," - init logging of unhandled rejection promise")),(0,a.kt)("h3",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Logger")," - used for logging errors"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface Logger {\n  warn: Function;\n  error: Function;\n}\n")))))}u.isMDXComponent=!0}}]);