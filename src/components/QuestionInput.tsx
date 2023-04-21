import React, { useState } from 'react'

export default function QuestionInput({ solution }: { solution: string }) {
    const [input, setInput] = useState("")
    return (<>
        <div className="mb-4 grid grid-cols-5 gap-4 justify-center">
            <div className="col-span-1" />
            <div className="col-span-2">
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-none bg-neutral-200 px-2 py-2 placeholder-gray-400 shadow-sm focus:ring-0 dark:bg-neutral-600 sm:text-sm"
                    placeholder="Votre réponse"
                    onChange={(e) => setInput(e.target.value.trim())}
                />
            </div>
            <div className="col-span-1">
                <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    onClick={() => {
                        if (input.trim() === solution) {
                            alert("Bonne réponse !")
                        } else {
                            alert("Mauvaise réponse !")
                        }
                    }}
                >
                    Valider
                </button>
            </div>
        </div>

    </>
    )
}
