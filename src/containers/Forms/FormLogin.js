import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { PrimaryTitle } from './styled';
import { BtnCenterContainer } from '../../style';

import { inputsLogin } from '../../constants/Inputs';
import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import Button from '../../components/Buttons';

import { login } from '../../store/actions/Auth';

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [
    formInputs,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    inputCleanHandler,
  ] = customInput(inputsLogin);

  const isLogged = useSelector((state) => state.auth.isLogged);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs);

    if (!isFormValid) return;

    const data = formValidation.createFormObject(formInputs);

    dispatch(login(data, inputCleanHandler, history));
  };

  if (isLogged) {
    history.push('/');
  }

  return (
    <>
      <PrimaryTitle>Login</PrimaryTitle>
      <Form submitHandler={submitHandler}>
        {Object.keys(formInputs).map((input, index) => (
          <Input
            key={input}
            id={input}
            inputData={formInputs[input]}
            index={index}
            focusHandler={inputFocusHandler}
            changeHandler={inputChangeHandler}
            blurHandler={inputBlurHandler}
          />
        ))}
        <BtnCenterContainer>
          <Button type="submit" className="btn-primary" onClick={submitHandler}>
            Login
          </Button>
        </BtnCenterContainer>
      </Form>
    </>
  );
};

export default FormLogin;
