import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import {
  ToastItemContainer,
  ToastDescription,
  ToastBorder,
  ToastClose,
} from './styled';

import { deleteToasts } from '../../store/actions/toasts';

const ToastItem = ({ description, id, position, type }) => {
  const dispatch = useDispatch();
  const [borderWidth, setBorderWidth] = useState(100);

  const deleteToastHandler = () => {
    dispatch(deleteToasts({ id, position }));
  };

  useEffect(() => {
    const borderInterval = setTimeout(() => {
      if (borderWidth === 0) {
        clearTimeout(borderInterval);
        dispatch(deleteToasts({ id, position }));
      } else {
        setBorderWidth((prev) => prev - 1);
      }
    }, 50);

    return () => clearTimeout(borderInterval);
  }, [borderWidth]);

  return (
    <ToastItemContainer type={type}>
      <ToastDescription>{description}</ToastDescription>
      <ToastClose type="button" toastType={type} onClick={deleteToastHandler}>
        <FaTimes />
      </ToastClose>
      <ToastBorder borderWidth={borderWidth} type={type} />
    </ToastItemContainer>
  );
};

export default ToastItem;
