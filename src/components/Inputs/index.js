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

const Input = ({ label, hasError }) => {
  console.log(navigator.userAgent);

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputGroup>
        <InputElement hasError={hasError} />
        <InputBorder />
        {hasError && (
          <InputError>
            <InputErrorIcon>
              <FaExclamationCircle />
            </InputErrorIcon>
            <InputErrorMessage>Some error</InputErrorMessage>
          </InputError>
        )}
      </InputGroup>
      <InputInfo>info</InputInfo>
    </InputContainer>
  );
};

export default Input;
