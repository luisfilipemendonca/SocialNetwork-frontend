import styled from 'styled-components';

export const UserProfile = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    width: 20rem;
    border-right: 1px solid ${({ theme }) => theme.colors.primaryLight};
    margin-right: 1rem;
    padding-right: 1rem;
  }
`;

export const UserData = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    flex-direction: column;
    align-items: center;
    border: none;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    align-self: flex-start;
    margin-bottom: 1.5rem;
  }
`;

export const UserPhotoContainer = styled.span`
  display: flex;
  width: 6rem;
  height: 6rem;
  font-size: 6rem;
`;

export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.h2`
  margin-left: 0.8rem;
  flex: 1;
`;

export const UserFollowers = styled.div`
  display: flex;
  justify-content: space-evenly;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
  padding: 0.5rem 0;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    border: none;
    margin-left: 5rem;
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    width: 100%;
    margin-left: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
    border-top: 1px solid ${({ theme }) => theme.colors.primaryLight};
  }
`;

export const UserFollow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;

export const UserFollowType = styled.span``;

export const UserFollowValue = styled.span``;

export const UserCta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primaryLight};
  margin-bottom: 1rem;

  & > *:not(:last-child) {
    margin-bottom: 1rem;
    width: 120px;
    text-align: center;
  }

  @media screen and (min-width: 400px) {
    flex-direction: row;

    & > *:not(:last-child) {
      margin-bottom: 0;
      width: unset;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.large}) {
    flex-direction: column;
    border-bottom: none;
    align-items: center;

    & > *:not(:last-child) {
      margin-bottom: 1.5rem;
    }
  }
`;

export const UserPostsMenu = styled.ul`
  flex: 1;
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(9rem, 1fr));
  grid-template-rows: repeat(auto-fill, 10rem);
  gap: 1rem;
`;

export const UserPostItem = styled.li``;

export const UserPostBtn = styled.button`
  display: block;
  height: 100%;
  position: relative;

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
  &:hover::after {
    opacity: 1;
  }
`;

export const UserPostImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;
