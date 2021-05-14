import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SectionForm } from '../../style';

import { loginInputs } from '../../constants/inputs';

import useInputs from '../../hooks/useInputs';

import FormHelper from '../../helpers/Form';

import { authenticate } from '../../store/actions/user';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import { SecondaryLink } from '../../components/BaseButton/styled';

const FormLogin = () => {
  const dispatch = useDispatch();
  const { isComponentLoading } = useSelector((state) => state.loading);
  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    loginInputs
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormObj();

    dispatch(authenticate(data, true));
  };

  const aditionalBtn = (
    <SecondaryLink to="/register">Change to Register</SecondaryLink>
  );

  return (
    <SectionForm>
      <Form
        title="Login"
        info="Fill all fields to login into your account"
        submitHandler={submitHandler}
        submitBtnDescription="Login"
        aditionalBtn={aditionalBtn}
        isLoading={isComponentLoading}
      >
        {inputs.map(
          ({ id, placeholder, label, value, hasError, errorMsg, type }) => (
            <Input
              key={id}
              id={id}
              placeholder={placeholder}
              label={label}
              value={value}
              hasError={hasError}
              errorMsg={errorMsg}
              type={type}
              changeHandler={changeHandler}
              focusHandler={focusHandler}
            />
          )
        )}
      </Form>
    </SectionForm>
  );
};

export default FormLogin;
