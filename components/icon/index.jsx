import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/iconfont/iconfont.js';

const useState = (props) => {
  const onClick = (...args) => {
    _.isFunction(props.onClick) && props.onClick(...args);
  }
  return { onClick };
};

const propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Icon = (props) => {
  const state = useState(props);
  return (
    <span
      style={props.style}
      onClick={state.onClick}
      className={classNames(
        'qyrc-icon',
        props.className,
        {'qyrc-icon-btn': _.isFunction(props.onClick)},
      )}
    >
      <svg className="qyrc-icon-svg" aria-hidden="true" >
        <use xlinkHref={`#${props.type}`} ></use>
      </svg>
    </span>
  );
};
Icon.propTypes = propTypes;
export default Icon;
