import styled from 'styled-components';

export const PostHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${(props) => (props.forComment ? '0' : '8px 0')};
  pointer-events: auto;
`;

export const PostIcon = styled.span`
  display: flex;
  font-size: ${(props) => (props.forComment ? '2rem' : '2.5rem')};
  margin-right: 0.5rem;
`;

export const UserDetails = styled.div`
  display: flex;
  align-items: center;
`;

export const Date = styled.span``;
