import React, { useState } from 'react';

import { InputContainer, InputGroup, Input, Label, InputInfo } from './styled';

const InputPassword = ({ id, placeholder, info, type }) => {
  const [isHidden, setIsHidden] = useState(true);

  const changePasswordVisibility = () => setIsHidden(!isHidden);

  return (
    <InputContainer>
      <InputGroup>
        <Input
          type={isHidden ? type : 'text'}
          placeholder={placeholder}
          id={id}
        />
        <Label htmlFor={id}>{id}</Label>
        <button onClick={changePasswordVisibility} type="button">
          Show
        </button>
      </InputGroup>
      {info && <InputInfo>{info}</InputInfo>}
    </InputContainer>
  );
};

export default InputPassword;
