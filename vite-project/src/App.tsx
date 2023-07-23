import {useState} from 'react'
import { Bar } from './components/Bar'
import { Product } from './components/Product'
import { Input } from './components/Input'

function App() {
  const [products, setProducts] = useState([
    { text: 'Wake up' },
    { text: 'Have breakfast' },
    { text: 'Exercise' },
    { text: 'Learn japanese(N?)' },
    { text: 'Play games' },
    { text: 'Sleep' },
  ])

  return (
    <main>
      
      <Bar />

      <div className='space-y-10'>

        <Input addTask={(text) => setProducts([...products, {text}])}/>

        <Product products={products} />
        
      </div >
      
    </main>
  )

}

export default App
