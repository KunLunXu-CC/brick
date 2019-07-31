import React, { useRef, useEffect, useMemo } from 'react';

import useResize from './useResize';

const useStateHook = (props) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  const size = useResize(imgRef, containerRef); 

  return { imgRef, containerRef };
};

export default (props) => {
  const state = useStateHook(props);
  
  return (
    <div ref={state.containerRef}>
      <img src={props.src} ref={state.imgRef} width="200"/>
    </div>
  );  
};
