// //HELLO WORLD IN TRADITIONAL WAY
// //1. creating for h1 element
// var heading=document.createElement('h1');
// //2.assign a value
// heading.innerHTML='Hello World';
// //3.show this on the UI
// document.getElementById('root').appendChild(heading);//enables us to add a node to the end of a specified parent node's child node list.
// //Then you will see the Hello World on the UI

// //*************Creating paragraph and displaying on the UI*************************//
// var parag=document.createElement('p');
// parag.innerHTML='<i>Hello World!</i>';
// document.getElementById('root').appendChild(parag)

// //************Creating input and displaying on UI************************** */

// var passwordInput=document.createElement('input');
// document.getElementById('root').appendChild(passwordInput);

// /***********Giginv Line break */
// var lineBreak=document.createElement('hr');
// document.getElementById('root').appendChild(lineBreak)

// /*************Creating a button and displaying on the UI****************** */


// var submitButton= document.createElement('button');
// submitButton.innerHTML='Submit';
// document.getElementById('root').appendChild(submitButton);

//REACT WAy
import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>Hello World!</p>
    <input></input>
    <hr></hr>
    <button>Submit</button>
  </div>
  ,document.getElementById('root')
)

