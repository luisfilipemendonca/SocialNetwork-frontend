import styled from 'styled-components';

export const UserPostsMenu = styled.ul`
  flex: 1;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 1rem;
`;

export const UserPostItem = styled.li`
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  height: 10rem;
`;

export const UserPostBtn = styled.button`
  display: block;
  height: 100%;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(108, 110, 178, 0.5);
  }

  &::after {
    content: 'Show Post';
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 70%;
    transform: translate(-50%, -50%);
    border: 2px solid ${({ theme }) => theme.colors.secondaryDark};
    color: ${({ theme }) => theme.colors.secondaryDark};
    padding: 0.2rem 0.7rem;
    white-space: nowrap;
    border-radius: 3px;
    font-size: 1rem;
    font-weight: 500;
  }

  &::before,
  &::after {
    opacity: 0;
    transition: opacity 0.3s linear;
  }

  &:hover::before,
  &:hover::after,
  &:focus::before,
  &:focus::after {
    opacity: 1;
  }
`;

export const UserPostImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
