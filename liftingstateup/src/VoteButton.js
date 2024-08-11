import React from "react";

function VoteButton({option,onVote}){

    return(
        <>
        <button onClick={onVote}>
            Vote for {option}
        </button>
        </>
        
    );
}
export default VoteButton;