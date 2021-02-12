import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  ToastWrapper,
  ToastContainerRight,
  ToastContainerCenter,
  ToastContainerLeft,
} from './styled';

import ToastItem from '../../components/ToastItem';
import { toastsTimeout } from '../../constants/Config/index';

const ToastContainer = () => {
  const toasts = useSelector((state) => state.toasts.toasts);
  const toastsRight = toasts.filter((toast) => toast.position === 'right');
  const toastsCenter = toasts.filter((toast) => toast.position === 'center');
  const toastsLeft = toasts.filter((toast) => toast.position === 'left');

  const createToasts = (filteredToasts, transitionClass) => {
    return filteredToasts.map(({ id, type, msg }) => {
      return (
        <CSSTransition
          key={id}
          timeout={toastsTimeout}
          classNames={transitionClass}
        >
          <ToastItem type={type} msg={msg} id={id} />
        </CSSTransition>
      );
    });
  };

  const createToastsRight = createToasts(toastsRight, 'toast-right');
  const createToastsCenter = createToasts(toastsCenter, 'toast-center');
  const createToastsLeft = createToasts(toastsLeft, 'toast-left');

  return (
    <>
      <ToastWrapper>
        <ToastContainerLeft toastTimeout={toastsTimeout}>
          <TransitionGroup component={null}>{createToastsLeft}</TransitionGroup>
        </ToastContainerLeft>
        <ToastContainerCenter toastTimeout={toastsTimeout}>
          <TransitionGroup component={null}>
            {createToastsCenter}
          </TransitionGroup>
        </ToastContainerCenter>
        <ToastContainerRight toastTimeout={toastsTimeout}>
          <TransitionGroup component={null}>
            {createToastsRight}
          </TransitionGroup>
        </ToastContainerRight>
      </ToastWrapper>
    </>
  );
};

export default ToastContainer;
