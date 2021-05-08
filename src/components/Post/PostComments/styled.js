import styled from 'styled-components';

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

export const CommentContainer = styled.li`
  @keyframes blink {
    0% {
      background-color: #f5f5f5;
    }
    20% {
      background-color: rgba(163, 164, 207, 0.2);
    }
    40% {
      background-color: #f5f5f5;
    }
    60% {
      background-color: rgba(163, 164, 207, 0.2);
    }
    80% {
      background-color: #f5f5f5;
    }
    100% {
      background-color: rgba(163, 164, 207, 0.2);
    }
  }

  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.primaryLight};
  animation: ${({ recentlyAdded }) =>
    recentlyAdded ? 'blink 2s linear' : 'none'};
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

export const PostCommentCta = styled.div`
  padding: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
`;

export const CommentForm = styled.form``;
