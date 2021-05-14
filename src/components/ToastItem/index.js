import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import { ToastItemContainer, ToastDescription, ToastBorder } from './styled';

const ToastItem = ({ description }) => {
  const [borderWidth, setBorderWidth] = useState(100);

  useEffect(() => {
    const borderInterval = setTimeout(() => {
      if (borderWidth === 0) {
        clearTimeout(borderInterval);
      } else {
        setBorderWidth((prev) => prev - 1);
      }
    }, 50);

    return () => clearTimeout(borderInterval);
  }, [borderWidth]);

  return (
    <ToastItemContainer>
      <ToastDescription>{description}</ToastDescription>
      <span>
        <FaTimes />
      </span>
      <ToastBorder borderWidth={borderWidth} />
    </ToastItemContainer>
  );
};

export default ToastItem;
