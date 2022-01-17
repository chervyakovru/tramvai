"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},255:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var r=n(3117),o=n(102),a=(n(7294),n(3905)),l=["components"],i={id:"hooks",title:"React hooks"},s=void 0,c={unversionedId:"features/state/hooks",id:"features/state/hooks",title:"React hooks",description:"useActions",source:"@site/tmp-docs/features/state/hooks.md",sourceDirName:"features/state",slug:"/features/state/hooks",permalink:"/docs/features/state/hooks",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/hooks.md",tags:[],version:"current",frontMatter:{id:"hooks",title:"React hooks"},sidebar:"docs",previous:{title:"Create event",permalink:"/docs/features/state/create-event"},next:{title:"DevTools",permalink:"/docs/features/state/dev-tools"}},u=[{value:"useActions",id:"useactions",children:[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",children:[],level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:[],level:3}],level:2},{value:"useSelector()",id:"useselector",children:[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-1",children:[],level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-1",children:[],level:3},{value:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438",children:[],level:3}],level:2},{value:"useStoreSelector",id:"usestoreselector",children:[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-2",children:[],level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-2",children:[],level:3},{value:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438",id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438-1",children:[],level:3}],level:2},{value:"useStore",id:"usestore",children:[{value:"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441",id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-3",children:[],level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-3",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"useactions"},"useActions"),(0,a.kt)("p",null,"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0435 ",(0,a.kt)("a",{parentName:"p",href:"/docs/concepts/action"},"\u044d\u043a\u0448\u0435\u043d\u044b")," \u0432 React \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445"),(0,a.kt)("h3",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"actions")," - \u043e\u0434\u0438\u043d \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432 \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0445 \u044d\u043a\u0448\u0435\u043d\u043e\u0432")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0415\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0432 ",(0,a.kt)("inlineCode",{parentName:"p"},"useActions")," \u043c\u0430\u0441\u0441\u0438\u0432, \u0434\u043b\u044f \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"as const")," - ",(0,a.kt)("inlineCode",{parentName:"p"},"useActions([] as const)"))),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useActions } from '@tramvai/state';\nimport { loadUserAction, getInformationAction, setInformationAction } from './actions';\n\nexport const Component = () => {\n  // \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u044d\u043a\u0448\u0435\u043d, \u0442\u0438\u043f payload \u0434\u043b\u044f loadUser \u0432\u044b\u0432\u043e\u0434\u0438\u0442\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\n  const loadUser = useActions(loadUserAction);\n\n  // \u0435\u0441\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u044d\u043a\u0448\u0435\u043d\u043e\u0432, `as const` \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432\n  const [getInformation, setInformation] = useActions([\n    getInformationAction,\n    setInformationAction,\n  ] as const);\n\n  return (\n    <div>\n      <div onClick={loadUser}>load user</div>\n      <div onClick={getInformation}>get information</div>\n      <div onClick={() => setInformation({ user: 1 })}>set information</div>\n    </div>\n  );\n};\n")),(0,a.kt)("h2",{id:"useselector"},"useSelector()"),(0,a.kt)("p",null,"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e \u0441\u0442\u043e\u0440\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445"),(0,a.kt)("h3",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-1"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stores: []")," - \u0441\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u043e\u0434\u043f\u0438\u0441\u0430\u043d \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440. \u0411\u0443\u0434\u0435\u0442 \u0432\u043b\u0438\u044f\u0442\u044c \u043d\u0430 \u0442\u043e, \u043a\u0430\u043a\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0441\u0442\u043e\u0440\u0430\u0445 \u0432\u044b\u0437\u043e\u0432\u0443\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selector: (state) => any")," - \u0441\u0430\u043c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440, \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043b\u044e\u0431\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0441\u0442\u043e\u0440\u043e\u0432 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0445 \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"stores"),". \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"equalityFn?: (cur, prev) => boolean")," - \u043d\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u044b\u0445 \u0438 \u043d\u043e\u0432\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430")),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-1"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0441\u0442\u043e\u0440\u0430, \u043c\u043e\u0436\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043c\u044f \u0441\u0442\u043e\u0440\u0430, \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u0441\u0442\u043e\u0440, \u0438\u043b\u0438 \u043e\u0431\u044a\u0435\u043a\u0442 \u0441 \u043e\u043f\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u0442\u043e\u0440\u043e\u043c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"'storeName'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"storeObject")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{ store: storeObject, optional: true }")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"{ store: 'storeName', optional: true }"))),(0,a.kt)("p",null,"\u041c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432 \u043a\u043b\u044e\u0447\u0435\u0439, \u0442\u043e\u0433\u0434\u0430 \u0434\u043b\u044f \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432 \u043b\u0443\u0447\u0448\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,a.kt)("inlineCode",{parentName:"p"},"as const"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"useSelector(['fooStoreName', barStoreObject] as const, ({ foo, bar }) => null)"),";")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useSelector } from '@tramvai/state';\n\nexport const Component = () => {\n  const isBrowser = useSelector('media', (state) => state.media.isBrowser);\n\n  return <div>{isBrowser ? <span>Browser</span> : <span>Desktop</span>}</div>;\n};\n")),(0,a.kt)("h3",{id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438"},"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0443\u043c\u0435\u043d\u044c\u0448\u0438\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u043e\u043a \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u044e\u0442\u0441\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0441 \u0442\u0435\u043c\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0440\u0430\u043d\u044c\u0448\u0435. \u0415\u0441\u043b\u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u043d\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u043b\u0438\u0441\u044c, \u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u0430\u043d."),(0,a.kt)("p",null,"\u041f\u043e \u044d\u0442\u043e\u0439 \u043f\u0440\u0438\u0447\u0438\u043d\u0435, \u0432 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430\u0445 \u043b\u0443\u0447\u0448\u0435 \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043d\u0435\u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043a\u0443\u0441\u043a\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0422\u043e\u0433\u0434\u0430 \u043c\u0435\u043d\u044c\u0448\u0435 \u0448\u0430\u043d\u0441, \u0447\u0442\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0441\u044f. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443: \u043d\u0430\u043c \u043d\u0443\u0436\u043d\u044b ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f, \u043c\u044b \u043f\u0438\u0448\u0435\u043c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"(state) => state.user")," \u0438 \u0442\u0435\u043f\u0435\u0440\u044c \u043b\u044e\u0431\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u0430 ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," \u0431\u0443\u0434\u0443\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442. \u041b\u0443\u0447\u0448\u0435, \u0435\u0441\u043b\u0438 \u043c\u044b \u0431\u0443\u0434\u0435\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"(state) => state.user.roles")," \u0432 \u0442\u0430\u043a\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043f\u0435\u0440\u0435\u0440\u0438\u0441\u043e\u0432\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0433\u0434\u0430, \u043a\u043e\u0433\u0434\u0430 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u0441\u044f ",(0,a.kt)("inlineCode",{parentName:"p"},"roles")," \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),(0,a.kt)("h2",{id:"usestoreselector"},"useStoreSelector"),(0,a.kt)("p",null,"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f \u0445\u0443\u043a\u0430 useSelector, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u0434\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0441\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 createReducer. \u0421\u0434\u0435\u043b\u0430\u043d \u0431\u044b\u043b \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0432\u044b\u0432\u043e\u0434\u0430 \u0442\u0438\u043f\u043e\u0432 \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u043e\u0432, \u0442\u0430\u043a \u043a\u0430\u043a \u0441\u0430\u043c useSelector \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u044d\u0442\u043e\u0433\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0438\u0437-\u0437\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0445 \u0438\u043c\u0435\u043d \u0441\u0442\u043e\u0440\u043e\u0432, \u0442\u043e\u043a\u0435\u043d\u043e\u0432 \u0438 \u043d\u0430\u0441\u043b\u0435\u0434\u043d\u0438\u043a\u043e\u0432 BaseStore"),(0,a.kt)("h3",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-2"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store: Reducer")," - \u0421\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 createReducer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"selector: (state) => any")," - \u0441\u0430\u043c \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440, \u044d\u0442\u043e \u0444\u0443\u043d\u043a\u0446\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u0437\u0432\u0430\u043d\u0430 \u043f\u0440\u0438 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043b\u044e\u0431\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u0445 \u0441\u0442\u043e\u0440\u0430, \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0432 ",(0,a.kt)("inlineCode",{parentName:"li"},"stores"),". \u0424\u0443\u043d\u043a\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435 \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0435")),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-2"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStoreSelector } from '@tramvai/state';\nimport { createReducer } from '@tramvai/state';\n\nconst myStore = createReducer('myStore', { id: '123' });\n\nexport const Component = () => {\n  const id = useStoreSelector((myStore, (state) => state.id)); // \u041a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0432\u044b\u0432\u0435\u0434\u0435\u0442\u0441\u044f \u0442\u0438\u043f id \u043a\u0430\u043a \"string\"\n\n  return <div>{id}</div>;\n};\n")),(0,a.kt)("h3",{id:"\u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438-1"},"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438"),(0,a.kt)("p",null,"\u0425\u0443\u043a \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u0435\u0440\u0442\u043a\u043e\u0439 \u043d\u0430\u0434 useSelector, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u044b. \u0421\u0430\u043c\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0441\u0435\u043b\u0435\u043a\u0442\u043e\u0440\u0430 \u0432\u043d\u0443\u0442\u0440\u0438 \u043c\u0435\u043c\u043e\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f"),(0,a.kt)("h2",{id:"usestore"},"useStore"),(0,a.kt)("p",null,"\u0425\u0443\u043a \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u0430."),(0,a.kt)("p",null,"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u044b\u0432\u043e\u0434\u0438\u0442 \u0442\u0438\u043f \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0435\u0440\u0435\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438 \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u0430"),(0,a.kt)("li",{parentName:"ul"},'\u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0440\u0435\u0434\u044c\u044e\u0441\u0435\u0440\u044b "\u043d\u0430 \u043b\u0435\u0442\u0443"')),(0,a.kt)("h3",{id:"\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441-3"},"\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store: Reducer")," - \u0421\u0442\u043e\u0440, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0439 \u0447\u0435\u0440\u0435\u0437 createReducer")),(0,a.kt)("h3",{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-3"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u0411\u0430\u0437\u043e\u0432\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useStore } from '@tramvai/state';\nimport { createReducer } from '@tramvai/state';\n\nconst userReducer = createReducer('user', { id: '123' });\n\nexport const Component = () => {\n  const { id } = useStore(userReducer);\n\n  return <div>{id}</div>;\n};\n")))}d.isMDXComponent=!0}}]);