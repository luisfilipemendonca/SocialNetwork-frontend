import styled from 'styled-components';
import { PostContainer } from '../Post/styled';
import { PostCtaContainer } from '../Post/PostCta/styled';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  overflow: auto;

  & ${PostContainer} {
    box-shadow: none;
    margin-bottom: 0;

    @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
      box-shadow: none;
    }
  }

  & ${PostCtaContainer} {
    transform: translate(0, 50%);
  }

  &.modal-enter {
    transform: scale(0.7);
    opacity: 0;
  }

  &.modal-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: 0.3s ease-in;
    transition-property: transform, opacity;
  }

  &.modal-exit {
    opacity: 1;
  }

  &.modal-exit-active {
    opacity: 0;
    transition: opacity 0.3s ease-out;
  }

  &.modal-enter > ${PostContainer} {
    opacity: 0;
  }

  &.modal-enter-active > ${PostContainer} {
    opacity: 1;
    transition: opacity 0.4s ease-in 0.3s;
  }
`;
