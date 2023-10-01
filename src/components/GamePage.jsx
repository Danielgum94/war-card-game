import { useState } from 'react'
import React from 'react'
import Cards from './Cards'
import './gamepage.css'


let playerScore = 0, computerScore = 0;


export default function GamePage(props) {


    const checkScore = () => {
       
        if(props.computer.cardArr[index] > props.player.cardArr[index])
            computerScore++;
        else if(props.computer.cardArr[index] < props.player.cardArr[index])
            playerScore++;
            console.log(computerScore,playerScore, 'Round:' + index)
            if(index == 25) 
            {
                props.player.games++;
                if(computerScore > playerScore)
                {
                    props.player.lose++;
                    props.player.lastGame = false;
                }
                    
                if(computerScore < playerScore)
                {
                    props.player.wins++;
                    props.player.lastGame = true;
                    
                }
                playerScore = 0;
                computerScore = 0;
                    props.next(3);
                    
            } else {

                setIndex(index + 1)
            }
        
    }

const returnPage = () => {
    props.next(1)
}

    const[index, setIndex] = useState(0);

  return (
    <div className='main-div1'>
        <h1 id='comp-name' className='names'>{props.computer.name}</h1>
        <div id='card-game'>
        <Cards num = {props.computer.cardArr[index]}/>
        <Cards num = {props.player.cardArr[index]}/>
        </div>
        <div id='div-n'><h1 id='user-name' className='names'>{props.player.name}</h1></div>
        <button onClick={checkScore}>NEXT MOVE</button>
        <button onClick={returnPage}>RETURN</button>  
        <h3 style={{textDecoration: 'underline'}}>Score: <br/> . {props.computer.name} - {computerScore} 
        <br/> . {props.player.name} - {playerScore} </h3> <br/>
        <h3>{'Round:' + index}</h3>
    </div>
  )
}
