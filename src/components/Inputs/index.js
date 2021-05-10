import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import {
  InputContainer,
  InputLabel,
  InputGroup,
  InputBorder,
  InputError,
  InputInfo,
  InputErrorIcon,
  InputErrorMessage,
} from './styled';

import Textarea from './Textarea';
import InputNormal from './InputNormal';
import InputFile from './InputFile';

const Input = ({
  id,
  value,
  label,
  hasError,
  placeholder,
  errorMsg,
  info,
  type,
  changeHandler,
  focusHandler,
}) => {
  if (type === 'file') {
    return (
      <InputFile
        id={id}
        type={type}
        hasError={hasError}
        value={value}
        errorMsg={errorMsg}
        focusHandler={focusHandler}
        changeHandler={changeHandler}
      />
    );
  }

  let input = null;

  if (type === 'textarea') {
    input = (
      <Textarea
        id={id}
        hasError={hasError}
        placeholder={placeholder}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
        value={value}
      />
    );
  } else {
    input = (
      <InputNormal
        id={id}
        hasError={hasError}
        placeholder={placeholder}
        type={type}
        changeHandler={changeHandler}
        focusHandler={focusHandler}
        value={value}
      />
    );
  }

  return (
    <InputContainer>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputGroup>
        {input}
        <InputBorder />
        {hasError && (
          <InputError>
            <InputErrorIcon>
              <FaExclamationCircle />
            </InputErrorIcon>
            <InputErrorMessage>{errorMsg}</InputErrorMessage>
          </InputError>
        )}
      </InputGroup>
      {info && <InputInfo>{info}</InputInfo>}
    </InputContainer>
  );
};

export default Input;
