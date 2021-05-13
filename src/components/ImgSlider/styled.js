import styled from 'styled-components';

export const ImgSliderContainer = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: absolute;
  transform: ${({ position }) => `translateX(${position * -100}%)`};
  transition: transform 0.3s linear;
`;

export const ImgSliderItem = styled.img`
  display: inline-block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImgSliderBullets = styled.div`
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

export const ImgSliderBullet = styled.button`
  width: 1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-right: 0.5rem;
  }
`;
