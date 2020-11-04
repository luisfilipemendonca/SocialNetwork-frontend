import React, { useState } from 'react';

import { Main } from '../../style';
import { FormContainer } from '../../containers/Forms/styled';

import FormLogin from '../../containers/Forms/FormLogin';
import FormRegister from '../../containers/Forms/FormRegister';

const Auth = () => {
  const [isLogging, setIsLogging] = useState(true);

  const changeFormHandler = () => setIsLogging(!isLogging);

  return (
    <Main>
      <FormContainer>
        {isLogging ? <FormLogin /> : <FormRegister />}
        <button type="button" onClick={changeFormHandler}>
          Change to {isLogging ? 'Register' : 'Login'}
        </button>
      </FormContainer>
    </Main>
  );
};

export default Auth;
