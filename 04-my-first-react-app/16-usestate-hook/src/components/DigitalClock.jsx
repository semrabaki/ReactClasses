import React, { useState } from 'react'

function DigitalClock() {


    //let currentTime= new Date().toLocaleTimeString();

    const [latestTime,setLatestTime]=useState(new Date().toLocaleTimeString());

    function updateTime(){
        //get the latest time
       let now= new Date().toLocaleTimeString();
        //update the latest time
        setLatestTime(now);

    }

    // this is for updateing the time every 1000 milisecond it only updates the time because of the virtual dom
    setInterval(updateTime,1000) 
    
   
  return (
    <div> 
         <h1 style={{fontSize:"40px",width:"500px"}}>Digital  Clock</h1>
        <h1 className="current-time">{latestTime}</h1>
        <button onClick={updateTime} className="getTimeButton">Time Button</button>
    </div>
  )
}

export default DigitalClock;