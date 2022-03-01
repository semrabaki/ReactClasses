import React from "react";
import Login from "./Login";
const isLogedIn = false;
// function renderConditionally(){
//   if(isLogedIn===true){
//     return <h1>Hello! You successfully Logged in!</h1>
//   }else{
//     return <Login />
//   }
// }

// inside retrun we can not pass a function which has if or for statement!!! But we can use function which returns expression
// function App() {
//   return (
//     <div className="container">
//       {renderConditionally()}
//     </div>
//   );
// }
//TASK
//If time is greater than 12, then show 'Why are you still working?
//otherwise, It is too early
//TASK
//If time is greater than 12, then show 'Why are you still working?
//otherwise, Do not show anythign

const time= new Date().getHours();
function App() {
  return (
    <div className="container">
      {/* {renderConditionally()} */}
    {isLogedIn===true?<h1>Hello! You successfully logged in!!</h1>:<Login/>}
    {time>12?<h2>Why are you still working?</h2>:<h2>It is too early{time} : {time}</h2>}
    {time>12?<h2>Why are you still working?</h2>:null} 
    {/* If we do not want to show anythign we should put null */}
    <div>Using && operatpr
   {/* WE can use && when we want to do something if contidition is true
    And want to ignore that if contdition is false> */}
    </div>
    {time>12 && <h2>It is too late:{time}</h2>}  
    {/* at above if the left is true and since the right part is alwats true if shows the message otherwise it ignores */}
    </div>
  );
}
export default App;