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
    justify-content: space-between;
    padding-bottom: 1rem;
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

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.small}) {
    margin-bottom: 0;
  }

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
    align-items: center;
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
  justify-content: ${({ isNotUserProfile }) =>
    isNotUserProfile ? 'center' : 'space-between'};
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
