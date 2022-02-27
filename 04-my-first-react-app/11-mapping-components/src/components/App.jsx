import React from "react";
import Card from "./Card";
import contacts from "../contacts";
//import Avatar from "./Avatar";

function createCard(eachContant){

  // {When we use maps there should be one jey property whose values are unique and it will be used ad unique identifeir}
  return<Card
    key={eachContant.id}
    name={eachContant.name}
    img={eachContant.imgURL}
    tel={eachContant.phone}
    email={eachContant.email}
  />

}
// console.log(contacts[0].name); //Jim Carrey

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>

    {contacts.map(createCard)}

     {/* //WE are going to create map function that will return card component 3 times */}
      {/* <Card 
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
      /> */}
    </div>
  );
}

export default App;
