import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, useMemo, useEffect } from 'react';

import Icon from '../icon';
import VariableContainer from '../variable-container';

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
  'toolClassName',
];

// props 默认值
const defaultProps = {
  isPure: false,
  tool: {
    top: 10,
    left: 10,
    size: 12,
    width: 60,
  },
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
  isPure: PropTypes.bool,

  onResize: PropTypes.func,
  onMax: PropTypes.func,
  onMin: PropTypes.func,
  onClose: PropTypes.func,
  tool: {
    top: PropTypes.number,
    left: PropTypes.number,
    size: PropTypes.number,
    width: PropTypes.number,
  },
  style: PropTypes.object,
  toolStyle: PropTypes.object,
  className: PropTypes.string,
  toolClassName: PropTypes.string,
};

const useHooks = (props) => {
  const [isMin, setIsMin] = useState(!!props.isMin);
  const [isMax, setIsMax] = useState(!!props.isMax);
  const [params, setParams] = useState(null);
  const statics = useMemo(() => ({
    maxHandled: false,
    minHandled: false,
    history: [],
  }), []);

  const toolStyle = useMemo(() => {
    const tool = { ...defaultProps.tool, ...(props.tool || {}) };
    return {
      'top': tool.top,
      'left': tool.left,
      'width': tool.width,
      '--icon-size': `${tool.size}px`,
      ...props.toolStyle,
    };
  }, []);

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
  const onResize = (params) => {
    setParams({ ...params });
    _.isFunction(props.onResize) && props.onResize(params);
  };

  // 窗体最外层 class
  const windowClass = useMemo(() => classNames(
    'brick-window',
    { 'brick-window-max': isMax },
    { 'brick-window-min': isMin },
    { 'brick-window-pure': props.isPure },
    props.className,
  ), [props.className, isMin, isMax]);

  // 处理 props.isMax props.isMin
  useEffect(() => {
    setIsMin(!!props.isMin);
  }, [props.isMin]);

  useEffect(() => {
    setIsMax(!!props.isMax);
  }, [props.isMax]);

  // 最大化处理
  useEffect(() => {
    if (!!isMax) {
      statics.history.push({ ...params });
      setParams({
        offsetX: 0,
        offsetY: 0,
        width: '100%',
        height: '100%',
        ...props.maxParams,
      });
    } else if (statics.maxHandled) {
      setParams({ ...params, ...statics.history.pop() });
    }

    // 标记是否处理过
    statics.maxHandled = true;
  }, [isMax]);

  // 最小化处理
  useEffect(() => {
    if (!!isMin) {
      statics.history.push({ ...params });
      setParams(props.minParams);
    } else if (statics.minHandled) {
      setParams({ ...params, ...statics.history.pop() });
    }

    // 标记是否处理过
    statics.minHandled = true;
  }, [isMin]);

  return { onClose, onMin, onMax, onResize, params, windowClass, toolStyle };
};

const Window = (props) => {
  const state = useHooks(props);

  return (
    <VariableContainer
      params={state.params}
      onResize={state.onResize}
      style={{ ...props.style }}
      className={state.windowClass}
      {...omit(props, filterPropKeys)}>
      <div className={classNames('brick-window-body')}>
        <span
          style={state.toolStyle}
          className={classNames('brick-window-tool', props.toolClassName)}>
          <Icon
            onClick={state.onClose}
            type="icon-guanbi6-copy"
            className="brick-window-tool-item brick-window-tool-close"
          />
          <Icon
            type="icon-suoxiao"
            onClick={state.onMin}
            className="brick-window-tool-item brick-window-tool-min"
          />
          <Icon
            onClick={state.onMax}
            className="brick-window-tool-item brick-window-tool-max"
            type={state.isMax ? 'icon-suoxiao2' : 'icon-fangda1'}
          />
        </span>
        <div className={classNames('brick-window-content')}>
          {props.children}
        </div>
      </div>
    </VariableContainer>
  );
};

Window.defaultProps = defaultProps;
Window.propTypes = propTypes;

export default Window;
