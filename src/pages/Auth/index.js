import React from 'react';
import { useLocation } from 'react-router-dom';

import MainContainer from '../../layout/Main';
import FormLogin from '../../layout/FormLogin';
import FormRegister from '../../layout/FormRegister';

const Auth = () => {
  const location = useLocation();

  const isLogging = location.pathname === '/login';

  console.log(isLogging);

  return (
    <MainContainer>
      {isLogging ? <FormLogin /> : <FormRegister />}
    </MainContainer>
  );
};

export default Auth;
