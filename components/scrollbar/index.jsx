import _ from 'lodash';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import classNames from 'classnames';

/**
 * 计算公式:
 * 1. 内容块总高度 / 内容块容器高度 = 滚动条总高度 / 滑块高度
 * 2. 内容块滚动(卷起)高度 / 内容块总高度 = 滑块距离顶部高度 / 滚动条总高度
 * 3. 当前内容块卷起的增量 / 当前鼠标偏移量 = 内容块总高度 / 内容块容器高度
 * 4. 当前内容块卷起的增量 / 内容块总高度 = 当前鼠标偏移量 / 滚动条总高度
 */
const useStateHook = (props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [sliderHeight, setSliderHeight] =  useState(0);
  const scrollIframeRef = useRef(null);
  const bodyIframeRef = useRef(null);
  const sliderRef = useRef(null);
  const bodyRef = useRef(null);
  const immutable = useMemo(() => ({ 
    dragIn: null,         // 拖拽目标: contetn slider
    scrollHeight: null,   // 记录最初(鼠标按下时)卷起高度
    clientY: null,        // 记录最初(鼠标按下时) clientY
  }), []);

  // 计算滑块距离顶部的距离： 根据计算公式二进行计算
  const sliderMarginTop = useMemo(() => {
    if (!sliderRef.current || !bodyRef.current){return void 0;}
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    const bodyRect = bodyRef.current.getBoundingClientRect();
    return scrollHeight / bodyRect.height * sliderBarRect.height;
  }, [scrollHeight]);

  // 计算内容块距离顶部的距离
  const bodyMarginTop = useMemo(() => (-scrollHeight), [scrollHeight]); 

  // 重置滑块高度：根据计算公式一进行计算
  const resetSliderHeight = () => {
    if (!bodyRef.current){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    setSliderHeight(parentRect.height / bodyRect.height * sliderBarRect.height);
  };

  // 重置滚动高度: 限制最大最小值
  const resetScrollHeight = (value) => {
    if (!bodyRef.current){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const dift = bodyRect.height - parentRect.height;
    const max = dift > 0 ? dift : 0;
    const min = 0;
    const reset = value > max ? max : value < min ? min : value;
    reset !== scrollHeight && setScrollHeight(reset);
  };

  // 鼠标滚动事件
  const onWheel = (e) => {
    resetScrollHeight(scrollHeight + 50 * Math.sign(e.deltaY));
  };

  // 鼠标按下事件
  const onMouseDown = (e) => {
    sliderRef.current.contains(e.target) && (immutable.dragIn = 'slider');
    bodyRef.current.contains(e.target) && (immutable.dragIn = 'contetn');
    immutable.scrollHeight = scrollHeight;
    immutable.clientY = e.clientY;
  };

  // 鼠标弹起事件
  const onMouseUp = (e) => {
    immutable.dragIn = null;
  };

  // 鼠标移动事件: 根据计算公式三、四进行计算
  const onMove = (e) => {
    if (!immutable.dragIn){return false;}
    e.preventDefault();
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    const diff = immutable.dragIn === 'slider' 
      ? (e.clientY - immutable.clientY) / sliderBarRect.height * bodyRect.height
      : - (bodyRect.height / parentRect.height * (e.clientY - immutable.clientY));
    resetScrollHeight(immutable.scrollHeight + diff);
  };

  // scroll body 大小改变事件
  const onBodyResize = () => {
    resetSliderHeight();
    _.isFunction(props.onBodyResize) && props.onBodyResize();
  };

  // scroll 大小改变事件
  const onResize = () => {
    resetSliderHeight();
    _.isFunction(props.onResize) && props.onResize();
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
    onMouseDown, 
    sliderHeight, 
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
      className={classNames('qyrc-sroll')}>
      <iframe frameBorder="0" ref={state.scrollIframeRef} className="qyrc-scroll-iframe"/>
      <div
        style={{
          marginTop: state.bodyMarginTop,
        }}
        onMouseDown={state.onMouseDown}
        ref={state.bodyRef}
        className={classNames('qyrc-sroll-body')}>
        <iframe frameBorder="0" ref={state.bodyIframeRef} className="qyrc-scroll-iframe"/>
        {props.children}
      </div>
      <div className={classNames('qyrc-sroll-bar')}>
        <div
          style={{
            height: state.sliderHeight,
            marginTop: state.sliderMarginTop,
          }}
          onMouseDown={state.onMouseDown}
          ref={state.sliderRef}
          className={classNames('qyrc-sroll-bar-slider')} />
      </div>
    </div>
  );
} 

export default Sroll;
