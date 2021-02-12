import React, { useState } from 'react';

import {
  Header,
  HeaderTitle,
  NavbarContainer,
  NavbarMenu,
  NavbarItem,
  NavbarLink,
} from './styled';

import NavbarToggler from '../../components/NavbarToggler';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isLoggedIn = true;

  const openNavbarHandler = () => setIsOpen(!isOpen);

  return (
    <Header>
      <HeaderTitle>Social Network</HeaderTitle>
      {isLoggedIn && (
        <>
          <NavbarToggler
            openNavbarHandler={openNavbarHandler}
            isOpen={isOpen}
          />
          <NavbarContainer isOpen={isOpen}>
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
                <NavbarLink to="/logout" exact>
                  Logout
                </NavbarLink>
              </NavbarItem>
            </NavbarMenu>
          </NavbarContainer>
        </>
      )}
    </Header>
  );
};

export default Navbar;
