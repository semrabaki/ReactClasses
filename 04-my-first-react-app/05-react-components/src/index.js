import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'; //This makes the import the header from the components folder
import List from './components/List';
import Footer from './components/Footer';
ReactDOM.render(
<div>
{/* Calling heder component . Use this form*/}
<Header/>
{/* This works but not common */}
<Header></Header>
 <List/>
  {/* I can use component in anywhere */}
  <Header/>
  <Footer/>
</div>,

  document.getElementById('root') //this get the  id element  and displays on the screen
);