import React from 'react';
import { FaExclamationCircle } from 'react-icons/fa';

import {
  InputContainer,
  InputLabel,
  InputGroup,
  InputElement,
  InputBorder,
  InputError,
  InputInfo,
  InputErrorIcon,
  InputErrorMessage,
} from './styled';

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
  return (
    <InputContainer>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}
      <InputGroup>
        <InputElement
          id={id}
          hasError={hasError}
          placeholder={placeholder}
          type={type}
          onChange={changeHandler}
          onFocus={focusHandler}
          value={value}
        />
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
