import React from 'react';
import { useSelector } from 'react-redux';

import { NavbarContainer, NavbarBrand } from './styled';

const Navbar = () => {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <NavbarContainer isLogged={isLogged}>
      <NavbarBrand>SocialNetwork</NavbarBrand>
    </NavbarContainer>
  );
};

export default Navbar;
