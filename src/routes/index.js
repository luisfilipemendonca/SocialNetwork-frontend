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
      <MyRoute path="/following" component={FollowPage} exact isClosed />
      <MyRoute path="/profile/:id" component={ProfilePage} isClosed />
      <MyRoute path="/" component={MainPage} exact isClosed />
    </Switch>
  );
};

export default MainRoutes;
