"use strict";(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[934],{5234:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var i=t(7462),r=(t(7294),t(3905));const o={sidebar_position:3},a="Interrupting Execution",p={unversionedId:"examples/interrupting-execution",id:"examples/interrupting-execution",title:"Interrupting Execution",description:"Execution can be interrupted at any time by calling the interruptExecution method. This will terminate the running worker and spawn a new one.",source:"@site/docs/examples/interrupting-execution.md",sourceDirName:"examples",slug:"/examples/interrupting-execution",permalink:"/docs/examples/interrupting-execution",draft:!1,editUrl:"https://github.com/apprendre-python/apprendre-python.github.io/docs/examples/interrupting-execution.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},s={},u=[],m={toc:u},d="wrapper";function c(e){let{components:n,...t}=e;return(0,r.mdx)(d,(0,i.default)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"interrupting-execution"},"Interrupting Execution"),(0,r.mdx)("p",null,"Execution can be interrupted at any time by calling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"interruptExecution")," method. This will terminate the running worker and spawn a new one."),(0,r.mdx)("p",null,"Try running the example below and stopping the execution before it finishes."),(0,r.mdx)("p",null,"You can also set a timeout globally, see the ",(0,r.mdx)("a",{parentName:"p",href:"../introduction/api-reference#pythonprovider"},"API reference docs"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-python"},'import time\nstartTime = time.time()\nfor i in range(0, 10):\n   print(i)\n   # making delay for 1 second\n   time.sleep(1)\nendTime = time.time()\nelapsedTime = endTime - startTime\nprint(f"Elapsed Time = {elapsedTime:.2f}")\n')))}c.isMDXComponent=!0}}]);