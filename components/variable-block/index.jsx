import _ from 'lodash';
import omit from 'omit.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useEffect } from 'react';

import useResize from './useResize';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'style',
  'margin',
  'onResize',
  'className',
  'threshold',
  'dragHeight',
  'operationList',
  'defaultParams',
  'constraintSize',
];

// props 参数校验
const paramsType =  PropTypes.shape({
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});
const propTypes = {
  threshold: PropTypes.number,
  constraintSize: PropTypes.shape({
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  margin: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bottom: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    right: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  operationList: PropTypes.arrayOf(PropTypes.string),
  defaultParams: paramsType,
  dragHeight: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onResize: PropTypes.func,
};

const useStateHook = (props) => {
  const targetRef = useRef(null);
  const params = useResize(targetRef, {
    margin: props.margin,
    threshold: props.threshold,
    dragHeight: props.dragHeight,
    defaultParams: props.defaultParams,
    operationList: props.operationList,
    constraintSize: props.constraintSize,
  });

  useEffect(() => {
    _.isFunction(props.onResize) && props.onResize(params);
  }, [params]);

  return { ...params, targetRef };
};

const VariableBlock = (props) => {
  const state = useStateHook(props);

  return (
    <div
      style={{
        ...props.style,
        width: state.width,
        height: state.height,
        transform: `translate(${state.offsetX}px, ${state.offsetY}px)`,
        background: 'pink',
      }}
      ref={state.targetRef}
      className={classNames(props.className)}
      {...omit(props, filterPropKeys)}
    />
  );
}
VariableBlock.propTypes = propTypes;
export default VariableBlock;