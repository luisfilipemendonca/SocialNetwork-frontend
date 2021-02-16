import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryDark};
  height: ${(props) => props.theme.header.heightSM};
  z-index: 10;

  @media screen and (min-width: 576px) {
    padding: 0 16px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 992px) {
    padding: 0 64px;
    height: ${(props) => props.theme.header.heightLG};
  }

  @media screen and (min-width: 1200px) {
    padding: 16px 80px;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${(props) => props.theme.colors.secondaryLight};
  text-shadow: 0 0 10px ${(props) => props.theme.colors.primaryDark};
  z-index: 100;
  margin: ${(props) => (props.isLogged ? null : '0 auto')};
`;
