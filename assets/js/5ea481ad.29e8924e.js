"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8699],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=d(n),u=i,h=m["".concat(l,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5298:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>d,toc:()=>s,default:()=>m});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=["components"],p={id:"create-http-client",title:"Create HTTP client"},l=void 0,d={unversionedId:"tutorials/pokedex-app/create-http-client",id:"tutorials/pokedex-app/create-http-client",title:"Create HTTP client",description:"So far we are developing a very boring application.",source:"@site/tmp-docs/tutorials/pokedex-app/3-create-http-client.md",sourceDirName:"tutorials/pokedex-app",slug:"/tutorials/pokedex-app/create-http-client",permalink:"/docs/tutorials/pokedex-app/create-http-client",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/tutorials/pokedex-app/3-create-http-client.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"create-http-client",title:"Create HTTP client"},sidebar:"docs",previous:{title:"Add new page",permalink:"/docs/tutorials/pokedex-app/add-page"},next:{title:"Fetch data",permalink:"/docs/tutorials/pokedex-app/fetch-data"}},s=[],c={toc:s};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"So far we are developing a very boring application.\nTo display information about pokemon in our ",(0,r.kt)("inlineCode",{parentName:"p"},"Pokedex"),", we need to get data from the ",(0,r.kt)("inlineCode",{parentName:"p"},"pokeapi")," API.\nIn this lesson we will learn how to create API clients and work with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/di"},"Dependency Injection container"),"."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Inversion of Control, and Dependency Injection (DI) are hard enough concepts to understand if you're dealing with them for the first time.\nBut using DI makes our applications incredibly flexible, extensible and modular.\nThe DI in ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," is inspired by the dependency injection system in ",(0,r.kt)("a",{parentName:"p",href:"https://angular.io/guide/dependency-injection"},"Angular"),"."))),(0,r.kt)("p",null,"Module ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/modules/http-client"},"@tramvai/module-http-client")," provides a factory for creating HTTP clients."),(0,r.kt)("p",null,"Important point! ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," is built on the principle of ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/di"},"dependenciy injection"),", so the library does not export the factory directly, but adds it to the DI container of the application by a special ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/provider#tokens"},"token")," as a key.\nThe DI allows you to construct the application from modules as if they were separate LEGO blocks. "),(0,r.kt)("p",null,"\u231b Install the library ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"tramvai add @tramvai/module-http-client\n")),(0,r.kt)("p",null,"\u231b Connect ",(0,r.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")," into the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.ts"',title:'"index.ts"'},"import { HttpClientModule } from '@tramvai/module-http-client';\n\ncreateApp({\n  name: 'pokedex',\n  modules: [\n    ...modules,\n    // highlight-next-line\n    HttpClientModule,\n  ],\n  providers: [...providers],\n  actions: [...actions],\n  bundles: {...bundles},\n});\n")),(0,r.kt)("p",null,"Now we can create an API client specifically for ",(0,r.kt)("inlineCode",{parentName:"p"},"pokeapi"),", let's make it a separate ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/module"},"tramvai module")," right away to demonstrate module and DI capabilities."),(0,r.kt)("p",null,"\u231b Create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"shared/api/index.ts")," with an empty module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/api/index.ts"',title:'"shared/api/index.ts"'},"import { Module } from '@tramvai/core';\n\n@Module({\n  providers: [],\n})\nexport class PokeApiModule {}\n")),(0,r.kt)("p",null,"It is recommended to add base urls for different APIs to ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/modules/env"},"application env variables via DI")," - this is useful for testing and mocking, and is consistent with ",(0,r.kt)("a",{parentName:"p",href:"https://12factor.net/"},"12-factor application"),"."),(0,r.kt)("p",null,"\u231b Add support for the new env variable in ",(0,r.kt)("inlineCode",{parentName:"p"},"PokeApiModule")," with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ENV_USED_TOKEN")," token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/api/index.ts"',title:'"shared/api/index.ts"'},"// highlight-start\nimport { Module, provide } from '@tramvai/core';\nimport { ENV_USED_TOKEN } from '@tramvai/module-common';\n// highlight-end\n\n@Module({\n  providers: [\n    // highlight-start\n    provide({\n      provide: ENV_USED_TOKEN,\n      multi: true,\n      useValue: [\n        {\n          key: 'POKEAPI_BASE_URL',\n          optional: true,\n          // default value\n          value: 'https://pokeapi.co/api/v2/',\n        },\n      ],\n    }),\n    // highlight-end\n  ]\n})\nexport class PokeApiModule {}\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"value")," property we immediately added a default value.\nThis value can be overridden in the ",(0,r.kt)("inlineCode",{parentName:"p"},"env.development.js")," file when developing locally, or via environment variables when running the ",(0,r.kt)("inlineCode",{parentName:"p"},"tramvai")," application on the server."),(0,r.kt)("p",null,"To add a new ",(0,r.kt)("a",{parentName:"p",href:"/docs/concepts/provider"},"provider")," to the DI, in this case a new HTTP client, you need two things:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a token with the interface of the new HTTP client, with ",(0,r.kt)("a",{parentName:"li",href:"/docs/references/libs/http-client#httpclient"},"HttpClient")," as the interface"),(0,r.kt)("li",{parentName:"ul"},"Create provider with the implementation of this token, using the factory ",(0,r.kt)("inlineCode",{parentName:"li"},"HTTP_CLIENT_FACTORY"))),(0,r.kt)("p",null,"\u231b Create a token for the new HTTP client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/api/index.ts"',title:'"shared/api/index.ts"'},"// highlight-next-line\nimport { Module, provide, createToken } from '@tramvai/core';\nimport { ENV_USED_TOKEN } from '@tramvai/module-common';\n// highlight-start\nimport { HttpClient } from '@tramvai/module-http-client';\n\nexport const POKEAPI_HTTP_CLIENT = createToken<HttpClient>(\n  'pokeapi HTTP client'\n);\n// highlight-end\n\n@Module({\n  providers: [\n    provide({\n      provide: ENV_USED_TOKEN,\n      multi: true,\n      useValue: [\n        {\n          key: 'POKEAPI_BASE_URL',\n          optional: true,\n          value: 'https://pokeapi.co/api/v2/',\n        },\n      ],\n    }),\n  ]\n})\nexport class PokeApiModule {}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"POKEAPI_HTTP_CLIENT")," token can be used simultaneously as a key in the DI, and as an interface, with typeof - ",(0,r.kt)("inlineCode",{parentName:"p"},"typeof POKEAPI_HTTP_CLIENT")),(0,r.kt)("p",null,"\u231b Create a provider with an implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"POKEAPI_HTTP_CLIENT")," token:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="shared/api/index.ts"',title:'"shared/api/index.ts"'},"import { Module, provide, createToken } from '@tramvai/core';\n// highlight-next-line\nimport { ENV_USED_TOKEN, ENV_MANAGER_TOKEN } from '@tramvai/module-common';\n// highlight-next-line\nimport { HttpClient, HTTP_CLIENT_FACTORY } from '@tramvai/module-http-client';\n\nexport const POKEAPI_HTTP_CLIENT = createToken<HttpClient>('pokeapi HTTP client');\n\n@Module({\n  providers: [\n    // highlight-start\n    provide({\n      provide: POKEAPI_HTTP_CLIENT,\n      // what the useFactory call will return will be written to the DI,\n      // and the dependency types will be derived automatically from the deps\n      useFactory: ({ factory, envManager }) => {\n        return factory({\n          name: 'pokeapi',\n          // \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0443\u0440\u043b pokeapi \u0438\u0437 env \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439\n          baseUrl: envManager.get('POKEAPI_BASE_URL'),\n        });\n      },\n      // all dependencies from deps will be taken from DI and passed to useFactory\n      deps: {\n        factory: HTTP_CLIENT_FACTORY,\n        envManager: ENV_MANAGER_TOKEN,\n      },\n    }),\n    // highlight-end\n    provide({\n      provide: ENV_USED_TOKEN,\n      multi: true,\n      useValue: [\n        {\n          key: 'POKEAPI_BASE_URL',\n          optional: true,\n          value: 'https://pokeapi.co/api/v2/',\n        },\n      ],\n    }),\n  ]\n})\nexport class PokeApiModule {}\n")),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A unique instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"POKEAPI_HTTP_CLIENT")," will be created for each user request to the application, allowing you to centralized add user data to the request parameters, for example you can take the ",(0,r.kt)("inlineCode",{parentName:"p"},"User-Agent")," of the user and add it to the headers of all API requests.\nIn doing so, all these ",(0,r.kt)("inlineCode",{parentName:"p"},"POKEAPI_HTTP_CLIENT")," instances will have a shared in-memory cache.\nThis cache can be disabled, for example for integration tests, with the env variable ",(0,r.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_CACHE_DISABLED=true"),"."))),(0,r.kt)("p",null,"\u231b Connect ",(0,r.kt)("inlineCode",{parentName:"p"},"PokeApiModule")," into the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="index.ts"',title:'"index.ts"'},"import { HttpClientModule } from '@tramvai/module-http-client';\n// highlight-next-line\nimport { PokeApiModule } from '~shared/api';\n\ncreateApp({\n  name: 'pokedex',\n  modules: [\n    ...modules,\n    HttpClientModule,\n    // highlight-next-line\n    PokeApiModule,\n  ],\n  providers: [...providers],\n  actions: [...actions],\n  bundles: {...bundles},\n});\n")),(0,r.kt)("p",null,"Now we have a ready HTTP client that can be used in components, actions and other providers!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/tutorials/pokedex-app/fetch-data"},"Next lesson"))))}m.isMDXComponent=!0}}]);