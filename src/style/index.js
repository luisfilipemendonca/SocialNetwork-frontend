import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    background: linear-gradient(
      to bottom,
      ${(props) => props.theme.colors.primaryLight},
      ${(props) => props.theme.colors.tertiaryLight}
    );
    font-size: ${(props) => props.theme.fonts.defaultSize};
    color: ${(props) => props.theme.fonts.colorDark};
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }

  input {
    border: none;
    outline: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    html {
      font-size: 75%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - ${(props) => props.theme.components.headerHeight});
`;

export const BtnCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
