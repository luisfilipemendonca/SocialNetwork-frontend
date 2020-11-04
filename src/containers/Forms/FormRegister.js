import React from 'react';

import { PrimaryTitle } from './styled';

import { inputsRegister } from '../../constants/Inputs';
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
  ] = customInput(inputsRegister);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs);

    console.log(isFormValid);
  };

  return (
    <>
      <PrimaryTitle>Register</PrimaryTitle>
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
          Register
        </button>
      </Form>
    </>
  );
};

export default FormLogin;
