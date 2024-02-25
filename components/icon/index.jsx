import _ from 'lodash';
import renderSvg from './renderSvg';
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

const Icon = (props) => {
  const handleClick = useCallback((...args) => {
    _.isFunction(props.onClick) && props.onClick(...args);
  }, [props.onClick]);

  useEffect(() => {
    renderSvg();
  }, []);

  return (
    <svg
      style={props.style}
      onClick={handleClick}
      className={classNames(
        props.type,
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
