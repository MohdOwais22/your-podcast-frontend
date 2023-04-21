import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/SignUp" element={Signup} />
        <Route path="/Login" element={Login} />
      </Routes>
    </Router>
  );
}

export default App;
