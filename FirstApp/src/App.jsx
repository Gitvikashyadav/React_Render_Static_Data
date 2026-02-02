import { useState } from 'react'


import './App.css'
import Counter_App from './Components/Counter'
import Inline_css from './Components/Inline_css_and_props'
import Api_Data from './Components/ApiData_render'
import Form_first from './Components/Form_first_creation'
import Random_colr from './Components/Color_Generat'



function App() {
  const [count, setCount] = useState(0)
  let sty1={
    "padding":'20px',"boader-radius":"6px","background":"yellow","margin":"5px",'lbl':{"text":"login"}}
     let sty2={
    "padding":'20px',"boader-radius":"6px","background":"pink","margin":"5px",'lbl':{"text":"Regi"}}
     let sty3={
    "padding":'20px',"boader-radius":"6px","background":"grey","margin":"5px","lbl":{"text":"logout"}}
   let arr=[sty1,sty2,sty3]

  return (
    <>
    {/* <Counter_App/> */}
    {/* <Inline_css sty1={sty1} label={"login"}/> */}
    {/* <Inline_css sty1={sty2} label={"Regi"}/>
    <Inline_css sty1={sty3} label={"logout"}/> */}
    {/* {
    arr.map((obj)=>{
      return <Inline_css sty1={obj} />
    })} */}

    {/* <Api_Data/> */}

    {/* <Form_first/> */}
    <Random_colr/>
     </> 
  )
}

export default App
