import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ModalContainer } from './styled';

const Modal = ({ show, closeHandler }) => {
  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 1000, exit: 200 }}
      classNames="modal"
      unmountOnExit
    >
      <ModalContainer onClick={closeHandler}>
        <div>Hello World</div>
      </ModalContainer>
    </CSSTransition>
  );
};

export default Modal;
