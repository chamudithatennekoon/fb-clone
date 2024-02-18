import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Hero from './assets/components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Hero></Hero>
        </div>
    </>
  )
}

export default App
