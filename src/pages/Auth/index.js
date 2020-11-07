import React, { useState } from 'react';

import { Main, BtnCenterContainer } from '../../style';
import { FormContainer } from '../../containers/Forms/styled';

import FormLogin from '../../containers/Forms/FormLogin';
import FormRegister from '../../containers/Forms/FormRegister';
import Button from '../../components/Buttons';

const Auth = () => {
  const [isLogging, setIsLogging] = useState(true);

  const changeFormHandler = () => setIsLogging(!isLogging);

  return (
    <Main>
      <FormContainer>
        {isLogging ? <FormLogin /> : <FormRegister />}
        <BtnCenterContainer>
          <Button
            type="button"
            className="btn-secondary"
            clickHandler={changeFormHandler}
          >
            Change to {isLogging ? 'Register' : 'Login'}
          </Button>
        </BtnCenterContainer>
      </FormContainer>
    </Main>
  );
};

export default Auth;
