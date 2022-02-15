import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render( //creates the virtual dom and this dom pass the js code to html and shows(renders) on the screen
  <div>
    <h1>My To Do List</h1>
      <ul>
        <li>Go to shopping</li>
        <li>Do exercise</li>
        <li>Reserve Hotel</li>
      </ul>
  </div>,
  document.getElementById('root') //this get the  id element  and displays on the screen
);