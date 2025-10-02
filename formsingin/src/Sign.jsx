"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import "./index.css"

const Sign = () => {
  const email = "admin@mail.com"
  const pass = "123"

  const [emails, setEmail] = useState("")
  const [emailpass, setEmailpass] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const router = useRouter()

  const handelSign = () => {
    setError("")
    setSuccess("")

    if (!emails || !emailpass) {
      setError("Please fill in all fields")
      return
    }

    if (email === emails && pass === emailpass) {
      setSuccess("Account created successfully! Redirecting...")
      setTimeout(() => {
        router.push("/")
      }, 1500)
    } else {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="form-container">
      <h1 className="form-title">Create Account</h1>

      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <div className="form-group">
        <input
          type="email"
          className="form-input"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={emails}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          className="form-input"
          placeholder="Create a password"
          onChange={(e) => setEmailpass(e.target.value)}
          value={emailpass}
        />
      </div>

      <button className="btn btn-primary" onClick={handelSign}>
        Sign Up
      </button>

      <a href="/" className="form-link">
        <button className="btn btn-secondary">Already have an account?</button>
      </a>
    </div>
  )
}

export default Sign
