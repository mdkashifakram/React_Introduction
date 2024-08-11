import React, { useState } from "react";

function Doctor(){
    const[count, setCount]=useState(0);
    return(
        <>
        <h1>Doctor</h1>
        <p>Count:{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Doctor_ClickMe</button>
        </>
    );
}
export default Doctor;