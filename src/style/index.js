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
      to right,
      ${(props) => props.theme.colors.tertiaryLight},
      ${(props) => props.theme.colors.primaryLight},
      ${(props) => props.theme.colors.secondaryLight}
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

  input {
    border: none;
    outline: none;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    html {
      font-size: 75%;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.large}) {
    html {
      font-size: 87.5%;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
