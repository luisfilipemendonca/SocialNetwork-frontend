import styled from 'styled-components';

export const FormContainer = styled.form`
  background-color: #f5f5f5;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryDark};
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  & > * {
    margin-bottom: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 70%;
    clip-path: polygon(0 0, 100% 0, 100% 59%, 0% 100%);
    background-color: ${({ theme }) => theme.colors.primaryDark};
    z-index: -1;
  }
`;

export const FormHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryDark};
  padding: 0.8rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    padding: 1rem 2rem;
  }
`;

export const FormTitle = styled.h1`
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const FormInfo = styled.p`
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const FormContent = styled.div`
  height: 300px;
  margin: 0 2rem 2rem;
  border-radius: 3px;
  background-color: #f5f5f5;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryDark};

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin: 0 4rem 2rem;
  }
`;

export const FormBtns = styled.div`
  display: flex;
`;
