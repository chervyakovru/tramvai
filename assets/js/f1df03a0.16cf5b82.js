"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3287],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2999:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>c,toc:()=>m,default:()=>u});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"migrate",title:"@tramvai/tools-migrate"},s=void 0,c={unversionedId:"references/tools/migrate",id:"references/tools/migrate",title:"@tramvai/tools-migrate",description:"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u0435\u0439.",source:"@site/tmp-docs/references/tools/migrate.md",sourceDirName:"references/tools",slug:"/references/tools/migrate",permalink:"/docs/references/tools/migrate",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/migrate.md",tags:[],version:"current",frontMatter:{id:"migrate",title:"@tramvai/tools-migrate"},sidebar:"docs",previous:{title:"@tramvai/build",permalink:"/docs/references/tools/build"},next:{title:"@tramvai/tools-check-versions",permalink:"/docs/references/tools/check-versions"}},m=[{value:"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439",id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439",children:[],level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0439-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[],level:2},{value:"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438",children:[],level:2},{value:"How to",id:"how-to",children:[{value:"Write migration",id:"write-migration",children:[{value:"Transformation",id:"transformation",children:[],level:4}],level:3}],level:2}],p={toc:m};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u0423\u0442\u0438\u043b\u0438\u0442\u0430 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0442\u0440\u0430\u043c\u0432\u0430\u0439\u043d\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u0435\u0439."),(0,o.kt)("p",null,"\u041f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u0432 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u043c\u043e\u0434\u0443\u043b\u0435 \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,o.kt)("inlineCode",{parentName:"li"},"__migrations__")," \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0444\u0430\u0439\u043b\u044b \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439 \u0434\u043b\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"),(0,o.kt)("li",{parentName:"ul"},"\u043d\u0430\u0439\u0434\u0435\u043d\u043d\u044b\u0435 \u0438 \u0440\u0430\u043d\u0435\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f"),(0,o.kt)("li",{parentName:"ul"},"\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c \u0444\u0430\u0439\u043b\u044b 'package.json', 'tramvai.json' \u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0439 \u043a\u043e\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),(0,o.kt)("li",{parentName:"ul"},"\u043f\u043e\u0441\u043b\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b '.tramvai-migrate-applied.json' \u0432 \u043a\u043e\u0440\u0435\u043d\u044c \u043f\u0440\u043e\u0435\u043a\u0442\u0430"),(0,o.kt)("li",{parentName:"ul"},"\u0432\u0441\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u043f\u043e\u0441\u043b\u0435 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u0433\u0438\u0442 \u0438 \u043a\u043e\u043c\u0438\u0442\u044f\u0442\u0441\u044f \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u0430\u043a\u0435\u0442\u043e\u0432")),(0,o.kt)("h2",{id:"\u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439"},"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439"),(0,o.kt)("p",null,"\u0414\u043b\u044f \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0439 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f ",(0,o.kt)("inlineCode",{parentName:"p"},"SKIP_TRAMVAI_MIGRATIONS"),"."),(0,o.kt)("h2",{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u043d\u043e\u0432\u043e\u0439-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,o.kt)("p",null,"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn generate:migration")," \u043f\u043e\u0441\u043b\u0435 \u0447\u0435\u0433\u043e \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043c\u044f \u043f\u0430\u043a\u0435\u0442\u0430 \u0434\u043b\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u0438 \u0438\u043c\u044f \u043d\u043e\u0432\u043e\u0439 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438. \u0422\u0430\u043a\u0436\u0435 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u043f\u0430\u043a\u0435\u0442\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u0432 \u043f\u043e\u043b\u0435 ",(0,o.kt)("inlineCode",{parentName:"p"},"files")," \u043f\u0430\u043f\u043a\u0443 \u0441 \u0441\u043e\u0431\u0440\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u044f\u043c\u0438, \u0435\u0441\u043b\u0438 \u043e\u043d\u0438 \u043d\u0435 \u0431\u044b\u043b\u0438 \u0443\u043a\u0430\u0437\u0430\u043d\u044b \u0440\u0430\u043d\u0435\u0435:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"files": [\n    "lib",\n    "__migrations__"\n],\n')),(0,o.kt)("h2",{id:"\u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"},"\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u0438\u0433\u0440\u0430\u0446\u0438\u0438"),(0,o.kt)("p",null,"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u044e, \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0443\u044e \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0435 \u0430\u043f\u0438 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043c\u043e\u0436\u043d\u043e \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a\u043e\u0434\u0430 \u0438\u043b\u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u043e\u0432."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface Api {\n  packageJSON: PackageJSON; // \u043e\u0431\u044a\u0435\u043a\u0442-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u0440\u043d\u0435\u0432\u043e\u0433\u043e package.json\n  tramvaiJSON: TramvaiJSON; // \u043e\u0431\u044a\u0435\u043a\u0442-\u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 tramvai.json \u0438\u043b\u0438 platform.json\n  transform: (transformer: Transform, pathTransformer?: PathTransformer) => Promise<void>; // \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u044e\u0449\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044e-\u0442\u0440\u0430\u0441\u043d\u0444\u043e\u0440\u043c\u0435\u0440 \u0434\u043b\u044f jscodeshift \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044e-\u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0435\u0440 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u043e\u0432\n}\n")),(0,o.kt)("p",null,"\u0422\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebook/jscodeshift"},"jscodeshift")),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"write-migration"},"Write migration"),(0,o.kt)("h4",{id:"transformation"},"Transformation"),(0,o.kt)("p",null,"Rules:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Prefer to return ",(0,o.kt)("inlineCode",{parentName:"li"},"null | undefined")," or original source from the transform function in cases when migration doesn't change source code. Otherwise it will lead to unnecessary fs writing."),(0,o.kt)("li",{parentName:"ul"},"Prefer to use embedded methods of collections returned by call ",(0,o.kt)("inlineCode",{parentName:"li"},"j(source)")," to make searches and transforms")))}u.isMDXComponent=!0}}]);