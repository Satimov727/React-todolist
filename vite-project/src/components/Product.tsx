interface IProps {
  products: {
    text: string
  }[]
}

export function Product({products}: IProps) {

  return (
    <div className="flex flex-col-reverse gap-y-10">
      {products.map(p => (
        <div className="border-2 py-2 px-4 rounded-xl flex font-bold font-mono text-xl w-[900px] ml-auto mr-auto shadow-lg border-x-purple-600 border-y-fuchsia-600">
        {p.text}
        <input type="checkbox" className="h-5 w-6 ml-auto mt-auto mb-auto accent-blue-600"/>
      </div>
      ))}
    </div>
  )

}
