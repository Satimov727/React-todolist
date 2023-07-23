export function Input() {

  return (

    <form className="mt-3 border px-4 flex flex-row w-[250px] ml-auto mr-auto shadow-lg border-x-fuchsia-600 border-y-blue-700 border-2">

      <input className="outline-none" type="text" placeholder="Enter the task..." />
      
      <button className="py-2 px-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold font-mono text-xl text-white h-full">Add</button>

    </form >

  )
}