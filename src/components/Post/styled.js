import styled from 'styled-components';

export const PostContainer = styled.article`
  width: 100%;
  max-width: 33rem;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryDark};
  background-color: #f5f5f5;
  position: relative;
  border-radius: 3px;
  margin-bottom: 3rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const PostContent = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PostInfo = styled.div`
  padding: 0.8rem;
`;

export const PostLikes = styled.p``;

export const PostDescription = styled.p`
  margin-bottom: 0.5rem;
  max-height: 7rem;
  overflow: auto;
`;
