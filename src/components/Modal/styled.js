import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 200px;
    height: 200px;
    background-color: #f5f5f5;
    transform: rotate(360deg);
  }

  &.modal-enter {
    transform: scale(0.7);
    opacity: 0;
  }

  &.modal-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: 0.5s linear;
    transition-property: transform, opacity;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transition: opacity 0.2s linear;
  }

  &.modal-enter div {
    transform: scale(0) rotate(360deg);
  }

  &.modal-enter-active div {
    transform: scale(1) rotate(0);
    transition: transform 0.5s linear 0.5s;
  }
`;
