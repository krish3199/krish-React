import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Admin = () => {
    let user = 'krish99@mail.com'
    let pass = 'krish99'

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let handleLogin = () => {
        if (username === user && password === pass) {
            alert("Login succesfull !!......")
            navigate('/Adminadd')
        }
        else {
            alert("Invalid...!!")
        }
    }

    return (
        <>
            <div className="login-container">
                <h1>Admin-Login</h1>
                <input type="text" placeholder="Enter admin email"
                    onChange={(e) => setUsername(e.target.value)} value={username} />
                <input type="password" placeholder="Enter admin password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} className="login-btn">Login to admin</button>
               
            </div>
        </>
    )
}

export default Admin
