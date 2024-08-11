import React, { createContext } from "react";
import ComponentforUseContext1 from './ComponentforUseContext1';
export const ThemeContext=createContext();
export default function App(){
    const theme='dark';

    return(
        <ThemeContext.Provider value={theme}>
            <ComponentforUseContext1/>
        </ThemeContext.Provider>
    );
}