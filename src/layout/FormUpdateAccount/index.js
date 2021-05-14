import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SectionForm } from '../../style';

import { registerInputs, profilePictureInput } from '../../constants/inputs';

import { updateUserPhoto } from '../../store/actions/user';

import useInputs from '../../hooks/useInputs';

import FormHelper from '../../helpers/Form';

import Form from '../../components/Form';
import Input from '../../components/Inputs';

const FormUpdatedAccount = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { isComponentLoading } = useSelector((state) => state.loading);
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

    dispatch(updateUserPhoto(data));
    history.replace('/profile');
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

export default FormUpdatedAccount;
