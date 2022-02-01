"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[830],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return t?n.createElement(m,a(a({ref:r},s),{},{components:t})):n.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},161:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>s,default:()=>u});var n=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={id:"error-interceptor",title:"error-interceptor"},c=void 0,p={unversionedId:"references/modules/error-interceptor",id:"references/modules/error-interceptor",title:"error-interceptor",description:"Wrapper module for the @tinkoff/error-handlers",source:"@site/tmp-docs/references/modules/error-interceptor.md",sourceDirName:"references/modules",slug:"/references/modules/error-interceptor",permalink:"/en/docs/references/modules/error-interceptor",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/error-interceptor.md",tags:[],version:"current",frontMatter:{id:"error-interceptor",title:"error-interceptor"},sidebar:"docs",previous:{title:"env",permalink:"/en/docs/references/modules/env"},next:{title:"http-client",permalink:"/en/docs/references/modules/http-client"}},s=[{value:"Explanation",id:"explanation",children:[{value:"Integration with tramvai",id:"integration-with-tramvai",children:[],level:3},{value:"How does it work on server",id:"how-does-it-work-on-server",children:[],level:3}],level:2}],d={toc:s};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wrapper module for the ",(0,i.kt)("a",{parentName:"p",href:"../libs/error-handlers"},"@tinkoff/error-handlers")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("h3",{id:"integration-with-tramvai"},"Integration with tramvai"),(0,i.kt)("p",null,"Module doesn't provide any public interface and only registers error handlers with ",(0,i.kt)("inlineCode",{parentName:"p"},"@tinkoff/error-handlers")," which will catch errors on server and client."),(0,i.kt)("h3",{id:"how-does-it-work-on-server"},"How does it work on server"),(0,i.kt)("p",null,"Subscribes to the event ",(0,i.kt)("inlineCode",{parentName:"p"},"unhandledRejection")," and any sudden signals and uncaughtErrors with library ",(0,i.kt)("inlineCode",{parentName:"p"},"death")," then logs it to the console."))}u.isMDXComponent=!0}}]);