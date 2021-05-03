import React from 'react';
import { Switch } from 'react-router-dom';

import WorldPage from '../pages/World';
import LoginPage from '../pages/Login';

import ProtectedRoute from '../components/ProtectedRoute';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute path="/login" component={LoginPage} />
      <ProtectedRoute path="/" component={WorldPage} isExact isClosed />
    </Switch>
  );
};

export default Routes;
