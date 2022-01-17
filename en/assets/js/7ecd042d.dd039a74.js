"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2725],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,h=s["".concat(c,".").concat(m)]||s[m]||d[m]||r;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},9332:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>s});var a=t(3117),o=t(102),r=(t(7294),t(3905)),i=["components"],l={id:"how-create-bundle",title:"How to create a bundle?"},c=void 0,p={unversionedId:"how-to/how-create-bundle",id:"how-to/how-create-bundle",title:"How to create a bundle?",description:"Bundle \u2014 is a collection of resources for pages: components, actions, stocks.",source:"@site/tmp-docs/how-to/how-create-bundle.md",sourceDirName:"how-to",slug:"/how-to/how-create-bundle",permalink:"/en/docs/how-to/how-create-bundle",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/how-create-bundle.md",tags:[],version:"current",frontMatter:{id:"how-create-bundle",title:"How to create a bundle?"},sidebar:"docs",previous:{title:"How to create a module?",permalink:"/en/docs/how-to/how-create-module"},next:{title:"\u041a\u0430\u043a \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u044d\u043a\u0448\u0435\u043d?",permalink:"/en/docs/how-to/how-create-action"}},u=[{value:"Creating a bundle",id:"creating-a-bundle",children:[],level:3},{value:"Adding components",id:"adding-components",children:[],level:3},{value:"Connecting in the application",id:"connecting-in-the-application",children:[],level:3},{value:"Defaul bundle",id:"defaul-bundle",children:[],level:2}],d={toc:u};function s(e){var n=e.components,t=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Bundle \u2014 is a collection of resources for pages: components, actions, stocks.\nEach route is associated with some bundle it needs to display."),(0,r.kt)("p",null,"Let's use a case study: we have a new section on our site, and we want to create a new bundle with separate pages."),(0,r.kt)("p",null,"Creating and connecting the bundle consists of three steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creating a bundle"),(0,r.kt)("li",{parentName:"ol"},"Adding components"),(0,r.kt)("li",{parentName:"ol"},"Connecting in the application")),(0,r.kt)("h3",{id:"creating-a-bundle"},"Creating a bundle"),(0,r.kt)("p",null,"We use the ",(0,r.kt)("inlineCode",{parentName:"p"},"createBundle")," method and create an empty bundle, in which we write the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field, which is the unique identifier of the bundle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core';\n\nexport default createBundle({\n  name: 'coin',\n  components: {},\n});\n")),(0,r.kt)("h3",{id:"adding-components"},"Adding components"),(0,r.kt)("p",null,"The next step is to add the components that will be available in this bundle.\nWe recommended to use ",(0,r.kt)("inlineCode",{parentName:"p"},"lazy")," and dynamic import page components for effective code splitting.\nThe key is the identifier of the component, this identifier can be bound to the router:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core';\nimport { lazy } from '@tramvai/react';\n\nconst MainPage = lazy(() => import('../pages/main'));\nimport Layout from '../layouts';\n\n\nexport default createBundle({\n  name: 'coin',\n  components: {\n    'page/coin-main': MainPage,\n    'layout/coin-layout': Layout,\n  },\n});\n")),(0,r.kt)("p",null,"You can register any components for different purposes.\nFor example, we can register components of modal windows, popups and so on in the bundle.\nAll these components will be available in the ",(0,r.kt)("inlineCode",{parentName:"p"},"componentRegistry"),"."),(0,r.kt)("h3",{id:"connecting-in-the-application"},"Connecting in the application"),(0,r.kt)("p",null,"Now we have to register the bundle in the application. To do this we add to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles")," object of ",(0,r.kt)("inlineCode",{parentName:"p"},"createApp"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key"),": the identifier of the bundle. The last part must be the same as the bundle ID passed to ",(0,r.kt)("inlineCode",{parentName:"li"},"name"),", a function of the form ",(0,r.kt)("inlineCode",{parentName:"li"},"last('platform/coin'.split('/'))")," is used there, otherwise, there will be no loading of the bundle on the server side."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value"),": the function that should return the promise wrapped bundle object. Usually, asynchronous webpack chunks are used, but you can also write a custom loader of regular js files. The important thing is that the name of the chunk, must be synchronized with the ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," identifier")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\n\ncreateApp({\n  bundles: {\n    'platform/coin': () => import(/* webpackChunkName: \"coin\" */ './bundles/coin'),\n  },\n});\n")),(0,r.kt)("p",null,"After that, we will have a bundle available in the application and after downloading it, the linked components will be available. Then we can use these components in routing"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/docs/references/tramvai/create-bundle"},"Complete documentation about createBundle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/en/docs/references/tramvai/create-app"},"Complete documentation about createApp"))),(0,r.kt)("h2",{id:"defaul-bundle"},"Defaul bundle"),(0,r.kt)("p",null,"The default bundle allows you to handle all (created via ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterModule.forRoot"),") urls for which no bundle is specifically set.\nIt is done like this:"),(0,r.kt)("p",null,"Inside index.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\n\ncreateApp({\n  name: 'myApp',\n  modules: [\n    // ...\n  ],\n  providers: [\n    // ...\n  ],\n  bundles: {\n    mainDefault: () => import(/* webpackChunkName: \"mainDefault\" */ './bundles/mainDefault'),\n  },\n});\n")),(0,r.kt)("p",null,"In file ",(0,r.kt)("inlineCode",{parentName:"p"},"bundles/mainDefault.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createBundle } from '@tramvai/core'\n\nimport { MainPage } from '../layers/pages/MainPage'\nimport { Layout } from '../layers/layout/Layout'\n\nexport default createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: MainPage,\n    layoutDefault: Layout,\n  },\n})\n")))}s.isMDXComponent=!0}}]);