import React from 'react'
import { useState } from 'react'
import './homepage.css'

export default function HomePage(props) {
    const [name ,setName] = useState('');

    const showTable = () => {
        let newArr = props.arr.sort((a,b)=>{return b.wins - a.wins})
        return newArr.map((val,idx)=>{
            return <tr>
                <td>{idx+1+':   '}{val.name}</td>
                <td>{val.wins}</td>
                <td>{val.games}</td>
            </tr>
      
  
        })
}

    const removeTable = () => {
        let tab = document.getElementById('name-table');
        tab.parentNode.removeChild(tab);
        return false;
    }


    const validName =()=>{
        if(name.length != 0) 
        {
            props.start(name);
            // updateTable()
        } else 
        {
            alert('error');
           
        }
    }

  return (
    <div className='main-div'>
        <h1 id='header' >Ready For War!</h1>
        <input id='input-name' onChange={(e)=>{setName(e.target.value)}} type={'text'} placeholder={'Your Name...?'} value={name}/>
        <button onClick={validName}>START GAME!</button> <br/> <br/>
        <div className='mid-div'>
        <h2 id='p-list'>Player List:</h2>
        <button onClick={removeTable} id='st-btn'>Scrole Table</button>
        <br/>
        <br/>
    <table id='name-table'>
            <tr>
                <td>name:</td>
                <td>win:</td>
                <td>games:</td>
            </tr>
        {showTable()}
    </table>
        </div>
    </div>
  )
}
