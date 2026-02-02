
import axios from "axios";
import { useEffect ,useState} from "react";
function Api_Data(){

let [Data,SetData]=useState([])
 let fetch_data=async ()=>{
    const Res= await axios.get("https://jsonplaceholder.typicode.com/users");
    console.log(Res.data)
     SetData(Res.data)
 }

 useEffect(()=>{
 fetch_data();
 },[])
  
    return(
      <div>
        {
         Data.map((obj)=>{4
            return (<div key={obj.id}>
                <p>Name:{obj.name}</p>
                <p>Email:{obj.email}</p>
            </div>);
         })
        }
      </div>
        
    )

}

export default Api_Data