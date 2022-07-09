import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../assets/iconfont/iconfont.js';

const useState = (props) => {
  const onClick = (...args) => {
    _.isFunction(props.onClick) && props.onClick(...args);
  };

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
    <svg
      style={props.style}
      onClick={state.onClick}
      className={classNames(
        'brick-icon',
        props.className,
        { 'brick-icon-btn': _.isFunction(props.onClick) },
      )}
      aria-hidden="true" >
      <use xlinkHref={`#${props.type}`}  />
    </svg>
  );
};

Icon.propTypes = propTypes;

export default Icon;
