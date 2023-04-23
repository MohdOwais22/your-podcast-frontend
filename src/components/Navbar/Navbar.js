import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ user }) => {
  const location = useLocation();
  const [path, setPath] = useState();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <nav className="container__navbar">
      <div className="navbar__left">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Home</h1>
        </Link>
      </div>
      <div className="navbar__right">
        {user?.role === 'admin' && path !== '/home/dashboard' && (
          <Link
            to="/home/dashboard"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Button
              disableElevation
              // startIcon={<ManageSearchRounded />}
              variant="outlined"
              style={{
                textTransform: 'none',
                marginRight: '0.5rem',
              }}
            >
              <h4>Dashboard</h4>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
