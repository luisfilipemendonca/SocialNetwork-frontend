import styled from 'styled-components';

export const ToastWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  display: flex;
  padding: 20px;
  overflow: hidden;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  & > div {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      flex: 1;
    }
  }
`;

export const ToastContainerRight = styled.div`
  align-items: flex-end;

  @media screen and (min-width: 576px) {
    align-items: flex-end;
  }

  & .toast-right-enter {
    opacity: 0;
    transform: translateX(100%);
  }

  & .toast-right-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }

  & .toast-right-exit {
    opacity: 1;
    transform: translateX(0);
  }

  & .toast-right-exit-active {
    opacity: 0;
    transform: translateX(100%);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }
`;

export const ToastContainerCenter = styled.div`
  align-items: flex-end;
  // padding: 16px 0;

  @media screen and (min-width: 576px) {
    align-items: center;
    padding: 0 16px;
  }

  & .toast-center-enter {
    opacity: 0;
    transform: translateY(-100%);
  }

  & .toast-center-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }

  & .toast-center-exit {
    opacity: 1;
    transform: translateY(0);
  }

  & .toast-center-exit-active {
    opacity: 0;
    transform: translateY(-100%);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }
`;

export const ToastContainerLeft = styled.div`
  align-items: flex-end;

  @media screen and (min-width: 576px) {
    align-items: flex-start;
  }

  & .toast-left-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  & .toast-left-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }

  & .toast-left-exit {
    opacity: 1;
    transform: translateX(0);
  }

  & .toast-left-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: ${(props) => `all ${props.toastTimeout}ms ease-in`};
  }
`;
