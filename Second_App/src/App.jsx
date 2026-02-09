import { useState } from 'react'

import './App.css'
import Dig_Clock from './Component/Digital_Clock'
import Stop_watch from './Component/Stop_watch'
import Api2_Data from './Component/DataApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Dig_Clock/>
     <Stop_watch/>
     <Api2_Data/>
    </>
  )
}

export default App
