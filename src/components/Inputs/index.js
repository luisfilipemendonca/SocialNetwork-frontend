import React from 'react';
import { MdErrorOutline } from 'react-icons/md';

import InputNormal from './InputNormal';
import InputTextarea from './InputTextarea';

import {
  InputContainer,
  InputLabel,
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
  const { id, type, isValid, isTouched, errorMsg } = input;

  const hasError = !isValid && isTouched;

  let inputElement = (
    <InputNormal
      id={id}
      type={type}
      input={input}
      onChange={(e) => changeHandler(e.target)}
      onBlur={(e) => blurHandler(e.target)}
      onFocus={(e) => focusHandler(e.target)}
    />
  );

  if (type === 'textarea') {
    inputElement = (
      <InputTextarea
        id={id}
        type={type}
        input={input}
        onChange={(e) => changeHandler(e.target)}
        onBlur={(e) => blurHandler(e.target)}
        onFocus={(e) => focusHandler(e.target)}
      />
    );
  }

  return (
    <InputContainer isComment={isComment}>
      <InputLabel>{id}</InputLabel>
      <InputGroup>
        {inputElement}
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
