import React,{useState} from "react";

function App() {

  const[name,setName]=useState("")
  const[lName,setLName]=useState("")
  
  function handleChange(event){
    console.log(event.target);//<input type="text" placeholder="What's your name?">
    console.log(event.target.type);//text
    console.log(event.target.placeholder);//What's your name?
    //How do you get the user input
    console.log(event.target.value);//semra
    setName(event.target.value);

  }
  function handleClick(event){
    setLName(name);
    event.preventDefault(); //when you have form element when you use some events such as onClcik , ir onSubbit etc the form elemnts
    //has default behavior it refreshs the page which we do not want

  }
  return (
    <div className="container">
      <h1>Hello {name} {lName}</h1>
      <form  onClick={handleClick}>
      <input 
      type="text" 
      placeholder="What's your name?"
      onChange={handleChange}
     value={name}
       />
       <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

// Part 2: create a var lName, show it ONLY AFTER USER CLICKS SUBMIT BUTTON.
// detect the change on when button click: onClick
// Part 3: input and button are form elements
// we can use onSUbmit to submit form elements
// but when you click on the submit button, the page refreshes automatically, that is a problme
// use event.preventDefault(); to cancel that default behaviourick
