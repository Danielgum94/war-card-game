import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import GamePage from './components/GamePage';
import ScorePage from './components/ScorePage';


let player, computer;

let allPlayersArr = [];

function App() {

const[page, setPage] = useState(1);


const showPage = () => {
  if (page == 1) 
    return <HomePage player = {player} arr = {allPlayersArr}  start = {initGame} />
    else if (page == 2) 
    { 
      dealNewPack();
    return <GamePage player = {player} computer = {computer} next = {setPage} />
    }
   else {
    return <ScorePage player = {player} next = {setPage} start ={initGame}/>
  }
}

const initGame = (user) => {

  let compDeck = [], playerDeck = [];
  
  let cardDeck = new CardDeck();
  for (let i = 0; i < 26; i++)
  {
    compDeck.push(cardDeck.splitCard());
    playerDeck.push(cardDeck.splitCard());
  }

  let check = false;

  allPlayersArr.forEach((val)=>{
    if(val.name == user) {
      check = true;
      alert('welcome back ' + user)
      setPage(2)
    }
  })

    if(check == false)
{
  player = new Player(user,playerDeck);
  allPlayersArr.push(player);
  alert('Hello ' + user + ' Ready for War?')
}
   
   computer = new Player ('Compter', compDeck);
  setPage(2);
}

const dealNewPack = () => {
  let compDeck = [], playerDeck = [];
  
  let cardDeck = new CardDeck();
  for (let i = 0; i < 26; i++)
  {
    compDeck.push(cardDeck.splitCard());
    playerDeck.push(cardDeck.splitCard());
  }
  player.cardArr = playerDeck;
  computer.cardArr = compDeck;
}


  return (
    <div className="App">
      {showPage()}
    </div>
  );
}

export default App;

class Player {

  wins = 0;
  lose = 0;
  games =0;
  lastGame = true;

  constructor (name, cardArr){
    this.name = name;
    this.cardArr = cardArr;
  }
}

class CardDeck {
cards = [];

  constructor (){
    this.initCard()
  }
  initCard() {
    for (let i = 1; i < 14; i++) 
    {
      for (let j = 0; j < 4; j++) 
      {
        this.cards.push(i);
      
      }  
    }
  }
  splitCard(){
    let r = Math.floor(Math.random() * this.cards.length)
    let c = this.cards.splice(r,1);
    return c[0];
   
  }

}

