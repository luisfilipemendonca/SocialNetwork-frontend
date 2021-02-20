import React from 'react';

import { Input } from './styled';

const InputNormal = ({ id, type, input, ...rest }) => {
  return <Input id={id} type={type} {...input} {...rest} />;
};

export default InputNormal;
