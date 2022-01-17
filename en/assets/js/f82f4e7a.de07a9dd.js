"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9496],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),c=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(n),m=r,h=s["".concat(d,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8387:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>d,metadata:()=>c,toc:()=>p,default:()=>s});var o=n(3117),r=n(102),a=(n(7294),n(3905)),i=["components"],l={id:"how-create-module",title:"How to create a module?"},d=void 0,c={unversionedId:"how-to/how-create-module",id:"how-to/how-create-module",title:"How to create a module?",description:"Let's use a case study: we have the task of creating a module that, for each client, puts X-Frame-Options header",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/how-to/how-create-module.md",sourceDirName:"how-to",slug:"/how-to/how-create-module",permalink:"/en/docs/how-to/how-create-module",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-module.md",tags:[],version:"current",frontMatter:{id:"how-create-module",title:"How to create a module?"},sidebar:"docs",previous:{title:"Deployment",permalink:"/en/docs/guides/deploy"},next:{title:"How to create a bundle?",permalink:"/en/docs/how-to/how-create-bundle"}},p=[{value:"Create an empty module",id:"create-an-empty-module",children:[],level:3},{value:"Adding providers",id:"adding-providers",children:[],level:3},{value:"Include our new module in the application",id:"include-our-new-module-in-the-application",children:[],level:3},{value:"Summary",id:"summary",children:[],level:3}],u={toc:p};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's use a case study: we have the task of creating a module that, for each client, puts ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Frame-Options")," header"),(0,a.kt)("p",null,"In general, the creation of a module can be divided into several stages:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an empty module"),(0,a.kt)("li",{parentName:"ol"},"Add the necessary providers"),(0,a.kt)("li",{parentName:"ol"},"Include the module into the application")),(0,a.kt)("h3",{id:"create-an-empty-module"},"Create an empty module"),(0,a.kt)("p",null,"We create a basic module, to do this we create an empty class ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")," and connect the decorator ",(0,a.kt)("inlineCode",{parentName:"p"},"Module")," which is required for modules and in which we will add integrations with the application."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module } from '@tramvai/core';\n\n@Module({\n  providers: [],\n})\nexport class SecurityModule {}\n")),(0,a.kt)("p",null,"The module can already be plugged into the application, but it won't do anything."),(0,a.kt)("h3",{id:"adding-providers"},"Adding providers"),(0,a.kt)("p",null,"To do this we need to add providers in the ",(0,a.kt)("inlineCode",{parentName:"p"},"providers")," field. We had the task to add the headers, for that we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"commandLineListTokens")," to perform actions for each client and we will use ",(0,a.kt)("inlineCode",{parentName:"p"},"responseManager")," to which we can write the information about the headers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module, commandLineListTokens, RESPONSE_MANAGER_TOKEN, provide } from '@tramvai/core';\n\n@Module({\n  providers: [\n    provide({\n      provide: commandLineListTokens.resolvePageDeps,\n      multi: true,\n      useFactory: ({ responseManager }: { responseManager: typeof RESPONSE_MANAGER_TOKEN }) =>\n        function securityHeader() {\n          responseManager.setHeader('X-Frame-Options', 'sameorigin');\n        },\n      deps: {\n        responseManager: RESPONSE_MANAGER_TOKEN,\n      },\n    }),\n  ],\n})\nexport class SecurityModule {}\n")),(0,a.kt)("p",null,"We have implemented a new multi-provider that has dependencies and is created through ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory")),(0,a.kt)("p",null,"After plugging the module into the application, for each client the ",(0,a.kt)("inlineCode",{parentName:"p"},"useFactory")," function will be executed first with the ",(0,a.kt)("inlineCode",{parentName:"p"},"deps")," passed and then the ",(0,a.kt)("inlineCode",{parentName:"p"},"securityHeader")," function will be called, in which we will write the data into the obtained dependency and thus fulfill our goal."),(0,a.kt)("h3",{id:"include-our-new-module-in-the-application"},"Include our new module in the application"),(0,a.kt)("p",null,"Now it remains to plug the module into the application so that it can add its implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { SecurityModule } from '@tramvai/module-security';\n\ncreateApp({\n  modules: [SecurityModule],\n});\n")),(0,a.kt)("p",null,"We can add the module not only to the application, but also to another module. To do this, we need to pass in the ",(0,a.kt)("inlineCode",{parentName:"p"},"imports")," block and then when the ",(0,a.kt)("inlineCode",{parentName:"p"},"MyCommonModule")," is connected, the ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")," will also be automatically connected"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Module } from '@tramvai/core';\nimport { SecurityModule } from '@tramvai/module-security';\n\n@Module({\n  imports: [SecurityModule],\n  providers: [],\n})\nexport class MyCommonModule {}\n")),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityModule")," was created, which will be called for each client and will add the necessary headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/concepts/module"},"Documentation about modules")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/references/tramvai/create-app"},"Documentation about createApp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/en/docs/concepts/di"},"Documentation about DI"))))}s.isMDXComponent=!0}}]);