import React from 'react';

import { FormContent } from './styled';

const Form = ({ children, submitHandler }) => {
  return <FormContent onSubmit={submitHandler}>{children}</FormContent>;
};

export default Form;
