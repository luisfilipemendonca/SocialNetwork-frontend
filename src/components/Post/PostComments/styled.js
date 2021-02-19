import styled from 'styled-components';

export const PostCommentsContainerAux = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: none;
`;

export const PostCommentsContainer = styled.div`
  pointer-events: auto;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  transition: 0.4s linear;
  transition-property: transform, opacity;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  transform: ${(props) =>
    props.isOpen ? 'translateY(0)' : 'translateY(100%)'};
`;

export const PostCommentsHeader = styled.header`
  position: relative;
  border-bottom: 1px solid green;

  button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: flex;
  }
`;

export const PostCommentsTitle = styled.h4`
  text-align: center;
  padding: 12px 0;
`;

export const CommentsContainer = styled.div`
  height: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 0 16px;
`;

export const CommentContainer = styled.div`
  border: 1px solid green;
  margin-top: 16px;
  border-radius: 3px;
  padding: 8px;

  &:last-of-type {
    margin-bottom: 16px;
  }
`;

export const Comment = styled.p`
  padding: 8px 8px 0;
  font-size: 0.9rem;
`;

export const CommentForm = styled.form`
  padding: 16px;
  border-top: 1px solid green;
`;
