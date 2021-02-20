import React from 'react';

import { Textarea } from './styled';

const InputTextarea = ({ id, type, input, ...rest }) => {
  return <Textarea id={id} type={type} {...input} {...rest} />;
};

export default InputTextarea;
