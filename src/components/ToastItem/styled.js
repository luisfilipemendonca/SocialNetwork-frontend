import styled from 'styled-components';

export const ToastItemContainer = styled.div`
  @keyframes slideAndBounce {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  display: flex;
  justify-content: space-between;
  text-overflow: clip;
  border: 1px solid
    ${({ type, theme }) =>
      type === 'success' ? theme.colors.primaryDark : theme.colors.warning};
  color: ${({ type, theme }) =>
    type === 'success' ? theme.colors.primaryDark : theme.colors.warning};
  width: 100%;
  max-width: 25rem;
  padding: 0.8rem;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  opacity: 0;
  background-color: #f5f5f5;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }

  &.toasts-enter-active {
    animation: slideAndBounce 1s ease-in-out;
  }

  &.toasts-enter-done {
    opacity: 1;
  }

  &.toasts-exit-active {
    animation: slideAndBounce 1s ease-in-out reverse;
  }
`;

export const ToastDescription = styled.p`
  word-break: break-all;
  margin-right: 0.5rem;
`;

export const ToastBorder = styled.span`
  position: absolute;
  height: 3px;
  width: ${({ borderWidth }) => `${borderWidth}%`};
  transition: width 50ms linear;
  bottom: 0;
  right: 0;
  background: ${({ type, theme }) =>
    type === 'success'
      ? theme.colors.primaryLight
      : theme.colors.warningOpacity};
`;

export const ToastClose = styled.button`
  pointer-events: all;
  color: ${({ toastType, theme }) =>
    toastType === 'success' ? theme.colors.primaryDark : theme.colors.warning};
`;
