import React from 'react';
// import { Link } from 'react-router-dom';

import Form from '../../components/Form';
import InputNormal from '../../components/Inputs/InputNormal';

import useFormInputs from '../../hooks/useFormInputs';

import { loginInputs } from '../../constants/Inputs';

const FormLogin = () => {
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

  return <Form>{inputs}</Form>;
};

export default FormLogin;
