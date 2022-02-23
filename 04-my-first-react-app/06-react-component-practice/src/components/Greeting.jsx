import React from "react";
//cut the customStyle and  greeting related codes

//REACT PRACTISE
let greeting;
// CAMEL CASE
// VALUE SHOULD BE IN STRING customStyle.color='red'
const currentDate=new Date();
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

function Greeting(){
return <div>
     <hr></hr>
      <h1>*STYLING PRACTISE*</h1>
      <h4 style={customStyle}> {greeting} </h4>
      <p style={customStyle}>Lets go shopping</p>
</div>
}

export default Greeting;
