import React, { useRef, useEffect } from 'react';

import { Input } from './styled';

const InputNormal = ({
  inputData,
  id,
  index,
  focusHandler,
  changeHandler,
  blurHandler,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <Input
      ref={inputRef}
      placeholder={inputData.placeholder}
      id={id}
      type={inputData.type}
      hasError={inputData.hasError}
      isTouched={inputData.isTouched}
      value={inputData.value}
      onFocus={focusHandler}
      onChange={changeHandler}
      onBlur={blurHandler}
    />
  );
};

export default InputNormal;
