import { useEffect, useState } from "react";
import React from 'react';

const UserCards = () => {
    //2.Create a variable as users
    const [users,setUser]=useState([]);
    //1. fetch the data
    //3.use use effect to control the render
    useEffect(() => {  
    //1. fetch the data
    fetch("https://api.github.com/users")
    .then((resp)=>resp.json())
    .then((data)=> {console.log(data)})
      
    }, [])
    
 
 
    return (
        //5.show the user info on the ui
      <>
         {users.map((eachUser)=>{
             {/* console.log(eachUser.id)
             console.log(eachUser.node_id) */}
             return <div>
                    <p>{eachUser.id}</p>
                    <p>{eachUser.node_id}</p>
                    <p>{eachUser.avatar_url}</p>

                  </div>
 
         })}
      </>
  )
}

export default UserCards;