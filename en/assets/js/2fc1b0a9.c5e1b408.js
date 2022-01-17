"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,u=d["".concat(a,".").concat(m)]||d[m]||f[m]||i;return r?n.createElement(u,s(s({ref:t},p),{},{components:r})):n.createElement(u,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<i;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1656:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>a,metadata:()=>c,toc:()=>p,default:()=>d});var n=r(3117),o=r(102),i=(r(7294),r(3905)),s=["components"],l={id:"fix-ts-references",title:"@tinkoff-monorepo/fix-ts-references"},a=void 0,c={unversionedId:"references/tools/monorepo-tools/fix-ts-references",id:"references/tools/monorepo-tools/fix-ts-references",title:"@tinkoff-monorepo/fix-ts-references",description:"All of the dependencies for linked packages in monorepo should be specified in tsconfig.references file in order to let tsc to build packages and their dependencies in the right order within single compilation pass.",source:"@site/tmp-docs/references/tools/monorepo-tools/fix-ts-references.md",sourceDirName:"references/tools/monorepo-tools",slug:"/references/tools/monorepo-tools/fix-ts-references",permalink:"/en/docs/references/tools/monorepo-tools/fix-ts-references",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/tools/monorepo-tools/fix-ts-references.md",tags:[],version:"current",frontMatter:{id:"fix-ts-references",title:"@tinkoff-monorepo/fix-ts-references"},sidebar:"docs",previous:{title:"Jest integration",permalink:"/en/docs/references/test/test-integration-jest"},next:{title:"@tinkoff-monorepo/depscheck",permalink:"/en/docs/references/tools/monorepo-tools/depscheck"}},p=[{value:"Install",id:"install",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"All of the dependencies for linked packages in monorepo should be specified in ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.references")," file in order to let ",(0,i.kt)("inlineCode",{parentName:"p"},"tsc")," to build packages and their dependencies in the right order within single compilation pass."),(0,i.kt)("h2",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"yarn add fix-ts-references\n")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npx fix-ts-references --fix\n")),(0,i.kt)("p",null,"Script will do next:"),(0,i.kt)("p",null,"With flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Remove references from references list for package if dependency has been removed from ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"Add new references to references list for package if dependency has been added to ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ol"},"Setting ",(0,i.kt)("inlineCode",{parentName:"li"},"tsconfig.compilerOptions.rootDir=./src")," if it is not set"),(0,i.kt)("li",{parentName:"ol"},"Remove reference from project reference solution if package has been removed from repository"),(0,i.kt)("li",{parentName:"ol"},"Add reference to project reference solution if package has been added to the repository")),(0,i.kt)("p",null,"Without flag ",(0,i.kt)("inlineCode",{parentName:"p"},"--fix")," will just show list of errors"))}d.isMDXComponent=!0}}]);