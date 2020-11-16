import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BtnCenterContainer } from '../../style';

export const ProfileContainer = styled.div`
  height: calc(
    100vh - ${(props) => props.theme.components.headerHeight} -
      ${(props) => props.theme.paddings.medium}
  );
  width: 100%;
  max-width: 450px;
  background: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  padding: ${(props) => props.theme.paddings.medium} 0;
  overflow: auto;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    display: flex;
    align-items: flex-start;
    max-width: 1000px;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${(props) => props.theme.paddings.medium};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    height: 100%;
    border-right: 1px solid ${(props) => props.theme.colors.primaryLight};
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
  padding-bottom: ${(props) => props.theme.paddings.small};
`;

export const ProfilePicture = styled.div`
  width: 6rem;
  height: 6rem;
  font-size: 6rem;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: block;
    object-fit: cover;
  }
`;

export const Username = styled.h2`
  margin-left: ${(props) => props.theme.margins.medium};
  font-size: 2.3rem;
`;

export const UserFollowers = styled.div`
  display: flex;
  justify-content: center;
  padding: ${(props) => props.theme.paddings.small} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

export const Followers = styled.div`
  text-align: center;

  &:not(:last-of-type) {
    margin-right: ${(props) => props.theme.margins.large};
  }
`;

export const UserCta = styled(BtnCenterContainer)`
  padding: ${(props) => props.theme.paddings.small};
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: ${(props) => props.theme.margins.medium};
  }
`;

export const UserPostsContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.primaryLight};
  padding: ${(props) => props.theme.paddings.small};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: ${(props) => props.theme.paddings.small};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    flex: 1;
    overflow: auto;
    max-height: 100%;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    border-top: none;
    padding: 0 ${(props) => props.theme.paddings.medium};
    gap: ${(props) => props.theme.paddings.medium};
  }
`;

export const PostContainer = styled(Link)`
  position: relative;

  &:after {
    content: 'See More';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.7);
    font-size: 1.4rem;
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 120px;
    display: block;
    object-fit: cover;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.medium}) {
    img {
      height: 150px;
    }
  }
`;
