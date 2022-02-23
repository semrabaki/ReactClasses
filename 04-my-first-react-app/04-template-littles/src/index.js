import React from 'react';
import ReactDOM from 'react-dom';

//1.Create a js variable
const fName='Semra';
const lName='Baki';
const fNumber=13;


//2. Use that variable in the JSX using {}
//Render a random number between 1-10 in a h4 elements

const randomNumber=Math.floor(Math.random() * (9) + 1) 

//Render Copyright 2022 on the UI.Get the date from a js object

const currentDate=new Date();
const currentYear= currentDate.getFullYear();

//Add the image and style it
const randomImage="https://picsum.photos/200";

//2.way of inline styling--Create an object to style
const myColor={color:"purple",
               fontSize:"20px",
                border: "2px solid blue"};


 myColor.color="green";
 myColor.border="3px dashed red";

//REACT PRACTISE
let greeting;
// CAMEL CASE
// VALUE SHOULD BE IN STRING customStyle.color='red'
let customStyle={color:"", fontSize:""};
const currentHour=currentDate.getHours();
console.log('CURRENT HOUR '+currentHour);

if(currentHour<12 )
{
  greeting='Good Morning';
  customStyle.color='red';
  customStyle.fontSize='2rem'
} else if(currentHour<18)
{
  greeting='Good Afternoon';
  customStyle.color='green';
  customStyle.fontSize='3rem'
}else{
  greeting='Good night';
  customStyle.color='blue';
  customStyle.fontSize='4rem'
}


ReactDOM.render( //creates the virtual dom and this dom pass the js code to html and shows(renders) on the screen
 <div>
  <h1 className="heading" 
  contentEditable="false"
  spellCheck="true">***********JS inside the JSX(html)****************</h1>
  {/* 1.way inline styling */}
   <h1 style={{color:'orange', 
              fontSize:"20px",
               border:"2px solid black"}}>Hello {fName} {lName}</h1>  
    {/* 2.way inline styling */}
   <h1 style={myColor}>Hello {fName} {lName}</h1>  
   <p>My favoriate number is {fNumber}</p>
   <p>My favoriate number is 3+4</p> //My favoriate number is 3+4
   <p className='my-parag'>My favoriate number is {3+4}</p>//My favoriate number is 7
   <h4>My random number is {randomNumber}</h4>
   <h4>My random number is {Math.floor(Math.random() * (9) + 1) }</h4>
   <hr></hr>
   <h1 className="heading">***********TEMPLATE LITERALS****************</h1>
   <p>1. Hello {fName} {lName}</p>
   <p>2. Hello {fName+ ' ' +lName}</p>
   <p>{`3.Hello ${fName} ${lName}`}</p>
   <p>3.Hello {`${fName} ${lName}`}</p>
   <p>Created by {fName+" " +lName}</p>
   <p>Copyright {currentYear}</p>
   <hr></hr>
   <h1>EXTERNAL STYLIGNG</h1>
   <img src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg " className='mountain_img' alt='mountain-img'/>
   <img
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Lula_kebab_2.jpg/2880px-Lula_kebab_2.jpg'
      className='kebab-img'
      alt='kebab-img'/>
    <img
      src='https://secure.img1-fg.wfcdn.com/im/08892826/resize-h800%5Ecompr-r85/4307/43073707/Playing+Tabby+Kitten+Statue.jpg'
      className='cat-img'
      alt='cat-img'/>
      <img
      src='https://picsum.photos/200?grayscale&blur=2'
      className='random-img'
      alt='cat-img'/>
      <img src={randomImage+'?grayscale'} className="random-img" alt='random-img'/>
      <hr></hr>
      <h1>*STYLING PRACTISE*</h1>
      <h4 style={customStyle}> {greeting} </h4>
      <p style={customStyle}>Lets go shopping</p>


 </div>,
  document.getElementById('root') //this get the  id element  and displays on the screen
);