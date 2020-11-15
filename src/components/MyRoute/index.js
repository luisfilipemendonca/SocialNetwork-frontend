import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyRoute = ({ isClosed, path, component: Component, isExact }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  console.log(path);

  if (!isLogged && isClosed) {
    return <Redirect to="/authentication" />;
  }

  return <Route path={path} component={Component} exact={isExact} />;
};

export default MyRoute;
