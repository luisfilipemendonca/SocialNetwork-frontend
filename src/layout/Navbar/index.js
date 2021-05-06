import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
  NavbarTogglerItem,
} from './styled';

const Navbar = () => {
  const { isLogged } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const openNavbarHandler = () => setIsOpen((prevState) => !prevState);

  return (
    <NavbarContainer isLogged={isLogged}>
      <NavbarBrand>Social Network</NavbarBrand>
      {isLogged && (
        <NavbarToggler onClick={openNavbarHandler}>
          <NavbarTogglerItem isOpen={isOpen} />
          <NavbarTogglerItem isOpen={isOpen} />
          <NavbarTogglerItem isOpen={isOpen} />
        </NavbarToggler>
      )}
      <NavbarMenu isOpen={isOpen}>
        <NavbarItem>
          <NavbarLink to="/">World</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/following">Following</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="profile">Profile</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
