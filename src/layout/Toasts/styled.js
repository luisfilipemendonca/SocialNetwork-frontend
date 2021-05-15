import styled from 'styled-components';

export const ToastsContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  pointer-events: none;
`;

const ToastContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  ul {
    width: 100%;
  }
`;

export const ToastContainerLeft = styled(ToastContainer)`
  align-items: flex-start;
`;

export const ToastContainerCenter = styled(ToastContainer)`
  align-items: center;
`;

export const ToastContainerRight = styled(ToastContainer)`
  align-items: flex-end;
`;
