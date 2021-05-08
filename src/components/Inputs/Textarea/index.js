import React from 'react';

import { TextareaElement } from '../styled';

const Textarea = ({
  id,
  hasError,
  placeholder,
  changeHandler,
  focusHandler,
  value,
}) => {
  return (
    <TextareaElement
      id={id}
      hasError={hasError}
      placeholder={placeholder}
      onChange={changeHandler}
      onFocus={focusHandler}
      value={value}
    />
  );
};

export default Textarea;
