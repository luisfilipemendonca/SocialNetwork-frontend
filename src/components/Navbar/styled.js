import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: 100%;
  transition: width 0.2s ease;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primaryLight},
    ${(props) => props.theme.colors.secondaryLight}
  );

  @media screen and (min-width: 992px) {
    position: unset;
    width: unset;
    background: none;
  }
`;

export const NavbarMenu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  @media screen and (min-width: 992px) {
    flex-direction: row;
    opacity: 1;
    visibility: visible;
  }
`;
