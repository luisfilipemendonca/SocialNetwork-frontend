import React from 'react';

import { FormContainer, FormElement, FormHeader, FormContent } from './styled';

const Form = ({ children }) => {
  return (
    <FormContainer>
      <FormElement>
        <FormHeader>
          <h1>Login</h1>
          <p>Fill all the fields to login into your account</p>
        </FormHeader>
        <FormContent>
          {children}
          <button type="submit">Submit</button>
        </FormContent>
      </FormElement>
    </FormContainer>
  );
};

export default Form;
