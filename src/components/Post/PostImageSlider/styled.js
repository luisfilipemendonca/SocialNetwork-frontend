import styled from 'styled-components';

export const SliderContainer = styled.div`
  display: inline-block;
  white-space: nowrap;
  width: 100%;
  height: 100%;
  transition: transform 0.5s linear;
  transform: ${(props) => `translateX(-${props.slideTranslation}%)`};

  & > * {
    display: inline-block;
    width: 100%;
  }
`;

export const SliderBullets = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  padding: 8px;
  display: flex;
  justify-content: center;
`;

export const Bullet = styled.span`
  display: inline-block;
  height: 15px;
  width: 15px;
  background: green;
  border-radius: 50%;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;
