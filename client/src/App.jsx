import { useState } from "react";
import "./App.css";


export default function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginMsg, setLoginMsg] = useState("")
  const [msgColor, setMsgColor] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    if (email === "a.a@a.a" && password === "a") {
      setLoginMsg("Success!")
      setMsgColor("green")
    } else {
      setLoginMsg("Wrong email or password!")
      setMsgColor("red")
    }
  }

  return (
    <div className="loginForm">
      <div className="center">
        <h1>Welcome back!</h1>
        <p className="text-muted">We are so happy to see you again!</p>
        <p style={{color:`${msgColor}`}}>{loginMsg}</p>
      </div>
      <form onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="emailInput">E-MAIL OR PHONENUMBER</label>
          <input
            type="email"
            id="emailInput"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="passwordInput">Password</label>
          <input
            type="password"
            id="passwordInput"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <a href="/">Forgot password?</a>
          <button type="submit" className="loginButton">Login</button>
          <p className="text-muted">
            Need a account? <a href="/">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}