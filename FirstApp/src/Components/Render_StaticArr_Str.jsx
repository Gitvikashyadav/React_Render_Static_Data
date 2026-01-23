 function Arr_Str (){

   const Arr=['python','java','complex','table'];
    return (<div>

        {
            Arr.map((el)=>{
                return (
                    <p>{el}</p>

                )
            })
       } </div>
        
    )

}
export default Arr_Str