import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { profilePictureInput } from '../../constants/inputs';

import useInputs from '../../hooks/useInputs';

import FormHelper from '../../helpers/Form';

import { updateUserPhoto } from '../../store/actions/user';

import Form from '../../components/Form';
import Input from '../../components/Inputs';
import { SecondaryButton } from '../../components/BaseButton/styled';

const FormProfilePicture = ({ closeHandler }) => {
  const { isComponentLoading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { inputs, changeHandler, focusHandler, setErrorHandler } = useInputs(
    profilePictureInput
  );

  const submitHandler = (e) => {
    e.preventDefault();

    const form = new FormHelper(inputs);

    if (!form.validate(setErrorHandler)) return;

    const data = form.buildFormData();

    dispatch(updateUserPhoto(data));
    closeHandler(true);
  };

  const aditionalBtn = (
    <SecondaryButton type="button" onClick={() => closeHandler(false)}>
      Close
    </SecondaryButton>
  );

  return (
    <Form
      title="Add Profile Picture"
      info="Can be added later"
      submitHandler={submitHandler}
      submitBtnDescription="Add Photo"
      aditionalBtn={aditionalBtn}
      isLoading={isComponentLoading}
    >
      {inputs.map((input) => (
        <Input
          id={input.id}
          key={input.id}
          hasError={input.hasError}
          type="file"
          value={input.value}
          errorMsg={input.errorMsg}
          changeHandler={changeHandler}
          focusHandler={focusHandler}
        />
      ))}
    </Form>
  );
};

export default FormProfilePicture;
