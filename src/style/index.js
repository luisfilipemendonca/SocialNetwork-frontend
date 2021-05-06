import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 75%;

    @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
      font-size: 81.25%
    }

    @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
      font-size: 87.5%
    }
  }

  body {
    min-height: 100vh;
    background: ${({ theme }) =>
      `linear-gradient(to bottom right, ${theme.colors.backgroundYellow} 30%, ${theme.colors.backgroundPurple})`};
    color: ${({ theme }) => theme.typography.colors.textDark};
    font-size: ${({ theme }) => theme.typography.sizes.default};
    font-family: 'Poppins', sans-serif;
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  h1 {
    font-size: ${({ theme }) => theme.typography.sizes.primaryTitle};
  }

  h2 {
    font-size: ${({ theme }) => theme.typography.sizes.secondaryTitle};
  }

  h3 {
    font-size: ${({ theme }) => theme.typography.sizes.terciaryTitle};
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input {
    border: none;
    outline: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MainContainer = styled.main`
  padding-top: ${({ theme }) => theme.dimensions.navbarHeightSmall};
  max-width: 1000px;
  margin: 0 auto;
`;

export const MainSection = styled.section`
  padding: 1rem;
`;

export const SectionForm = styled(MainSection)`
  position: relative;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
