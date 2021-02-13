import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from '../components/MyRoute';
import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';
import ProfilePage from '../pages/Profile';
import FollowingPage from '../pages/Following';

const Routes = () => {
  return (
    <Switch>
      <MyRoute path="/login" isExact component={AuthPage} />
      <MyRoute path="/register" isExact component={AuthPage} />
      <MyRoute
        path="/following"
        isExact
        component={FollowingPage}
        isProtected
      />
      <MyRoute path="/profile" isExact component={ProfilePage} isProtected />
      <MyRoute path="/" isExact component={MainPage} isProtected />
    </Switch>
  );
};

export default Routes;
