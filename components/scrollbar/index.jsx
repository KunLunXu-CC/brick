import _ from 'lodash';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import classNames from 'classnames';

const useStateHook = (props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scale, setScale] =  useState(1);
  const scrollIframeRef = useRef(null);
  const bodyIframeRef = useRef(null);
  const sliderRef = useRef(null);
  const bodyRef = useRef(null);
  const immutable = useMemo(() => ({ 
    dragIn: null,         // 拖拽目标: contetn slider
    scrollHeight: null,   // 记录最初(鼠标按下时)卷起高度
    clientY: null,        // 记录最初(鼠标按下时) clientY
  }), []);

  // 计算滑块高度
  const sliderHeight = useMemo(() => {
    if (!sliderRef.current){return void 0;}
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    return sliderBarRect.height * scale;
  }, [scale]);

  // 计算滑块距离顶部的距离
  const sliderMarginTop = useMemo(() => {
    if (!sliderRef.current || !bodyRef.current){return void 0;}
    const sliderBarRect = sliderRef.current.parentNode.getBoundingClientRect();
    const bodyRect = bodyRef.current.getBoundingClientRect();
    return scrollHeight / bodyRect.height * sliderBarRect.height;
  }, [scrollHeight]);

  // 计算 body 距离顶部的距离
  const bodyMarginTop = useMemo(() => (-scrollHeight), [scrollHeight]); 

  // 重置 scale
  const resetScale = () => {
    if (!bodyRef.current){return void 0;}
    const bodyRect = bodyRef.current.getBoundingClientRect();
    const parentRect = bodyRef.current.parentNode.getBoundingClientRect();
    setScale(parentRect.height / bodyRect.height);
  };

  // 重置 scrollHeight sign: 标记(-1 1)
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

  // 鼠标移动事件
  const onMove = (e) => {
    if (!immutable.dragIn){return false;}
    e.preventDefault();
    const diff = (e.clientY - immutable.clientY) / scale;
    const sign = immutable.dragIn === 'slider' ? 1 : -1;
    const value = immutable.scrollHeight + diff * sign;
    resetScrollHeight(value);
  };
  
  // scroll body 大小改变事件
  const onBodyResize = () => {
    resetScale();
    _.isFunction(props.onBodyResize) && props.onBodyResize();
  };

  // scroll 大小改变事件
  const onResize = () => {
    resetScale();
    _.isFunction(props.onResize) && props.onResize();
  };

  useEffect(() => {
    _.isFunction(props.onScroll) && props.onScroll(scrollHeight);
  }, [scrollHeight]);

  useEffect(() => {
    resetScale();
  }, []);

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
    sliderMarginTop, 
    bodyMarginTop,
    scrollIframeRef,
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
