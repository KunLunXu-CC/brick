import React from 'react';
import classNames from 'classnames';
import '../assets/iconfont/iconfont.js';

const useState = (props) => {
  const onClick = (...args) => {
    props.onClick && props.onClick(...args);
  }
  return { onClick };
};

export default (props) => {
  const state = useState(props);
  return (
    <svg
      aria-hidden="true"
      onClick={state.onClick}
      className={classNames('qyrc-icon', props.className)}>
      <use xlinkHref={`#${props.type}`} ></use>
    </svg>
  );
};
