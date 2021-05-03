import React from 'react';

import {
  FormContainer,
  FormHeader,
  FormTitle,
  FormInfo,
  FormContent,
  FormBtns,
} from './styled';

const Form = ({ title, info }) => {
  return (
    <FormContainer>
      <FormHeader>
        {title && <FormTitle>{title}</FormTitle>}
        {info && <FormInfo>{info}</FormInfo>}
      </FormHeader>
      <FormContent>Ola</FormContent>
      <FormBtns>
        <button type="button">Login</button>
        <button type="button">Change to register</button>
      </FormBtns>
    </FormContainer>
  );
};

export default Form;
