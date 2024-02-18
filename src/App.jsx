import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './assets/components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='main'>
      <Hero></Hero>
      </div>
  )
}

export default App
