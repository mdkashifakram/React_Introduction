import React from 'react';

 function VoteButton({option,onVote}){
  return(
    <>
      <button onClick={onVote}>
        Vote For {option}
      </button>
    </>
    
  
  );

}
export default VoteButton;