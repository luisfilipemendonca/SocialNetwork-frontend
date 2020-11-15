import React from 'react';
import { Switch } from 'react-router-dom';

import AuthPage from '../pages/Auth';
import MainPage from '../pages/Main';
import FollowPage from '../pages/Follow';
import ProfilePage from '../pages/Profile';

import MyRoute from '../components/MyRoute';

const MainRoutes = () => {
  return (
    <Switch>
      <MyRoute path="/authentication" component={AuthPage} />
      <MyRoute path="/following" component={FollowPage} isExact isClosed />
      <MyRoute path="/profile/:id" component={ProfilePage} isExact isClosed />
      <MyRoute path="/" component={MainPage} isExact isClosed />
    </Switch>
  );
};

export default MainRoutes;
