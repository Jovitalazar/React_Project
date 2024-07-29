import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRouteAdmin = ({ element: Component, isUserAuthenticated, ...rest }) => {
  return isUserAuthenticated ? <Component {...rest} /> : <Navigate to="/admin" />;
};

export default PrivateRouteAdmin;

