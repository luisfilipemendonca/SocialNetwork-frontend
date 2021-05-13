import React, { useState } from 'react';

import {
  ImgSliderContainer,
  ImgSliderBullets,
  ImgSliderBullet,
  ImgSliderItem,
} from './styled';

const ImgSlider = ({ imgs }) => {
  const [sliderPosition, setSliderPosition] = useState(0);

  const sliderPositionHandler = (position) => {
    setSliderPosition(position);
  };

  const bullets = Array.from({ length: imgs.length }).map((_, idx) => idx);
  const imgsData = imgs.map((img, idx) => ({ src: img, id: idx }));

  return (
    <>
      <ImgSliderContainer position={sliderPosition}>
        {imgsData.map(({ src, id }) => (
          <ImgSliderItem key={id} src={src} />
        ))}
      </ImgSliderContainer>
      {imgsData.length > 1 && (
        <ImgSliderBullets>
          {bullets.map((bullet) => (
            <ImgSliderBullet
              type="button"
              key={bullet}
              onClick={() => sliderPositionHandler(bullet)}
            />
          ))}
        </ImgSliderBullets>
      )}
    </>
  );
};

export default ImgSlider;
