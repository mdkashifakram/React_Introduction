import React, { useState } from "react";

function Patient(){
    const[count,setCount]=useState(0);
    return(
        <>
        <h1>Patient</h1>
        <p>Count:{count}</p>
        <button onClick={()=>{setCount(count+1)}}>Patinet_ClickMe</button>
        </>
    );
}

export default Patient;