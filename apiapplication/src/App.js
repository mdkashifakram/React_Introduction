import React, { useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
 
export default function App() {
  const [data, setData] = useState(null);
  return (
    <div className="App">
      <Component1 setData={setData} />
      <Component2 data={data} />
    </div>
  );
}
 