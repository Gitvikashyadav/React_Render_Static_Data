import { useState,useEffect } from "react";
import './Digital.css'


function Dig_Clock() {

    let [time,set_Time]=useState(0)

    let SetTime=()=>{
        // let obj=new Date()

       set_Time( new Date().toLocaleTimeString())
    }

    useEffect(()=>{
        setInterval(SetTime,1000)


    },[time])

    
    return(
        <div className="con">
        <h1>{time}</h1>
        </div>
    )
    
}
export default Dig_Clock