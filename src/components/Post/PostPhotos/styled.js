import styled from 'styled-components';

export const PostPhotoContainer = styled.div`
  height: 25rem;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    height: 28rem;
    padding: 0 0.8rem;
  }
`;
