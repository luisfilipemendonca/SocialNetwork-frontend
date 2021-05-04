import React from 'react';

import { SectionForm } from '../style';

import { loginInputs } from '../constants/inputs';

import useInputs from '../hooks/useInputs';

import FormHelper from '../helpers/Form';

import Form from '../components/Form';
import Input from '../components/Inputs';

const LoginPage = () => {
  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    loginInputs
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    console.log('ola');
  };

  return (
    <SectionForm>
      <Form
        title="Login"
        info="Fill all fields to login into your account"
        submitHandler={submitHandler}
      >
        {Object.keys(inputs).map((key) => (
          <Input
            key={key}
            id={key}
            placeholder={inputs[key].placeholder}
            label={inputs[key].label}
            value={inputs[key].value}
            hasError={inputs[key].hasError}
            errorMsg={inputs[key].errorMsg}
            type={inputs[key].type}
            changeHandler={changeHandler}
            focusHandler={focusHandler}
          />
        ))}
      </Form>
    </SectionForm>
  );
};

export default LoginPage;
