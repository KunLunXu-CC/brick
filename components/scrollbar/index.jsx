import _ from 'lodash';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import classNames from 'classnames';

const useStateHook = (props) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scale, setScale] =  useState(1);
  const contentIframeRef = useRef(null);
  const bodyIframeRef = useRef(null);
  const contetnRef = useRef(null);
  const sliderRef = useRef(null);
  const immutable = useMemo(() => ({ 
    dragIn: null,         // 拖拽目标: contetn slider
    scrollHeight: null,   // 记录最初(鼠标按下时)卷起高度
    clientY: null,        // 记录最初(鼠标按下时) clientY
  }), []);

  const sliderHeight = useMemo(() => {
    if (!sliderRef.current){return void 0;}
    const sliderRect = sliderRef.current.parentNode.getBoundingClientRect();
    return sliderRect.height * scale;
  }, [scale]);

  const sliderMarginTop = useMemo(() => (scrollHeight * scale), [scrollHeight, scale]); 
  const contetnMarginTop = useMemo(() => (-scrollHeight), [scrollHeight]); 

  // 重置 scale
  const resetScale = () => {
    const contetnRect = contetnRef.current.getBoundingClientRect();
    const parentRect = contetnRef.current.parentNode.getBoundingClientRect();
    setScale(parentRect.height / contetnRect.height);
  };

  // 重置 scrollHeight sign: 标记(-1 1)
  const resetScrollHeight = (value) => {
    const contetnRect = contetnRef.current.getBoundingClientRect();
    const parentRect = contetnRef.current.parentNode.getBoundingClientRect();
    const dift = contetnRect.height - parentRect.height;
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
    contetnRef.current.contains(e.target) && (immutable.dragIn = 'contetn');
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
    _.isFunction(props.onResize) && props.onResize();
  };

  // scroll content 大小改变事件
  const onContentResize = () => {
    resetScale();
    _.isFunction(props.onContentResize) && props.onContentResize();
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
    bodyIframeRef.current.contentWindow.addEventListener('resize', onBodyResize);
    contentIframeRef.current.contentWindow.addEventListener('resize', onContentResize);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMove);
      bodyIframeRef.current.contentWindow.removeEventListener('resize', onBodyResize);
      contentIframeRef.current.contentWindow.removeEventListener('resize', onContentResize);
    }
  });

  return {
    onWheel, 
    sliderRef,
    contetnRef, 
    onMouseDown, 
    sliderHeight, 
    bodyIframeRef,
    sliderMarginTop, 
    contetnMarginTop,
    contentIframeRef,
  };
};

const Sroll = (props) => {
  const state = useStateHook(props);
  return (
    <div
      onWheel={state.onWheel}
      style={{ ...props.style }}
      className={classNames('qyrc-sroll')}>
      <div className="qyrc-sroll-body">
        <iframe frameBorder="0" ref={state.bodyIframeRef} className="qyrc-scroll-iframe"/>
        <div
          style={{
            marginTop: state.contetnMarginTop,
          }}
          onMouseDown={state.onMouseDown}
          ref={state.contetnRef} className="qyrc-sroll-body-contetn">
          <iframe frameBorder="0" ref={state.contentIframeRef} className="qyrc-scroll-iframe"/>
          {props.children}
        </div>
      </div>
      <div className="qyrc-sroll-bar">
        <div 
          ref={state.sliderRef} 
          onMouseDown={state.onMouseDown}
          className="qyrc-sroll-bar-slider" 
          style={{
            height: state.sliderHeight,
            marginTop: state.sliderMarginTop,
          }}
        >
        </div>
      </div>
    </div>
  );
} 

export default Sroll;
