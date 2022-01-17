"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6370],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,k=c["".concat(u,".").concat(h)]||c[h]||d[h]||o;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5978:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>u,metadata:()=>s,toc:()=>p,default:()=>c});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],l={id:"router",title:"router"},u=void 0,s={unversionedId:"references/libs/router",id:"references/libs/router",title:"router",description:"Routing library. It can work both on the server and on the client. Designed primarily for building isomorphic applications.",source:"@site/tmp-docs/references/libs/router.md",sourceDirName:"references/libs",slug:"/references/libs/router",permalink:"/en/docs/references/libs/router",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/libs/router.md",tags:[],version:"current",frontMatter:{id:"router",title:"router"},sidebar:"docs",previous:{title:"tinkoff-request-http-client-adapter",permalink:"/en/docs/references/libs/tinkoff-request-http-client-adapter"},next:{title:"url",permalink:"/en/docs/references/libs/url"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Explanation",id:"explanation",children:[{value:"Server and client version",id:"server-and-client-version",children:[],level:3},{value:"Client routing with/without SPA transitions",id:"client-routing-withwithout-spa-transitions",children:[],level:3},{value:"Router Guards",id:"router-guards",children:[{value:"Rules",id:"rules",children:[],level:4},{value:"Possible result",id:"possible-result",children:[],level:4}],level:3},{value:"Transitions hooks",id:"transitions-hooks",children:[{value:"Rules",id:"rules-1",children:[],level:4},{value:"List of available hooks",id:"list-of-available-hooks",children:[],level:4}],level:3}],level:2},{value:"API",id:"api",children:[{value:"Getting data about the current route or url",id:"getting-data-about-the-current-route-or-url",children:[],level:3},{value:"Transition initiation",id:"transition-initiation",children:[{value:"navigate",id:"navigate",children:[{value:"navigate hooks",id:"navigate-hooks",children:[],level:5},{value:"navigate workflow",id:"navigate-workflow",children:[],level:5}],level:4},{value:"updateCurrentRoute",id:"updatecurrentroute",children:[{value:"updateCurrentRoute hooks",id:"updatecurrentroute-hooks",children:[],level:5},{value:"updateCurrentRoute workflow",id:"updatecurrentroute-workflow",children:[],level:5}],level:4}],level:3},{value:"Working with query",id:"working-with-query",children:[{value:"query option",id:"query-option",children:[],level:4},{value:"preserveQuery",id:"preservequery",children:[],level:4}],level:3},{value:"Constructor options",id:"constructor-options",children:[],level:3},{value:"Integration with React",id:"integration-with-react",children:[{value:"useRoute",id:"useroute",children:[],level:4},{value:"useUrl",id:"useurl",children:[],level:4},{value:"useNavigate",id:"usenavigate",children:[],level:4},{value:"Link",id:"link",children:[],level:4}],level:3}],level:2},{value:"How to",id:"how-to",children:[{value:"Load route config from external api",id:"load-route-config-from-external-api",children:[],level:3},{value:"App behind proxy",id:"app-behind-proxy",children:[],level:3}],level:2}],d={toc:p};function c(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Routing library. It can work both on the server and on the client. Designed primarily for building isomorphic applications."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You need to install ",(0,o.kt)("inlineCode",{parentName:"p"},"@tinkoff/router"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tinkoff/router\n")),(0,o.kt)("p",null,"And connect it to the project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Router } from '@tinkoff/router';\n\nconst router = new Router();\n")),(0,o.kt)("h2",{id:"explanation"},"Explanation"),(0,o.kt)("p",null,"Features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The library supports options for working both on the server and on the client."),(0,o.kt)("li",{parentName:"ul"},"It is possible to use different client transition options: with or without SPA transitions."),(0,o.kt)("li",{parentName:"ul"},"There are Guards to check the availability of a route under specific conditions."),(0,o.kt)("li",{parentName:"ul"},"You can subscribe to different stages of the transition through hooks"),(0,o.kt)("li",{parentName:"ul"},"Components and hooks for easy routing from react")),(0,o.kt)("h3",{id:"server-and-client-version"},"Server and client version"),(0,o.kt)("p",null,"It is enough just to import routing from the library itself and, based on the settings in package.json, the required version for the server or client will be returned"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router } from '@tinkoff/router';\n")),(0,o.kt)("h3",{id:"client-routing-withwithout-spa-transitions"},"Client routing with/without SPA transitions"),(0,o.kt)("p",null,"By default, routing with SPA transitions is enabled on the client. If you need to disable SPA transitions, you need to import a special version of the routing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Router, SpaHistory } from '@tinkoff/router';\nimport { NoSpaRouter } from '@tinkoff/router';\n\nconst spaRouter = new Router({ history: new SpaHistory() });\nconst noSpaRouter = new NoSpaRouter();\n")),(0,o.kt)("h3",{id:"router-guards"},"Router Guards"),(0,o.kt)("p",null,"Guards allow you to control the availability of a particular route for a specific transition. From the guard, you can block the transition or initiate a redirect."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationGuard } from '@tinkoff/router';\n\nexport const myGuard: NavigationGuard = async ({ to }) => {\n  if (to.config.blocked) {\n    return false; // block this transition\n  }\n\n  if (to.config.redirect) {\n    return '/login/'; // call a redirect to the specified page\n  }\n\n  // if nothing is returned, the transition will be performed as usual\n};\n\nrouter.registerGuard(myGuard);\n")),(0,o.kt)("h4",{id:"rules"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"guards are asynchronous and it execution will be awaited inside routing"),(0,o.kt)("li",{parentName:"ul"},"all guards are running in parallel and they are all awaited"),(0,o.kt)("li",{parentName:"ul"},"if several guars return something then the result from a guard that was registered early will be used")),(0,o.kt)("h4",{id:"possible-result"},"Possible result"),(0,o.kt)("p",null,"The behaviour of routing depends on the result of executing guards functions and there result might be next:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if all of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," than navigation will continue executing"),(0,o.kt)("li",{parentName:"ul"},"if any of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," than navigation is getting blocked and next action differs on server and client"),(0,o.kt)("li",{parentName:"ul"},"if any of the guards returns ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," it is considered as url to which redirect should be happen")),(0,o.kt)("h3",{id:"transitions-hooks"},"Transitions hooks"),(0,o.kt)("p",null,"Transition hooks allow you to perform your asynchronous actions at different stages of the transition."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { NavigationHook } from '@tinkoff/router';\n\nexport const myHook: NavigationHook = async ({ from, to, url, fromUrl }) => {\n  console.log(`navigating from ${from} to route ${to}`);\n};\n\nrouter.registerHook('beforeNavigate', myHook);\n")),(0,o.kt)("h4",{id:"rules-1"},"Rules"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all hooks from the same event are running in parallel"),(0,o.kt)("li",{parentName:"ul"},"most of the hooks are asynchronous and are awaited inside router"),(0,o.kt)("li",{parentName:"ul"},"if some error happens when running hook it will be logged to console but wont affect navigation (except for the ",(0,o.kt)("inlineCode",{parentName:"li"},"beforeResolve")," hook - error for it will be rethrown)")),(0,o.kt)("h4",{id:"list-of-available-hooks"},"List of available hooks"),(0,o.kt)("p",null,"Async hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#navigate-hooks"},"navigate hooks")," - asynchronous hooks only for navigate calls"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#updatecurrentroute-hooks"},"updateCurrentRoute hooks")," - asynchronous hooks only for updateCurrentRoute calls")),(0,o.kt)("p",null,"Sync hooks:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"change")," - runs when any of changes to current route\\url happens")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"getting-data-about-the-current-route-or-url"},"Getting data about the current route or url"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentRoute(); // will return the current route\nrouter.getCurrentUrl(); // will return the parsed version of the url of the current page\n")),(0,o.kt)("h3",{id:"transition-initiation"},"Transition initiation"),(0,o.kt)("p",null,"There are two methods for initializing the navigation and updating the address bar in the browser. The main difference between these two methods is that one of them will launch a full-fledged transition with data updating and starting heavy data loading actions. The second method is mainly used to update the state for the current route: to update the query parameters on the page or change the dynamic parameters of the route itself."),(0,o.kt)("h4",{id:"navigate"},"navigate"),(0,o.kt)("p",null,"Initiates a full transition, defining the next route and updating the state in the browser."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.navigate('/test');\nrouter.navigate({ url: './test', query: { a: '1' } });\n")),(0,o.kt)("h5",{id:"navigate-hooks"},"navigate hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"beforeResolve"),(0,o.kt)("li",{parentName:"ul"},"beforeNavigate"),(0,o.kt)("li",{parentName:"ul"},"afterNavigate")),(0,o.kt)("h5",{id:"navigate-workflow"},"navigate workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeResolve")," hook"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#router-guards"},"guards")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeNavigate")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"change")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"afterNavigate"))),(0,o.kt)("h4",{id:"updatecurrentroute"},"updateCurrentRoute"),(0,o.kt)("p",null,"The transition is based on the current route (therefore this method cannot be called on the server) and allows you to simply update some data for the current page"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.updateCurrentRoute({ params: { id: 'abc' } });\nrouter.updateCurrentRoute({ query: { a: '1' } });\n")),(0,o.kt)("h5",{id:"updatecurrentroute-hooks"},"updateCurrentRoute hooks"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"beforeUpdateCurrent"),(0,o.kt)("li",{parentName:"ul"},"afterUpdateCurrent")),(0,o.kt)("h5",{id:"updatecurrentroute-workflow"},"updateCurrentRoute workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"beforeUpdateCurrent")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"change")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"afterUpdateCurrent"))),(0,o.kt)("h3",{id:"working-with-query"},"Working with query"),(0,o.kt)("h4",{id:"query-option"},"query option"),(0,o.kt)("p",null,"Allows you to set a search string for an url as an object via the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," option when navigating. The previous query value will be cleared"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a', b: 'b' } });\nrouter.updateCurrentRoute({ query: { a: 'a', b: 'b' } });\n\nrouter.getCurrentUrl().query; // { a: 'a', b: 'b' }\n")),(0,o.kt)("h4",{id:"preservequery"},"preserveQuery"),(0,o.kt)("p",null,"Allows you to keep the query value from the current navigation and use them in a new transition"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { \u0441: 'c' }\n\nrouter.navigate({ query: { a: 'a' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: 'a' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { a: 'a', c: 'c' }\n")),(0,o.kt)("p",null,"If you pass undefined as the value for a specific query key, then this value will be cleared in a new query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.getCurrentUrl().query; // { a: 'a', b: 'b' }\n\nrouter.navigate({ query: { a: undefined, c: 'c' }, preserveQuery: true });\nrouter.updateCurrentRoute({ query: { a: undefined, c: 'c' }, preserveQuery: true });\n\nrouter.getCurrentUrl().query; // { b: 'b', c: 'c' }\n")),(0,o.kt)("h3",{id:"constructor-options"},"Constructor options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trailingSlash")," - do router should force all urls to end with slash. If ",(0,o.kt)("inlineCode",{parentName:"li"},"true")," - force trailing slash for every path, ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," - force no trailing slash, ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," - trailing slash is specified by request and both trailing and not trailing slashes are used. By default value if ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mergeSlashes")," - replace several consecutive slashes by single slashes (slashes after protocol are still be with ",(0,o.kt)("inlineCode",{parentName:"li"},"//")," after protocol name). By default is ",(0,o.kt)("inlineCode",{parentName:"li"},"false")," - no merge for slashes.")),(0,o.kt)("h3",{id:"integration-with-react"},"Integration with React"),(0,o.kt)("p",null,"Library has some useful React hooks and components for working with routing"),(0,o.kt)("h4",{id:"useroute"},"useRoute"),(0,o.kt)("p",null,"Returns current active route of the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useRoute } from '@tinkoff/router';\n\nexport const Component = () => {\n  const route = useRoute();\n\n  return <div>Route path: {route.actualPath}</div>;\n};\n")),(0,o.kt)("h4",{id:"useurl"},"useUrl"),(0,o.kt)("p",null,"Returns current active URL of the application"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\nimport { useUrl } from '@tinkoff/router';\n\nexport const Component = () => {\n  const url = useUrl();\n\n  return <div>Url query: {JSON.stringify(url.query)}</div>;\n};\n")),(0,o.kt)("h4",{id:"usenavigate"},"useNavigate"),(0,o.kt)("p",null,"Creates a callback with a navigation call that can be passed to child components or used as an event handler"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export const Cmp = () => {\n  const navigate = useNavigate('/test/');\n\n  return <div onClick={navigate}>Test</div>;\n};\n")),(0,o.kt)("h4",{id:"link"},"Link"),(0,o.kt)("p",null,"A wrapper for a react component that makes it clickable"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If the react component is passed to the Link as children, then this passed component will be rendered and the ",(0,o.kt)("inlineCode",{parentName:"p"},"href"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onClick")," props will be passed as props to that component and they should be used to make the navigation. Otherwise, the ",(0,o.kt)("inlineCode",{parentName:"p"},"<a>")," tag will be rendered with children as a child.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Link } from '@tinkoff/router';\nimport CustomLink from '@custom-scope/link';\n\nexport const Component = () => {\n  return (\n    <Link url=\"/test/\">\n      <CustomLink />\n    </Link>\n  );\n};\n\nexport const WrapLink = () => {\n  return <Link url=\"/test/\">Click me</Link>;\n};\n")),(0,o.kt)("h2",{id:"how-to"},"How to"),(0,o.kt)("h3",{id:"load-route-config-from-external-api"},"Load route config from external api"),(0,o.kt)("p",null,"Use ",(0,o.kt)("a",{parentName:"p",href:"#transitions-hooks"},"transition hook")," ",(0,o.kt)("inlineCode",{parentName:"p"},"beforeResolve")," and load routes config based on url."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"router.registerHook('beforeResolve', async (navigation) => {\n  const route = await routeResolve(navigation);\n\n  if (route) {\n    router.addRoute(routeTransform(route));\n  }\n});\n")),(0,o.kt)("h3",{id:"app-behind-proxy"},"App behind proxy"),(0,o.kt)("p",null,"Router doesn't support proxy setup directly. But proxy still can be used with some limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"setup proxy server to pass requests to app with rewriting request and response paths. (E.g. for ",(0,o.kt)("a",{parentName:"li",href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_redirect"},"nginx"),")"),(0,o.kt)("li",{parentName:"ul"},"it wont work as expected on spa navigation on client, so only option in this case is use the ",(0,o.kt)("inlineCode",{parentName:"li"},"NoSpaRouter"))))}c.isMDXComponent=!0}}]);