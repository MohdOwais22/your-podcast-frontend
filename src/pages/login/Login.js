import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser, login } from '../../actions/user';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { isAuthenticated, error: authError } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     toast.success('Logged in successfully');
  //     navigate('/');
  //   }
  // }, [isAuthenticated, navigate]);

  useEffect(() => {
    if (authError) {
      setError(authError);
      toast.error(authError);
    }
  }, [authError]);

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(login({ email, password }));
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.response);
      toast.error(error.response);
    }
  };

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Welcome Back</h2>
          <Toaster />
          <form id="form" className="flex flex-col" onSubmit={onSubmit}>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Password"
              required
            />

            {error && <div className="error">{error}</div>}

            <button className="btn" type="submit">
              Login
            </button>
          </form>

          <p>
            Not registered yet?
            <Link to="/signup">
              <button className="btn-secondary">Register</button>
            </Link>{' '}
            Now
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
