import styled from 'styled-components';

export const PostHeaderContainer = styled.div`
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

export const PostUserIcon = styled.span`
  display: flex;
  color: ${({ theme }) => theme.colors.primaryLight};

  svg {
    font-size: 3.5rem;
  }
`;

export const PostUsername = styled.h3`
  margin-left: 0.5rem;
`;

export const PostDate = styled.span``;
