import _ from 'lodash';
import classNames from 'classnames';
import React, { useRef, useMemo, useState } from 'react';

import { Icon } from '..';

import useResize from './useResize';

const useStateHook = (props) => {
  // modal 弹窗最外层元素  ref
  const modalRef = useRef(null);
  // 用于存储最小化状态， 值为当前最小化时 params 值或者 null, 根据值可判断当前是否处于最小化状态
  const [min, setMin] = useState(props.isMin ? props.minParams : null);
  // 用于存储最大化状态， 值为当前最大化时 params 值或者 null, 根据值可判断当前是否处于最大化状态
  const [max, setMax] = useState(props.isMax ? props.maxParams : null);

  // 改变 modal 大小计算返回的 params
  const resizeParams = useResize(modalRef, {
    dragRef: props.dragRef,
    threshold: props.threshold,
    defaultParams: props.defaultParams,
    constraintSize: props.constraintSize,
  });

  // 判断当前 modal 状态是否为最小化
  const isMin = useMemo(() => ( 
    _.has(props, 'isMin') ? props.isMin : !!min
  ), [props.isMin, min]);

  // 判断当前 modal 状态是否为最大化
  const isMax = useMemo(() => (
    _.has(props, 'isMax') ? props.isMax : !!max
  ), [props.isMax, max]);
  
  // 计算最小化 params 值
  const minParams = useMemo(() => (
    isMin ? props.minParams || min : null
  ), [isMin, props.minParams, min]);

  // 计算最大化 params 值
  const maxParams = useMemo(() => (
    isMax ? props.maxParams || max : null
  ), [isMax, props.maxParams, max]);

  // 合并计算当前 modal params
  const params = useMemo(() => {
    const _params = { ...resizeParams, ...maxParams, ...minParams };
    props.onResize && props.onResize({ ..._params });
    return _params;
  }, [resizeParams, minParams, maxParams]);

  // 关闭事件
  const onClose = (e) => {
    props.onClose && props.onClose(e);
  };

  // 最小化事件
  const onMin = (e) => {
    setMin(min ? null : { ...props.defaultParams });
    props.onMin && props.onMin(e);
  };

  // 最大化事件
  const onMax = (e) => {
    const parentNodeRect = modalRef.current.parentNode.getBoundingClientRect();
    const reset = !!max ? null : props.maxParams || {
      offsetX: 0,
      offsetY: 0,
      width: parentNodeRect.width,
      height: parentNodeRect.height,
    };
    setMax(reset);
    props.onMax && props.onMax(e, !!max);
  };

  return { ...params, modalRef, onClose, onMin, onMax, isMax, isMin };
};

const defaultProps = {
  threshold: 5,
  constraintSize: 200,
  defaultParams: { width: 500, height: 500, offsetX: 0, offsetY: 0 },
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
      )}>
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

export default Modal;
