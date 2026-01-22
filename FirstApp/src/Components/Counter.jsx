
import { useState } from "react";
import './Counter.css'

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

 const Reset=()=>{
    setCount(0)
 }
 
    return (
        <div className="counter-wrapper">
            <div className="counter-container">
                <h1 className="title">✨ Counter Application ✨</h1>
                <p className="subtitle">Simple • Clean • Interactive</p>

                <div className="Dis">{count}</div>

                <div className="buttons">
                    <button className="inc" onClick={Inc}>➕ Increment</button>
                    <button className="dec" onClick={Dec}>➖ Decrement</button>
                </div>

                <button className="reset" onClick={Reset}>🔄 Reset</button>
            </div>
        </div>
    );
}


export default Counter_App;