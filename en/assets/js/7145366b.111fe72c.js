(self.webpackChunk=self.webpackChunk||[]).push([[684],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6960:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>p,metadata:()=>c,toc:()=>l,default:()=>m});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],s={id:"test-integration-jest",title:"Jest integration"},p=void 0,c={unversionedId:"references/test/test-integration-jest",id:"references/test/test-integration-jest",isDocsHomePage:!1,title:"Jest integration",description:"\u041f\u0440\u0435\u0441\u0435\u0442 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0432 jest",source:"@site/tmp-docs/references/test/test-integration-jest.md",sourceDirName:"references/test",slug:"/references/test/test-integration-jest",permalink:"/en/docs/references/test/test-integration-jest",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-integration-jest.md",version:"current",frontMatter:{id:"test-integration-jest",title:"Jest integration"},sidebar:"docs",previous:{title:"Puppeteer tests",permalink:"/en/docs/references/test/test-puppeteer"},next:{title:"Mocks",permalink:"/en/docs/references/test/test-mocks"}},l=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"How To",id:"how-to",children:[{value:"\u0414\u0435\u0431\u0430\u0433 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u043e\u0432 \u0432 Jest",id:"\u0434\u0435\u0431\u0430\u0433-\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0442\u0435\u0441\u0442\u043e\u0432-\u0432-jest",children:[]},{value:"\u041e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Jest",id:"\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435-\u0434\u043b\u044f-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-jest",children:[]}]}],u={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u041f\u0440\u0435\u0441\u0435\u0442 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0432 jest"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u044b \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/cli")," \u0438 ",(0,i.kt)("inlineCode",{parentName:"p"},"puppeteer"))),(0,i.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-integration-jest\n")),(0,i.kt)("h2",{id:"how-to"},"How To"),(0,i.kt)("h3",{id:"\u0434\u0435\u0431\u0430\u0433-\u0438-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0442\u0435\u0441\u0442\u043e\u0432-\u0432-jest"},"\u0414\u0435\u0431\u0430\u0433 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u043e\u0432 \u0432 Jest"),(0,i.kt)("p",null,"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043d\u0430\u0448 \u043f\u0440\u0435\u0441\u0435\u0442 \u0434\u043b\u044f jest \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u0432 watch \u0440\u0435\u0436\u0438\u043c\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u044b, \u043f\u0440\u0438 \u044d\u0442\u043e\u043c \u0441\u0430\u043c\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u0438 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0432 \u0444\u043e\u043d\u0435."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"jest.integration.config.js")," \u043f\u0440\u0435\u0441\u0435\u0442 ",(0,i.kt)("inlineCode",{parentName:"p"},"@tramvai/test-integration-jest")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  preset: '@tramvai/test-integration-jest',\n};\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u043c \u0432 ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0441\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 \u0432 watch-\u0440\u0435\u0436\u0438\u043c\u0435:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test:integration": "jest -w=3 --config ./jest.integration.config.js",\n    "test:integration:watch": "jest --runInBand --watch --config ./jest.integration.config.js"\n  }\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u0417\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u0443\u044e\u0449\u0438\u0439 \u0442\u0435\u0441\u0442 \u0447\u0435\u0440\u0435\u0437 ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn test:integration:watch <path_to_test>"),". \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0439 \u0443\u0440\u043b ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," \u0438 \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b."))),(0,i.kt)("h3",{id:"\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435-\u0434\u043b\u044f-\u0437\u0430\u043f\u0443\u0441\u043a\u0430-jest"},"\u041e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Jest"),(0,i.kt)("p",null,"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 ",(0,i.kt)("inlineCode",{parentName:"p"},"jest"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev jest @types/jest jest-circus\n")))}m.isMDXComponent=!0}}]);