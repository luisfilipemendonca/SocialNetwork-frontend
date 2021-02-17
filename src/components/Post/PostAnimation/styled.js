import styled from 'styled-components';

export const PostLikeAnim = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(45deg);
  top: 105%;

  &:after {
    transform: translate(-50%);
  }

  &:before {
    transform: translate(0, -50%);
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: red;
    border-radius: 50%;
  }
`;

export const PostLikeAnimContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: none;

  @keyframes animateHearts {
    to {
      top: 0%;
    }
  }

  & ${PostLikeAnim} {
    animation: ${(props) => props.isLiked && 'animateHearts 2s linear'};
  }

  & ${PostLikeAnim}:nth-child(1) {
    animation-delay: 0.5s;
  }

  & ${PostLikeAnim}:nth-child(2) {
    left: 5%;
    animation-delay: 1s;
  }
  & ${PostLikeAnim}:nth-child(3) {
    left: 10%;
    animation-delay: 2.5s;
  }
  & ${PostLikeAnim}:nth-child(4) {
    left: 15%;
    animation-delay: 0.2s;
  }
  & ${PostLikeAnim}:nth-child(5) {
    left: 20%;
    animation-delay: 2s;
  }
  & ${PostLikeAnim}:nth-child(6) {
    left: 25%;
    animation-delay: 1.5s;
  }
  & ${PostLikeAnim}:nth-child(7) {
    left: 30%;
    animation-delay: 0.3s;
  }
  & ${PostLikeAnim}:nth-child(8) {
    left: 35%;
    animation-delay: 0.8s;
  }
  & ${PostLikeAnim}:nth-child(9) {
    left: 40%;
    animation-delay: 2.3s;
  }
  & ${PostLikeAnim}:nth-child(10) {
    left: 45%;
    animation-delay: 0.1s;
  }
  & ${PostLikeAnim}:nth-child(11) {
    left: 50%;
    animation-delay: 1.7s;
  }
  & ${PostLikeAnim}:nth-child(12) {
    left: 55%;
    animation-delay: 0.8s;
  }
  & ${PostLikeAnim}:nth-child(13) {
    left: 60%;
    animation-delay: 2.1s;
  }
  & ${PostLikeAnim}:nth-child(14) {
    left: 65%;
    animation-delay: 1.3s;
  }
  & ${PostLikeAnim}:nth-child(15) {
    left: 70%;
    animation-delay: 0.3s;
  }
  & ${PostLikeAnim}:nth-child(16) {
    left: 75%;
    animation-delay: 0.6s;
  }
  & ${PostLikeAnim}:nth-child(17) {
    left: 80%;
    animation-delay: 1.9s;
  }
  & ${PostLikeAnim}:nth-child(18) {
    left: 85%;
    animation-delay: 2.4s;
  }
  & ${PostLikeAnim}:nth-child(19) {
    left: 90%;
    animation-delay: 0.1s;
  }
  & ${PostLikeAnim}:nth-child(20) {
    left: 95%;
    animation-delay: 1.3s;
  }
`;
