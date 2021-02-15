import React from 'react';
// import { useLocation } from 'react-router-dom';

import MainContainer from '../../layout/Main';
import FormLogin from '../../layout/FormLogin';

const Auth = () => {
  // const location = useLocation();

  return (
    <MainContainer>
      <FormLogin />
    </MainContainer>
  );
};

export default Auth;
