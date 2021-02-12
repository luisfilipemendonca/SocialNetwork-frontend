import React from 'react';

import { HamburgerButton, HamburgerItem } from './styled';

const NavbarToggler = ({ togglerHandler, isOpen }) => {
  return (
    <HamburgerButton type="button" onClick={togglerHandler}>
      <HamburgerItem isOpen={isOpen} />
      <HamburgerItem isOpen={isOpen} />
      <HamburgerItem isOpen={isOpen} />
    </HamburgerButton>
  );
};

export default NavbarToggler;
