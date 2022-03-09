import React from 'react'

const UserCard = (props) => {

    //eachUser====>>>>props[login, avatar_url,html_url]
    const {id , avatar_url, html_url, login}=props;
    return <div key={id} style={{backgroundColor:"lightpink",textAlign:"center"}}>
    <p>{login}</p>
    <img 
    src={avatar_url} 
    alt={login}
    style={{width:"100px",borderRadius:"100px"}}></img>
    <br></br>
    <a 
    href={html_url}>{html_url}</a>
    </div>
}
export default UserCard;