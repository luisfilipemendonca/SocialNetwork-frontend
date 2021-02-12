import styled from 'styled-components';

export const HamburgerButton = styled.button`
  width: 25px;
  height: 25px;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 100;
  outline: none;

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

export const HamburgerItem = styled.span`
  position: absolute;
  height: 3px;
  width: 100%;
  left: 0;
  background: ${(props) => props.theme.colors.secondaryDark};
  transition: transform 0.2s ease;

  &:nth-child(1) {
    transform: ${(props) =>
      props.isOpen ? 'translateY(0) rotate(225deg)' : 'translateY(-8px)'};
  }

  &:nth-child(3) {
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
  }

  &:nth-child(2) {
    transform: ${(props) =>
      props.isOpen ? 'translateY(0) rotate(-45deg)' : 'translateY(8px)'};
  }
`;
