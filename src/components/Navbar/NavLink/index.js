import React from 'react';

import { NavbarItem, NavbarLink } from './styled';

const NavLink = ({ path, description }) => {
  return (
    <NavbarItem>
      <NavbarLink to={path} exact>
        {description}
      </NavbarLink>
    </NavbarItem>
  );
};

export default NavLink;
