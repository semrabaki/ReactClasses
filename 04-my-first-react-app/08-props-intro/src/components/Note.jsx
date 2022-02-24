import React from "react";

function Note(props){
    console.log(props)
    return <div className="note">
    <h1>This is the {props.name}</h1>
    <h1>I am  {props.age} years ols</h1>
    <h1>I am  {props.city} from </h1>
    <img src={props.noteImage}/>
    <p >This is the paragraph</p>
    </div>
}

export default Note;