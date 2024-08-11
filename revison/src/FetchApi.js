import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchApi(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchdata();
    },[])

    const fetchdata=async()=>{
            try{
        const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            }catch(error){
                console.log('Error Fetching Data', error);
            }
        }

    return(
        <>
        <h1>Printing data from URL</h1>
        <ul>
            {data.map((user)=>(
                <li key={user.id}>{user.name}</li>
        
            )

            )}
        </ul>
        </>
    
);
    }
