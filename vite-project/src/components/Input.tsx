import { useState, useCallback } from "react"

interface IProps{
  addTask: (task: string) => void
}

export function Input({ addTask }: IProps) {
  const [value, setValue] = useState('')

  const addTodo = useCallback(() => {
    addTask(value)
    setValue('')
  }, [value])

  return (

    <form onSubmit={(e) => {e.preventDefault()}} className="mt-3 border px-4 flex flex-row w-[250px] ml-auto mr-auto shadow-lg border-x-fuchsia-600 border-y-blue-700 border-2">

      <input value={value} onChange={e => setValue(e.target.value)} className="outline-none" type="text" placeholder="Enter the task..." />
      
      <button onClick={addTodo} className="py-2 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold font-mono text-xl text-white h-full">Add</button>

    </form >

  )
}
