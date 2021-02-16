import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { HeaderContainer, HeaderTitle } from './styled';

import NavBar from '../../components/Navbar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLogged);

  const togglerHandler = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer>
      <HeaderTitle isLogged={isLoggedIn}>Social Network</HeaderTitle>
      {isLoggedIn && <NavBar isOpen={isOpen} togglerHandler={togglerHandler} />}
    </HeaderContainer>
  );
};

export default Header;
