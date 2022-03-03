import React, { useState } from "react";
import DigitalClock from "./DigitalClock";

function App() {


  //var  count=0;
 let [count, setCount]= useState(0);  
 //This means count=0;
 // UseState returns an array //setCount is used to update the value
  function increase(){
    // count++;
    // console.log(count);
    setCount(count+1); //this is for showing the changes on the UI-without (count++ is not wokring in here!!!)

  }
  function decrease(){
    // count++;
    // console.log(count);
    setCount(count-1); //this is for showing the changes on the UI-without (count++ is not wokring in here!!!)

  }
  function reset(){

    setCount(0);

  }

  return  <div className="container">
            <h1>{count}</h1>
            {/* below shows how you cna do it with arrow function */}
            <button onClick={()=>{setCount(count+1)}}>+</button>     
            {/* instead of using handle click in here we can just place the arrow functuin here or just put the setCount */}
            {/* Below shows how you can do it with regular function */}
            <button onClick={decrease}>-</button>  

            <button className="reset-button" onClick={reset}>Reset</button>  
            <br/>
            <br/>
            <DigitalClock/>
          </div>;
}

export default App;
