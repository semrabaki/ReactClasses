import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
function App(){
    return <div>

        <Header/>
        <Note name="John" age="20" city="Dallas" noteImage="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"/>
        <Note name="Sam" age="30" city="San Anotnio" />
        <Note name="Tim" age="45" city="IStanbul"/>
        <Footer/>
    </div>
}

export default App;