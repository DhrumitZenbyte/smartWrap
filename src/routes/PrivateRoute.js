// routes/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useSelector((state) => state.Auth);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
