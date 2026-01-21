
import { useState } from "react";


function Counter_App(params) {
    const [count,setCount]=useState(0);

 const Inc=()=>{
    setCount((prev)=>{
        return prev+=1
    })

 }
 const Dec=()=>{
    setCount((prev)=>{
        if(prev==0)
            return 0
       return prev-=1
    })

 }
 
    return(

        <>
        <h1>Counter Application..</h1>
        <div className="Dis">{count}</div>
        <div>
            <button onClick={Inc}>Inc..</button>
            <button onClick={Dec}>Dec..</button>
        </div>


        </>
    )
}

export default Counter_App;