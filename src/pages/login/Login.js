import React from 'react';
import { useForm } from 'react-hook-form';
import './Login.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import image from './63163.jpg';
import LockIcon from '@mui/icons-material/Lock';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="bg">
        <img src={image} alt="Logo" />
      </div>

      <div className="container__content">
        <div className="form__login">
          <h2>LOGIN</h2>
          <form className="textbox__login" onSubmit={handleSubmit(onSubmit)}>
            <div className="login__username">
              <div className="icons">
                <AccountCircleIcon />
              </div>
              <input
                spellCheck="false"
                type="text"
                placeholder="Username"
                {...register('username', { required: true })}
              />
              {errors.username && (
                <div className="alert">Username is required</div>
              )}
            </div>
            <div className="login__password">
              <div className="icon">
                <LockIcon />
              </div>
              <input
                spellCheck="false"
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <div className="alert">Password is required</div>
              )}
            </div>
            <p>
              Not logging in ? <a href="#">Sign up here</a>
            </p>
            <div id="spinner" className="spinner"></div>
            <button type="submit" className="submit_btn_login">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
