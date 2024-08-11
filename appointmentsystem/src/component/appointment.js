import React, { useState } from "react";
function Appointment(){
    const [count,setCount]=useState(0);

    return(
        <>
        <h1>Appointment</h1>
        <p>Count:{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Appointment_ClickMe</button>
        </>
    );

}
export default Appointment;