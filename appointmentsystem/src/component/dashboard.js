import React from "react";
import Appointment from "./appointment";
import Doctor from "./doctor";
import Patient from "./patient";

function Dashboard(){
    return(
        <div>
           <Doctor></Doctor> 
           <Patient></Patient>
           <Appointment></Appointment>
        </div>
    );
    
}

export default Dashboard;