import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryDark};

  @media screen and (min-width: 768px) {
    padding: 16px 32px;
  }

  @media screen and (min-width: 992px) {
    padding: 16px 64px;
  }

  @media screen and (min-width: 1200px) {
    padding: 16px 80px;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondaryDark};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.primaryDark};
  z-index: 100;
`;
