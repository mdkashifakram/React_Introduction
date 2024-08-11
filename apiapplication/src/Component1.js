import React, { useEffect, useState } from "react";
import axios from "axios";
function Component1({ setData }) {
  useEffect(() => {
    fetchData();
  }, [setData]);
 
  const fetchData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(response.data);
  };
  return (
    <>
      <h2>Hi component 1, data fetched</h2>
    </>
  );
}
export default Component1;
 