import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, useRef, useMemo, useEffect } from 'react';

import { Icon, VariableBlock } from '..';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'isMin',
  'isMax',
  'onMin',
  'onMax',
  'style',
  'onClose',
  'className',
  'onResize',
  'minParams',
  'toolStyle',
  'maxParams',
  'toolPosition',
];

// props 默认值
const defaultProps = {
  toolPosition: { top: 10, left: 5 },
  minParams: { width: 100, height: 100, offsetX: 50, offsetY: 50 },
};

// props 参数校验
const paramsType =  PropTypes.shape({
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  offsetY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});
const propTypes = {
  minParams: paramsType,
  maxParams: paramsType,

  isMax: PropTypes.bool,
  isMin: PropTypes.bool,

  onResize: PropTypes.func,
  onMax: PropTypes.func,
  onMin: PropTypes.func,
  onClose: PropTypes.func,
  toolPosition: PropTypes.shape({
    top: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    left: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }),
  style: PropTypes.object,
  toolStyle: PropTypes.object,
  className: PropTypes.string,
  toolClassName: PropTypes.string,
};

const useStateHook = (props) => {
  const [isMin, setIsMin] = useState(!!props.isMin);
  const [isMax, setIsMax] = useState(!!props.isMax);
  const [params, setParams] = useState(null);
  const modalRef = useRef(null);
  const statics = useMemo(() => ({
    maxHandled: false,
    minHandled: false,
    history: [],
  }), []);

  // 过滤工具栏位置属性
  const toolPosition = useMemo(() => {
    const { left, right, top, bottom } = props.toolPosition;
    return { left, right, top, bottom };
  }, [props.toolPosition]);

  // 点击关闭触发
  const onClose = (e) => {
    _.isFunction(props.onClose) && props.onClose(e);
  };

  // 最小化切换触发
  const onMin = (e) => {
    const reset = !isMin;
    _.has(props, 'isMin') ? null : setIsMin(reset);
    _.isFunction(props.onMin) && props.onMin(reset, e);
  };

  // 最大化切换触发
  const onMax = (e) => {
    const reset = !isMax;
    _.has(props, 'isMax') ? null : setIsMax(reset);
    _.isFunction(props.onMax) && props.onMax(reset, e);
  };

  // params 变更时触发
  const onResize = (p) => {
    setParams({ ...p });
    _.isFunction(props.onResize) && props.onResize(p);
  };

  // 处理 props.isMax props.isMin
  useEffect(() => {setIsMin(!!props.isMin);}, [props.isMin]);
  useEffect(() => {setIsMax(!!props.isMax);}, [props.isMax]);

  // 最大化处理
  useEffect(() => {
    if (!!isMax){
      statics.history.push({ ...params });
      const parentNodeRect = modalRef.current.parentNode.getBoundingClientRect();
      setParams({
        offsetX: 0,
        offsetY: 0,
        width: parentNodeRect.width,
        height: parentNodeRect.height,
        ...props.maxParams,
      });
    } else if (statics.maxHandled){
      setParams({ ...params, ...statics.history.pop() })
    }
    // 标记是否处理过
    statics.maxHandled = true;
  }, [isMax]);

  // 最小化处理
  useEffect(() => {
    if (!!isMin){
      statics.history.push({ ...params });
      setParams(props.minParams);
    } else if (statics.minHandled){
      setParams({ ...params, ...statics.history.pop() })
    }
    // 标记是否处理过
    statics.minHandled = true;
  }, [isMin]);

  return { modalRef, onClose, onMin, onMax, onResize, params, toolPosition };
};

const Modal = (props) => {
  const state = useStateHook(props);

  return (
    <VariableBlock
      ref={state.modalRef}
      params={state.params}
      onResize={state.onResize}
      style={{ ...props.style }}
      className={classNames('qyrc-modal', props.className)}
      {...omit(props, filterPropKeys)}
    >
      <div className={classNames('qyrc-modal-body')}>
        <span
          style={{ ...state.toolPosition, ...props.toolStyle }}
          className={classNames('qyrc-modal-tool', props.toolClassName)}>
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
        <div className={classNames('qyrc-modal-content')}>{props.children}</div>
      </div>
    </VariableBlock>
  );
};

Modal.defaultProps = defaultProps;
export default Modal;
