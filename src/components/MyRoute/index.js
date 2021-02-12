import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const MyRoute = ({ isProtected, path, isExact, component }) => {
  const isLoggedIn = false;

  if (!isLoggedIn && isProtected) {
    return <Redirect to="/login" />;
  }

  return <Route path={path} exact={isExact} component={component} />;
};

export default MyRoute;
