import React, { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';

import { ModalContainer } from './styled';

import Button from '../../components/Buttons';

const Modal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useHistory();

  const closeModalHandler = () => {
    setIsOpen(false);
    history.goBack();
  };

  const closeModal = (e) => {
    if (e.target.id === 'modal') {
      closeModalHandler();
    }
  };

  useEffect(() => {
    setIsOpen(true);
    window.addEventListener('click', closeModal);

    return () => window.removeEventListener('click', closeModal);
  }, []);

  return (
    <ModalContainer id="modal" isOpen={isOpen}>
      <Button
        type="button"
        className="btn-icon"
        clickHandler={closeModalHandler}
      >
        <FaTimes />
      </Button>
      {children}
    </ModalContainer>
  );
};

export default Modal;
