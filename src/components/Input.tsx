import React, { useEffect, useState } from 'react'

import { Packages } from 'react-py/dist/types/Packages'

import BrowserOnly from '@docusaurus/BrowserOnly'
import { useColorMode } from '@docusaurus/theme-common'
import { usePython } from 'react-py'

import Controls from './Controls'
import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid'

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

interface InputProps {
  code: string
  packages?: Packages
}

export default function Input(props: InputProps) {
  const { code, packages } = props
  const [input, setInput] = useState(code.trimEnd())
  const [showOutput, setShowOutput] = useState(false)

  const [userInput, setUserInput] = useState<string>()

  useEffect(() => {
    setInput(code.trimEnd())
    setShowOutput(false)
  }, [code])

  const { colorMode } = useColorMode()

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution
  } = usePython({ packages })

  async function run() {
    // Set the input variable in Python
    const code = `name = '${userInput}'

${input}
`

    runPython(code)
    setShowOutput(true)
  }

  function stop() {
    interruptExecution()
    setShowOutput(false)
  }

  function reset() {
    setShowOutput(false)
    setInput(code.trimEnd())
  }

  return (
    <>
      <div className="mb-4 lg:w-1/2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-100"
        >
          Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-none bg-neutral-200 px-2 py-1.5 placeholder-gray-400 shadow-sm focus:ring-0 dark:bg-neutral-600 sm:text-sm"
            placeholder="Type a name"
            onChange={(e) => setUserInput(e.target.value.trim())}
          />
        </div>
      </div>

      <div className="relative mb-10 flex flex-col">
        <Controls
          items={[
            {
              label: 'Run',
              icon: PlayIcon,
              onClick: run,
              disabled: isLoading || isRunning,
              hidden: isRunning
            },
            {
              label: 'Stop',
              icon: StopIcon,
              onClick: stop,
              hidden: !isRunning
            },
            {
              label: 'Reset',
              icon: ArrowPathIcon,
              onClick: reset,
              disabled: isRunning
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
                onChange={(newValue) => setInput(newValue)}
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
            <code>{stdout}</code>
            <code className="text-red-500">{stderr}</code>
          </pre>
        )}
      </div>
    </>
  )
}
