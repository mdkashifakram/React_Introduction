import React, { useState } from 'react';
import VoteButton from './VoteButton';
import VoteCount from './VoteCount';

function App(){
  const[votes,setVotes]=useState({optionA:0,optionB:0});

  const handleVoteA=()=>{
    setVotes((prevVotes)=>({...prevVotes,optionA:prevVotes.optionA+1}));
  };

const handleVoteB=()=>{
  setVotes((prevVotes)=>({...prevVotes,optionB:prevVotes.optionB+1}));
};

  return(
    <div>
    <h1>Vote for your Favourite Players</h1>
    <VoteButton option="option A" onVote={handleVoteA} />
    <VoteButton option="option B" onVote={handleVoteB} />
    <VoteCount option="Option A" count={votes.optionA}/>
    <VoteCount option="Option B" count={votes.optionB} />
    </div>
  );

}
export default App;