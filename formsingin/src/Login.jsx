"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./index.css"

const Login = () => {
  const user = "krish"
  const pass = "krish99"

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const router = useRouter()

  const handleLogin = () => {
    setError("")
    setSuccess("")

    if (!username || !password) {
      setError("Please fill in all fields")
      return
    }

    if (username === user && password === pass) {
      setSuccess("Login successful! Redirecting...")
      setTimeout(() => {
        router.push("/home")
      }, 1500)
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Welcome Back</h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <div className="form-group">
        <input
          type="text"
          className="form-input"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-input"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button className="btn btn-primary" onClick={handleLogin}>
        Sign In
      </button>

      <a href="/sign" className="form-link">
        <button className="btn btn-secondary">Create New Account</button>
      </a>
    </div>
  )
}

export default Login
