import React, { useState,useEffect } from 'react'

const App = () => {
   //initial value empty string
   //When i click on button 1 then it show 'button1'

   const [buttonNumber,setButtonNumber]=useState('');
   const [items,setItems]=useState([]);
   const[isLoaded,setIsLoaded]=useState(false);
   //WE may use a boolean to check if the fecthing is succesfful pr not
   //and use that variable  to add additional condiitoon

   
//    console.log('code 1');
//    useEffect(() => {
//      console.log('code 2')
//    })
//   useEffect(() => {
//     console.log('code 3')
//   },[])

useEffect(() => {
    // set button  number in iicndeki texti fethcin icine pass ediyoruz asagida
    fetch(`https://jsonplaceholder.typicode.com/${buttonNumber}`)
    .then(response => response.json())
    // .then(json => console.log(json))
    .then(data => setItems(data)); //passing the data  to items array
                  setIsLoaded(true);
    console.log(items);//items=data
  },[buttonNumber])
   
  
  return (
    <div>
    <button onClick={()=>{setButtonNumber('posts')}}>Post Button</button>
    <button onClick={()=>{setButtonNumber('comments')}}>Cpmments Button</button>
    <button onClick={()=>{setButtonNumber('users')}}>Users Button</button>
    <p>{buttonNumber}</p>
    <div>
        {items.map((eachItem)=>{
            {/* Json datayi ekrana  bastirmak icin JSON.Styring methodunu kullaniyoruz */}
            return <pre>{JSON.stringify(eachItem)}</pre>
        }
       )}
    </div>
    </div>
  )
}

export default App;