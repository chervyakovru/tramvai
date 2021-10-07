(self.webpackChunk=self.webpackChunk||[]).push([[5730],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5852:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>l,metadata:()=>s,toc:()=>m,default:()=>p});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=["components"],c={id:"actions-execution",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445"},l=void 0,s={unversionedId:"how-to/actions-execution",id:"how-to/actions-execution",isDocsHomePage:!1,title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445",description:"\u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043a\u0448\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0432 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c, \u0431\u0430\u043d\u0434\u043b\u0430\u043c, \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u044d\u0442\u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 \u042d\u043a\u0448\u0435\u043d. \u0422\u0430\u043a\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438.",source:"@site/tmp-docs/how-to/actions-execution.md",sourceDirName:"how-to",slug:"/how-to/actions-execution",permalink:"/en/docs/how-to/actions-execution",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/how-to/actions-execution.md",version:"current",frontMatter:{id:"actions-execution",title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043d\u0430 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445"},sidebar:"docs",previous:{title:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0443\u0441\u043b\u043e\u0432\u0438\u0439",permalink:"/en/docs/how-to/actions-conditions"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 @tramvai/react-query",permalink:"/en/docs/how-to/react-query-usage"}},m=[{value:"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u043a-\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435",children:[]},{value:"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043a \u0431\u0430\u043d\u0434\u043b\u0443",id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u043a-\u0431\u0430\u043d\u0434\u043b\u0443",children:[]},{value:"\u041e\u0431\u0449\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",id:"\u043e\u0431\u0449\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u044b-\u0434\u043b\u044f-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f",children:[]}],u={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u041a\u0430\u0436\u0434\u044b\u0439 \u044d\u043a\u0448\u0435\u043d \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0432 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u043c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u043c, \u0431\u0430\u043d\u0434\u043b\u0430\u043c, \u0438\u043b\u0438 \u0441\u0430\u043c\u043e\u043c\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e, \u044d\u0442\u043e\u0442 \u043c\u0435\u0445\u0430\u043d\u0438\u0437\u043c \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/concepts/action"},"\u042d\u043a\u0448\u0435\u043d"),". \u0422\u0430\u043a\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438."),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u043a-\u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439-\u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"},"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u0438\u043a\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e ",(0,o.kt)("inlineCode",{parentName:"p"},"actions")," \u0443 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 - \u0441\u0442\u0440\u0430\u043d\u0438\u0446:"),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d\u044b"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { ACTION_EXECUTION_LIMIT } from '../constants';\nimport { set } from '../store';\n\nexport const pageInLimit = createAction({\n  name: 'pageInLimit',\n  fn: async (context) => {\n    console.log('execute pageInLimit');\n    await context.dispatch(set({ name: 'pageInLimit', value: false }));\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT / 2));\n    await context.dispatch(set({ name: 'pageInLimit', value: true }));\n  },\n});\n\nexport const pageOutLimit = createAction({\n  name: 'pageOutLimit',\n  fn: async (context) => {\n    console.log('execute pageOutLimit');\n    await context.dispatch(set({ name: 'pageOutLimit', value: false }));\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT * 2));\n    await context.dispatch(set({ name: 'pageOutLimit', value: true }));\n  },\n});\n\n"))))),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0438\u0445 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import reduceObj from '@tinkoff/utils/object/reduce';\nimport React from 'react';\nimport { useSelector } from '@tramvai/state';\nimport { store } from '../store';\nimport { pageInLimit, pageOutLimit } from '../actions/page';\n\nexport function Page() {\n  const state = useSelector(store, (x) => x.actionTest);\n\n  return (\n    <div>\n      {reduceObj(\n        (acc, v, k) => {\n          return acc.concat(\n            <div>\n              {k} = {v.toString()}\n            </div>\n          );\n        },\n        [],\n        state\n      )}\n    </div>\n  );\n}\n\n// \u044d\u043a\u0448\u0435\u043d\u044b \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0442\u044c \u043a\u0430\u043a \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u043e\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e page-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 - \u0442\u043e\u0433\u0434\u0430 \u044d\u043a\u0448\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0435 \u043d\u0430\n// \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0433\u0434\u0435 \u0443\u043a\u0430\u0437\u0430\u043d \u044d\u0442\u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u044b\u0439 pageComponent\nPage.actions = [pageInLimit, pageOutLimit];\n\n"))))),(0,o.kt)("h3",{id:"\u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430-\u044d\u043a\u0448\u0435\u043d\u043e\u0432-\u043a-\u0431\u0430\u043d\u0434\u043b\u0443"},"\u041f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043a \u0431\u0430\u043d\u0434\u043b\u0443"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/en/docs/concepts/bundle"},"\u0411\u0430\u043d\u0434\u043b\u044b")," \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u043a \u043d\u0438\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u0442\u044c \u044d\u043a\u0448\u0435\u043d\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0431\u0430\u043d\u0434\u043b\u0430:"),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d\u044b"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { ACTION_EXECUTION_LIMIT } from '../constants';\nimport { set } from '../store';\n\nexport const bundleInLimit = createAction({\n  name: 'bundleInLimit',\n  fn: async (context) => {\n    console.log('execute bundleInLimit');\n    await context.dispatch(set({ name: 'bundleInLimit', value: false }));\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT / 2));\n    await context.dispatch(set({ name: 'bundleInLimit', value: true }));\n  },\n});\n\nexport const bundleOutLimit = createAction({\n  name: 'bundleOutLimit',\n  fn: async (context) => {\n    console.log('execute bundleOutLimit');\n    await context.dispatch(set({ name: 'bundleOutLimit', value: false }));\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT * 2));\n    await context.dispatch(set({ name: 'bundleOutLimit', value: true }));\n  },\n});\n\n"))))),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0438\u0445 \u043a \u0431\u0430\u043d\u0434\u043b\u0443"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createBundle } from '@tramvai/core';\nimport { store } from '../store';\nimport { bundleInLimit, bundleOutLimit } from '../actions/bundle';\nimport { Page } from '../components/Page';\n\nexport const mainDefault = createBundle({\n  name: 'mainDefault',\n  components: {\n    pageDefault: Page,\n  },\n  // \u0443\u043a\u0430\u0436\u0435\u043c \u043d\u0430\u0448 \u0441\u0442\u043e\u0440, \u0447\u0442\u043e\u0431\u044b \u043e\u043d \u0441\u0440\u0430\u0437\u0443 \u043f\u0440\u043e\u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043b\u0441\u044f \u0438 \u0431\u044b\u043b \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d \u043d\u0430 \u0441\u0432\u043e\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0434\u0438\u0441\u043f\u0430\u0442\u0447\u0430\n  reducers: [store],\n  // \u044d\u043a\u0448\u0435\u043d\u044b \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c \u0431\u0430\u043d\u0434\u043b\u0430 - \u0442\u043e\u0433\u0434\u0430 \u044d\u0442\u0438 \u044d\u043a\u0448\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u044d\u0442\u043e\u0433\u043e \u0431\u0430\u043d\u0434\u043b\u0430\n  actions: [bundleInLimit, bundleOutLimit],\n});\n\n"))))),(0,o.kt)("h2",{id:"\u043e\u0431\u0449\u0438\u0435-\u044d\u043a\u0448\u0435\u043d\u044b-\u0434\u043b\u044f-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},"\u041e\u0431\u0449\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u044b \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),(0,o.kt)("p",null,"\u042d\u043a\u0448\u0435\u043d\u044b, \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044b\u0435 \u043a ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/references/tramvai/create-app"},"\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"),", \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043d\u0430 \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430\u0445:"),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u0421\u043e\u0437\u0434\u0430\u0435\u043c \u044d\u043a\u0448\u0435\u043d\u044b"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createAction } from '@tramvai/core';\nimport { ACTION_EXECUTION_LIMIT } from '../constants';\nimport { set } from '../store';\n\nexport const globalInLimit = createAction({\n  name: 'globalInLimit',\n  fn: async (context) => {\n    console.log('execute globalInLimit');\n    await context.dispatch(set({ name: 'globalInLimit', value: false }));\n    // \u0441\u0442\u0430\u0432\u0438\u043c \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c \u043b\u0438\u043c\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u0442\u043e\u0447\u043d\u043e \u0443\u0441\u043f\u0435\u043b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438 ssr\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT / 2));\n    await context.dispatch(set({ name: 'globalInLimit', value: true }));\n  },\n});\n\nexport const globalOutLimit = createAction({\n  name: 'globalOutLimit',\n  fn: async (context) => {\n    console.log('execute globalOutLimit');\n    await context.dispatch(set({ name: 'globalOutLimit', value: false }));\n    // \u0441\u0442\u0430\u0432\u0438\u043c \u0437\u0430\u0434\u0435\u0440\u0436\u043a\u0443 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u044c\u0448\u0435, \u0447\u0435\u043c \u043b\u0438\u043c\u0438\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435, \u0447\u0442\u043e\u0431\u044b \u044d\u0442\u043e\u0442 \u044d\u043a\u0448\u0435\u043d \u0442\u043e\u0447\u043d\u043e \u043d\u0435 \u0443\u0441\u043f\u0435\u043b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c\u0441\u044f \u043f\u0440\u0438 ssr\n    await new Promise((res) => setTimeout(res, ACTION_EXECUTION_LIMIT * 2));\n    await context.dispatch(set({ name: 'globalOutLimit', value: true }));\n  },\n});\n\n"))))),(0,o.kt)("p",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u0438\u0445 \u043a \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044e"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"p"},(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createApp, provide } from '@tramvai/core';\nimport { ACTION_EXECUTION_LIMIT } from './constants';\nimport { modules } from '../common';\nimport { globalInLimit, globalOutLimit } from './actions/global';\nimport { mainDefault } from './bundles/mainDefault';\n\ncreateApp({\n  name: 'actions-execution',\n  modules: [...modules],\n  providers: [\n    provide({\n      // \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u043c\u043e\u0436\u043d\u043e \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u043b\u0438\u043c\u0438\u0442 \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u044d\u043a\u0448\u0435\u043d\u043e\u0432 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0435 (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e 500\u043c\u0441)\n      provide: 'limitActionGlobalTimeRun',\n      useValue: ACTION_EXECUTION_LIMIT,\n    }),\n  ],\n  // \u044d\u0442\u0430 \u044d\u043a\u0448\u0435\u043d\u044b \u0431\u0443\u0434\u0443\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\n  actions: [globalInLimit, globalOutLimit],\n  bundles: {\n    mainDefault: () => Promise.resolve({ default: mainDefault }),\n  },\n});\n\n"))))))}p.isMDXComponent=!0}}]);