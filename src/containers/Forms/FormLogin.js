import React from 'react';

import { PrimaryTitle } from './styled';
import { BtnCenterContainer } from '../../style';

import { inputsLogin } from '../../constants/Inputs';
import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import Button from '../../components/Buttons';

const FormLogin = () => {
  const [
    formInputs,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
  ] = customInput(inputsLogin);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs);

    console.log(isFormValid);
  };

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
