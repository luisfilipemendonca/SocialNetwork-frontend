import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthPage from '../../pages/Auth';

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/authentication" component={AuthPage} />
    </Switch>
  );
};

export default MainRoutes;
