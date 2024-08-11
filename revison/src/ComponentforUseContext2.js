import React, { useContext } from "react";
import { ThemeContext } from "./App";
export default function ComponentforUseContext2(){
    const theme=useContext(ThemeContext);
    return(
        <h1>The Theme is {theme} </h1>
    );
}