import styled from 'styled-components';
import { IconButton } from '../../components/Buttons/styled';

export const HeaderContainer = styled.header`
  height: ${(props) => props.theme.components.headerHeight};
  background: ${(props) => props.theme.colors.primaryDark};
  display: flex;
  justify-content: ${(props) => (props.isLogged ? 'space-between' : 'center')};
  align-items: center;
  padding: 0 ${(props) => props.theme.paddings.medium};
  position: fixed;
  width: 100%;
  z-index: 5;

  ${IconButton} {
    z-index: 10;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    ${IconButton} {
      display: none;
      opacity: 0;
      visibility: hidden;
    }
  }
`;

export const HeaderTitle = styled.h1`
  background: linear-gradient(
    to right,
    ${(props) => props.theme.colors.primaryLight},
    ${(props) => props.theme.colors.tertiaryLight},
    ${(props) => props.theme.colors.secondaryLight}
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const HamburguerItem = styled.span`
  position: absolute;
  height: 2px;
  width: 20px;
  background: #fff;
  left: 50%;
  top: 50%;
  transition: 0.2s transform;

  &:nth-child(1) {
    transform: ${(props) =>
      props.isOpen
        ? 'translate(-50%, 0) rotate(225deg)'
        : 'translate(-50% ,0.7rem)'};
  }

  &:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? '0' : '1')};
    transform: translateX(-50%);
  }

  &:nth-child(3) {
    transform: ${(props) =>
      props.isOpen
        ? 'translate(-50%, 0) rotate(-225deg)'
        : 'translate(-50% ,-0.7rem)'};
  }
`;

export const NavMenu = styled.nav`
  position: absolute;
  top: ${(props) =>
    props.isOpen ? '0' : `calc(${props.theme.components.headerHeight} / 2)`};
  right: ${(props) =>
    props.isOpen ? '0' : `calc(${props.theme.paddings.medium} + 5px)`};
  background: linear-gradient(
    to bottom,
    ${(props) => props.theme.colors.primaryDark},
    // ${(props) => props.theme.colors.secondaryLight},
    ${(props) => props.theme.colors.tertiaryLight}
  );
  height: ${(props) => (props.isOpen ? `100vh` : '0%')};
  width: ${(props) => (props.isOpen ? '100%' : '0%')};
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    position: static;
    width: unset;
    height: unset;
    background: none;
    transition: none;
  }
`;

export const Menu = styled.ul`
  transition: opacity 0.2s 0.1s;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  width: 70%;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    width: unset;
    opacity: 1;
    visibility: visible;
    display: flex;
    align-items: center;
  }
`;
