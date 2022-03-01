import React from "react";

function App() {


  var  count=0;
  function increase(){
    count++;
    console.log(count);

  }

  return  <div className="container">
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
          </div>;
}

export default App;
