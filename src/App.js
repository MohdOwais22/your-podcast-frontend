import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Signup from './pages/signup/Signup.js';
import Login from './pages/login/Login.js';
import Home from './pages/Home/Home';
import NotFound from './pages/Not Found/NotFound';
import Dashboard from './pages/Dashboard/Dashboard';
import { useEffect } from 'react';
import { loadUser } from './actions/user';

function App() {
  const { isAuthenticated, loading, user } = useSelector((state) => state.user);
  console.log(user?.role);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/signup"
          element={!isAuthenticated ? <Signup /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route exact path="/home/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
