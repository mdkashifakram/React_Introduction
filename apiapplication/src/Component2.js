// src/Component2.js
import React from "react";
 
function Component2({ data }) {
  return (
    <>
      <h2>Component2 showing Data</h2>
      {Array.isArray(data) && data.length > 0 ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </>
  );
}
 
export default Component2;
 