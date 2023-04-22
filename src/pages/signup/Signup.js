import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import image from './Logoticles-0.1s-1280px.svg';
import './Signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <img className="music" src={image} alt="Logo" />

      <div className="Signup">
        <h2>SIGNUP</h2>
        <h3>Podcast for all</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="textbox">
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Name</label>
            <span className="material-symbols-outlined">account_circle</span>
          </div>
          <div className="textbox">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
            <span className="material-symbols-outlined">email</span>
          </div>
          <div className="textbox">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
            <span className="material-symbols-outlined">lock</span>
          </div>
          <p>
            Signed up already? <a href="#">Login here</a>
          </p>
          <button type="submit">
            Join The Tune
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </form>
      </div>
    </>
  );
};
export default Signup;
