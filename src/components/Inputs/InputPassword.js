import React, { useState } from 'react';

import { Input } from './styled';

const InputPassword = ({
  inputData,
  id,
  focusHandler,
  children,
  changeHandler,
  blurHandler,
}) => {
  const [isHidden, setIsHidden] = useState(true);

  const changePasswordVisibility = () => setIsHidden(!isHidden);

  return (
    <>
      <Input
        placeholder={inputData.placeholder}
        id={id}
        type={isHidden ? inputData.type : 'text'}
        hasError={inputData.hasError}
        isTouched={inputData.isTouched}
        value={inputData.value}
        onFocus={focusHandler}
        onChange={changeHandler}
        onBlur={blurHandler}
      />
      {children}
      <button type="button" onClick={changePasswordVisibility}>
        Show
      </button>
    </>
  );
};

export default InputPassword;
