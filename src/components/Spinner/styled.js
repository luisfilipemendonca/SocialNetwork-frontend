import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  margin: 0 auto;
  position: relative;
  height: 2.2rem;
  width: 2.2rem;
  border-radius: 50%;
`;

export const SpinnerItem = styled.span`
  @keyframes spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  transform: ${({ pos }) => `rotate(${pos * 45}deg)`};

  &:after {
    content: '';
    position: absolute;
    width: 4px;
    height: 35%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 20%;
    opacity: 0;
    animation: spinner 1.2s linear infinite;
    animation-delay: ${({ pos }) => `${pos * 0.15 - 1}s`};
  }
`;
