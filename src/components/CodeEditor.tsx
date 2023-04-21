import React, { useEffect, useState } from 'react'
import { Packages } from 'react-py/dist/types/Packages'
import BrowserOnly from '@docusaurus/BrowserOnly'
import { useColorMode } from '@docusaurus/theme-common'
import { usePython } from 'react-py'
import Details from '@theme/Details';
import Controls from './Controls'
import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid'
import CodeBlock from '@theme/CodeBlock';

const editorOptions = {
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    highlightActiveLine: false,
    showPrintMargin: false
}

const editorOnLoad = (editor) => {
    editor.renderer.setScrollMargin(10, 10, 0, 0)
    editor.moveCursorTo(0, 0)
}

interface CodeEditorProps {
    python?: any
    code?: string
    tests?: [string, string]
    solution?: string
    packages?: Packages
}

// const KaTeXComponent = ({texExpression}) => {
//     const containerRef = useRef();
//     useEffect(() => {
//         katex.render(texExpression, containerRef.current);
//     }, [texExpression]);
//     return <div ref={containerRef} />
// }

export default function CodeEditor({ python, code, tests, solution, packages }: CodeEditorProps) {
    const [input, setInput] = useState(code ? code.trimEnd() : '')
    const [showOutput, setShowOutput] = useState(false)
    const { colorMode } = useColorMode()
    const output = usePython({ packages })
    const test = usePython({ packages })

    function run() {
        output.runPython(input)
        setShowOutput(true)
        if (!tests) return
        const test_str = `${input.replace(/print\(.*\)/g, '')}\n` + tests.map((test) => `print(${test[0]})`).join('\n')
        console.log(test_str)
        test.runPython(test_str)
    }

    function stop() {
        output.interruptExecution()
        setShowOutput(false)
    }

    let [verdict, verdict_message] = [-1, '✅ Tests passés avec succès !'];
    if (test.stderr) {
        verdict_message = `❌ Erreur : ${test.stderr}`;
        verdict = 0;
    }
    else if (test.stdout) {
        let lines = test.stdout.trim().split('\n');
        for (let i = 0; i < lines.length; i++)
            if (parseFloat(lines[i]).toFixed(2) !== parseFloat(tests[i][1]).toFixed(2)) {
                verdict_message = `❌ Erreur : ${tests[i][0]} renvoie ${lines[i]} au lieu de ${tests[i][1]}`;
                verdict = 0;
                break;
            }
        if (verdict === -1)
            verdict = 1
    }
    return (
        <div>
            <div className="relative mb-5 flex flex-col">
                <Controls
                    items={[
                        {
                            label: 'Run',
                            icon: PlayIcon,
                            onClick: run,
                            disabled: output.isLoading || output.isRunning,
                            hidden: output.isRunning
                        }
                    ]}
                />

                <BrowserOnly fallback={<div>Loading...</div>}>
                    {() => {
                        const AceEditor = require('react-ace').default
                        require('ace-builds/src-noconflict/mode-python')
                        require('ace-builds/src-noconflict/theme-textmate')
                        require('ace-builds/src-noconflict/theme-idle_fingers')
                        require('ace-builds/src-noconflict/ext-language_tools')
                        return (
                            <AceEditor
                                value={input}
                                mode="python"
                                name="CodeBlock"
                                fontSize="0.9rem"
                                className="min-h-[4rem] overflow-clip rounded shadow-md"
                                theme={colorMode === 'dark' ? 'idle_fingers' : 'textmate'}
                                onChange={setInput}
                                width="100%"
                                maxLines={Infinity}
                                onLoad={editorOnLoad}
                                editorProps={{ $blockScrolling: true }}
                                setOptions={editorOptions}
                            />
                        )
                    }}
                </BrowserOnly>
                {showOutput && (
                    <pre className="mt-4 text-left">
                        {output.stdout && output.stdout}
                        {verdict === 1 && verdict_message && <code className="">{verdict_message}</code>}
                        {verdict === 0 && verdict_message && <code className="">{verdict_message}</code>}
                        <code className="text-red-500">{output.stderr}</code>
                    </pre>
                )}
                    {verdict === 1 && solution && <Details summary='Solution' className='bg-green-100 dark:bg-green-900'>
                        <CodeBlock
                            language="python"
                            showLineNumbers>
                            {solution}
                        </CodeBlock>
                    </Details>}
            </div>
        </div>
    )
}
