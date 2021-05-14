import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  ToastsContainer,
  ToastContainerCenter,
  ToastContainerLeft,
  ToastContainerRight,
} from './styled';

import { addToast } from '../../store/actions/toasts';

import ToastItem from '../../components/ToastItem';

const Toasts = () => {
  const dispatch = useDispatch();
  const {
    right: rightToasts,
    left: leftToasts,
    center: centerToasts,
  } = useSelector((state) => state.toasts);

  useEffect(() => {
    dispatch(addToast());
    dispatch(addToast());
  }, []);

  return (
    <ToastsContainer>
      <ToastContainerLeft>
        <TransitionGroup className="toast-list" component="ul">
          {leftToasts.map(({ id, description }) => (
            <CSSTransition
              timeout={1000}
              classNames="toasts"
              key={id}
              unmountOnExit
            >
              <ToastItem description={description} id={id} position="left" />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerLeft>
      <ToastContainerCenter>
        <TransitionGroup className="toast-list" component="ul">
          {centerToasts.map(({ id, description }) => (
            <CSSTransition
              timeout={1000}
              classNames="toasts"
              key={id}
              unmountOnExit
            >
              <ToastItem
                key={id}
                description={description}
                id={id}
                position="center"
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerCenter>
      <ToastContainerRight>
        <TransitionGroup className="toast-list" component="ul">
          {rightToasts.map(({ id, description }) => (
            <CSSTransition
              timeout={1000}
              classNames="toasts"
              key={id}
              unmountOnExit
            >
              <ToastItem description={description} id={id} position="left" />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerRight>
    </ToastsContainer>
  );
};

export default Toasts;
