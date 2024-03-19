
import React, { useState } from 'react';
import './App.css';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log('Logging in with username:', username, 'and password:', password);
    if (rememberMe) {
    
      console.log('Remember Me enabled');
    }
  };

  const handleCheckboxChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleForgotPassword = () => {
   
    console.log('Forgot password clicked');
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="rememberMe" checked={rememberMe} onChange={handleCheckboxChange} />
        <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
      </div>
      <button type="submit" className="btn btn-block btn-primary">Login</button> 
      <button type="button" className="btn btn-link" onClick={handleForgotPassword}>Forgot Password?</button>
    </form>
  );
}

export default LoginForm;
