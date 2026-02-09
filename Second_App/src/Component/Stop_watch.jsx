import { useState,useEffect } from "react"

function Stop_watch(params) {

 let [sec,set_Sec]=useState(55)
 let [min,set_min]=useState(0)
 let [Interval_id,set_Interval]=useState(-1)



useEffect(()=>{
    if(sec==60){
        
        
        set_min(m=>min+1)
        set_Sec(0)

    }


},[sec])
 

 let Sec_Inc=()=>{

    if(Interval_id==-1){
    set_Sec(pre_Sec=>pre_Sec+1)
    
    }

 
}

 let Start=()=>{
    let id=setInterval(Sec_Inc,1000)
    set_Interval(id)

 }

 let Stop=()=>{
    clearInterval(Interval_id)
    set_Interval(-1)
 }

 let Reset=()=>{
    Stop()
    set_Sec(0)
    set_min(0)
 }
    return(
        <div>

            <div className="Disp">{min<10? '0'+min:min}:{sec<10? '0'+sec:sec}</div>
            <div>
                <button onClick={Start}>Start</button>
                <button onClick={Stop}>Stop</button>
                <button onClick={Reset}>Reset</button>
            </div>

        </div>
    )
    


}
export default Stop_watch