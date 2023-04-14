"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[364],{7771:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>i});var o=t(7462),r=(t(7294),t(3905));const p={sidebar_position:2},a="Usage",d={unversionedId:"introduction/usage",id:"introduction/usage",title:"Usage",description:"How to use react-py in your project.",source:"@site/docs/introduction/usage.md",sourceDirName:"introduction",slug:"/introduction/usage",permalink:"/docs/introduction/usage",draft:!1,editUrl:"https://github.com/apprendre-python/apprendre-python.github.io/docs/introduction/usage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},i=[{value:"<code>PythonProvider</code> Provider",id:"pythonprovider-provider",level:2},{value:"<code>usePython</code> Hook",id:"usepython-hook",level:2},{value:"<code>usePythonConsole</code> Hook",id:"usepythonconsole-hook",level:2}],u={toc:i},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.mdx)(c,(0,o.default)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"usage"},"Usage"),(0,r.mdx)("p",null,"How to use ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-py")," in your project."),(0,r.mdx)("h2",{id:"pythonprovider-provider"},(0,r.mdx)("inlineCode",{parentName:"h2"},"PythonProvider")," Provider"),(0,r.mdx)("p",null,"First, wrap your app in a ",(0,r.mdx)("inlineCode",{parentName:"p"},"PythonProvider")," component. For props, see the ",(0,r.mdx)("a",{parentName:"p",href:"../introduction/api-reference#pythonprovider"},"API reference docs"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { PythonProvider } from 'react-py'\n\nfunction App() {\n  return (\n    // Add the provider to your app\n    <PythonProvider>\n      <Codeblock />\n    </PythonProvider>\n  )\n}\n\nrender(<App />, document.getElementById('root'))\n")),(0,r.mdx)("h2",{id:"usepython-hook"},(0,r.mdx)("inlineCode",{parentName:"h2"},"usePython")," Hook"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePython")," hook to run code and access both stdout and stderr. For props, see the ",(0,r.mdx)("a",{parentName:"p",href:"../introduction/api-reference#usepython-hook"},"API reference docs"),"."),(0,r.mdx)("p",null,"Try the example, ",(0,r.mdx)("a",{parentName:"p",href:"/docs/examples/basic-example"},"Basic Example"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { useState } from 'react'\nimport { usePython } from 'react-py'\n\nfunction Codeblock() {\n  const [input, setInput] = useState('')\n\n  // Use the usePython hook to run code and access both stdout and stderr\n  const { runPython, stdout, stderr, isLoading, isRunning } = usePython()\n\n  return (\n    <>\n      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}\n      <form>\n        <textarea\n          onChange={(e) => setInput(e.target.value)}\n          placeholder=\"Enter your code here\"\n        />\n        <input\n          type=\"submit\"\n          value={!isRunning ? 'Run' : 'Running...'}\n          disabled={isLoading || isRunning}\n          onClick={(e) => {\n            e.preventDefault()\n            runPython(input)\n          }}\n        />\n      </form>\n      <p>Output</p>\n      <pre>\n        <code>{stdout}</code>\n      </pre>\n      <p>Error</p>\n      <pre>\n        <code>{stderr}</code>\n      </pre>\n    </>\n  )\n}\n")),(0,r.mdx)("h2",{id:"usepythonconsole-hook"},(0,r.mdx)("inlineCode",{parentName:"h2"},"usePythonConsole")," Hook"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"usePythonConsole")," hook to emulate a Python console to run code and access both stdout and stderr. For props, see the ",(0,r.mdx)("a",{parentName:"p",href:"../introduction/api-reference#usepython-hook"},"API reference docs"),"."),(0,r.mdx)("p",null,"Try the example, ",(0,r.mdx)("a",{parentName:"p",href:"/docs/examples/repl"},"REPL"),"."),(0,r.mdx)("admonition",{type:"note"},(0,r.mdx)("p",{parentName:"admonition"},"The Python console is not affected by the globally set ",(0,r.mdx)("inlineCode",{parentName:"p"},"lazy")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"terminateOnCompletion")," props.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-tsx"},"import { useEffect, useState } from 'react'\nimport { usePythonConsole } from 'react-py'\nimport { ConsoleState } from 'react-py/dist/types/Console'\n\nfunction Codeblock() {\n  const [input, setInput] = useState('')\n  const [output, setOutput] = useState('')\n\n  const {\n    runPython,\n    stdout,\n    stderr,\n    isLoading,\n    isRunning,\n    banner,\n    consoleState\n  } = usePythonConsole()\n\n  useEffect(() => {\n    setOutput((prev) => [...prev, stdout])\n  }, [stdout])\n\n  useEffect(() => {\n    setOutput((prev) => [...prev, stderr])\n  }, [stderr])\n\n  function getPrompt() {\n    return consoleState === ConsoleState.incomplete ? '... ' : '>>> '\n  }\n\n  function run() {\n    setOutput((prev) => [...prev, getPrompt() + input + '\\n'])\n    runPython(input)\n  }\n\n  return (\n    <>\n      {isLoading ? <p>Loading...</p> : <p>Ready!</p>}\n      <p>\n        <b>Output</b>\n      </p>\n      <pre>\n        {banner}\n        <br />\n        {output}\n      </pre>\n      <pre>\n        {getPrompt()}\n        <form>\n          <textarea\n            onChange={(e) => setInput(e.target.value)}\n            placeholder=\"Enter your code here\"\n          />\n          <input\n            type=\"submit\"\n            value={!isRunning ? 'Run' : 'Running...'}\n            disabled={isLoading || isRunning}\n            onClick={(e) => {\n              e.preventDefault()\n              run()\n            }}\n          />\n        </form>\n      </pre>\n    </>\n  )\n}\n")))}m.isMDXComponent=!0}}]);