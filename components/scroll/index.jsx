import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useState, useRef, useMemo, useEffect } from 'react';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'style',
  'className',

  'shifting',
  'onScroll',
  'onResize',
  'showScroll',
  'onReachTop',
  'scrollHeight',
  'onBodyResize',
  'onReachBottom',
  'sliderMinHeight',
  'touchTopDistance',
  'touchBottomDistance',
  'defaultScrollHeight',
];

// props 默认值
const defaultProps = {
  shifting: 50,
  sliderMinHeight: 40,
  touchTopDistance: 20, 
  defaultScrollHeight: 0,
  touchBottomDistance: 20,
};

// props 参数校验
const propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,

  onResize: PropTypes.func,
  onScroll: PropTypes.func,
  onReachTop: PropTypes.func,
  showScroll: PropTypes.bool,
  shifting: PropTypes.number,
  onBodyResize: PropTypes.func,
  onReachBottom: PropTypes.func,
  scrollHeight: PropTypes.number,
  sliderMinHeight: PropTypes.number,
  touchTopDistance: PropTypes.number,
  defaultScrollHeight: PropTypes.number,
  touchBottomDistance: PropTypes.number,
};

/**
 * 计算公式:
 * 1. 正常情况下(滑块自动响应)： 内容块总高度 / 内容块容器高度 = 滚动条总高度 / 滑块高度
 * 2. 内容卷起高度 / 滑块距离顶部距离 = 内容块偏移量 / 滑块偏移量 = (内容块高度 - 内容块视口) / (滚动条高度 - 滑块高度)
 */
const useStateHook = (props) => {
  const [scrollHeight, setScrollHeight] = useState(
    props.scrollHeight || props.defaultScrollHeight
  );
  const [sliderHeight, setSliderHeight] =  useState(0);
  const scrollIframeRef = useRef(null);
  const bodyIframeRef = useRef(null);
  const sliderRef = useRef(null);
  const bodyRef = useRef(null);
  const immutable = useMemo(() => ({ 
    scrollHeight: null,   // 记录最初(鼠标按下时)卷起高度
    clientY: null,        // 记录最初(鼠标按下时) clientY
    dragIn: null,         // 拖拽目标: contetn slider
  }), []);

  const _sliderHeight = useMemo(() => (
    Math.max(sliderHeight, props.sliderMinHeight)
  ), [sliderHeight]);

  // 偏移比例： 内容块偏移量 / 滑块偏移量
  const offSetRatio = useMemo(() => {
    if (!sliderRef.current || !bodyRef.current){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const clientRect = bodyRef.current.parentNode.getBoundingClientRect();
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    return (bodyRect.height - clientRect.height) / (sliderBarRect.height - _sliderHeight);
  }, [sliderHeight, bodyRef, sliderRef]);

  // 计算高度
  const _scrollHeight = useMemo(() => (
    _.isNumber(props.scrollHeight) ? props.scrollHeight : scrollHeight
  ), [props.scrollHeight, scrollHeight]);

  // 计算滑块距离顶部的距离: 根据计算公式二进行计算,
  const sliderMarginTop = useMemo(() => (
    !!offSetRatio && !_.isNaN(offSetRatio) ? _scrollHeight / offSetRatio : 0
  ), [_scrollHeight, offSetRatio]);

  // 计算内容块距离顶部的距离
  const bodyMarginTop = useMemo(() => (-_scrollHeight), [_scrollHeight]); 

  // 是否显示滚动条
  const showScroll = useMemo(() => {
    if (_.has(props, 'showScroll')){return props.showScroll;}
    if (!sliderRef.current){return true;}
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    return sliderBarRect.height !== _sliderHeight;
  }, [props.showScroll, sliderRef, _sliderHeight]);

  // 重置滑块高度：根据计算公式一进行计算, 添加最小高度限制
  const resetSliderHeight = () => {
    if (!bodyRef.current){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    let scale = Math.min(parentRect.height / bodyRect.height, 1);
    setSliderHeight(scale * sliderBarRect.height);
  };

  // 处理边界情况: 触底、触顶部 
  const handleBoundary = (min, max, value) => {
    if ( _.isFunction(props.onReachTop) && value - props.touchTopDistance < min){
      props.onReachTop(value);
    }
    if (_.isFunction(props.onReachBottom) && value + props.touchBottomDistance > max){
      _.isFunction(props.onReachBottom) && props.onReachBottom(value);
    }
  }

  // 重置滚动高度: 限制最大最小值
  const resetScrollHeight = (value) => {
    if (!bodyRef.current || !_.isNumber(value)){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const dift = bodyRect.height - parentRect.height;
    const max = dift > 0 ? dift : 0;
    const min = 0;
    const reset = value > max ? max : value < min ? min : value;
    reset !== _scrollHeight && setScrollHeight(reset);
    handleBoundary(min, max, value);
  };

  // 鼠标滚动事件
  const onWheel = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    resetScrollHeight(_scrollHeight + props.shifting * Math.sign(e.deltaY));
  };

  // 鼠标按下事件: 设置操作目标: slider contetn
  const onMouseDown = (e) => {
    sliderRef.current.contains(e.target) && (immutable.dragIn = 'slider');
    bodyRef.current.contains(e.target) && (immutable.dragIn = 'contetn');
    immutable.scrollHeight = _scrollHeight;
    immutable.clientY = e.clientY;
  };

  // 鼠标弹起事件: 清除操作目标
  const onMouseUp = (e) => {
    immutable.dragIn = null;
  };

  // 鼠标移动事件: 根据计算公式二
  const onMove = (e) => {
    if (!immutable.dragIn){return false;}
    e.preventDefault();
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    const diff = immutable.dragIn === 'slider' 
      ? offSetRatio * (e.clientY - immutable.clientY)
      : immutable.scrollHeight - (e.clientY - immutable.clientY)
    resetScrollHeight(immutable.scrollHeight + diff);
  };

  // 内容块大小改变事件
  const onBodyResize = () => {
    resetSliderHeight();
    _.isFunction(props.onBodyResize) && props.onBodyResize(bodyRef.current);
  };

  // 组件大小改变事件
  const onResize = () => {
    resetSliderHeight();
    _.isFunction(props.onResize) && props.onResize(bodyRef.current.parentNode);
  };

  useEffect(() => {
    resetSliderHeight();
  }, []);

  useEffect(() => {
    _.isFunction(props.onScroll) && props.onScroll(scrollHeight);
  }, [scrollHeight]);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMove);
    scrollIframeRef.current.contentWindow.addEventListener('resize', onResize);
    bodyIframeRef.current.contentWindow.addEventListener('resize', onBodyResize);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMove);
      scrollIframeRef.current.contentWindow.removeEventListener('resize', onResize);
      bodyIframeRef.current.contentWindow.removeEventListener('resize', onBodyResize);
    }
  });

  return {
    onWheel, 
    bodyRef, 
    sliderRef,
    showScroll,
    onMouseDown, 
    _sliderHeight, 
    bodyIframeRef,
    bodyMarginTop,
    scrollIframeRef,
    sliderMarginTop, 
  };
};

const Sroll = (props) => {
  const state = useStateHook(props);
  return (
    <div
      onWheel={state.onWheel}
      style={{ ...props.style }}
      className={classNames('qyrc-sroll', props.className)}
      {...omit(props, filterPropKeys)}>
      <iframe frameBorder="0" ref={state.scrollIframeRef} className="qyrc-scroll-iframe"/>
      <div
        ref={state.bodyRef}
        onMouseDown={state.onMouseDown}
        className={classNames('qyrc-sroll-body')}
        style={{ marginTop: state.bodyMarginTop }}>
        <iframe frameBorder="0" ref={state.bodyIframeRef} className="qyrc-scroll-iframe"/>
        {props.children}
      </div>

      <div className={classNames(
        'qyrc-sroll-bar', 
        {'qyrc-sroll-bar-hidden': !state.showScroll}
      )}>
        <div
          ref={state.sliderRef}
          onMouseDown={state.onMouseDown}
          className={classNames('qyrc-sroll-bar-slider')} 
          style={{ height: state._sliderHeight, marginTop: state.sliderMarginTop }}
        />
      </div>  

    </div>
  );
} 

Sroll.defaultProps = defaultProps;
Sroll.propTypes = propTypes;
export default Sroll;
