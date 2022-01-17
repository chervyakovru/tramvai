"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[177],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,v=u["".concat(i,".").concat(m)]||u[m]||l[m]||s;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var d=2;d<s;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9003:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>c,contentTitle:()=>i,metadata:()=>d,toc:()=>p,default:()=>u});var r=n(3117),o=n(102),s=(n(7294),n(3905)),a=["components"],c={id:"test-react",title:"React tests"},i=void 0,d={unversionedId:"references/test/test-react",id:"references/test/test-react",title:"React tests",description:"Set of helpers for testing React-components",source:"@site/tmp-docs/references/test/test-react.md",sourceDirName:"references/test",slug:"/references/test/test-react",permalink:"/docs/references/test/test-react",editUrl:"https://github.com/Tinkoff/tramvai/-/edit/master/docs/get-started/overview.md/tmp-docs/references/test/test-react.md",tags:[],version:"current",frontMatter:{id:"test-react",title:"React tests"},sidebar:"docs",previous:{title:"Integration tests",permalink:"/docs/references/test/test-integration"},next:{title:"JSDom tests",permalink:"/docs/references/test/test-jsdom"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Explanation",id:"explanation",children:[{value:"act",id:"act",children:[],level:3}],level:2},{value:"How to",id:"how-to",children:[{value:"Test component",id:"test-component",children:[],level:3},{value:"Test React-hooks",id:"test-react-hooks",children:[],level:3}],level:2}],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Set of helpers for testing React-components"),(0,s.kt)("p",null,"Helpers are based on libraries ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-testing-library"},"@testing-library/react")," ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")),(0,s.kt)("p",null,"If you are using jest for testing, consider to add a library ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/jest-dom"},"@testing-library/jest-dom")),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("inlineCode",{parentName:"p"},"react")," should be installed manually")),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save-dev @tramvai/test-react\n")),(0,s.kt)("h2",{id:"explanation"},"Explanation"),(0,s.kt)("h3",{id:"act"},"act"),(0,s.kt)("p",null,"Based on the React ",(0,s.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/test-utils.html#act"},"act test helper")," that is used to perform rerender component after start changes."),(0,s.kt)("p",null,"Put you actions that will update React state inside ",(0,s.kt)("inlineCode",{parentName:"p"},"act")," function in order to check result render in the next code."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Current wrapper should be awaited in tests to execute some additional internal steps"))),(0,s.kt)("h2",{id:"how-to"},"How to"),(0,s.kt)("h3",{id:"test-component"},"Test component"),(0,s.kt)("p",null,"Under the hood the ",(0,s.kt)("a",{parentName:"p",href:"https://testing-library.com/docs/react-testing-library/intro"},"@testing-library/react")," is used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @jest-environment jsdom\n */\nimport { testComponent } from '@tramvai/test-react';\n\ndescribe('test', () => {\n  it('render', async () => {\n    const { render, rerender, context, act, fireEvent, Wrapper } = testComponent(<Cmp id={1} />);\n\n    // test component render\n    expect(render.getByTestId('test').textContent).toBe('Content 1');\n\n    // test render after store update\n    act(() => {\n      context.dispatch(event('data'));\n    });\n\n    // interact with the component\n    fireEvent.click(render.getByText('Button'));\n\n    // component rerender\n    rerender(<Cmp id={2} />);\n\n    expect(render.getByTestId('test').textContent).toBe('Content 2');\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"More examples"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @jest-environment jsdom\n */\n\nimport React, { useEffect, useRef } from 'react';\nimport { createReducer, createEvent, useStore, useStoreSelector } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { useRoute } from '@tinkoff/router';\nimport { testComponent } from './testComponent';\n\ndescribe('test/unit/react/testComponent', () => {\n  it('should render simple component', async () => {\n    const Cmp = () => {\n      return (\n        <div>\n          <div>Root</div>\n          <div data-testid=\"test\">Content</div>\n        </div>\n      );\n    };\n\n    const { render } = testComponent(<Cmp />);\n\n    expect(render.getByTestId('test').textContent).toBe('Content');\n  });\n\n  it('should rerender component on store updates', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const Cmp = () => {\n      const { a } = useStore(store);\n\n      return (\n        <div>\n          <span data-testid=\"content\">Counter: {a}</span>\n        </div>\n      );\n    };\n\n    const { context, render, act } = testComponent(<Cmp />, { stores: [store] });\n    expect(render.getByTestId('content').textContent).toBe('Counter: 1');\n\n    await act(() => {\n      context.dispatch(event());\n    });\n\n    expect(render.getByTestId('content').textContent).toBe('Counter: 2');\n  });\n\n  it('should rerender component on store updates using storeSelector', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const Cmp = () => {\n      const a = useStoreSelector(store, (s) => s.a);\n\n      return (\n        <div>\n          <span data-testid=\"content\">Counter: {a}</span>\n        </div>\n      );\n    };\n\n    const { context, render, act } = testComponent(<Cmp />, { stores: [store] });\n    expect(render.getByTestId('content').textContent).toBe('Counter: 1');\n    await act(() => {\n      context.dispatch(event());\n    });\n\n    expect(render.getByTestId('content').textContent).toBe('Counter: 2');\n  });\n\n  it('should work with di', async () => {\n    const Cmp = () => {\n      const { provider } = useDi({ provider: 'provider' });\n\n      return <span role=\"status\">{provider}</span>;\n    };\n\n    const { render } = testComponent(<Cmp />, {\n      providers: [\n        {\n          provide: 'provider',\n          useValue: 'test',\n        },\n      ],\n    });\n\n    expect(render.getByRole('status')).toMatchInlineSnapshot(`\n      <span\n        role=\"status\"\n      >\n        test\n      </span>\n    `);\n  });\n\n  it('should work with routing', async () => {\n    const Cmp = () => {\n      const route = useRoute();\n\n      return (\n        <div>\n          <div data-testid=\"route\">\n            <div data-testid=\"route-path\">{route.actualPath}</div>\n            <div data-testid=\"route-name\">{route.name}</div>\n          </div>\n        </div>\n      );\n    };\n\n    const { render } = testComponent(<Cmp />, { currentRoute: { name: 'test', path: '/test/' } });\n\n    expect(render.getByTestId('route-path').textContent).toBe('/test/');\n    expect(render.getByTestId('route-name').textContent).toBe('test');\n  });\n\n  it('should rerender simple component', async () => {\n    expect.hasAssertions();\n\n    const Cmp = ({ label }: { label: string }) => {\n      const count = useRef(1);\n      useEffect(() => {\n        count.current += 1;\n      }, [label]);\n      return (\n        <div>\n          <div>Root</div>\n          <div data-testid=\"test\">{`${count.current}. ${label}`}</div>\n        </div>\n      );\n    };\n\n    const { render, rerender } = testComponent(<Cmp label=\"first render\" />);\n    expect(render.getByTestId('test').textContent).toBe('1. first render');\n\n    rerender(<Cmp label=\"second render\" />);\n    expect(render.getByTestId('test').textContent).toBe('2. second render');\n  });\n\n  it('should rerender component on props updates', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const Cmp = ({ label }: { label: string }) => {\n      const count = useRef(1);\n      const { a } = useStore(store);\n      useEffect(() => {\n        count.current += 1;\n      }, [label]);\n      return (\n        <div>\n          <span data-testid=\"content\">{`${count.current}. ${label}: ${a}`}</span>\n        </div>\n      );\n    };\n\n    const { context, render, rerender, act } = testComponent(<Cmp label=\"first render\" />, {\n      stores: [store],\n    });\n    expect(render.getByTestId('content').textContent).toBe('1. first render: 1');\n\n    await act(() => {\n      context.dispatch(event());\n    });\n    expect(render.getByTestId('content').textContent).toBe('2. first render: 2');\n\n    rerender(<Cmp label=\"second render\" />);\n    expect(render.getByTestId('content').textContent).toBe('2. second render: 2');\n  });\n});\n\n"))))),(0,s.kt)("h3",{id:"test-react-hooks"},"Test React-hooks"),(0,s.kt)("p",null,"Under the hood the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/testing-library/react-hooks-testing-library"},"@testing-library/react-hooks")," is used."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @jest-environment jsdom\n */\nimport { testHooks } from '@tramvai/test-react';\n\ndescribe('test', () => {\n  it('hook', async () => {\n    const { result, context, act } = testHook(() => useHook());\n\n    // test the result of hook call\n    expect(result.current).toBe('result');\n\n    // test the result after store update\n    act(() => {\n      context.dispatch(event('data'));\n    });\n  });\n});\n")),(0,s.kt)("p",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"More examples"),(0,s.kt)("p",null,(0,s.kt)("pre",{parentName:"p"},(0,s.kt)("code",{parentName:"pre",className:"language-typescript"},"/**\n * @jest-environment jsdom\n */\n\nimport { createReducer, createEvent, useStore } from '@tramvai/state';\nimport { useDi } from '@tramvai/react';\nimport { useRoute } from '@tinkoff/router';\nimport { waitRaf } from '@tramvai/test-jsdom';\nimport { testHook } from './testHook';\n\ndescribe('test/unit/react/testHook', () => {\n  it('should render simple hook', async () => {\n    const useHook = jest.fn((p: string) => 'result');\n\n    const { result } = testHook(() => useHook('test'));\n\n    expect(result.current).toBe('result');\n    expect(useHook).toHaveBeenCalledWith('test');\n  });\n\n  it('should rerender hook', async () => {\n    const event = createEvent<void>('evnt');\n    const store = createReducer('store', { a: 1 }).on(event, (state) => ({ a: state.a + 1 }));\n\n    const useHook = () => {\n      return useStore(store).a;\n    };\n\n    const { context, result, act } = testHook(() => useHook(), { stores: [store] });\n    expect(result.current).toBe(1);\n\n    await act(async () => {\n      await context.dispatch(event());\n      await waitRaf();\n    });\n\n    expect(result.current).toBe(2);\n  });\n\n  it('should work with di', async () => {\n    const useHook = () => {\n      return useDi({ provider: 'provider' }).provider;\n    };\n\n    const { result } = testHook(() => useHook(), {\n      providers: [\n        {\n          provide: 'provider',\n          useValue: 'test',\n        },\n      ],\n    });\n\n    expect(result.current).toEqual('test');\n  });\n\n  it('should work with routing', async () => {\n    const useHook = () => {\n      const route = useRoute();\n\n      return [route.actualPath, route.name];\n    };\n\n    const { result } = testHook(() => useHook(), {\n      currentRoute: { name: 'test', path: '/test/' },\n    });\n\n    expect(result.current).toEqual(['/test/', 'test']);\n  });\n});\n\n"))))))}u.isMDXComponent=!0}}]);