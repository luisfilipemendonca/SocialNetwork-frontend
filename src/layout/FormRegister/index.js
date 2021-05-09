import React from 'react';
import { useDispatch } from 'react-redux';

import { SectionForm } from '../../style';

import { registerInputs } from '../../constants/inputs';

import useInputs from '../../hooks/useInputs';

import { authenticate } from '../../store/actions/user';

import FormHelper from '../../helpers/Form';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

const FormRegister = () => {
  const dispatch = useDispatch();
  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    registerInputs
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormObj();

    dispatch(authenticate(data));
  };

  return (
    <SectionForm>
      <Form
        title="Register"
        info="Fill all fields to create an account"
        submitHandler={submitHandler}
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

export default FormRegister;
