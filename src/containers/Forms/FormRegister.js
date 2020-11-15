import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { PrimaryTitle } from './styled';

import { BtnCenterContainer } from '../../style';

import { inputsRegister } from '../../constants/Inputs';
import customInput from '../../hooks/CustomInput';
import formValidation from '../../helpers/FormValidations';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import Button from '../../components/Buttons';

import { register } from '../../store/actions/Auth';

const FormLogin = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [
    formInputs,
    inputChangeHandler,
    inputFocusHandler,
    inputBlurHandler,
    inputCleanHandler,
  ] = customInput(inputsRegister);

  const submitHandler = (e) => {
    e.preventDefault();

    const isFormValid = formValidation.formValidator(formInputs, false);

    if (!isFormValid) return;

    const formData = formValidation.createFormData(formInputs);

    dispatch(register(formData, inputCleanHandler));
  };

  const nextStepHandler = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <>
      <PrimaryTitle>Register</PrimaryTitle>
      <Form submitHandler={step === 1 ? null : submitHandler}>
        {Object.keys(formInputs).map((input, index) => {
          if (step === 1 && formInputs[input].type !== 'file') {
            return (
              <Input
                key={input}
                id={input}
                inputData={formInputs[input]}
                index={index}
                focusHandler={inputFocusHandler}
                changeHandler={inputChangeHandler}
                blurHandler={inputBlurHandler}
              />
            );
          }
          if (step === 2 && formInputs[input].type === 'file') {
            return (
              <Input
                key={input}
                id={input}
                inputData={formInputs[input]}
                changeHandler={inputChangeHandler}
              />
            );
          }
          return null;
        })}
        <BtnCenterContainer>
          <Button
            className="btn-primary"
            type={step === 1 ? 'button' : 'submit'}
            clickHandler={step === 1 ? nextStepHandler : submitHandler}
          >
            {step === 1 ? 'Next' : 'Register'}
          </Button>
        </BtnCenterContainer>
      </Form>
    </>
  );
};

export default FormLogin;
