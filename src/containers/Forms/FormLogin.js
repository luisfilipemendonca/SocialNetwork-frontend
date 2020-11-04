import React from 'react';

import { PrimaryTitle } from './styled';

import { inputsLogin } from '../../constants/Inputs';
import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

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
            key={formInputs[input].id}
            inputData={formInputs[input]}
            index={index}
            focusHandler={inputFocusHandler}
            changeHandler={inputChangeHandler}
            blurHandler={inputBlurHandler}
          />
        ))}
        <button type="submit" onClick={submitHandler}>
          Login
        </button>
      </Form>
    </>
  );
};

export default FormLogin;
