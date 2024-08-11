import { formToJSON } from "axios";
import React, { useState } from "react";

export default function ControlledForm(){
    const[name, setName]=useState('');
    const[email, setEmail]=useState('');

    const handleNameChange=(event)=>{
        setName(event.target.value);
    }
    const handleEmailChange=(event)=>{
        setEmail(event.target.value);
    }
    const handleSubmit=(event)=>{
       event.preventDefault();
       alert(`Name:${name},Email:${email}`);
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" value={name} onChange={handleNameChange}/>
            </label>
            <br/>
            <label>
                Email:
                <input type="email" value={email} onChange={handleEmailChange}/>
            </label>
            <br/>
            <button type="submit">Submit </button>
        </form>
        
        </>
    );


}