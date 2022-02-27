import React from "react";
import Avatar from "./Avatar";
import Name from "./Name";


function Card(props){

    return <div>
     <div className="card">
           <div className="top">
           <Name name={ props.name}/>
            <Avatar img={props.img}/>  
            {/* //we are passing the data while calling the  avatar component */}
           </div>
           <div className="bottom">
             <p className="info">{props.tel}</p>
             <p className="info">{props.email}</p>
           </div>
         </div>
         </div>
   
 }

 export default Card;