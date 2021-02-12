import styled from 'styled-components';

export const ToastItemWrapper = styled.div`
  padding: 16px 40px 16px 16px;
  border-radius: 3px;
  pointer-events: auto;
  position: relative;
  color: #fff;
  margin-bottom: 16px;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: unset;
    min-width: 250px;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    min-width: unset;
  }

  @media screen and (min-width: 992px) {
    width: unset;
    min-width: 300px;
  }

  &.error {
    border: 1px solid ${(props) => props.theme.toasts.colors.dangerDark};
    background: ${(props) => props.theme.toasts.colors.dangerLigth};
  }

  &.success {
    border: 1px solid ${(props) => props.theme.toasts.colors.successDark};
    background: ${(props) => props.theme.toasts.colors.successLight};
  }

  &.warning {
    border: 1px solid ${(props) => props.theme.toasts.colors.warningDark};
    background: ${(props) => props.theme.toasts.colors.warningLight};
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
  }
`;

export const ToastItemClose = styled.span`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const ToastItemTimer = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 3px;
  width: 100%;
  transition: width 0.1s linear;
  background: #fff;
`;
