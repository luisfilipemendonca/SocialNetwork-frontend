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
    background-attachment: fixed;
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

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) =>
    props.isLoading || props.fullCenter ? 'center' : null};
  padding: ${(props) => props.theme.components.headerHeight}
    ${(props) => props.theme.paddings.small} 0;
  min-height: ${(props) =>
    props.isLoading || props.fullCenter ? '100vh' : null};
`;

export const BtnCenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
