"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9568],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?o.createElement(f,l(l({ref:t},u),{},{components:r})):o.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6612:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>u,default:()=>d});var o=r(3117),n=r(102),a=(r(7294),r(3905)),l=["components"],i={id:"dev-tools",title:"DevTools"},s=void 0,c={unversionedId:"features/state/dev-tools",id:"features/state/dev-tools",title:"DevTools",description:"\u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f devtools \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:",source:"@site/tmp-docs/features/state/dev-tools.md",sourceDirName:"features/state",slug:"/features/state/dev-tools",permalink:"/docs/features/state/dev-tools",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/features/state/dev-tools.md",tags:[],version:"current",frontMatter:{id:"dev-tools",title:"DevTools"},sidebar:"docs",previous:{title:"React hooks",permalink:"/docs/features/state/hooks"},next:{title:"Papi introduction",permalink:"/docs/features/papi/introduction"}},u=[{value:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b",children:[],level:3},{value:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",id:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c",children:[],level:3},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f devtools \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435: ",(0,a.kt)("a",{parentName:"li",href:"https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd"},"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f Chrome")," \u0438\u043b\u0438 ",(0,a.kt)("a",{parentName:"li",href:"https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/"},"\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u0434\u043b\u044f FireFox")),(0,a.kt)("li",{parentName:"ul"},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u043d\u0430 ",(0,a.kt)("inlineCode",{parentName:"li"},"tramvai")," \u0438 \u043e\u0442\u043a\u0440\u044b\u0442\u044c \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 \u043a\u043b\u0438\u043a\u043e\u043c \u043d\u0430 \u0438\u043a\u043e\u043d\u043a\u0443 Redux devtools")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/7957859/18002950/aacb82fc-6b93-11e6-9ae9-609862c18302.png",alt:"Redux devtools"})),(0,a.kt)("h3",{id:"\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"},"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0414\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f redux dev tools, \u0430 \u043d\u0435 \u0432\u043a\u043b\u0430\u0434\u043a\u0443 \u0432 chrome developer tools, \u0442.\u043a. \u0438\u043d\u0430\u0447\u0435 \u043d\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u0442\u0441\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u044d\u043a\u0448\u043d\u043e\u0432 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zalmoxisus/redux-devtools-extension/issues/505"},"issue"),".")),(0,a.kt)("h3",{id:"\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"},"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"),(0,a.kt)("p",null,"\u0422\u0430\u043a \u043a\u0430\u043a \u0432\u0435\u0441\u044c \u0441\u0442\u0435\u0439\u0442 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0441\u043e \u0432\u0441\u0435\u043c\u0438 \u044d\u043a\u0448\u0435\u043d\u0430\u043c\u0438 \u0434\u043e\u0432\u043e\u043b\u044c\u043d\u043e \u0431\u043e\u043b\u044c\u0448\u043e\u0439, \u0442\u043e \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u044e\u0442\u0441\u044f \u043e\u0449\u0443\u0442\u0438\u043c\u044b\u0435 \u0442\u043e\u0440\u043c\u043e\u0437\u0430 \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u0434\u0435\u0432\u0442\u0443\u043b\u0437 \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043f\u0440\u044b\u0436\u043a\u043e\u0432 \u043f\u043e \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f\u043c\\\u0441\u043e\u0431\u044b\u0442\u0438\u044f\u043c \u0438 \u043f\u0440\u0438 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u043d\u0438\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u044d\u043a\u0448\u043d\u043e\u0432. \u041f\u043e\u044d\u0442\u043e\u043c\u0443:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043a\u0430\u0441\u0442\u043e\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u043d\u0438\u044f pickState \u0434\u043b\u044f \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0434\u0435\u0432\u0442\u0443\u043b\u0437\u0430\u0445."),(0,a.kt)("li",{parentName:"ol"},"\u0423\u0432\u0435\u043b\u0438\u0447\u044c\u0442\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430 latency (\u043f\u0435\u0440\u0435\u0434\u0430\u0435\u0442\u0441\u044f \u0432 connectViaExtension.connect), \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e \u0441\u0443\u0442\u0438 \u0434\u0435\u043b\u0430\u0435\u0442 debounce \u043d\u0430 \u043f\u043e\u0441\u044b\u043b\u043a\u0443 actions \u0432 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u0435 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#latency"},"docs"))),(0,a.kt)("h3",{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439-\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"},"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zalmoxisus/redux-devtools-extension"},"\u0420\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0438\u0439 \u0441 devtools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://egghead.io/lessons/javascript-getting-started-with-redux-dev-tools"},"Getting Started with Redux DevTools Extension "))))}d.isMDXComponent=!0}}]);