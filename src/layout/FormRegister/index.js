import React from 'react';
import { Link } from 'react-router-dom';

import Form from '../../components/Form';
import InputNormal from '../../components/Inputs/InputNormal';

import useFormInputs from '../../hooks/useFormInputs';

import { registerInputs } from '../../constants/Inputs';

const FormRegister = () => {
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(registerInputs);

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
    <Form
      title="Register"
      subtitle="Fill all the fields to create your account"
      aditionalContent={<Link to="/login">Switch to Login</Link>}
    >
      {inputs}
    </Form>
  );
};

export default FormRegister;
