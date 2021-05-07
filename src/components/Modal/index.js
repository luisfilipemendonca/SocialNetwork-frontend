import React from 'react';
import { CSSTransition } from 'react-transition-group';

import { ModalContainer } from './styled';

const Modal = ({ show, closeHandler, children }) => {
  const closeModalHandler = (e) => {
    if (e.target.hasAttribute('data-close')) {
      closeHandler();
    }
  };

  return (
    <CSSTransition
      in={show}
      timeout={{ enter: 1000, exit: 300 }}
      classNames="modal"
      unmountOnExit
    >
      <ModalContainer onClick={closeModalHandler} data-close>
        {children}
      </ModalContainer>
    </CSSTransition>
  );
};

export default Modal;
