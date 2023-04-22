import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProtectedRoute({ element, isAdmin, ...rest }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  console.log('isAuthenticated', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (isAdmin && user.role !== 'admin') {
    return <Navigate to="/" />;
  }

  return <Route {...rest} element={element} />;
}

export default ProtectedRoute;
