import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MyRoute = ({ isClosed, ...rest }) => {
  const isLogged = useSelector((state) => state.auth.isLogged);

  if (!isLogged && isClosed) {
    return <Redirect to="/authentication" />;
  }

  return <Route {...rest} />;
};

export default MyRoute;
