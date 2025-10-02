import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css'   // 👈 CSS import

const Login = () => {
    let user = localStorage.getItem("user")
    let pass = localStorage.getItem("pass")

    let [username,setUsername] = useState("")
    let [password,setPassword] = useState("")

    let navigate = useNavigate()

    let handleLogin = ()=>{
        if(username === user && password === pass){
            alert("Login succesfull !!......")
            navigate('/Home')
        }
        else{
            alert("Invalid...!!")
        }
    }

  return (
    <>
      <div className="login-container">
        <h1 className="login-title">Login</h1>
        <input type="text" placeholder="Username" 
          onChange={(e)=>setUsername(e.target.value)} value={username} />
        <input type="password" placeholder="Password" 
          onChange={(e)=>setPassword(e.target.value)} value={password} />
            <Link to='/forget'>
                <span>Forget password</span>
                    </Link>
        <button onClick={handleLogin} className="login-btn">Log-in</button>
        
      </div>
    </>
  )
}

export default Login
