"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4711:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>p});var a=n(3117),r=n(102),i=(n(7294),n(3905)),o=["components"],l={id:"overview",title:"Introduction"},s=void 0,c={unversionedId:"features/state/overview",id:"features/state/overview",title:"Introduction",description:"State is a library built into tramvai for managing application state.",source:"@site/tmp-docs/features/state/overview.md",sourceDirName:"features/state",slug:"/features/state/overview",permalink:"/en/docs/features/state/overview",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/overview.md",tags:[],version:"current",frontMatter:{id:"overview",title:"Introduction"},sidebar:"docs",previous:{title:"Static HTML Export",permalink:"/en/docs/features/static-html-export"},next:{title:"Tramvai integration",permalink:"/en/docs/features/state/tramvai-integration"}},u=[{value:"Peculiarities",id:"peculiarities",children:[],level:2},{value:"Basic concepts",id:"basic-concepts",children:[],level:2},{value:"Recommendations",id:"recommendations",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2},{value:"Explanation",id:"explanation",children:[{value:"schedule",id:"schedule",children:[],level:3}],level:2},{value:"How to",id:"how-to",children:[{value:"Basic example",id:"basic-example",children:[],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"State")," is a library built into ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," for managing application state."),(0,i.kt)("h2",{id:"peculiarities"},"Peculiarities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redux-like state manager"),(0,i.kt)("li",{parentName:"ul"},"Built-in library similar to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pauldijou/redux-act"},"redux-act")," to reduce boilerplate code"),(0,i.kt)("li",{parentName:"ul"},"Contains bindings to ",(0,i.kt)("inlineCode",{parentName:"li"},"react")," components such as ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector")),(0,i.kt)("li",{parentName:"ul"},"Dynamic initialization of reducers. You can register a reducer at any time or generate a new one."),(0,i.kt)("li",{parentName:"ul"},"Point subscriptions to changes in the states of reducers. When data changes, only the affected ",(0,i.kt)("inlineCode",{parentName:"li"},"connect")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector")," are recalculated, not everything."),(0,i.kt)("li",{parentName:"ul"},"Support for SSR mode.")),(0,i.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Store - A class that contains the state of all reducers, change subscriptions and is created for each client"),(0,i.kt)("li",{parentName:"ul"},"Reducers - entities in which we describe how data will be stored and transformed"),(0,i.kt)("li",{parentName:"ul"},"Events - events with which you can change the states of reducers"),(0,i.kt)("li",{parentName:"ul"},"Actions - functions that allow you to perform side effects and update data in the store. Similar to ",(0,i.kt)("inlineCode",{parentName:"li"},"redux-thunk"))),(0,i.kt)("h2",{id:"recommendations"},"Recommendations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You cannot mutate data in reducers. Otherwise, due to various optimizations, subscribers will not be notified about the changes."),(0,i.kt)("li",{parentName:"ul"},"Initialize reducers as early as possible and before using it. Otherwise, when calling ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch(userLoadInformation())"),", the reducer will not yet track events and will not receive data."),(0,i.kt)("li",{parentName:"ul"},"Do not store static data in stores. Since this data will be transferred from the server to the client, the data will be duplicated. Better to put in constants."),(0,i.kt)("li",{parentName:"ul"},"Break into small reducers. Otherwise, we have a huge reducer that contains a large amount of information and any changes will cause recalculations for a large number of components.")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save @tramvai/state\n")),(0,i.kt)("h2",{id:"explanation"},"Explanation"),(0,i.kt)("h3",{id:"schedule"},"schedule"),(0,i.kt)("p",null,"Some of the functions that deals with state (e.g. connect, useStoreSelector) will use some sort of batching (using requestAnimationFrame or SetTimeout) in browser. So any updates to state are not synchronous and happens after some time."),(0,i.kt)("p",null,"Most of the time this is not an issue or noticeable thing. But in tests that might be unexpected."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In order to take into account scheduling while testing use ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/test/test-jsdom#waitraf"},"waitRaf helper")," or ",(0,i.kt)("a",{parentName:"p",href:"/en/docs/references/test/test-unit#act"},"act from test-unit"))),(0,i.kt)("h2",{id:"how-to"},"How to"),(0,i.kt)("h3",{id:"basic-example"},"Basic example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createReducer, createEvent } from '@tramvai/state';\n\nexport const userLoadInformation = createEvent('user load information');\nexport const userAddInformation = createEvent('user add information');\n\nconst userReducer = createReducer('user', {\n  info: {},\n})\n  .on(userLoadInformation, (state, info) => ({ info }))\n  .on(userAddInformation, (state, { name, info }) => ({\n    ...state,\n    state: {\n      ...state.info,\n      [name]: info,\n    },\n  }));\n")))}p.isMDXComponent=!0}}]);