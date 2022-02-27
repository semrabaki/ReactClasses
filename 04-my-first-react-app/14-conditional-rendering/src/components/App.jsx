import React from "react";
import Login from "./Login";
const isLogedIn = false;
function renderConditionally(){
  if(isLogedIn===true){
    return <h1>Hello! You successfully Logged in!</h1>
  }else{
    return <Login />
  }
}
function App() {
  return (
    <div className="container">
      {renderConditionally()}
    </div>
  );
}
export default App;
