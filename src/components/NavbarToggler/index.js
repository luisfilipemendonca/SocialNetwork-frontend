import React from 'react';

import { HamburgerButton, HamburgerItem } from './styled';

const NavbarToggler = ({ openNavbarHandler, isOpen }) => {
  return (
    <HamburgerButton type="button" onClick={openNavbarHandler}>
      <HamburgerItem isOpen={isOpen} />
      <HamburgerItem isOpen={isOpen} />
      <HamburgerItem isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default NavbarToggler;
