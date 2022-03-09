import React, { useState } from "react";

function App() {
  // const [contact, setContact] = useState({
  //   fName: "",
  //   lName: "",
  //   email: ""
  // });

  const[fName,setFname]= useState('');
  const[lName,setLname]= useState('');
  const[email,setEmail]= useState('');



  return (
    <div className="container">
      <h1>
        Hello {fName} {lName}
      </h1>
      <p>{email}</p>
      <form>
        <input onChange={(event)=>{const fName=event.target.value; setFname(fName)}} name="fName" placeholder="First Name" value={fName}/>
        <input onChange={(event)=>{const lName=event.target.value; setLname(lName)}} name="lName" placeholder="Last Name" value={lName}/>
        <input onChange={(event)=>{const email= event.target.value; setEmail(email)}} name="email" placeholder="Email" value={email }/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
