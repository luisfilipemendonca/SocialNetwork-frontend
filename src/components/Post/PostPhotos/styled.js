import styled from 'styled-components';

export const PostPhotoContainer = styled.div`
  height: 25rem;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${({ theme }) => theme.mediaQueries.medium}) {
    height: 28rem;
    padding: 0 0.8rem;
  }
`;

export const PostPhotoSlider = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: absolute;
  transform: ${({ position }) => `translateX(${position * -100}%)`};
  transition: transform 0.3s linear;
`;

export const PostPhoto = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const PostSliderBulletsContainer = styled.div`
  position: absolute;
  background-color: rgba(163, 164, 207, 0.4);
  bottom: 0;
  left: 0;
  height: 2.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostSliderBullet = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;
