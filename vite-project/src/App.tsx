import React from 'react'
import { Bar } from './components/Bar'
import { Product } from './components/Product'
import { Input } from './components/Input'

function App() {

  return (
    <>
      
      <Bar />

      <div className='space-y-10'>

        <Input />

        <Product />
        
      </div >
      
    </>
  )

}

export default App
