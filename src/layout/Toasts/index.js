import React from 'react';
import { useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import {
  ToastsContainer,
  ToastContainerCenter,
  ToastContainerLeft,
  ToastContainerRight,
} from './styled';

import ToastItem from '../../components/ToastItem';

const Toasts = () => {
  const {
    right: rightToasts,
    left: leftToasts,
    center: centerToasts,
  } = useSelector((state) => state.toasts);

  return (
    <ToastsContainer>
      <ToastContainerLeft>
        <TransitionGroup className="toast-list" component="ul">
          {leftToasts.map(({ id, description, type }) => (
            <CSSTransition
              timeout={1000}
              classNames="toasts"
              key={id}
              unmountOnExit
            >
              <ToastItem
                description={description}
                id={id}
                position="left"
                type={type}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerLeft>
      <ToastContainerCenter>
        <TransitionGroup className="toast-list" component="ul">
          {centerToasts.map(({ id, description, type }) => (
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
                type={type}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerCenter>
      <ToastContainerRight>
        <TransitionGroup className="toast-list" component="ul">
          {rightToasts.map(({ id, description, type }) => (
            <CSSTransition
              timeout={1000}
              classNames="toasts"
              key={id}
              unmountOnExit
            >
              <ToastItem
                description={description}
                id={id}
                position="left"
                type={type}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ToastContainerRight>
    </ToastsContainer>
  );
};

export default Toasts;
