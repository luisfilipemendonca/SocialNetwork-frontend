import styled from 'styled-components';
import { IconButton } from '../Buttons/styled';
import { FormContent } from '../Form/styled';
import { InputContainer } from '../Inputs/styled';

export const CardContainer = styled.div`
  width: 100%;
  margin-top: ${(props) => props.theme.margins.large};
  background: #fff;
  border-radius: ${(props) => props.theme.borderRadius};
  max-width: 40rem;
  position: relative;

  &:first-of-type {
    margin-top: ${(props) => props.theme.margins.small};
  }
`;

export const CardHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.paddings.small};
`;

export const HeaderPhotoContainer = styled.div`
  height: 4rem;
  width: 4rem;
  font-size: 4rem;
  border-radius: 50%;
  overflow: hidden;
`;

export const HeaderPhoto = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const HeaderInfo = styled.div`
  margin-left: ${(props) => props.theme.margins.small};
`;

export const PostUsername = styled.h2`
  margin-bottom: 3px;
`;

export const PostDate = styled.span`
  font-size: 1rem;
`;

export const CardPhotoContainer = styled.div`
  height: 350px;
  position: relative;
  overflow: hidden;
`;

export const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
`;

export const CardDescriptionContainer = styled.div`
  padding: ${(props) => props.theme.paddings.medium};
  font-size: 1.2rem;
`;

export const Description = styled.p`
  max-height: 50px;
  overflow: auto;
  padding-bottom: ${(props) => props.theme.paddings.small};
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

export const BulletsContainer = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: center;
  padding: 3px 0;

  ${IconButton} {
    &:not(:last-of-type) {
      margin-right: ${(props) => props.theme.margins.small};
    }
  }
`;

export const ActionsCounter = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props.theme.margins.small};

  svg {
    margin-right: ${(props) => props.theme.margins.small};
    color: ${(props) => props.theme.colors.primaryNormal};
  }
`;

export const CtaContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translateY(30%);
  display: flex;

  ${IconButton} {
    font-size: 2rem;
    height: 4rem;
    width: 4rem;
    background: ${(props) => props.theme.colors.primaryDark};
    border-radius: ${(props) => props.theme.borderRadius};
    color: #fff;

    &:not(:last-of-type) {
      margin-right: ${(props) => props.theme.margins.small};
    }
  }
`;

export const LikeContainer = styled.div``;

export const HeartItem = styled.span`
  @keyframes likeAnimation {
    to {
      bottom: 100%;
      opacity: 0;
    }
  }

  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fff;
  position: absolute;
  bottom: -2.5rem;
  transform: rotate(45deg);
  animation: ${(props) => (props.liked ? 'likeAnimation 3s ease' : null)};

  &:nth-child(1) {
    left: calc(0% - 0.75rem);
    animation-delay: 0.8s;
  }

  &:nth-child(2) {
    left: calc(5% - 0.75rem);
    animation-delay: 1.2s;
  }

  &:nth-child(3) {
    left: calc(10% - 0.75rem);
    animation-delay: 2s;
  }

  &:nth-child(4) {
    left: calc(15% - 0.75rem);
    animation-delay: 2.4s;
  }

  &:nth-child(5) {
    left: calc(20% - 0.75rem);
    animation-delay: 0.3s;
  }

  &:nth-child(6) {
    left: calc(25% - 0.75rem);
    animation-delay: 1.5s;
  }

  &:nth-child(7) {
    left: calc(30% - 0.75rem);
    animation-delay: 1s;
  }

  &:nth-child(8) {
    left: calc(35% - 0.75rem);
    animation-delay: 0.5s;
  }

  &:nth-child(9) {
    left: calc(40% - 0.75rem);
    animation-delay: 2.1s;
  }

  &:nth-child(10) {
    left: calc(45% - 0.75rem);
    animation-delay: 1.3s;
  }

  &:nth-child(11) {
    left: calc(50% - 0.75rem);
    animation-delay: 0.8s;
  }

  &:nth-child(12) {
    left: calc(55% - 0.75rem);
    animation-delay: 0.3s;
  }

  &:nth-child(13) {
    left: calc(60% - 0.75rem);
    animation-delay: 2s;
  }

  &:nth-child(14) {
    left: calc(65% - 0.75rem);
    animation-delay: 1.8s;
  }

  &:nth-child(15) {
    left: calc(70% - 0.75rem);
    animation-delay: 2.3s;
  }

  &:nth-child(16) {
    left: calc(75% - 0.75rem);
    animation-delay: 0.4s;
  }

  &:nth-child(17) {
    left: calc(80% - 0.75rem);
    animation-delay: 1s;
  }

  &:nth-child(18) {
    left: calc(85% - 0.75rem);
    animation-delay: 1.5s;
  }

  &:nth-child(19) {
    left: calc(90% - 0.75rem);
    animation-delay: 1.1s;
  }

  &:nth-child(20) {
    left: calc(95% - 0.75rem);
    animation-delay: 2s;
  }

  &:nth-child(21) {
    left: calc(100% - 0.75rem);
    animation-delay: 0.5s;
  }

  &:after,
  &:before {
    position: absolute;
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    background-color: #fff;
    border-radius: 50%;
  }

  &:after {
    transform: translate(-50%, 0%);
  }

  &:before {
    transform: translate(0%, -50%);
  }
`;

export const CommentsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  background: #fff;
  height: ${(props) => (props.isOpen ? '100%' : '0%')};
  width: 100%;
  transition: all 0.2s;
  opacity: ${(props) => (props.isOpen ? '1' : '0')};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0 ${(props) => props.theme.paddings.medium};
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${FormContent} {
    padding: ${(props) => props.theme.paddings.large}
      ${(props) => props.theme.paddings.medium};
    display: flex;
    align-items: center;

    ${InputContainer} {
      margin-bottom: 0;
      flex: 1;
      margin-right: ${(props) => props.theme.margins.medium};
    }
  }
`;

export const CommentsHeader = styled.div`
  position: relative;

  ${IconButton} {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Title = styled.h3`
  text-align: center;
  padding: ${(props) => props.theme.paddings.medium} 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
`;

export const CommentsContent = styled.div`
  height: 100%;
  overflow: auto;
  border-bottom: 1px solid ${(props) => props.theme.colors.primaryLight};
  display: ${(props) => (props.hasNoComments ? 'flex' : null)};
  align-items: ${(props) => (props.hasNoComments ? 'center' : null)};
  justify-content: ${(props) => (props.hasNoComments ? 'center' : null)};
`;

export const CommentContainer = styled.div`
  @keyframes commentBlink {
    0% {
      background: #fff;
    }
    12.5% {
      background: ${(props) => props.theme.colors.primaryLight};
    }
    25% {
      background: #fff;
    }
    37.5% {
      background: ${(props) => props.theme.colors.primaryLight};
    }
    50% {
      background: #fff;
    }
    62.5% {
      background: ${(props) => props.theme.colors.primaryLight};
    }
    75% {
      background: #fff;
    }
    87.5% {
      background: ${(props) => props.theme.colors.primaryLight};
    }
    100% {
      background: #fff;
    }
  }

  padding: ${(props) => props.theme.paddings.small}
    ${(props) => props.theme.paddings.medium}
    ${(props) => props.theme.paddings.medium};
  position: relative;
  animation: ${(props) => (props.isRecentlyAdded ? 'commentBlink 2.5s' : null)};

  &:not(:last-child):before {
    position: absolute;
    content: '';
    height: 1px;
    width: 80%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.colors.primaryLight};
  }
`;

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;

  svg {
    font-size: 3rem;
  }
`;

export const UserPhoto = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const CommentUserInfo = styled.div`
  margin-left: ${(props) => props.theme.margins.small};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

export const CommentUsername = styled.h3``;

export const CommentDate = styled.span`
  font-size: 0.9rem;
`;

export const Comment = styled.p`
  margin-left: 3.8rem;
`;
