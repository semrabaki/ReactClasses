import React from 'react';
import ReactDOM from 'react-dom';
// import pi from'./components/math';
// import {doublePi,triplePi} from'./components/math'; //when we export multiple items you need to use {}
//import {triplePi} from'./components/math'; //abive and this correct but above is recommendeed
import App from './components/App';

import * as mathData from './components/math';

//mathdata.pi==>{pi}

ReactDOM.render( //creates the virtual dom and this dom pass the js code to html and shows(renders) on the screen
 <div>
 
   <App/>

   <h1 style={{color:'purple',fontSize:'15px'}}>IMPORT and EXPORT </h1>
   <ul>
     <li>Num 1: {mathData.default}</li>
     <li>Num 2: {mathData.doublePi()}</li> //when we call function we need to use ()
     <li>Num 3: {mathData.triplePi()}</li>
   </ul>

 </div>,
  document.getElementById('root') //this get the  id element  and displays on the screen
);