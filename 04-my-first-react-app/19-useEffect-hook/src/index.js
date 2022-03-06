import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/App";

ReactDOM.render( //creates the virtual dom and this dom pass the js code to html and shows(renders) on the screen
  <h1><App/></h1>,
  document.getElementById('root') //this get the  id element  and displays on the screen
);