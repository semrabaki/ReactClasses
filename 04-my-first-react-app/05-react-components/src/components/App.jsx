import React from "react";
import Header from "./Header"; //They are at the same level
import List from "./List";
import Footer from "./Footer";

function App(){

  
    return <div>
        <Header/>
        {/* This works but not common */}
        <Header></Header>
        <List/>
        {/* Calling heder component . Use this form*/}
       <Header/>
       {/* I can use component in anywhere */}
       <Footer/>
    </div>;  


}

export default App;