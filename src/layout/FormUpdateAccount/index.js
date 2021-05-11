import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { SectionForm } from '../../style';

import { registerInputs, profilePictureInput } from '../../constants/inputs';

import useInputs from '../../hooks/useInputs';

import FormHelper from '../../helpers/Form';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

const FormUpdatedAccount = () => {
  const {
    userProfilePictureUrl,
    userProfilePicture,
    userEmail,
    userName,
  } = useSelector((state) => state.user);
  const {
    inputs,
    changeHandler,
    focusHandler,
    setInputsHandler,
    setErrorHandler,
  } = useInputs([...profilePictureInput, ...registerInputs]);

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler, true)) return;

    const data = form.buildFormData();

    console.log(data);
  };

  useEffect(() => {
    const userData = {
      username: userName,
      profilePicture: userProfilePicture ? userProfilePictureUrl : '',
      email: userEmail,
    };

    setInputsHandler(userData);
  }, []);

  return (
    <SectionForm>
      <Form
        title="Update Account"
        submitHandler={submitHandler}
        submitBtnDescription="Update"
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

export default FormUpdatedAccount;