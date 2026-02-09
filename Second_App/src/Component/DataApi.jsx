import { useState, useEffect } from "react";
import axios from "axios";

function Api2_Data() {

  const [data, setData] = useState(null);
  const city = "Bihar";

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=46726134141b4e8789054905252511&q=${city}&aqi=no`
        );
        setData(res.data);
        console.log(res);
        
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <>
          <p>City: {data.location.name}</p>
          <p>Temp: {data.current.temp_c} °C</p>
        </>
      )}
    </div>
  );
}

export default Api2_Data;
