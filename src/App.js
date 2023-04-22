import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import Signup from './pages/signup/Signup.js';
import Login from './pages/login/Login.js';
// import ProtectedRoute from './components/Route/ProtectedRoute.js';
import Home from './pages/Home/Home';
import NotFound from './pages/Not Found/NotFound';
import PodcastScreen from './pages/DisplayScreen/PodcastScreen';

function App() {
  // const { isAuthenticated, user } = useSelector((state) => state.user);

  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<ProtectedRoute element={<Home />} />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/podcast/:obj" element={<PodcastScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
