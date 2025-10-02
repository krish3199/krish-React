import React, { useState } from "react";
import "./App.css";

const App = () => {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [err, setErr] = useState("");

  let handellogin = () => {
    if (email === "" && pass === "") {
      setErr("Enter your email and password");
    } else if (email === "") {
      setErr("Enter your email....");
    } else if (pass === "") {
      setErr("Enter your password....");
    } else {
      setErr("Login successfully ✅");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handellogin} className="form-box">
        <h2>Login Form</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        {err && (
          <p className={err.includes("success") ? "success" : "error"}>{err}</p>
        )}
      </form>
    </div>
  );
};

export default App;
