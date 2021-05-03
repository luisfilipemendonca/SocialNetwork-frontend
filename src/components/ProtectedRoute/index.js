import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ isExact, isClosed, component, path }) => {
  const user = useSelector((state) => state.user);

  console.log(user);

  if (!user.isLogged && isClosed) {
    return <Redirect to="/login" />;
  }

  return <Route exact={isExact} component={component} path={path} />;
};

export default ProtectedRoute;
