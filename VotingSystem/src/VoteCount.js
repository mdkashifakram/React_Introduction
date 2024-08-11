import React from 'react';
function VoteCount({option,count}){
  return(
    <div>
      {option}:{count}votes
    </div>
  );
}
export default VoteCount;