import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryDark};
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondaryDark};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.primaryDark};
  z-index: 100;
`;

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: ${(props) => (props.isOpen ? '100%' : '0')};
  height: 100%;
  transition: width 0.2s ease;
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primaryLight},
    ${(props) => props.theme.colors.secondaryLight}
  );
`;

export const NavbarMenu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
`;

export const NavbarItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }
`;

export const NavbarLink = styled(NavLink)`
  padding: 16px 64px;
  display: block;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryDark};
  position: relative;

  &::before {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    width: 0%;
    height: 100%;
    background: ${(props) => props.theme.colors.primaryDark};
    transform: skew(-15deg);
    z-index: -1;
    transition: width 0.2s ease-in;
  }

  &:hover {
    color: ${(props) => props.theme.colors.secondaryDark};
  }

  &:hover::before {
    width: 100%;
  }
`;
