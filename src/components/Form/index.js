import React from 'react';

import {
  FormContainer,
  FormHeader,
  FormTitle,
  FormInfo,
  FormContent,
  FormBtns,
} from './styled';

const Form = ({ title, info, children, submitHandler }) => {
  return (
    <FormContainer onSubmit={submitHandler}>
      <FormHeader>
        {title && <FormTitle>{title}</FormTitle>}
        {info && <FormInfo>{info}</FormInfo>}
      </FormHeader>
      <FormContent>{children}</FormContent>
      <FormBtns>
        <button type="submit" onClick={submitHandler}>
          Login
        </button>
        <button type="button">Change to register</button>
      </FormBtns>
    </FormContainer>
  );
};

export default Form;
