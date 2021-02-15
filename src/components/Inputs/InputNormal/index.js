import React from 'react';

import {
  InputContainer,
  InputLabel,
  Input,
  InputGroup,
  InputBorder,
} from './styled';

const InputNormal = ({ input, changeHandler, blurHandler, focusHandler }) => {
  const { id, type, placeholder, value } = input;

  return (
    <InputContainer key={id}>
      <InputLabel>{id}</InputLabel>
      <InputGroup>
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => changeHandler(e.target)}
          onBlur={(e) => blurHandler(e.target)}
          onFocus={(e) => focusHandler(e.target)}
        />
        <InputBorder />
      </InputGroup>
    </InputContainer>
  );
};

export default InputNormal;
