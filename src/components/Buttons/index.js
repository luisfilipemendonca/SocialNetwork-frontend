import React from 'react';

import {
  IconButton,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from './styled';

const Button = ({ className, children, clickHandler, type }) => {
  if (className === 'btn-icon') {
    return (
      <IconButton type={type} onClick={clickHandler}>
        {children}
      </IconButton>
    );
  }

  if (className === 'btn-primary') {
    return (
      <PrimaryButton type={type} onClick={clickHandler}>
        {children}
      </PrimaryButton>
    );
  }

  if (className === 'btn-secondary') {
    return (
      <SecondaryButton type={type} onClick={clickHandler}>
        {children}
      </SecondaryButton>
    );
  }

  if (className === 'btn-tertiary') {
    return (
      <TertiaryButton type={type} onClick={clickHandler}>
        {children}
      </TertiaryButton>
    );
  }

  return null;
};

export default Button;
