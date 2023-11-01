import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import '../App.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Add your registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null])
        .required()
  });

  const { register, handleSubmit } = useForm();

  return (
    <div className="registration-container">
      <h2>SignUp</h2>
      <form>
         <div className="input-container">
            <input
              type="text"
              value={name}
              placeholder="Full Name..."
              {...register("fullName")}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-container">
              <input
                type="text"
                value={email}
                placeholder="Email..."
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
              />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              placeholder="Password..."
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              value={password}
              placeholder="confirm Password..."
              {...register("confirmpassword")}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button onClick={handleSubmit(handleRegister)}>SignUp</button>
          <span> Do you have an account? <Link to="/login">Login</Link></span>
        </form>
    </div>
  );
};

export default SignUp;
