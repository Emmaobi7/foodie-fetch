import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../signin.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const resp = await fetch('http://localhost:5000/auth/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'email': email, 'password': password})
      })

      console.log(resp);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
    };

  return (
    <div className="registration-container">
      <h2>Login</h2>
      <form action="">
      <div className="log-input-container">
        <input
          type="text"
          value={email}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="log-input-container">
        <input
          type="password"
          value={password}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      </form>
      <button className="log-button" type="submit" onClick={handleLogin}>Login</button>
      <span> Don't have an account? <Link className="log-link" to="/SignUp">signup</Link></span>
    </div>
  );
};

export default Login;
