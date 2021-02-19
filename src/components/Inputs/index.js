import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import {
  InputContainer,
  InputLabel,
  InputElement,
  InputGroup,
  InputBorder,
  InputError,
  InputErrorMsg,
} from './styled';

const Input = ({
  input,
  changeHandler,
  blurHandler,
  focusHandler,
  isComment,
}) => {
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
    <InputContainer isComment={isComment}>
      <InputLabel>{id}</InputLabel>
      <InputGroup>
        {type !== 'file' && type !== 'textarea' && (
          <InputElement
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
        )}
        {type === 'textarea' && (
          <textarea
            onChange={(e) => changeHandler(e.target)}
            onBlur={(e) => blurHandler(e.target)}
            onFocus={(e) => focusHandler(e.target)}
          />
        )}
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

export default Input;
