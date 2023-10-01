import React from 'react'

export default function ScorePage(props) {

    const checkWinOrLose = () => {
        if(props.player.lastGame == true)
        return 'You Win';
        if(props.player.lastGame == false)
        return 'You Lose';

    } 

const showScore = () =>{
    return <h2 style={{color:'red'}}>computer:{props.player.lose} /  player:{props.player.wins}</h2>
}



  return (
    <div style={{border: 'black 1px solid', width: '250px', height: '250px', marginLeft: '40%'}}>
      <button onClick={()=>{props.next(1)}}>X</button>
        <h1>{checkWinOrLose()}</h1> 
        {showScore()}<br/> <br/>
        <button onClick={()=>{props.next(2)}}>Play Again?</button>
    </div>
  )
}
