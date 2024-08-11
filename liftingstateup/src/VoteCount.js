import React from "react";

function VoteCount({option, count}){
    return(
        <>
      <p>
      {option}:{count} Votes

      </p>
        

        </>
    );

 }

export default VoteCount;