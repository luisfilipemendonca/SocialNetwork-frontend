import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import {
  InputContainer,
  InputGroup,
  Label,
  InputInfo,
  ErrorContainer,
  ErrorMsg,
} from './styled';

import InputNormal from './InputNormal';
import InputPassword from './InputPassword';

const Input = ({
  inputData,
  index,
  focusHandler,
  changeHandler,
  blurHandler,
}) => {
  const { type, info, id, hasError, errorMsg } = inputData;

  return (
    <InputContainer>
      <InputGroup>
        {type === 'text' && (
          <InputNormal
            inputData={inputData}
            index={index}
            focusHandler={focusHandler}
            changeHandler={changeHandler}
            blurHandler={blurHandler}
          />
        )}
        {type === 'password' && (
          <InputPassword
            inputData={inputData}
            index={index}
            focusHandler={focusHandler}
            changeHandler={changeHandler}
            blurHandler={blurHandler}
          >
            <Label htmlFor={id}>{id}</Label>
          </InputPassword>
        )}
        {type === 'text' && <Label htmlFor={id}>{id}</Label>}
        {hasError && (
          <ErrorContainer>
            <FaExclamationCircle />
            <ErrorMsg>{errorMsg}</ErrorMsg>
          </ErrorContainer>
        )}
      </InputGroup>
      {info && <InputInfo>{info}</InputInfo>}
    </InputContainer>
  );
};

export default Input;
