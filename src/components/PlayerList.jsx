// import React from 'react'
// export default function PlayerList(props) {



//     const showTable = () => {
//         let newArr = props.arr.sort((a,b)=>{return b.wins - a.wins})
//         return newArr.map((val)=>{
//             return <tr>
//                 <td>{val.name}</td>
//                 <td>{val.wins}</td>
//                 <td>{val.games}</td>
//             </tr>
      
  
//         })
// }

//     const removeTable = () => {
//         let tab = document.getElementById('name-table');
//         tab.parentNode.removeChild(tab);
//         return false;
//     }

//   return (
//     <div>
//         <h2 id='p-list'>Player List:</h2>
//         <button onClick={removeTable} id='st-btn'>Scrole Table</button>
//         <br/>
//         <br/>
//     <table id='name-table'>
//             <tr>
//                 <td>name:</td>
//                 <td>win:</td>
//                 <td>games:</td>
//             </tr>
//         {showTable()}
//     </table>
//     </div>
//   )
// }
