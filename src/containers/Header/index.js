import React, { useState } from 'react';
import { FaGlobeAmericas, FaUserFriends, FaUserAlt } from 'react-icons/fa';

import {
  HeaderContainer,
  HeaderTitle,
  HamburguerItem,
  NavMenu,
  Menu,
} from './styled';

import Button from '../../components/Buttons';
import NavItem from '../../components/NavItem';

const Header = () => {
  const isLogged = true;

  const [isOpen, setIsOpen] = useState(false);

  const openMenuHandler = () => setIsOpen(!isOpen);

  return (
    <HeaderContainer isLogged={isLogged}>
      <HeaderTitle>Social Network</HeaderTitle>
      <Button className="btn-icon" clickHandler={openMenuHandler}>
        <HamburguerItem isOpen={isOpen} />
        <HamburguerItem isOpen={isOpen} />
        <HamburguerItem isOpen={isOpen} />
      </Button>
      <NavMenu isOpen={isOpen}>
        <Menu isOpen={isOpen}>
          <NavItem path="/" icon={<FaGlobeAmericas />} label="World" />
          <NavItem
            path="/following"
            icon={<FaUserFriends />}
            label="Following"
          />
          <NavItem path="/profile" icon={<FaUserAlt />} label="Profile" />
        </Menu>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
