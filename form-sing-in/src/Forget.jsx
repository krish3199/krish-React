import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

const Forget = () => {
  let [news,setNew] = useState("")
  let [con,setCom] = useState("")

  let navigate = useNavigate()
  let handelchange = ()=>{
    if(news === con){
      alert("Password changed successfully ✅")
      navigate('/Login')
      localStorage.setItem("pass", news)
    }
    else{
      alert('Passwords do not match ❌')
    }
  }

  return (
    <div className="forget-container">
      <h2>Reset Password</h2>
      <input 
        type="password" 
        placeholder='Create a new password...' 
        onChange={(e)=>setNew(e.target.value)} 
        value={news}
      />
      <input 
        type="password" 
        placeholder='Confirm password...' 
        onChange={(e)=>setCom(e.target.value)} 
        value={con}
      />
      <button onClick={handelchange}>Change Password</button>
    </div>
  )
}

export default Forget
