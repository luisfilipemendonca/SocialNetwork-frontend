import React from 'react';

import { FormContainer, FormElement, FormHeader, FormContent } from './styled';

const Form = ({
  children,
  title,
  subtitle,
  aditionalContent,
  submitHandler,
}) => {
  return (
    <FormContainer>
      <FormElement onSubmit={submitHandler}>
        <FormHeader>
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </FormHeader>
        <FormContent>
          {children}
          <button type="submit" onClick={submitHandler}>
            Submit
          </button>
        </FormContent>
        {aditionalContent}
      </FormElement>
    </FormContainer>
  );
};

export default Form;
