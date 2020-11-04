import React, { useRef, useEffect } from 'react';

import { InputContainer, InputGroup, Input, Label, InputInfo } from './styled';

const InputNormal = ({ id, type, placeholder, index, info }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (index === 0) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <InputContainer>
      <InputGroup>
        <Input ref={inputRef} type={type} placeholder={placeholder} id={id} />
        <Label htmlFor={id}>{id}</Label>
      </InputGroup>
      {info && <InputInfo>{info}</InputInfo>}
    </InputContainer>
  );
};

export default InputNormal;
