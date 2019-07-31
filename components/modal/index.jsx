import _ from 'lodash';
import omit from 'omit.js';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useMemo, useState, useEffect } from 'react';

import { Icon } from '..';
import useResize from './useResize';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'isMin',
  'style',
  'isMax',
  'onMin',
  'onMax',
  'onClose',
  'onResize',
  'minParams',
  'className',
  'toolStyle',
  'maxParams',
  'threshold',
  'dragHeight',
  'toolClassName',
  'defaultParams',
  'constraintSize',
];

// props 默认值
const defaultProps = {
  threshold: 5,
  constraintSize: 200,
  defaultParams: { width: 500, height: 500, offsetX: 0, offsetY: 0 },
};

// props 参数校验
const paramsType =  PropTypes.shape({
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  offsetX: PropTypes.number.isRequired,
  offsetY: PropTypes.number.isRequired,
});
const propTypes = {
  threshold: PropTypes.number,
  constraintSize: PropTypes.number,
  defaultParams: paramsType,
  minParams: paramsType,
  maxParams: paramsType,
  dragHeight: PropTypes.number,
  style: PropTypes.object,
  className: PropTypes.string,
  toolStyle: PropTypes.object,
  toolClassName: PropTypes.string,
  isMin: PropTypes.bool,
  isMax: PropTypes.bool,
  onClose: PropTypes.func,
  onMin: PropTypes.func,
  onMax: PropTypes.func,
  onResize: PropTypes.func,
};

const useStateHook = (props) => {
  // modal 弹窗最外层元素  ref
  const modalRef = useRef(null);
  // 监听当前 modal 是否为最小化状态
  const [isMin, setIsMin] = useState(false);
  // 监听当前 modal 是否为最大化状态
  const [isMax, setIsMax] = useState(false);

  // 改变 modal 大小计算返回的 params
  const resizeParams = useResize(modalRef, {
    threshold: props.threshold,
    dragHeight: props.dragHeight,
    defaultParams: props.defaultParams,
    constraintSize: props.constraintSize,
  });

  useEffect(() => {setIsMin(!!props.isMin);}, [props.isMin]);
  useEffect(() => {setIsMax(!!props.isMax);}, [props.isMax]);

  // 合并计算当前 modal params
  const params = useMemo(() => {
    const minParams = isMin ? props.minParams || props.defaultParams : null;
    let maxParams = null;
    if (modalRef.current && isMax){
      const parentNodeRect = modalRef.current.parentNode.getBoundingClientRect();
      maxParams = props.maxParams || {
        offsetX: 0,
        offsetY: 0,
        width: parentNodeRect.width,
        height: parentNodeRect.height,
      };
    }
    const _params = { ...resizeParams, ...maxParams, ...minParams };
    _.isFunction(props.onResize) && props.onResize({ ..._params });
    return _params;
  }, [resizeParams, isMax, isMin]);

  // 关闭事件
  const onClose = (e) => {
    _.isFunction(props.onClose) && props.onClose(e);
  };

  // 最小化事件
  const onMin = (e) => {
    const reset = !isMin;
    _.has(props, 'isMin') ? null : setIsMin(reset);
    _.isFunction(props.onMin) && props.onMin(e, reset);
  };

  // 最大化事件
  const onMax = (e) => {
    const reset = !isMax;
    _.has(props, 'isMax') ? null : setIsMax(reset);
    _.isFunction(props.onMax) && props.onMax(e, reset);
  };

  return { ...params, modalRef, onClose, onMin, onMax, isMax, isMin };
};

const Modal = (props) => {
  const state = useStateHook(props);
  return (
    <div
      ref={state.modalRef}
      style={{
        width: state.width,
        height: state.height,
        transform: `translate(${state.offsetX}px, ${state.offsetY}px)`,
        ...props.style,
      }}
      className={classNames(
        'qyrc-modal', 
        props.className, 
        { 'qyrc-modal-min': state.isMin, 'qyrc-modal-max': state.isMax }
      )}
      {...omit(props, filterPropKeys)}>
      <div className="qyrc-modal-body">
        <span
          className={classNames('qyrc-modal-tool', props.toolClassName)}
          style={{ top: props.threshold, left: props.threshold, ...props.toolStyle }}>
          <Icon
            type="icon-guanbi6-copy"
            onClick={state.onClose}
            className="qyrc-modal-tool-item qyrc-modal-tool-close"
          />
          <Icon
            type="icon-suoxiao"
            onClick={state.onMin}
            className="qyrc-modal-tool-item qyrc-modal-tool-min"
          />
          <Icon
            onClick={state.onMax}
            className="qyrc-modal-tool-item qyrc-modal-tool-max"
            type={state.isMax ? 'icon-suoxiao2' : 'icon-fangda1'}
          />
        </span>
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = defaultProps;
Modal.propTypes = propTypes;
export default Modal;
