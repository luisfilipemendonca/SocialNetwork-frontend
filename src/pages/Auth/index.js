import React from 'react';
import { useLocation } from 'react-router-dom';

import MainContainer from '../../layout/Main';
import FormAuth from '../../layout/FormAuth';

const Auth = () => {
  const location = useLocation();

  console.log(location.pathname);

  return (
    <MainContainer>
      <FormAuth islogging={location.pathname === '/login'} />
    </MainContainer>
  );
};

export default Auth;
