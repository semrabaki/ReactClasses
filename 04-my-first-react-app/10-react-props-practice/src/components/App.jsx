import React from "react";
import Card from "./Card";
import Avatar from "./Avatar";
import contacts from "../contacts";  //two .. because contacts is in the one levl upper than app. to reach we use ..
//console.log(contacts[0].name); //Jim Carrey
function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {/* <Avatar img="https://i.pinimg.com/originals/b2/3e/a3/b23ea34c18999b1bddb2f49199cfd871.jpg"/> */}
      <Avatar
      img={contacts[3].imgURL}/>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
       <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
       <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      />
    </div>
  );
}

export default App;
