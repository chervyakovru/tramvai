(self.webpackChunk=self.webpackChunk||[]).push([[5284],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9705:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>s,contentTitle:()=>l,metadata:()=>p,toc:()=>c,default:()=>u});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={id:"http-client",title:"http-client"},l=void 0,p={unversionedId:"references/modules/http-client",id:"references/modules/http-client",isDocsHomePage:!1,title:"http-client",description:"The module provides the application with a factory of HTTP clients, a basic service for working with various APIs and a service for working with papi.",source:"@site/tmp-docs/references/modules/http-client.md",sourceDirName:"references/modules",slug:"/references/modules/http-client",permalink:"/en/docs/references/modules/http-client",editUrl:"https://github.com/TinkoffCreditSystems/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/modules/http-client.md",version:"current",frontMatter:{id:"http-client",title:"http-client"},sidebar:"docs",previous:{title:"error-interceptor",permalink:"/en/docs/references/modules/error-interceptor"},next:{title:"log",permalink:"/en/docs/references/modules/log"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Features",id:"features",children:[]},{value:"Concepts",id:"concepts",children:[{value:"HTTP client",id:"http-client",children:[]},{value:"Services for working with API",id:"services-for-working-with-api",children:[]}]},{value:"Usage",id:"usage",children:[{value:"Create a new HTTP client",id:"create-a-new-http-client",children:[]},{value:"Using existing HTTP clients",id:"using-existing-http-clients",children:[]},{value:"Adding custom data to requests",id:"adding-custom-data-to-requests",children:[]}]},{value:"How to",id:"how-to",children:[{value:"How to disable HTTP request caching?",id:"how-to-disable-http-request-caching",children:[]},{value:"Testing",id:"testing",children:[]},{value:"Logging",id:"logging",children:[]}]},{value:"Exported tokens",id:"exported-tokens",children:[]},{value:"Environment Variables",id:"environment-variables",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The module provides the application with a factory of HTTP clients, a basic service for working with various APIs and a service for working with ",(0,a.kt)("inlineCode",{parentName:"p"},"papi"),"."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"You need to install ",(0,a.kt)("inlineCode",{parentName:"p"},"@tramvai/module-http-client")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @tramvai/module-http-client\n")),(0,a.kt)("p",null,"And connect in the project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createApp } from '@tramvai/core';\nimport { HttpClientModule } from '@tramvai/module-http-client';\n\ncreateApp({\n  name: 'tincoin',\n  modules: [HttpClientModule],\n});\n")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"http-client")," module adds functionality to the application related to API requests. Available providers allow you to create new services to work with any API and create more specific services with preset settings for specific APIs."),(0,a.kt)("p",null,"The module implements interfaces from the library ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/libs/http-client"},"@tramvai/http-client")," using a special library - adapter ",(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/libs/tinkoff-request-http-client-adapter"},"@tramvai/tinkoff-request-http-client-adapter"),", running on top of ",(0,a.kt)("a",{parentName:"p",href:"https://tinkoffcreditsystems.github.io/tinkoff-request/"},"@tinkoff/request"),"."),(0,a.kt)("h2",{id:"concepts"},"Concepts"),(0,a.kt)("h3",{id:"http-client"},"HTTP client"),(0,a.kt)("p",null,"HTTP client - implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient")," interface, created via the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY")," token. HTTP client accepts general settings, some of which will be used as defult values \u200b\u200bfor all requests. The HTTP client does not provide an opportunity to add additional methods for requests, and to perform side actions when the request is completed or failed."),(0,a.kt)("h3",{id:"services-for-working-with-api"},"Services for working with API"),(0,a.kt)("p",null,"The API service inherits from the ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiService")," class, which is exported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@tramvai/http-client"),". The API service takes an HTTP client in its constructor and uses it for requests. The API service implements all methods for requests from the ",(0,a.kt)("inlineCode",{parentName:"p"},"HttpClient")," interface, but allows you to modify them. For example, you can replace the implementation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"request")," method by adding an error message to the ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," request via an HTTP client - this logic will automatically work for all other methods - ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),". In the API service, you can add custom methods for requests to certain API endpoints, and specify only the necessary parameters in them, and type responses."),(0,a.kt)("p",null,"Additional reasons to create API services - if you need to use several different HTTP clients to work with a specific API, or you need the ability to add a convenient abstraction on top of the basic methods for sending requests."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"create-a-new-http-client"},"Create a new HTTP client"),(0,a.kt)("p",null,"Each new HTTP client must directly or indirectly inherit ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY"),"."),(0,a.kt)("p",null,"New HTTP clients / API services should not be created with ",(0,a.kt)("inlineCode",{parentName:"p"},"scope: Scope.SINGLETON"),", because each request is supplemented with default parameters specific to each user, for example - passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Real-Ip")," header from the request to the application in all requests to the API."),(0,a.kt)("h4",{id:"basic-http-client"},"Basic HTTP client"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_FACTORY")," token - provides a factory for creating new HTTP clients. The options are preinstalled with a logger and a cache factory."),(0,a.kt)("h5",{id:"peculiarities"},"Peculiarities"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For all requests to the API, headers are added from the list returned by the ",(0,a.kt)("inlineCode",{parentName:"li"},"API_CLIENT_PASS_HEADERS")," token, and ",(0,a.kt)("inlineCode",{parentName:"li"},"X-Real-Ip")," from the current request to the application")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Token interface:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type HTTP_CLIENT_FACTORY = (options: HttpClientFactoryOptions) => HttpClient;\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Token use:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Scope, provide } from '@tramvai/core';\nimport { ENV_MANAGER_TOKEN } from '@tramvai/tokens-common';\nimport { HTTP_CLIENT_FACTORY } from '@tramvai/tokens-http-client';\n\nconst provider = provide({\n  provide: 'WHATEVER_API_HTTP_CLIENT',\n  useFactory: ({\n    factory,\n    envManager,\n  }: {\n    factory: typeof HTTP_CLIENT_FACTORY;\n    envManager: typeof ENV_MANAGER_TOKEN;\n  }) => {\n    return factory({\n      name: 'whatever-api',\n      baseUrl: envManager.get('WHATEVER_API'),\n    });\n  },\n  deps: {\n    factory: HTTP_CLIENT_FACTORY,\n    envManager: ENV_MANAGER_TOKEN,\n  },\n});\n")),(0,a.kt)("h3",{id:"using-existing-http-clients"},"Using existing HTTP clients"),(0,a.kt)("p",null,"Most HTTP clients implement additional logic for requests, and inherit from ",(0,a.kt)("inlineCode",{parentName:"p"},"ApiService"),". Thus, each service has methods ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"post"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"put"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"delete")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"request"),", but there may be specific methods."),(0,a.kt)("h4",{id:"common-http-client"},"Common HTTP client"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT")," token provides a basic client for sending requests to any URLs, request caching is disabled."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Token use:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { createAction } from '@tramvai/core';\nimport { HTTP_CLIENT } from '@tramvai/tokens-http-client';\n\nexport const fetchAction = createAction({\n  name: 'fetch',\n  fn: async (_, __, { httpClient }) => {\n    const { payload, headers, status } = await httpClient.get(\n      'https://www.domain.com/api/endpoint'\n    );\n    return payload;\n  },\n  deps: {\n    httpClient: HTTP_CLIENT,\n  },\n});\n")),(0,a.kt)("h3",{id:"adding-custom-data-to-requests"},"Adding custom data to requests"),(0,a.kt)("p",null,"Let's consider a case using the abstract service ",(0,a.kt)("inlineCode",{parentName:"p"},"WHATEVER_API_SERVICE")," as an example. Let's say we want to add an ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Real-Ip")," header to every request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { provide } from '@tramvai/core';\nimport { HttpClientRequest, HttpClient } from '@tramvai/http-client';\nimport { REQUEST_MANAGER_TOKEN } from '@tramvai/tokens-common';\n\nconst provider = provide({\n  provide: 'WHATEVER_API_SERVICE',\n  useFactory: ({\n    factory,\n    requestManager,\n    envManager,\n  }: {\n    factory: typeof HTTP_CLIENT_FACTORY;\n    requestManager: typeof REQUEST_MANAGER_TOKEN;\n    envManager: typeof ENV_MANAGER_TOKEN;\n  }) => {\n    return factory({\n      name: 'whatever-api',\n      baseUrl: envManager.get('WHATEVER_API'),\n      modifyRequest: (request: HttpClientRequest) => {\n        return {\n          ...request,\n          headers: {\n            ...request.headers,\n            'X-real-ip': requestManager.getClientIp(),\n          },\n        };\n      },\n    });\n  },\n  deps: {\n    factory: HTTP_CLIENT_FACTORY,\n    requestManager: REQUEST_MANAGER_TOKEN,\n    envManager: ENV_MANAGER_TOKEN,\n  },\n});\n")),(0,a.kt)("h2",{id:"how-to"},"How to"),(0,a.kt)("h3",{id:"how-to-disable-http-request-caching"},"How to disable HTTP request caching?"),(0,a.kt)("p",null,"To disable caching for all HTTP clients, pass the env variable ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP_CLIENT_CACHE_DISABLED: true")," to the application"),(0,a.kt)("h3",{id:"testing"},"Testing"),(0,a.kt)("h4",{id:"testing-your-api-clients"},"Testing your api clients"),(0,a.kt)("p",null,"If you have a module or providers that define api-clients, then it will be convenient to use special utilities in order to test them separately"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { testApi } from '@tramvai/module-http-client/tests';\nimport { CustomModule } from './module';\n\ndescribe('testApi', () => {\n  it('test', async () => {\n    const { di, fetchMock, mockJsonResponse } = testApi({\n      modules: [CustomModule],\n      env: {\n        TEST_API: 'testApi',\n      },\n    });\n    const httpClient: typeof HTTP_CLIENT = di.get('CUSTOM_HTTP_CLIENT') as any;\n\n    mockJsonResponse({ a: 'aaa' });\n\n    const { payload } = await httpClient.get('test');\n\n    expect(payload).toEqual({ a: 'aaa' });\n    expect(fetchMock).toHaveBeenCalledWith('http://testApi/test', expect.anything());\n  });\n});\n")),(0,a.kt)("h3",{id:"logging"},"Logging"),(0,a.kt)("p",null,"By default, ",(0,a.kt)("inlineCode",{parentName:"p"},"@tinkoff/request")," will log every failed requests with status ",(0,a.kt)("inlineCode",{parentName:"p"},"error"),".\nYou can disable logging by pass ",(0,a.kt)("inlineCode",{parentName:"p"},"{ silent: true }")," parameter to request parameters.\nUseful meta information about request will be available in ",(0,a.kt)("inlineCode",{parentName:"p"},"error.__meta")," property."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const log = logger('request:test');\n\nhttpClient.request({ path: 'test', silent: true })\n  .catch((error) => {\n    log.info(error);\n  });\n")),(0,a.kt)("h2",{id:"exported-tokens"},"Exported tokens"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/en/docs/references/tokens/http-client-tokens"},"link")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_CLIENT_CACHE_DISABLED")," - disable caching for all HTTP clients"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HTTP_CLIENT_CIRCUIT_BREAKER_DISABLED")," - disable plugin ",(0,a.kt)("a",{parentName:"li",href:"https://tinkoffcreditsystems.github.io/tinkoff-request/docs/plugins/circuit-breaker.html"},"https://tinkoffcreditsystems.github.io/tinkoff-request/docs/plugins/circuit-breaker.html"))))}u.isMDXComponent=!0}}]);