import React from 'react';
import { Switch } from 'react-router-dom';

import WorldPage from '../pages/World';
import AuthenticationPage from '../pages/Authentication';
import FollowingPage from '../pages/Following';
import ProtectedRoute from '../components/ProtectedRoute';
import ProfilePage from '../pages/Profile';
import FormUpdateAccount from '../layout/FormUpdateAccount';

const Routes = () => {
  return (
    <Switch>
      <ProtectedRoute
        path="/profile/user/update_account"
        component={FormUpdateAccount}
        isClosed
        isExact
      />
      <ProtectedRoute
        path="/profile/:id"
        component={ProfilePage}
        isClosed
        isExact
      />
      <ProtectedRoute path="/following" component={FollowingPage} isClosed />
      <ProtectedRoute path="/profile" component={ProfilePage} isClosed />
      <ProtectedRoute path="/login" component={AuthenticationPage} />
      <ProtectedRoute path="/register" component={AuthenticationPage} />
      <ProtectedRoute path="/" component={WorldPage} isExact isClosed />
    </Switch>
  );
};

export default Routes;
