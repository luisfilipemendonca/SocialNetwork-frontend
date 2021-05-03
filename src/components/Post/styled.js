import styled from 'styled-components';

export const PostContainer = styled.article`
  width: 100%;
  max-width: 450px;
  box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryDark};
  margin-bottom: 3rem;
  background-color: #f5f5f5;
  position: relative;
  border-radius: 3px;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    box-shadow: 0 0 1rem ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const PostContent = styled.div`
  position: relative;
  overflow: hidden;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const PostUser = styled.div`
  display: flex;
  align-items: center;
`;

export const PostUserImg = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  object-fit: cover;
  display: block;
`;

export const PostUserIcon = styled.span``;

export const PostUsername = styled.h3``;

export const PostDate = styled.span``;

export const PostPhotoContainer = styled.div`
  height: 25rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    height: 28rem;
    padding: 0 0.8rem;
  }
`;

export const PostPhoto = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const PostLikes = styled.p`
  padding: 0.3rem 0.8rem;
`;

export const PostDescription = styled.p`
  padding: 0.3rem 0.8rem;
`;

export const PostCta = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(1px, 50%);
`;

export const PostBtn = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: ${({ theme }) => theme.colors.secondaryLight};
  width: 3.5rem;
  height: 3.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  border-radius: 3px;

  &:not(:last-of-type) {
    margin-right: 0.8rem;
  }

  & svg {
    overflow: visible;
  }
`;

export const PostCommentsContainer = styled.div`
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  transition: top 0.5s linear, opacity 0.4s linear;
  border-radius: 3px;
`;

export const PostCommentsHeader = styled.h3`
  text-align: center;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryDark};
`;

export const PostCommentsContent = styled.ul`
  flex: 1;
  overflow: auto;
  padding: 1rem;
`;

export const PostCommentCta = styled.div``;

export const CommentContainer = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryLight};
`;

export const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

export const CommentUser = styled.h4``;

export const CommentDate = styled.span``;

export const Comment = styled.p`
  font-size: 1rem;
`;
