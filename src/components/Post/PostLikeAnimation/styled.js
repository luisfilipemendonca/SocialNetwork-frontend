import styled from 'styled-components';

export const PostLikeAnimationContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120%;
  pointer-events: none;
`;

export const PostLikeAnimationHeart = styled.span`
  @keyframes like {
    0% {
      bottom: 0;
      opacity: 0;
    }

    20% {
      opacity: 1;
    }

    50% {
      opacity: 1;
    }

    100% {
      bottom: 100%;
      opacity: 0;
    }
  }

  width: 1.3rem;
  height: 1.3rem;
  background-color: rgba(252, 76, 76, 8);
  position: absolute;
  bottom: 0;
  left: ${({ position }) => `${position * 5}%`};
  transform: rotate(-45deg);
  animation: 1.5s like linear;

  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: inherit;
  }

  &::before {
    transform: translate(50%, 0);
  }

  &::after {
    transform: translate(0, -50%);
  }

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 1.6s;
  }

  &:nth-child(3) {
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    animation-delay: 1.1s;
  }

  &:nth-child(5) {
    animation-delay: 0.1s;
  }

  &:nth-child(6) {
    animation-delay: 2s;
  }

  &:nth-child(7) {
    animation-delay: 0.5s;
  }

  &:nth-child(8) {
    animation-delay: 1.4s;
  }

  &:nth-child(9) {
    animation-delay: 0.2s;
  }

  &:nth-child(10) {
    animation-delay: 0.9s;
  }

  &:nth-child(11) {
    animation-delay: 1.8s;
  }

  &:nth-child(12) {
    animation-delay: 1.3s;
  }

  &:nth-child(13) {
    animation-delay: 0.7s;
  }

  &:nth-child(14) {
    animation-delay: 1.2s;
  }

  &:nth-child(15) {
    animation-delay: 1.7s;
  }

  &:nth-child(16) {
    animation-delay: 0.3s;
  }

  &:nth-child(17) {
    animation-delay: 1s;
  }

  &:nth-child(18) {
    animation-delay: 1.5s;
  }

  &:nth-child(19) {
    animation-delay: 1.8s;
  }

  &:nth-child(20) {
    animation-delay: 0.4s;
  }
`;
