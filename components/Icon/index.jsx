import React from 'react';
import classNames from 'classnames';
import '../assets/iconfont/iconfont.js';

export default (props) => {
  return (
    <svg 
      aria-hidden="true"
      className={classNames('qyrc-icon', props.className)}>
      <use xlinkHref={`#${props.type}`} ></use>
    </svg>
  );
};
