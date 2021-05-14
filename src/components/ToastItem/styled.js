import styled from 'styled-components';

export const ToastItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-overflow: clip;
  border: 1px solid red;
  width: 100%;
  max-width: 25rem;
  padding: 0.8rem;
  border-radius: 3px;
  position: relative;
  overflow: hidden;

  &:not(:last-of-type) {
    margin-bottom: 0.8rem;
  }
`;

export const ToastDescription = styled.p`
  word-break: break-all;
`;

export const ToastBorder = styled.span`
  position: absolute;
  height: 3px;
  width: ${({ borderWidth }) => `${borderWidth}%`};
  transition: width 50ms linear;
  bottom: 0;
  right: 0;
  background: red;
`;
