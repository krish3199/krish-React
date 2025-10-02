"use client"
import { useRouter } from "next/navigation"
import "./index.css"

const Home = () => {
  const router = useRouter()

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="form-container">
      <div className="home-content">
        <h1 className="form-title">Welcome, Krish!</h1>
        <p className="welcome-message">
          You have successfully logged into your account. Enjoy exploring the dashboard and all available features.
        </p>
        <div className="home-actions">
          <button className="btn btn-primary" style={{ marginBottom: "0.5rem" }}>
            View Dashboard
          </button>
          <button className="btn btn-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
