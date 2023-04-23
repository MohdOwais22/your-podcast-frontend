import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Signup from './pages/signup/Signup.js';
import Login from './pages/login/Login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
