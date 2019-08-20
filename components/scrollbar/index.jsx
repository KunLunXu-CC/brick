import React, { useState, useRef, useMemo, useEffect } from 'react';
import classNames from 'classnames';

const useStateHook = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [scale, setScale] =  useState(1);
  const contetnRef = useRef(null);
  const sliderRef = useRef(null);
  const immutable = useMemo(() => ({ 
    dragIn: null, // 拖拽目标: contetn slider
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

  useEffect(() => {
    resetScale();
  }, []);

  useEffect(() => {
    console.log('===>>> scrollHeight:', scrollHeight);
    console.log('===>>> scale:', scale);
  }, [scrollHeight, scale]);

  useEffect(() => {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mousemove', onMove);
    }
  });

  return { 
    onMouseDown, 
    contetnRef, 
    sliderRef, 
    onWheel, 
    sliderHeight, 
    sliderMarginTop, 
    contetnMarginTop 
  };
};

// 滚动条高度计算： 滚动容器高度 / 滑块高度 === 内容容器高度 / 内容容器高度
//  滑块高度 = （内容容器高 / 内容高）  * 滑块容器
const Sroll = (props) => {
  const state = useStateHook(props);
  return (
    <div
      onWheel={state.onWheel}
      className={classNames('qyrc-sroll')}>
      <div className="qyrc-sroll-body">
        <div
          style={{
            marginTop: state.contetnMarginTop,
          }}
          onMouseDown={state.onMouseDown}
          ref={state.contetnRef} className="qyrc-sroll-body-contetn">
          11111111111<br/><br/><br/><br/><br/><br/>
          22222222222<br/><br/><br/><br/><br/><br/>
          33333333333<br/><br/><br/><br/><br/><br/>
          44444444444<br/><br/><br/><br/><br/><br/>
          55555555555<br/><br/><br/><br/><br/><br/>
          66666666666<br/><br/><br/><br/><br/><br/>
          77777777777<br/><br/><br/><br/><br/><br/>
          88888888888<br/><br/><br/><br/><br/><br/>
          99999999999<br/><br/><br/><br/><br/><br/>
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