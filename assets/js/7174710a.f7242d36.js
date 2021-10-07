(self.webpackChunk=self.webpackChunk||[]).push([[1420],{3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=p,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8145:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>c,toc:()=>l,default:()=>d});var n=r(2122),p=r(9756),a=(r(7294),r(3905)),o=["components"],i={id:"test-puppeteer",title:"Puppeteer tests"},s=void 0,c={unversionedId:"references/test/test-puppeteer",id:"references/test/test-puppeteer",isDocsHomePage:!1,title:"Puppeteer tests",description:"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 puppeteer \u0432 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u0430\u0445",source:"@site/tmp-docs/references/test/test-puppeteer.md",sourceDirName:"references/test",slug:"/references/test/test-puppeteer",permalink:"/docs/references/test/test-puppeteer",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-puppeteer.md",version:"current",frontMatter:{id:"test-puppeteer",title:"Puppeteer tests"},sidebar:"docs",previous:{title:"JSDom tests",permalink:"/docs/references/test/test-jsdom"},next:{title:"Jest integration",permalink:"/docs/references/test/test-integration-jest"}},l=[{value:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:[]},{value:"How To",id:"how-to",children:[{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e <code>Puppeteer</code>",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-puppeteer",children:[]}]}],u={toc:l};function d(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0411\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430 \u0445\u0435\u043b\u043f\u0435\u0440\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer"},"puppeteer")," \u0432 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0442\u0435\u0441\u0442\u0430\u0445"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u0414\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e ",(0,a.kt)("inlineCode",{parentName:"p"},"puppeteer"))),(0,a.kt)("h2",{id:"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"},"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-puppeteer\n")),(0,a.kt)("h2",{id:"how-to"},"How To"),(0,a.kt)("h3",{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f-\u0432-\u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435-\u0441-\u043f\u043e\u043c\u043e\u0449\u044c\u044e-puppeteer"},"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,a.kt)("inlineCode",{parentName:"h3"},"Puppeteer")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Puppeteer")," \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442 \u0442\u0435\u0441\u0442\u044b \u0432 headless Chrome \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u043d\u0430 ",(0,a.kt)("a",{parentName:"p",href:"https://pptr.dev/"},"\u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u043c \u0441\u0430\u0439\u0442\u0435")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { startCli } from '@tramvai/test-integration';\nimport { initPuppeteer, wrapPuppeteerPage } from '@tramvai/test-puppeteer';\n\nbeforeAll(async () => {\n  app = await startCli('bootstrap', {\n    env: {\n      SOME_ENV: 'test',\n    },\n  });\n}, 80000);\n\nafterAll(() => {\n  return app.close();\n});\n\nit('puppeteer', async () => {\n  const browser = await initPuppeteer(app.serverUrl);\n\n  const page = await browser.newPage();\n  const wrapper = wrapPuppeteerPage(page);\n\n  await page.goto(app.serverUrl);\n\n  expect(\n    await page.$eval('.application', (node) => (node as HTMLElement).innerText)\n  ).toMatchInlineSnapshot(`\"Main Page click link\"`);\n\n  await wrapper.router.navigateWithReload('./second');\n\n  expect(\n    await page.$eval('.application', (node) => (node as HTMLElement).innerText)\n  ).toMatchInlineSnapshot(`\"Second Page click link\"`);\n\n  await browser.close();\n});\n")))}d.isMDXComponent=!0}}]);