import React, { useState } from "react";
import VoteButton from './VoteButton';
import VoteCount from './VoteCount';

export default function App(){
  const [votes,setVotes]=useState({optionA:0,optionB:0});


  const handleVoteA=()=>{
    setVotes((prevVotes)=>({...prevVotes,optionA:prevVotes.optionA+1}));
  };
  const handleVoteB=()=>{
    setVotes((prevVotes)=>({...prevVotes,optionB:prevVotes.optionB+1}));
  };

return(
  <>
  <h1>General Elections 2024</h1>
  <VoteButton option="Party_A" onVote={handleVoteA}/>
  <VoteCount option="Party_A" count={votes.optionA}/>
  
  <VoteButton option="Party_B" onVote={handleVoteB}/>
  <VoteCount option="Party_B" count={votes.optionB}/>
 
  </>
   
);
  
}