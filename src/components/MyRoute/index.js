import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyRoute = ({ isProtected, path, isExact, component }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  if (!isLoggedIn && isProtected) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} exact={isExact} component={component} />;
};

export default MyRoute;
