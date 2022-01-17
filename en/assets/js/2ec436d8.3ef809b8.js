"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7534],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(h,i(i({ref:r},c),{},{components:t})):n.createElement(h,i({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8226:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var n=t(3117),o=t(102),a=(t(7294),t(3905)),i=["components"],p={id:"server-add-path-handler",title:"Adding endpoint handler for an application"},l=void 0,s={unversionedId:"how-to/server-add-path-handler",id:"how-to/server-add-path-handler",title:"Adding endpoint handler for an application",description:"Tramvai gives you the ability to process any application url yourself, via tokens WEBAPPBEFOREINITTOKEN \u0438 WEBAPPINIT_TOKEN",source:"@site/tmp-docs/how-to/server-add-path-handler.md",sourceDirName:"how-to",slug:"/how-to/server-add-path-handler",permalink:"/en/docs/how-to/server-add-path-handler",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/server-add-path-handler.md",tags:[],version:"current",frontMatter:{id:"server-add-path-handler",title:"Adding endpoint handler for an application"},sidebar:"docs",previous:{title:"SSR with async components",permalink:"/en/docs/how-to/ssr-async-components"},next:{title:"createApp",permalink:"/en/docs/references/tramvai/create-app"}},c=[],d={toc:c};function u(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tramvai gives you the ability to process any application url yourself, via tokens ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB_APP_BEFORE_INIT_TOKEN")," \u0438 ",(0,a.kt)("inlineCode",{parentName:"p"},"WEB_APP_INIT_TOKEN")),(0,a.kt)("p",null,(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example of adding handlers"),(0,a.kt)("p",null,(0,a.kt)("pre",{parentName:"p"},(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, provide } from '@tramvai/core';\nimport { WEB_APP_BEFORE_INIT_TOKEN, WEB_APP_INIT_TOKEN } from '@tramvai/module-server';\nimport { LOGGER_TOKEN } from '@tramvai/module-common';\nimport { modules } from '../common';\n\ncreateApp({\n  name: 'server',\n  modules: [...modules],\n  bundles: {},\n  providers: [\n    provide({\n      // Subscribe to WEB_APP_BEFORE_INIT_TOKEN event to subscribe to all default handlers\n      provide: WEB_APP_BEFORE_INIT_TOKEN,\n      multi: true,\n      useFactory: ({ logger }) => {\n        const log = logger('my-path');\n\n        // di should get the function from the web application\n        return (app) => {\n          app.use('/my-path', (req, res, next) => {\n            // there will be no cookies in the req because you signed up before setting the cookieParser in @tramvai/module-server\n            log.error('request start!', !!req.cookies);\n            next();\n          });\n        };\n      },\n      deps: {\n        logger: LOGGER_TOKEN,\n      },\n    }),\n    provide({\n      // Subscribe to WEB_APP_INIT_TOKEN event to subscribe to the default root handler\n      provide: WEB_APP_INIT_TOKEN,\n      multi: true,\n      useFactory: ({ logger }) => {\n        const log = logger('my-path');\n\n        return (app) => {\n          app.use('/my-path', (req, res) => {\n            // The cookies in the req here will already be there since they signed up after setting the cookieParser in @tramvai/module-server\n            log.error('request start!', !!req.cookies);\n            res.send({ hello: 'world', cookies: req.cookies });\n          });\n        };\n      },\n      deps: {\n        logger: LOGGER_TOKEN,\n      },\n    }),\n  ],\n});\n\n"))))))}u.isMDXComponent=!0}}]);