"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6885],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1724:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>o,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var r=t(3117),a=t(102),i=(t(7294),t(3905)),l=["components"],o={id:"eslint-plugin-tramvai",title:"eslint-plugin-tramvai"},s=void 0,p={unversionedId:"references/libs/eslint-plugin-tramvai",id:"references/libs/eslint-plugin-tramvai",title:"eslint-plugin-tramvai",description:"Set of eslint rules specific to tramvai apps. Should be used primarily as an extension to @tinkoff/eslint-config",source:"@site/tmp-docs/references/libs/eslint-plugin-tramvai.md",sourceDirName:"references/libs",slug:"/references/libs/eslint-plugin-tramvai",permalink:"/docs/references/libs/eslint-plugin-tramvai",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/eslint-plugin-tramvai.md",tags:[],version:"current",frontMatter:{id:"eslint-plugin-tramvai",title:"eslint-plugin-tramvai"},sidebar:"docs",previous:{title:"error-handlers",permalink:"/docs/references/libs/error-handlers"},next:{title:"hooks",permalink:"/docs/references/libs/hooks"}},c=[{value:"Installation",id:"installation",children:[],level:2},{value:"Rules",id:"rules",children:[{value:"bundle-chunk-name",id:"bundle-chunk-name",children:[],level:3}],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Set of ",(0,i.kt)("inlineCode",{parentName:"p"},"eslint")," rules specific to ",(0,i.kt)("inlineCode",{parentName:"p"},"tramvai")," apps. Should be used primarily as an extension to ",(0,i.kt)("inlineCode",{parentName:"p"},"@tinkoff/eslint-config")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Install necessary packages first"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-react @tinkoff/eslint-plugin-tramvai\n")),(0,i.kt)("p",null,"Add recommended settings to ",(0,i.kt)("inlineCode",{parentName:"p"},".eslintrc"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "extends": [\n    "@tinkoff/eslint-config/app",\n    "@tinkoff/eslint-config-react",\n    "plugin:@tinkoff/tramvai/recommended"\n  ]\n}\n')),(0,i.kt)("p",null,"Or add plugin manually:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "extends": [\n    "@tinkoff/eslint-config/app",\n    "@tinkoff/eslint-config-react"\n  ],\n  "plugins": [\n    "@tinkoff/tramvai"\n  ],\n  "rules": {\n    "@tinkoff/tramvai/bundle-chunk-name": "warn"\n  }\n}\n')),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("h3",{id:"bundle-chunk-name"},"bundle-chunk-name"),(0,i.kt)("p",null,"In a tramvai app, in order to work properly with the bundle system it is necessary to put a ",(0,i.kt)("a",{parentName:"p",href:"https://tramvai.dev/docs/modules/render#%D0%BE%D1%81%D0%BE%D0%B1%D0%B5%D0%BD%D0%BD%D0%BE%D1%81%D1%82%D0%B8"},"special comment for dynamic imports"),". This rule checks that dynamic imports of bundles are marked with a proper control comment ",(0,i.kt)("inlineCode",{parentName:"p"},"webpackChunkName: [name]"),"."),(0,i.kt)("p",null,"The rule also provides autofix in order to add add/fix control comment automatically."),(0,i.kt)("p",null,"Example of the wrong code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"createApp({\n  bundles: {\n    'tramvai/bundle-1': () => import('./bundles/bundle1'),\n    'tramvai/bundle-2': () => import(/* webpackChunkName: \"randomValue\" */ './bundles/bundle2'),\n  },\n});\n")),(0,i.kt)("p",null,"Example of the right code after autofix for the code above:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"createApp({\n  bundles: {\n    'tramvai/bundle-1': () => import(/* webpackChunkName: \"bundle-1\" */ './bundles/bundle1'),\n    'tramvai/bundle-2': () => import(/* webpackChunkName: \"bundle-2\" */ './bundles/bundle2'),\n  },\n});\n")),(0,i.kt)("p",null,"Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"propertyNames"),": defines array of object properties which will be analyzed. By default it equals to ",(0,i.kt)("inlineCode",{parentName:"li"},'["bundles"]'),".")))}m.isMDXComponent=!0}}]);