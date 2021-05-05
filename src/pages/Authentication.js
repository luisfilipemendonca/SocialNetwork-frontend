import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormLogin from '../layout/FormLogin';
import FormRegister from '../layout/FormRegister';

const AuthenticationPage = () => {
  const location = useLocation();
  const history = useHistory();
  const isLogging = location.pathname === '/login';
  const { isLogged } = useSelector((state) => state.user);

  useEffect(() => {
    if (!isLogged) return;

    history.replace('/');
  }, [isLogged]);

  return isLogging ? <FormLogin /> : <FormRegister />;
};

export default AuthenticationPage;
