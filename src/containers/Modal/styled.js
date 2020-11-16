import styled from 'styled-components';
import { IconButton } from '../../components/Buttons/styled';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transition: all 0.3s;

  ${IconButton} {
    position: absolute;
    top: 2rem;
    right: 2rem;
    font-size: 2rem;
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;
