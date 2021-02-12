import React, { useState } from 'react';

import { HeaderContainer, HeaderTitle } from './styled';

import NavBar from '../../components/Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isLoggedIn = true;

  const togglerHandler = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <HeaderTitle>Social Network</HeaderTitle>
      {isLoggedIn && <NavBar isOpen={isOpen} togglerHandler={togglerHandler} />}
    </HeaderContainer>
  );
};

export default Header;
