import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Authmiddleware = ({ children }) => {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/login" />;
};


export default Authmiddleware;
