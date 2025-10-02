import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './App.css'   

const Sign = () => {
    let [emails, setEmail] = useState("")
    let [emailpass, setEmailpass] = useState("")

    let navigate = useNavigate()
    let handelSign = () => {
        if (emails && emailpass != "") {
            alert("succesfully")
            navigate('/login')
            localStorage.setItem("user", emails)
            localStorage.setItem("pass", emailpass)
        }
        else {
            alert("pls a username or password....!!")
        }
    }

    return (
        <>
            <div className="sign-container">
                <h1 className="sign-title">Creat a username or password....</h1>
                <input type="text" placeholder="Enter your username"
                    onChange={(e) => setEmail(e.target.value)} value={emails} />
                <input type="password" placeholder="Enter your password..."
                    onChange={(e) => setEmailpass(e.target.value)} value={emailpass} />
                  
                <button onClick={handelSign} className="sign-btn">Sign-up</button>
            </div>
        </>
    )
}

export default Sign
