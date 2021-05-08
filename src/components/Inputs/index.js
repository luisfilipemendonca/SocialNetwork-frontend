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

import Textarea from './Textarea';

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
        {type === 'textarea' && (
          <Textarea
            id={id}
            hasError={hasError}
            placeholder={placeholder}
            changeHandler={changeHandler}
            focusHandler={focusHandler}
            value={value}
          />
        )}
        {type !== 'textarea' && (
          <InputElement
            id={id}
            hasError={hasError}
            placeholder={placeholder}
            type={type}
            onChange={changeHandler}
            onFocus={focusHandler}
            value={value}
          />
        )}
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
