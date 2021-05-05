import React from 'react';
import { Switch } from 'react-router-dom';

import WorldPage from '../pages/World';
import AuthenticationPage from '../pages/Authentication';

import ProtectedRoute from '../components/ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/login" component={AuthenticationPage} />
      <ProtectedRoute path="/register" component={AuthenticationPage} />
      <ProtectedRoute path="/" component={WorldPage} isExact isClosed />
    </Switch>
  );
};

export default Routes;
