import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';

import { ToastItemWrapper, ToastItemClose, ToastItemTimer } from './styled';

import { toastsDuration, toastsSteps } from '../../constants/Config';

import { deleteToast } from '../../store/actions/Toasts';

const ToastItem = ({ type, msg, id }) => {
  const dispatch = useDispatch();
  const toastTimerRef = useRef();
  let toastTimeout;

  const deleteToastHandler = () => {
    clearInterval(toastTimeout);
    dispatch(deleteToast(id));
  };

  useEffect(() => {
    let toastCurrentTimeout = toastsDuration;
    toastTimeout = setInterval(() => {
      toastCurrentTimeout -= toastsSteps;
      if (toastCurrentTimeout <= 0) {
        deleteToastHandler();
      }
      const newTimerWidth = (toastCurrentTimeout * 100) / toastsDuration;

      if (toastTimerRef.current) {
        toastTimerRef.current.style.width = `${newTimerWidth}%`;
      }
    }, toastsSteps);
  }, []);

  return (
    <ToastItemWrapper className={type}>
      {msg}
      <ToastItemClose>
        <button type="button" onClick={deleteToastHandler}>
          <MdClose size={18} color="#fff" />
        </button>
      </ToastItemClose>
      <ToastItemTimer className={type} ref={toastTimerRef} />
    </ToastItemWrapper>
  );
};

export default ToastItem;
