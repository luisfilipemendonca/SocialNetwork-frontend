import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { MainContainer, BtnCenterContainer } from '../../style';
import { FormContainer } from '../../containers/Forms/styled';

import FormLogin from '../../containers/Forms/FormLogin';
import FormRegister from '../../containers/Forms/FormRegister';
import Button from '../../components/Buttons';

import { changeAuth } from '../../store/actions/Auth';

const Auth = () => {
  const dispatch = useDispatch();
  const isLogging = useSelector((state) => state.auth.isLogging);

  const changeFormHandler = () => dispatch(changeAuth());

  return (
    <MainContainer fullCenter>
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
    </MainContainer>
  );
};

export default Auth;
