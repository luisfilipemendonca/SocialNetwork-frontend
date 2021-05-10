import React from 'react';

import {
  FormContainer,
  FormHeader,
  FormTitle,
  FormInfo,
  FormContent,
  FormBtns,
} from './styled';

import { PrimaryButton } from '../BaseButton/styled';

const Form = ({
  title,
  info,
  children,
  submitHandler,
  submitBtnDescription,
  aditionalBtn,
}) => {
  return (
    <FormContainer onSubmit={submitHandler}>
      <FormHeader>
        {title && <FormTitle>{title}</FormTitle>}
        {info && <FormInfo>{info}</FormInfo>}
      </FormHeader>
      <FormContent>{children}</FormContent>
      <FormBtns>
        <PrimaryButton type="submit" onClick={submitHandler}>
          {submitBtnDescription}
        </PrimaryButton>
        {aditionalBtn}
      </FormBtns>
    </FormContainer>
  );
};

export default Form;
