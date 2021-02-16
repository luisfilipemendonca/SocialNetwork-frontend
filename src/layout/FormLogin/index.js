import React from 'react';
import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

import Form from '../../components/Form';
import InputNormal from '../../components/Inputs/InputNormal';

import useFormInputs from '../../hooks/useFormInputs';

import { loginInputs } from '../../constants/Inputs';
import FormBuilder from '../../helpers/FormBuilder';
// import { login } from '../../store/actions/Auth';

const FormLogin = () => {
  // const isLoading = useSelector((state) => state.auth.isLoading);
  // const dispatch = useDispatch();
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

  const submitHandler = (e) => {
    e.preventDefault();

    const formBuilder = new FormBuilder(formInputs);

    if (!formBuilder.isFormValid()) return;

    console.log('ola');

    // dispatch(login(formBuilder.buildFormObj()));
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
