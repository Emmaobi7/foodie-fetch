import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import httpClient from '../httpClient';
import * as yup from 'yup';
import '../signin.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // Add your registration logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    const resp = await httpClient.post("http://localhost:5000/sign-up", {
      email,
      password,
    });
    console.log(resp);

    window.location.href = "/";
  };

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required()
  });

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data); // data contains the form input values
    handleRegister();
  };

  return (
    <div className="registration-container">
      <h2>SignUp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            value={confirmPassword}
            placeholder="Confirm Password..."
            {...register("confirmPassword")}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">SignUp</button>
        <span> Do you have an account? <Link to="/login">Login</Link></span>
      </form>
    </div>
  );
};

export default SignUp;
