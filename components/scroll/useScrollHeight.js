import { useState, useRef, useMemo, useEffect } from 'react';

export default ({
  contetnRef,
  scrollRef,
  sliderRef,
}) => {
  const [scrollHeight, setScrollHeight] = useState(0);

  // 重置 scrollHeight sign: 标记(-1 1)
  const resetScrollHeight = (sign) => {
    const contetnRect = contetnRef.current.getBoundingClientRect();
    const parentRect = contetnRef.current.parentNode.getBoundingClientRect();
    const dift = contetnRect.height - parentRect.height;
    const value = scrollHeight + 20 * sign;
    const max = dift > 0 ? dift : 0;
    const min = 0;
    const reset = value > max ? max : value < min ? min : value;
    reset !== scrollHeight && setScrollHeight(reset);
  };

  const onWheel = (e) => {
    resetScrollHeight(20 * Math.sign(e.deltaY));
  };

  useEffect(() => {



    
  }, []);


  return scrollHeight;
}
// onWheel={state.onWheel}