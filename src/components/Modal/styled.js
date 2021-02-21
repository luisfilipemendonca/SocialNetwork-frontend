import styled from 'styled-components';

export const ModalContent = styled.div`
  padding: 8px;
  width: 100%;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  & > ${ModalContent} {
    opacity: 0;
    transform: translateY(-50px);
  }

  &.enter-active {
    opacity: 1;
    transition: all 1s ease-in-out;
  }

  &.enter-done {
    opacity: 1;
    pointer-events: auto;
  }

  &.exit {
    opacity: 1;
  }

  &.exit-active {
    opacity: 0;
    transition: all 0.5s ease-in-out 0.5s;
  }

  &.enter-active > ${ModalContent} {
    opacity: 1;
    transition: all 1s ease-in-out 1s;
    transform: translateY(0);
  }

  &.enter-done > ${ModalContent} {
    opacity: 1;
    transform: translateY(0);
  }

  &.exit > ${ModalContent} {
    opacity: 1;
    transform: translateY(0);
  }

  &.exit-active > ${ModalContent} {
    opacity: 0;
    transform: translateY(-50px);
    transition: all 0.5s ease-in-out;
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    color: lightgreen;
  }
`;
