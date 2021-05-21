import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: ${({ theme }) => theme.dimensions.navbarHeightSmall};
  display: flex;
  align-items: center;
  justify-content: ${({ isLogged }) => (isLogged ? 'space-between' : 'center')};
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
  position: fixed;
  width: 100%;
  z-index: 30;
  border-bottom: 2px solid ${({ theme }) => theme.colors.secondaryDark};

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    padding: 0.8rem 1rem;
  }
`;

export const NavbarBrand = styled.h1`
  z-index: 20;
`;

export const NavbarToggler = styled.button`
  width: 3rem;
  height: 2.5rem;
  position: relative;
  z-index: 20;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    display: none;
  }
`;

export const NavbarTogglerItem = styled.span`
  display: block;
  height: 0.2rem;
  width: 70%;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  position: absolute;
  top: 50%;
  left: 50%;
  transition: transform 0.3s linear;

  &:nth-child(1) {
    transform: translate(-50%, -50%);
    opacity: ${({ isOpen }) => (isOpen ? '0' : '1')};
  }

  &:nth-child(2) {
    transform: ${({ isOpen }) =>
      isOpen
        ? 'translate(-50%, -50%) rotate(45deg)'
        : 'translate(-50%, calc(-50% - 0.6rem))'};
  }

  &:nth-child(3) {
    transform: ${({ isOpen }) =>
      isOpen
        ? 'translate(-50%, -50%) rotate(-45deg)'
        : 'translate(-50%, calc(-50% + 0.6rem))'};
  }
`;

export const NavbarMenu = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.colors.primaryDark} 10%, ${theme.colors.secondaryLight})`};
  transition: width 0.3s linear;
  width: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    max-width: 350px;
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    position: static;
    transform: unset;
    flex-direction: row;
    background: none;
    top: unset;
    right: unset;
    max-width: unset;
    width: unset;
  }
`;

export const NavbarItem = styled.li`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
`;

export const NavbarLink = styled(NavLink)`
  display: block;
  font-size: 1.7rem;
  width: 70%;
  text-align: center;
  margin: 0 auto;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.primaryDark};
  position: relative;
  transition: color 0.3s linear;

  &.active,
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.secondaryDark};
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    backface-visibility: hidden;
    right: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: skew(-25deg);
    z-index: -1;
    transition: width 0.2s linear;
  }

  &.active::before,
  &:hover::before,
  &:focus::before {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    color: ${({ theme }) => theme.colors.secondaryDark};
    width: unset;
    font-size: 1.3rem;
    padding: 0.2rem 1.5rem;
    transition: none;

    &::before {
      background-color: ${({ theme }) => theme.colors.secondaryDark};
      height: 2px;
      bottom: 0;
      top: unset;
    }
  }
`;
