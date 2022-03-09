import { useEffect, useState } from "react";
import React from 'react';
import UserCard from "./UserCard";

const UserCards = () => {
    //2.Create a variable as users
    const [users,setUser]=useState([]);
    //1. fetch the data
    //3.use use effect to control the render
    useEffect(() => {  
    //1. fetch the data
    fetch("https://api.github.com/users")
    .then((resp)=>resp.json())
    .then((data)=> {setUser(data)
                    console.log(data)})
      
    }, [])
    
 
 
    return (
        //5.show the user info on the ui
        //6.use key value pairs to style the data in a nice way
      <>
         {users.map((eachUser)=>{
             {/* console.log(eachUser.id)
             console.log(eachUser.node_id) */}
             return <UserCard id={eachUser.id} avatar_url={eachUser.avatar_url} html_url={eachUser.html_url}/>
 
         })}
      </>
  )
}

export default UserCards;