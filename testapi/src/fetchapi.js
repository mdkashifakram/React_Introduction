import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Fetchapi(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchdata();
    },[setData])

    const fetchdata=async()=>{
        try {
            const response=await axios.get('https://jsonplaceholder.typicode.com/users');
            setData(response.data);    
        }catch(error){
            console.error('Error fetching data :',error);
        }
    }


return(
<>
<h1>Pring data from Url</h1>
<ul>
    {data.map((user)=>(
        <li key={user.id}> {user.name} </li>
    ))}
</ul>
</>
);
}
        




