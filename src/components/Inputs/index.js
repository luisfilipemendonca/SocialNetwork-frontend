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
import InputFile from './InputFile';

const Input = ({
  inputData,
  id,
  index,
  focusHandler,
  changeHandler,
  blurHandler,
}) => {
  const { type, info, label, hasError, errorMsg } = inputData;

  return (
    <InputContainer>
      <InputGroup>
        {type === 'text' && (
          <InputNormal
            label={label}
            id={id}
            inputData={inputData}
            index={index}
            focusHandler={focusHandler}
            changeHandler={changeHandler}
            blurHandler={blurHandler}
          />
        )}
        {type === 'password' && (
          <InputPassword
            label={label}
            id={id}
            inputData={inputData}
            index={index}
            focusHandler={focusHandler}
            changeHandler={changeHandler}
            blurHandler={blurHandler}
          >
            <Label htmlFor={id}>{label}</Label>
          </InputPassword>
        )}
        {type === 'file' && (
          <InputFile
            inputData={inputData}
            changeHandler={changeHandler}
            id={id}
          />
        )}
        {type === 'text' && <Label htmlFor={id}>{label}</Label>}
        {hasError && (
          <ErrorContainer type={inputData.type}>
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
