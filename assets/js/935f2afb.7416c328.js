"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"0":[{"type":"link","label":"Variables","href":"/docs/python/variable","docId":"python/variable"},{"type":"link","label":"Fonctions","href":"/docs/python/fonction","docId":"python/fonction"}]},"docs":{"examples/basic-example":{"id":"examples/basic-example","title":"Basic Example","description":"This is a basic example of using the usePython hook and react-ace to render an interactive code block."},"examples/custom-modules":{"id":"examples/custom-modules","title":"Custom Modules","description":"By default, Python modules are cached. If you intend to make changes to an imported module, it needs to be watched and reloaded."},"examples/file-system":{"id":"examples/file-system","title":"File System","description":"Some internal Pyodide file system methods are exposed."},"examples/interrupting-execution":{"id":"examples/interrupting-execution","title":"Interrupting Execution","description":"Execution can be interrupted at any time by calling the interruptExecution method. This will terminate the running worker and spawn a new one."},"examples/making-api-calls":{"id":"examples/making-api-calls","title":"Making API Calls","description":"Due to sockets being unavailable in Pyodide, packages such as requests are currently unsupported out of the box."},"examples/matplotlib":{"id":"examples/matplotlib","title":"Matplotlib","description":"By default, matplotlib relies on the import statement from js import document, which does not work from within a web worker."},"examples/repl":{"id":"examples/repl","title":"REPL","description":"This is an example of using the usePythonConsole hook to render an interactive console."},"examples/user-input":{"id":"examples/user-input","title":"User Input","description":"The behavior of stdin is controlled by Pyodide, the Python distribution we use, which calls a Window.prompt() to collect user input and blocks execution on the main thread. This behavior is not currently extensible, as blocking the main thread is a special case and is only allowed for a handful of methods. However, there is active development working toward a solution to this issue and we hope to have input() usage patched in the near future."},"examples/using-packages":{"id":"examples/using-packages","title":"Using Packages","description":"Packages can be installed using the following Packages object and can be imported either globally through the provider, or per instance. For props, see the API reference docs."},"introduction/getting-started":{"id":"introduction/getting-started","title":"Getting Started","description":"Run Python (3.10) code directly in the browser using Pyodide."},"introduction/nextjs-usage":{"id":"introduction/nextjs-usage","title":"Usage with Next.js","description":"react-py is not Server-Side Rendering (SSR) friendly, due to client only APIs such as web workers. To use this package with Next.js, ensure it is loaded on the client side only."},"introduction/usage":{"id":"introduction/usage","title":"Usage","description":"How to use react-py in your project."},"python/fonction":{"id":"python/fonction","title":"Fonctions","description":"\xc9crire une fonction f(x) renvoyant $x^2$.","sidebar":"0"},"python/variable":{"id":"python/variable","title":"Variables","description":"","sidebar":"0"}}}')}}]);