import React from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { FaTimes } from 'react-icons/fa';

import { ModalBackdrop, ModalContent } from './styled';

const Modal = ({ isOpen, toggleModal, children }) => {
  const body = document.querySelector('body');

  return createPortal(
    <CSSTransition in={isOpen} timeout={1000} unmountOnExit>
      <ModalBackdrop isOpen={isOpen} onClick={toggleModal}>
        <button type="button" onClick={toggleModal}>
          <FaTimes />
        </button>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          {children}
        </ModalContent>
      </ModalBackdrop>
    </CSSTransition>,
    body
  );
};

export default Modal;
