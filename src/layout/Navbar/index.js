import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  NavbarContainer,
  NavbarBrand,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
  NavbarToggler,
  NavbarTogglerItem,
} from './styled';

import { logout } from '../../store/actions/user';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const openNavbarHandler = () => setIsOpen((prevState) => !prevState);

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <NavbarContainer isLogged={isLogged}>
      <NavbarBrand>Social Network</NavbarBrand>
      {isLogged && (
        <>
          <NavbarToggler onClick={openNavbarHandler}>
            <NavbarTogglerItem isOpen={isOpen} />
            <NavbarTogglerItem isOpen={isOpen} />
            <NavbarTogglerItem isOpen={isOpen} />
          </NavbarToggler>
          <NavbarMenu isOpen={isOpen}>
            <NavbarItem>
              <NavbarLink to="/" exact>
                World
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/following" exact>
                Following
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/profile" exact>
                Profile
              </NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="/login" exact onClick={logoutHandler}>
                Logout
              </NavbarLink>
            </NavbarItem>
          </NavbarMenu>
        </>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
