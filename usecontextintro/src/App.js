//Scenario 1
// import React, { createContext } from "react";
// import Component1 from './Component1';

// export const ThemeContext=createContext();
// function App(){
//     const theme='dark';
//     return(
//         <ThemeContext.Provider value={theme}>
//             <Component1/>
//         </ThemeContext.Provider>
//     );
// }
// export default App;



import React, { createContext, useContext } from "react";
import Dashboard from "./Dashboard";
export const UserContext=createContext();

export default function App(){

  const user={name:'Alice',loggedIn:true};
  return(
    <UserContext.Provider value={user}>
      <Dashboard/>
    </UserContext.Provider>
  );

}