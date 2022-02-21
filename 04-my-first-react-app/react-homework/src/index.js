import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"

const myFavCity="Denver";
const img1="https://st3.depositphotos.com/1020618/13308/i/1600/depositphotos_133081938-stock-photo-close-up-of-kebab-sandwich.jpg";
ReactDOM.render( //creates the virtual dom and this dom pass the js code to html and shows(renders) on the screen
  <div>
   <h1>My Website</h1>
   <h4>My favorite food list!</h4>
   <ul>
     <li>Pasta</li>
     <li>Scrammbled Egg</li>
     <li>Chickpeas</li>
   </ul>
  <button className='button-style'>Click Me</button>
  <p className='city-style'>{myFavCity} is my favorite city</p>

   <div> <img src={img1}  className='image-style'/></div>
   <div>
   <table>
      <tr>
        <th className='th-style'>COUNTRY</th>
        <th>CAPITAL</th>
      </tr>
      <tr>
        <td>USA</td>
        <td>D.C.</td>
      </tr>
      <tr>
        <td>Germany</td>
        <td>Berlin</td>        
      </tr>
      <tr>
        <td>France</td>
        <td>Paris</td>        
      </tr>
    </table>

   </div>
  </div>,
  document.getElementById('root') //this get the  id element  and displays on the screen
);