import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

import useFormInputs from '../../hooks/useFormInputs';

import { loginInputs } from '../../constants/Inputs';
import FormBuilder from '../../helpers/FormBuilder';
import { login } from '../../store/actions/Auth';

const FormLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    formInputs,
    changeHandler,
    blurHandler,
    focusHandler,
  } = useFormInputs(loginInputs);

  const inputs = formInputs.map((input) => (
    <Input
      key={input.id}
      input={input}
      changeHandler={changeHandler}
      blurHandler={blurHandler}
      focusHandler={focusHandler}
    />
  ));

  const submitHandler = (e) => {
    e.preventDefault();

    const formBuilder = new FormBuilder(formInputs);

    if (!formBuilder.isFormValid()) return;

    dispatch(login(formBuilder.buildFormObj(), history));
  };

  return (
    <Form
      title="Login"
      subtitle="Fill all the fields to login into your account"
      aditionalContent={<Link to="/register">Switch to Register</Link>}
      submitHandler={submitHandler}
    >
      {inputs}
    </Form>
  );
};

export default FormLogin;
