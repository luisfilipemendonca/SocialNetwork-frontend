import React from 'react';

import {
  ToastsContainer,
  //   ToastContainerCenter,
  ToastContainerLeft,
  //   ToastContainerRight,
} from './styled';

import ToastItem from '../../components/ToastItem';

const Toasts = () => {
  return (
    <ToastsContainer>
      <ToastContainerLeft>
        <ToastItem description="sdfdsfsdfdsfsdfdsfdfsdfsdfsdfsdfsdfdfsfsdfsdfdsfsdfsdf" />
      </ToastContainerLeft>
      {/* <ToastContainerCenter>
        <ToastItem description="ola" />
      </ToastContainerCenter>
      <ToastContainerRight>
        <ToastItem description="Lorem ispum dolor sds dsdhsklh dsddfsddf hsldhlsh ds" />
      </ToastContainerRight> */}
    </ToastsContainer>
  );
};

export default Toasts;
