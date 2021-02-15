import React from 'react';
import { Link } from 'react-router-dom';

import { FormContainer, Form, FormHeader, FormContent } from './styled';

import InputNormal from '../../components/Inputs/InputNormal';
import useFormInputs from '../../hooks/useFormInputs';

import { loginInputs } from '../../constants/Inputs';

const FormAuth = ({ islogging }) => {
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(loginInputs);

  const inputs = formInputs.map((input) => (
    <InputNormal
      key={input.id}
      input={input}
      changeHandler={changeHandler}
      blurHandler={blurHandler}
      focusHandler={focusHandler}
    />
  ));

  return (
    <FormContainer>
      <Form>
        <FormHeader>
          <h1>{islogging ? 'Login' : 'Register'}</h1>
          <p>
            Fill all the fields to{' '}
            {islogging ? 'login into your account' : 'create your account'}
          </p>
        </FormHeader>
        <FormContent>
          {inputs}
          <button type="submit">Submit</button>
        </FormContent>
        {islogging ? (
          <p>
            Dont have an account yet? <Link to="register">Click here!</Link>
          </p>
        ) : (
          <p>
            <Link to="login">Change to login</Link>
          </p>
        )}
      </Form>
    </FormContainer>
  );
};

export default FormAuth;
