import React from "react";
import Form from "./Form";

// Since I am doing everthing in Form element I should pass this userIsRegistred variable to 
//From component. To do that I should use props.
var userIsRegistered = true; 

function App() {
  return (
    <div className="container">
      <Form isRegistered={userIsRegistered} />
    </div>
  );
}

export default App;

//How  do you pass the value of userIsRegistred from App to From
//1.Create props:>  <Form IsRegistered={userIsRegistered} />
//2. get the props inside the From
//3.Lets show Register if userRegisters===false
//show "Login" if userIsRegistered===true
//4. if register is true then do not show the confirm password input
//if registrer is false then show the confrim password input
//This is the element=> <input type="password" placeholder="Confirm Password" />
