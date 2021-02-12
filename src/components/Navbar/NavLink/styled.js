import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavbarItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 992px) {
    &:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: 24px;
    }
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-of-type) {
      margin-right: 48px;
    }
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

  &:hover,
  &.active {
    color: ${(props) => props.theme.colors.secondaryDark};
  }

  &:hover::before,
  &.active::before {
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    color: ${(props) => props.theme.colors.secondaryLight};
    padding: 8px 16px;

    &::before {
      position: absolute;
      content: '';
      left: 50%;
      top: 100%;
      width: 0%;
      height: 2px;
      background: ${(props) => props.theme.colors.secondaryDark};
      transform: translateX(-50%);
      z-index: 1;
      transition: width 0.2s ease-in;
    }

    &:hover::before,
    &.active::before {
      width: 100%;
    }
  }
`;
