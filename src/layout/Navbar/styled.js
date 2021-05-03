import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  background-color: ${({ theme }) => theme.colors.primaryDark};
  height: ${({ theme }) => theme.dimensions.navbarHeightSmall};
  display: flex;
  align-items: center;
  justify-content: ${({ isLogged }) => (isLogged ? 'space-between' : 'center')};
  padding: 0.8rem;
  color: ${({ theme }) => theme.colors.secondaryDark};
  position: fixed;
  width: 100%;
`;

export const NavbarBrand = styled.h1``;
