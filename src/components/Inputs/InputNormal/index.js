import React from 'react';

import { InputElement } from '../styled';

const InputNormal = ({
  id,
  hasError,
  placeholder,
  type,
  changeHandler,
  focusHandler,
  value,
}) => {
  return (
    <InputElement
      id={id}
      hasError={hasError}
      placeholder={placeholder}
      type={type}
      onChange={changeHandler}
      onFocus={focusHandler}
      value={value}
    />
  );
};

export default InputNormal;
