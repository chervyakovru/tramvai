"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9898],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(f,p(p({ref:n},l),{},{components:t})):o.createElement(f,p({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,p=new Array(i);p[0]=u;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,p[1]=a;for(var s=2;s<i;s++)p[s]=t[s];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5119:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>c,metadata:()=>s,toc:()=>l,default:()=>u});var o=t(3117),r=t(102),i=(t(7294),t(3905)),p=["components"],a={id:"child-app-tokens",title:"child-app-tokens"},c=void 0,s={unversionedId:"references/tokens/child-app-tokens",id:"references/tokens/child-app-tokens",title:"child-app-tokens",description:"@inline src/index.ts",source:"@site/tmp-docs/references/tokens/child-app-tokens.md",sourceDirName:"references/tokens",slug:"/references/tokens/child-app-tokens",permalink:"/docs/references/tokens/child-app-tokens",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tokens/child-app-tokens.md",tags:[],version:"current",frontMatter:{id:"child-app-tokens",title:"child-app-tokens"},sidebar:"docs",previous:{title:"http-client-tokens",permalink:"/docs/references/tokens/http-client-tokens"},next:{title:"Base",permalink:"/docs/references/cli/base"}},l=[],d={toc:l};function u(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("pre",{parentName:"p"},(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createToken } from '@tinkoff/dippy';\nimport type { Action, Command } from '@tramvai/core';\nimport type { INITIAL_APP_STATE_TOKEN } from '@tramvai/tokens-common';\nimport type { ComponentType } from 'react';\nimport type {\n  ChildAppLoader,\n  ChildAppDiManager,\n  ChildAppPreloadManager,\n  ChildAppCommandLineRunner,\n  ChildAppRequestConfig,\n  WrapperProps,\n  RootStateSubscription,\n  ChildAppStateManager,\n  ChildAppFinalConfig,\n  ChildAppRenderManager,\n  ChildAppResolutionConfig,\n  ResolutionConfig,\n} from './types';\n\nexport * from './types';\n\nconst multiOptions = { multi: true };\n\n/**\n * @public\n * @description CommandLineRunner steps specific for child app\n */\nexport const commandLineListTokens = {\n  // section: client processing\n  customerStart: createToken<Command>('child-app customer_start', multiOptions), // \u0418\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430\n  resolveUserDeps: createToken<Command>('child-app resolve_user_deps', multiOptions), // \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0435\n  resolvePageDeps: createToken<Command>('child-app resolve_page_deps', multiOptions), // \u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0434\u043b\u044f \u0440\u043e\u0443\u0442\u0430\n\n  // section: clear data\n  clear: createToken<Command>('child-app clear', multiOptions), // \u041e\u0447\u0438\u0441\u0442\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445\n\n  // section: spa transitions\n  spaTransition: createToken<Command>('child-app spa_transition', multiOptions),\n};\n\n/**\n * @public\n * @description Contains child app configs that was used to figure out how to load child apps\n */\nexport const CHILD_APP_RESOLUTION_CONFIGS_TOKEN = createToken<ChildAppResolutionConfig[]>(\n  'child-app resolve configs'\n);\n\n/**\n * @public\n * @description async function to execute any preload action before any child-app starts execute\n */\nexport const CHILD_APP_PRELOAD_EXTERNAL_CONFIG_TOKEN = createToken<() => Promise<void>>(\n  'child-app preload external config'\n);\n\n/**\n * @public\n * @description Used to resolve resolution config for a specific child-app\n */\nexport const CHILD_APP_GET_RESOLUTION_CONFIG_TOKEN = createToken<\n  (config: ChildAppRequestConfig) => ResolutionConfig\n>('child-app get resolution config');\n\n/**\n * @public\n * @description Used to resolve external config with urls to external code entries\n */\nexport const CHILD_APP_RESOLVE_CONFIG_TOKEN = createToken<\n  (config: ChildAppRequestConfig) => ChildAppFinalConfig\n>('child-app resolve external config');\n\n/**\n * @public\n * @description Base url for external urls for child apps on client\n */\nexport const CHILD_APP_RESOLVE_BASE_URL_TOKEN = createToken<string>(\n  'child-app resolve external base url'\n);\n\n/**\n * @public\n * @description Allows to preload child app for the specific page\n */\nexport const CHILD_APP_PRELOAD_MANAGER_TOKEN = createToken<ChildAppPreloadManager>(\n  'child-app preload manager'\n);\n\n/**\n * @public\n * @description Contains child app config that was used to load current child app\n */\nexport const CHILD_APP_INTERNAL_CONFIG_TOKEN = createToken<ChildAppFinalConfig>(\n  'child-app current config'\n);\n\n/**\n * @public\n * @description Actions of child app\n */\nexport const CHILD_APP_INTERNAL_ACTION_TOKEN = createToken<Action>(\n  'child-app action',\n  multiOptions\n);\n\n/**\n * @public\n * @description Subscription on a root state updates\n */\nexport const CHILD_APP_INTERNAL_ROOT_STATE_SUBSCRIPTION_TOKEN = createToken<RootStateSubscription>(\n  'child-app root state subscription',\n  multiOptions\n);\n\n/**\n * @public\n * @description Allows to recreate token implementation the same way as in root di, but specific to child-app di\n */\nexport const CHILD_APP_INTERNAL_ROOT_DI_BORROW_TOKEN = createToken<any>(\n  'child-app root di borrow',\n  multiOptions\n);\n\n/**\n * @private\n * @description boolean flag indicating that current di if for a child-app\n */\nexport const IS_CHILD_APP_DI_TOKEN = createToken<boolean>('child-app isChildApp Di');\n\n/**\n * @private\n * @description Manages Singleton-Scope DIs for every child app\n */\nexport const CHILD_APP_SINGLETON_DI_MANAGER_TOKEN = createToken<ChildAppDiManager>(\n  'child-app singleton di manager'\n);\n\n/**\n * @private\n * @description Manages Request-Scope DIs for every child app\n */\nexport const CHILD_APP_DI_MANAGER_TOKEN = createToken<ChildAppDiManager>('child-app di manager');\n\n/**\n * @private\n * @description Bridge from React render to di providers for child apps\n */\nexport const CHILD_APP_RENDER_MANAGER_TOKEN = createToken<ChildAppRenderManager>(\n  'child-app render manager'\n);\n\n/**\n * @private\n * @description Manages state dehydration for child-app\n */\nexport const CHILD_APP_STATE_MANAGER_TOKEN = createToken<ChildAppStateManager>(\n  'child-app state manager'\n);\n\n/**\n * @private\n * @description Manages loading child-app resources from the external place\n */\nexport const CHILD_APP_LOADER_TOKEN = createToken<ChildAppLoader>('child-app loader');\n\n/**\n * @private\n * @description Implements CommandLineRunner for child apps\n */\nexport const CHILD_APP_COMMAND_LINE_RUNNER_TOKEN = createToken<ChildAppCommandLineRunner>(\n  'child-app command runner'\n);\n\n/**\n * @private\n * @description Stores the common server-dehydrated state for all of child apps\n */\nexport const CHILD_APP_COMMON_INITIAL_STATE_TOKEN = createToken<\n  Record<string, typeof INITIAL_APP_STATE_TOKEN>\n>('child-app initialAppState');\n\n/**\n * @private\n * @description Used as render function for a child app. Usually implemented as a wrapper over child app render itself with an additional logic for di and connections to root app\n */\nexport const CHILD_APP_INTERNAL_RENDER_TOKEN = createToken<ComponentType<WrapperProps<any>>>(\n  'child-app render'\n);\n\n"))))}u.isMDXComponent=!0}}]);