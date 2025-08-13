import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectiveRoutes = ({ children }) => {

  const checkAuth = localStorage.getItem('token');

  return (
      checkAuth ? children : <Navigate to="/sign-in" />
  )
}

export default ProtectiveRoutes
