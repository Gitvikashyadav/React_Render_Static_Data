import { useState } from "react";

function Random_colr(params) {
 
 let Arr=['red','pink','green','yellow','orange','blue','black'];
 let [newColor,SetNew_Color]=useState('white');
 let [ind,setInd]=useState(0)
 
 
  let Color_Gen=()=>{

    SetNew_Color(Arr[ind])
    setInd((prev)=>(prev+1)%Arr.length)
    
     document.body.style.backgroundColor = newColor;
   
    }
   

  

    return(
        <div>
        <button onClick={Color_Gen}>{newColor}</button>

        </div>
    )
    
}

export default Random_colr