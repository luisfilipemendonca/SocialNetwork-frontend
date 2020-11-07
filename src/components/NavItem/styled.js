import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MenuItem = styled.li`
  font-size: 2rem;

  &:not(:last-of-type) {
    margin-bottom: ${(props) => props.theme.margins.large};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    font-size: 1.4rem;
    &:not(:last-of-type) {
      margin-bottom: 0;
      margin-right: ${(props) => props.theme.margins.small};
    }
  }
`;

export const LinkItem = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${(props) => props.theme.paddings.small} 0;
  position: relative;
  color: ${(props) => props.theme.colors.primaryDark};

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background: #fff;
    z-index: -1;
    transition: width 0.2s;
    transform: skew(10deg);
  }

  &.active::after,
  &:hover::after {
    width: 100%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    color: #fff;
    padding: 4px ${(props) => props.theme.paddings.medium};

    &::after {
      height: 2px;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const IconContainer = styled.span`
  margin-right: ${(props) => props.theme.margins.small};
  display: flex;
`;
