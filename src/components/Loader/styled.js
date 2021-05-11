import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.2rem;
`;

export const LoaderItem = styled.span`
  @keyframes loading {
    0% {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }
  }

  display: block;
  width: 1.2rem;
  height: 1.2rem;
  background-color: red;
  border-radius: 50%;
  animation: loading 1s linear infinite;

  &:nth-child(1) {
    animation-delay: -0.8s;
  }

  &:nth-child(2),
  &:nth-child(4) {
    animation-delay: -0.6s;
  }

  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(7) {
    animation-delay: -0.4s;
  }

  &:nth-child(6),
  &:nth-child(8) {
    animation-delay: -0.2s;
  }
`;
