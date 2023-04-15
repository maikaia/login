import "./App.css";

function App() {
  return (
    <div className="loginForm">
      <div className="center">
        <h1>Welcome back!</h1>
        <p className="text-muted">We are so happy to see you again!</p>
      </div>
      <div className="container">
        <label htmlFor="emailInput">E-MAIL OR PHONENUMBER</label>
        <input type="email" id="emailInput" />
        <label htmlFor="passwordInput">Password</label>
        <input type="password" id="passwordInput" />
        <a href="/">Forgot password?</a>
        <button className="loginButton">Login</button>
        <p className="text-muted">
          Need a account? <a href="/">Register</a>
        </p>
      </div>
    </div>
  );
}

export default App;
