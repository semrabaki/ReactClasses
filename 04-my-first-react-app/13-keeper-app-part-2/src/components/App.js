import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";



function App() {
  return (
    <div>
      <Header />
      {/* 1.way */} */}
      {/* in this case we can pny create 2 props title and content */}
      {/* <Note  title={notes[0].title} content={notes[0].content}/>
      <Note  title={notes[1].title} content={notes[1].content}/>
      <Note  title={notes[2].title} content={notes[2].content}/>
      <Note  title={notes[3].title} content={notes[3].content}/>    */}
      {/* {/* Onces we do the above we need to go into conponent and use porps parameter */}

      {/* 2.way */}
      {/* 1.WE can make function annonymus-delete name becuase we are using the function inside the map and we do nto need to call it */}
      {/* We can also make this an arrow function-delete the function key word and put an arro in there
      2.Delete the return andn{}together
      3/we can even delete parantheis aroung the input
      NOTE:we can only do this step IF THERE IS ONE SINGLE PARAMETER */}
      {/* WE map the notes array  data to Note components using the mpa function*/}
      {notes.map(
                  eachNote=><Note key={eachNote.key} title={eachNote.title} content={eachNote.content}/>
                  
                  )}
      <Footer />

      {/* We can delete the name of the fucntion and make is ananymos funtion because in this senerio we do not neew the name of the funciton */}
       {/* We can also delete return becuase function is only returning one single element but we need to delete the {}as well */}
    </div>
  );
}

export default App;
