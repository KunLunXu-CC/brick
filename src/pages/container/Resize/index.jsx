import React, { useState, useRef } from 'react';
import { Resize } from '@components';
import '@components/resize/style';

export default () => {
  const resizeRef = useRef(null);
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(100);

  const onResizeWith = () => {
    setWidth(width + 100);
  }

  const onResizeHeight = () => {
    setHeight(height + 100);
  }
  
  const onResize = (w, h) => {
    console.log('=========>>> ', w, h);
    console.log(resizeRef.current);
  }

  return (
    <div>
      <span onClick={onResizeWith}>加宽</span>&nbsp;&nbsp;&nbsp;
      <span onClick={onResizeHeight}>加高</span> <br/><br/>
      <Resize 
        ref={resizeRef} 
        onResize={onResize}
        onClick={() => {console.log('onClick')}}
        style={{ width, height, background: 'red', padding: 20, margin: 20 }}>
        11111111
      </Resize>
    </div>
  );
}