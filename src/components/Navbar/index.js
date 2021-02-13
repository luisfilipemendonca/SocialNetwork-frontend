import React from 'react';

import { NavbarContainer, NavbarMenu } from './styled';

import NavbarToggler from './NavbarToggler';
import NavLink from './NavLink';

const NavBar = ({ isOpen, togglerHandler }) => {
  return (
    <>
      <NavbarToggler togglerHandler={togglerHandler} isOpen={isOpen} />
      <NavbarContainer isOpen={isOpen}>
        <NavbarMenu isOpen={isOpen}>
          <NavLink path="/" description="World" exact />
          <NavLink path="/following" description="Following" />
          <NavLink path="/profile" description="Profile" />
          <NavLink path="/logout" description="Logout" />
        </NavbarMenu>
      </NavbarContainer>
    </>
  );
};

export default NavBar;
