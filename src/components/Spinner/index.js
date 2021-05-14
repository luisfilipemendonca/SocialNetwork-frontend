import React from 'react';

import { SpinnerContainer, SpinnerItem } from './styled';

const Spinner = () => {
  const spinnerItems = Array.from({ length: 8 }).map((_, idx) => idx);

  return (
    <SpinnerContainer>
      {spinnerItems.map((item) => (
        <SpinnerItem key={item} pos={item} />
      ))}
    </SpinnerContainer>
  );
};

export default Spinner;
