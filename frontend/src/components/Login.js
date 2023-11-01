import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="">
      <div className="input-container">
        <input
          type="text"
          value={email}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="input-container">
        <input
          type="password"
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      </form>
      <button onClick={handleLogin}>Login</button>
      <span> Don't have an account yet with foodie-fetch? <Link to="/SignUp">signup</Link></span>
    </div>
  );
};

export default Login;
