import React, { useContext } from "react";
import {ThemeContext} from './App';

export default function Component2(){
    const theme=useContext(ThemeContext);
    return(
        <div>
        <h1>The Theme is {theme}.</h1>
        </div>
    );

}