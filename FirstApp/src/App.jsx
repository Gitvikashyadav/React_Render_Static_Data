import { useState } from 'react'


import './App.css'
import Counter_App from './Components/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Counter_App/>
    </>
      
  )
}

export default App
