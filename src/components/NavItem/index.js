import React from 'react';

import { MenuItem, LinkItem, IconContainer } from './styled';

const NavItem = ({ icon, path, label }) => {
  return (
    <MenuItem>
      <LinkItem to={path} exact>
        <IconContainer>{icon}</IconContainer>
        {label}
      </LinkItem>
    </MenuItem>
  );
};

export default NavItem;
