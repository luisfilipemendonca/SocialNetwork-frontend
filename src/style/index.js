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

  button,
  ::placeholder {
    font-family: 'Poppins', sans-serif;
  }

  input,
  textarea {
    border: none;
    outline: none;
    resize: none;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MainContainer = styled.main`
  padding: ${({ theme }) =>
      `calc(${theme.dimensions.navbarHeightSmall} + 1rem)`}
    1rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
`;

export const MainSection = styled.section``;

export const SectionForm = styled(MainSection)`
  position: relative;
`;

export const SectionProfile = styled(MainSection)`
  height: calc(
    100vh - ${({ theme }) => theme.dimensions.navbarHeightSmall} - 2rem
  );
  background-color: #f5f5f5;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryLight};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  margin: 0 auto;
  padding: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    max-width: unset;
    flex-direction: row;
  }
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
