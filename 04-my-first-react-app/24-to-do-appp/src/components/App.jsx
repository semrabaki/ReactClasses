import React, {useState} from "react";
import ToDoItems from "./ToDoItems";

function App() {
  const [inputText, setInputText]=useState("");
  const[items,setItems]=useState([]);

  function handleChange(event){
    console.log(event.target.value)
    const newValue=event.target.value;
    setInputText(newValue);

  }
  function addItems(){
   
    setItems((prevItems)=>{
      //hold all of the previous items and add the new item at the end of the array
      return[...prevItems, inputText]

    });

    //Clearing input after click
    setInputText("");

  }
  return (
    <div className="container">
      <div className="heading">
        <h1>My To Do List</h1>
      </div>
      <div className="form">
        <input
         type="text"
          placeholder="enter your wish"
          value={inputText}
          onChange={handleChange}
          />
        <button onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
        
          {items.map((eachItem)=>{

            return  <ToDoItems text={eachItem}/>

          })}
         
        </ul>
      </div>
    </div>
  );
}

export default App;
