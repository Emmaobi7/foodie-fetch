import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
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
    console.log('Confirmpassword:', confirmPassword);

    // formData = {name, email, password};

    try {
      const resp = await fetch('http://localhost:5000/auth/sign_up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({'first_name': name, 'email': email, 'password1': password, 'password2': confirmPassword})
    })
      window.location.href = "/login";
      console.log(resp);
    } catch (error) {
    // Handle network errors, server errors, or any other exceptions
    console.error('Error during registration:', error.message);
    // Display an error message to the user or take appropriate actions
    }
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

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });



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
        <button className="button" type="submit">SignUp</button>
        <span> Do you have an account? <Link className="link" to="/login">Login</Link></span>
      </form>
    </div>
  );
};

export default SignUp;
