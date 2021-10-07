(self.webpackChunk=self.webpackChunk||[]).push([[5866],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,D=m["".concat(l,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(D,i(i({ref:t},s),{},{components:n})):r.createElement(D,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1696:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>o,contentTitle:()=>l,metadata:()=>c,toc:()=>s,default:()=>m});var r=n(2122),a=n(9756),p=(n(7294),n(3905)),i=["components"],o={id:"introduction",title:"Papi introduction"},l=void 0,c={unversionedId:"features/papi/introduction",id:"features/papi/introduction",isDocsHomePage:!1,title:"Papi introduction",description:"Papi - API \u0440\u043e\u0443\u0442\u044b \u0434\u043b\u044f tramvai \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c @tramvai/module-server",source:"@site/tmp-docs/features/papi/introduction.md",sourceDirName:"features/papi",slug:"/features/papi/introduction",permalink:"/docs/features/papi/introduction",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/papi/introduction.md",version:"current",frontMatter:{id:"introduction",title:"Papi introduction"},sidebar:"docs",previous:{title:"Create event",permalink:"/docs/features/state/create-event"},next:{title:"react-query",permalink:"/docs/references/modules/react-query"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"How to",id:"how-to",children:[{value:"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 papi",id:"\u043a\u0430\u043a-\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0434\u0430\u043d\u043d\u044b\u0435-\u0441-papi",children:[]},{value:"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 DI \u0432 papi \u0440\u043e\u0443\u0442\u0430\u0445",id:"\u043a\u0430\u043a-\u043c\u043e\u0436\u043d\u043e-\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c-\u0434\u0430\u043d\u043d\u044b\u0435-\u0441-di-\u0432-papi-\u0440\u043e\u0443\u0442\u0430\u0445",children:[]},{value:"\u041a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 papi \u0440\u043e\u0443\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",id:"\u043a\u0430\u043a-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c-\u043d\u043e\u0432\u044b\u0439-papi-\u0440\u043e\u0443\u0442-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",children:[]}]}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Papi - API \u0440\u043e\u0443\u0442\u044b \u0434\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"tramvai")," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b \u0432\u0445\u043e\u0434\u0438\u0442 \u0432 \u043c\u043e\u0434\u0443\u043b\u044c ",(0,p.kt)("a",{parentName:"p",href:"/docs/references/modules/server"},"@tramvai/module-server")),(0,p.kt)("h2",{id:"explanation"},"Explanation"),(0,p.kt)("p",null,"\u0417\u0430\u0447\u0430\u0441\u0442\u0443\u044e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e \u043d\u0443\u0436\u043d\u044b \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0438 \u043e\u0442\u0434\u0430\u0432\u0430\u0442\u044c JSON \u043e\u0442\u0432\u0435\u0442\u044b. \u0418\u043c\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u044d\u0442\u0438\u0445 \u043a\u0435\u0439\u0441\u043e\u0432 \u0431\u044b\u043b\u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u044b PAPI. PAPi \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u044b \u0438 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442 \u0432 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u043a \u043f\u0440\u0438\u043c\u0435\u0440\u0443 JSON. PAPI \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0438 \u0434\u0435\u0448\u0435\u0432\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438, \u043d\u0435 \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u044f \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u044b."),(0,p.kt)("p",null,"\u0421\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 papi \u0440\u0430\u0437\u0434\u0435\u043b\u044b"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#%D0%9A%D0%B0%D0%BA-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B8%D1%82%D1%8C-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81-papi"},"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 papi")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#%D0%9A%D0%B0%D0%BA-%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%BF%D0%BE%D0%BB%D1%83%D1%87%D0%B0%D1%82%D1%8C-%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5-%D1%81-DI-%D0%B2-papi-%D1%80%D0%BE%D1%83%D1%82%D0%B0%D1%85"},"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 DI \u0432 papi \u0440\u043e\u0443\u0442\u0430\u0445")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"#%D0%9A%D0%B0%D0%BA-%D0%B4%D0%BE%D0%B1%D0%B0%D0%B2%D0%B8%D1%82%D1%8C-%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9-papi-%D1%80%D0%BE%D1%83%D1%82-%D0%B2-%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B8"},"\u041a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 papi \u0440\u043e\u0443\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"))),(0,p.kt)("h2",{id:"how-to"},"How to"),(0,p.kt)("h3",{id:"\u043a\u0430\u043a-\u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c-\u0434\u0430\u043d\u043d\u044b\u0435-\u0441-papi"},"\u041a\u0430\u043a \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 papi"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"papi")," \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0437\u0430 \u0443\u0440\u043b\u043e\u043c ",(0,p.kt)("inlineCode",{parentName:"p"},"/${appInfo.appName}/papi"),". \u0422\u0430\u043a\u043e\u0439 \u0443\u0440\u043b \u0432\u044b\u0431\u0440\u0430\u043d \u043f\u043e\u0442\u043e\u043c\u0443, \u0447\u0442\u043e \u0431\u044b \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u044c \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 papi \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u043d\u0430 1 \u0434\u043e\u043c\u0435\u043d\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438."),(0,p.kt)("p",null,"\u0414\u043b\u044f \u043f\u0440\u0438\u043c\u0435\u0440\u0430 \u0432\u044b\u0448\u0435 \u0441 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0440\u043e\u0443\u0442\u0430, \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u0443\u0440\u043b \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u0442\u0430\u043a: ",(0,p.kt)("inlineCode",{parentName:"p"},"/${appInfo.appName}/papi/test")," \u0433\u0434\u0435 appName \u044d\u0442\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0435 \u0432 ",(0,p.kt)("inlineCode",{parentName:"p"},"createApp")),(0,p.kt)("p",null,"\u0427\u0442\u043e \u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,p.kt)("inlineCode",{parentName:"p"},"PAPI_SERVICE")," \u0438\u0437 \u043c\u043e\u0434\u0443\u043b\u044f ",(0,p.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")," \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0435\u0442 http \u0437\u0430\u043f\u0440\u043e\u0441 \u043a papi \u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u044b\u0437\u043e\u0432\u0435\u0442 \u0444\u0443\u043d\u043a\u0446\u0438\u044e handler"),(0,p.kt)("h3",{id:"\u043a\u0430\u043a-\u043c\u043e\u0436\u043d\u043e-\u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c-\u0434\u0430\u043d\u043d\u044b\u0435-\u0441-di-\u0432-papi-\u0440\u043e\u0443\u0442\u0430\u0445"},"\u041a\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u0441 DI \u0432 papi \u0440\u043e\u0443\u0442\u0430\u0445"),(0,p.kt)("p",null,"\u0414\u043b\u044f papi-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430 \u0435\u0441\u0442\u044c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u0434\u0430\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442\u0441\u044f \u0435\u043c\u0443 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 di-container \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u043a ",(0,p.kt)("inlineCode",{parentName:"p"},"SIGNLETON")," \u0442\u0430\u043a \u0438 ",(0,p.kt)("inlineCode",{parentName:"p"},"REQUEST")," \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module, provide } from '@tramvai/core';\nimport { CREATE_CACHE_TOKEN } from '@tramvai/module-common';\nimport { HTTP_CLIENT } from '@tramvai/module-http-client';\nimport { SERVER_MODULE_PAPI_PUBLIC_ROUTE } from '@tramvai/module-server';\nimport { createPapiMethod } from '@tramvai/papi';\n\n@Module({\n  providers: [\n    provide({\n      provide: SERVER_MODULE_PAPI_PUBLIC_ROUTE,\n      multi: true,\n      useFactory: ({ createCache }) => {\n        const cache = createCache(); // cache \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u043e\u0431\u0449\u0438\u0439 \u0434\u043b\u044f \u0432\u0441\u0435\u0437 \u0432\u044b\u0437\u043e\u0432\u043e\u0432 handler, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c \u0435\u0433\u043e \u0437\u0430 \u043f\u0440\u0435\u0434\u0435\u043b\u0435\u0430\u043c\u0438 createPapiMethod\n\n        return createPapiMethod({\n          path: '/my/papi',\n          method: 'post',\n          async handler({ httpClient }) {\n            // \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0442\u043e, \u0447\u0442\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u043b\u0438 \u0432 deps \u0438\u0437 createPapiMethod\n            if (cache.has('test')) {\n              return 'test';\n            }\n\n            const { payload } = await httpClient.get('fake');\n            return payload;\n          },\n          deps: {\n            httpClient: HTTP_CLIENT, // \u044d\u0442\u0443 \u0436\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u043d\u0430\u0434\u043e \u043f\u0435\u0440\u0435\u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u0438 \u043e\u043d\u0438 \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u044b\n          },\n        });\n      },\n      deps: {\n        createCache: CREATE_CACHE_TOKEN, // \u044d\u0442\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044c \u0438\u0437 \u0440\u0443\u0442\u043e\u0432\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u0439\u043d\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0430\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0430 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437\n      },\n    }),\n  ],\n})\nexport class PapiTestModule {}\n")),(0,p.kt)("h3",{id:"\u043a\u0430\u043a-\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c-\u043d\u043e\u0432\u044b\u0439-papi-\u0440\u043e\u0443\u0442-\u0432-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"},"\u041a\u0430\u043a \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0439 papi \u0440\u043e\u0443\u0442 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,p.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u0432\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0440\u043e\u0443\u0442\u043e\u0432. 1 - \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044f\u0441\u044c \u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435, 2 - \u0437\u0430\u0434\u0430\u043d\u0438\u0435 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u043e\u0432"),(0,p.kt)("h4",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-file-api-\u043f\u043e\u0434\u0445\u043e\u0434"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f file api \u043f\u043e\u0434\u0445\u043e\u0434"),(0,p.kt)("p",null,"\u0421\u0430\u043c\u044b\u0439 \u043f\u0440\u043e\u0441\u0442\u043e\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0441\u043e\u0437\u0434\u0430\u0442\u044c PAPI \u0440\u043e\u0443\u0442, \u044d\u0442\u043e \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0432 \u043a\u043e\u0440\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,p.kt)("inlineCode",{parentName:"p"},"papi")," \u0432 \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u044c TS \u0444\u0430\u0439\u043b\u044b \u0441 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c\u0438. \u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u043e\u0432 \u0431\u0443\u0434\u0435\u0442 \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0443\u0440\u043b\u043e\u043c \u0434\u043e \u0440\u043e\u0443\u0442\u0430."),(0,p.kt)("p",null,"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: \u043c\u044b \u0445\u043e\u0442\u0438\u043c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u044b\u0439 papi \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0447\u0438\u0442\u0430\u0435\u0442 body \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0441\u0443\u043c\u043c\u0438\u0440\u0443\u0435\u0442 \u043f\u0440\u0438\u0448\u0435\u0434\u0448\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0435\u043c \u0444\u0430\u0439\u043b /papi/getSum.ts \u0441 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u044b\u043c:"),(0,p.kt)("p",null,(0,p.kt)("details",null,(0,p.kt)("summary",null,"\u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 getSum.ts"),(0,p.kt)("p",null,(0,p.kt)("pre",{parentName:"p"},(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Request, Response } from \'@tramvai/papi\';\nimport { CREATE_CACHE_TOKEN } from \'@tramvai/module-common\';\n\n// \u0432 tramvai.json \u043c\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e \u0441 \u0444\u0430\u0439\u043b\u043e\u0432\u044b\u043c \u0430\u043f\u0438\n//       "commands": {\n//         "build": {\n//           "options": {\n//             "server": "server-add-file-api/index.ts",\n//             "serverApiDir": "server-add-file-api/papi"\n//           }\n//         }\n//       }\n// \u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u043a\u0430\u0436\u0434\u044b\u0439 \u0444\u0430\u0439\u043b \u0432 \u044d\u0442\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u043c \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u0443\u0440\u043b\u0430 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0438\u043c\u0435\u043d\u0438 \u0441\u0430\u043c\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430\n// /${appName}/papi/${fileName} \u0442.\u0435. \u0434\u043b\u044f \u0442\u0435\u043a\u0443\u0448\u0435\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0443\u0440\u043b \u0431\u0443\u0434\u0435\u0442 /server/papi/getSum\n\n// \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e rootDeps \u043c\u044b \u043c\u043e\u0436\u0435\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437 \u0440\u0443\u0442\u043e\u0432\u043e\u0433\u043e DI \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435\n// \u044d\u0442\u0438 \u0437\u0430\u043f\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0431\u0443\u0434\u0443\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u044b \u0432 handler \u0442\u0440\u0435\u0442\u044c\u0438\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c\nexport const rootDeps = {\n  createCache: CREATE_CACHE_TOKEN,\n};\n\n// \u0435\u0441\u043b\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u043d\u0430\u0434\u043e \u043a\u0430\u043a-\u0442\u043e \u0438\u0437\u043d\u0430\u0447\u0430\u043b\u044c\u043d\u043e \u043f\u0440\u043e\u0438\u043d\u0438\u0446\u0438\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\n// mapDeps \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d \u043e\u0434\u0438\u043d \u0440\u0430\u0437, \u043f\u043e\u043b\u0443\u0447\u0438\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0438\u0437 deps, \u0438\n// \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u044d\u0442\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u0440\u0435\u0442\u044c\u0435\u0433\u043e \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430 \u0432 handler\nexport const mapRootDeps = ({ createCache }: typeof rootDeps) => {\n  return {\n    cache: createCache(\'memory\'),\n  };\n};\n\n// handler \u044d\u0442\u043e \u043d\u0430\u0448 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0437\u0430\u043f\u0440\u043e\u0441\n// \u0442\u043e\u0436\u0435 \u0441\u0430\u043c\u043e\u0435 \u0431\u0443\u0434\u0435\u0442 \u0435\u0441\u043b\u0438 \u0441\u0434\u0435\u043b\u0430\u0442\u044c export default\nexport const handler = (req: Request, res: Response, { cache }: ReturnType<typeof mapRootDeps>) => {\n  const {\n    body: { a, b },\n    method,\n  } = req;\n\n  if (method !== \'POST\') {\n    throw new Error(\'only post methods\');\n  }\n\n  if (!a || !b) {\n    return {\n      error: true,\n      message: \'body parameters a and b should be set\',\n    };\n  }\n\n  const key = `${a},${b}`;\n\n  if (cache.has(key)) {\n    return { error: false, fromCache: true, result: cache.get(key) };\n  }\n\n  const result = +a + +b;\n\n  cache.set(key, result);\n\n  return { error: false, fromCache: false, result };\n};\n\n'))))),(0,p.kt)("p",null,"\u042d\u0442\u043e\u0442 \u0444\u0430\u0439\u043b \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e papi \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043b\u0438\u0431\u043e \u0432\u044b\u0437\u0432\u0430\u0432 \u0443\u0440\u043b ",(0,p.kt)("inlineCode",{parentName:"p"},"/${appName}/papi/getSum")),(0,p.kt)("h4",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f-\u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u044b"),(0,p.kt)("p",null,"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c multi \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440 ",(0,p.kt)("inlineCode",{parentName:"p"},"SERVER_MODULE_PAPI_PUBLIC_ROUTE")," \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u044b\u0435 papi \u0440\u043e\u0443\u0442\u044b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createPapiMethod } from '@tramvai/papi';\nimport { SERVER_MODULE_PAPI_PUBLIC_ROUTE } from '@tramvai/tokens-server';\nimport { provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: SERVER_MODULE_PAPI_PUBLIC_ROUTE,\n      multi: true,\n      useValue: createPapiMethod({\n        method: 'get', // \u043c\u0435\u0442\u043e\u0434, \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c post, all \u0438 \u0442\u0430\u043a \u0434\u0430\u043b\u0435\u0435\n        path: '/test', // \u043f\u0443\u0442\u044c \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u043c\u0443 \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0440\u043e\u0443\u0442\n        async handler(req, res): Promise<any> {\n          // \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c\u0441\u044f, \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u0434\u0443\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043d\u0430 \u0443\u0440\u043b\n          return new Promise({ test: true });\n        },\n      }),\n    }),\n  ],\n})\nexport class PapiTestModule {}\n")),(0,p.kt)("p",null,"\u0418 \u043f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0440\u043e\u0443\u0442 test"))}m.isMDXComponent=!0}}]);