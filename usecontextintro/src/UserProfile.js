import React, { useContext } from "react";
import { UserContext } from "./App";

export default function UserProfile(){
    const user=useContext(UserContext);
    return(
        <div>
        <h1>The user is {user.loggedIn?'Logged In ': 'Logged Out'}</h1>
        </div>
    );
}
