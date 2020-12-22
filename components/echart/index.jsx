import React from 'react';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'onResize',
  'className',
];

// props 默认值
const defaultProps = {};

// props 参数校验
const propTypes = {
  onResize: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

const useStateHook = () => {
};

const Echart = props => (
  <div
    className={classNames('qyrc-echart', props.className)}
    {...omit(props, filterPropKeys)}>
    1111111111111
  </div>
);

Echart.defaultProps = defaultProps;
Echart.propTypes = propTypes;
export default Echart;
