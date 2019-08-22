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
  params: paramsType,
  defaultParams: paramsType,
  dragHeight: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  onResize: PropTypes.func,
};

const useStateHook = (props, ref) => {
  const targetRef = ref || useRef(null);
  const params = useResize(targetRef, {
    margin: props.margin,
    threshold: props.threshold,
    dragHeight: props.dragHeight,
    operationList: props.operationList,
    constraintSize: props.constraintSize,
    defaultParams: props.params || props.defaultParams,
  });

  useEffect(() => {
    _.isFunction(props.onResize) && props.onResize(params);
  }, [params]);

  return { ...{...params, ...props.params }, targetRef };
};

const VariableBlock =  React.forwardRef((props, ref) => {
  const state = useStateHook(props, ref);
  return (
    <div
      style={{
        width: state.width,
        height: state.height,
        transform: `translate(
          ${state.offsetX}${_.isNumber(state.offsetX) ? 'px' : ''}, 
          ${state.offsetY}${_.isNumber(state.offsetY) ? 'px' : ''})`,
        ...props.style,
      }}
      ref={ref || state.targetRef}
      className={classNames('qyrc-variable-block', props.className)}
      {...omit(props, filterPropKeys)}
    >
      {props.children}
    </div>
  );
});
VariableBlock.propTypes = propTypes;
export default VariableBlock;
