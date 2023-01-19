import React, { useState } from 'react'
import axios from "axios";
import "./Email.css"



function Email() {
  
  const[email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
 const  handleEmail = async (e)=>{
  const formData={
  
    email:email,
   
  }

  e.preventDefault()
  await axios.post(url,JSON.stringify(formData))
  .then(res => setMessage('email sent'))

  }
  
  const url = "localhost:8000/email"
  
  return (
    <div className='container'>
      <div className=' position-relative' id='first-background'>
   
      </div>
      <div id='second-background'>
        <h2> Never miss a drop</h2>
        <p> Get updates about latest NFTs and Art</p>
        <div id='input-container'>
         <form>
         <input type='text' placeholder='Enter your Email' id='input' value={email} onChange ={ e => setEmail(e.target.value)}/>
          <button id='input-button' onClick={handleEmail}> Subscribe</button>
         </form>
        </div>
        <h1> {message}</h1>
        </div> 
     
    </div>
      
      
   
  )
}

export default Email 