import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import {
  InputContainer,
  InputLabel,
  Input,
  InputGroup,
  InputBorder,
  InputError,
  InputErrorMsg,
} from './styled';

const InputNormal = ({ input, changeHandler, blurHandler, focusHandler }) => {
  const {
    id,
    type,
    placeholder,
    value,
    minLength,
    maxLength,
    isValid,
    isTouched,
    errorMsg,
  } = input;

  const hasError = !isValid && isTouched;

  return (
    <InputContainer key={id}>
      <InputLabel>{id}</InputLabel>
      <InputGroup>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          minLength={minLength}
          maxLength={maxLength}
          onChange={(e) => changeHandler(e.target)}
          onBlur={(e) => blurHandler(e.target)}
          onFocus={(e) => focusHandler(e.target)}
        />
        <InputBorder hasError={hasError} />
        {hasError && (
          <>
            <InputError>
              <MdErrorOutline />
            </InputError>
            <InputErrorMsg>{errorMsg}</InputErrorMsg>
          </>
        )}
      </InputGroup>
    </InputContainer>
  );
};

export default InputNormal;
