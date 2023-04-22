import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Signup from './pages/signup/Signup.js';
import Login from './pages/login/Login.js';
import ProtectedRoute from './components/Route/ProtectedRoute.js';
import Home from './pages/Home/Home';

function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/home"
          element={<ProtectedRoute isAdmin={true} element={<Home />} />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
