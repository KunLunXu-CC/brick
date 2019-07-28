import React, { useRef } from 'react';

import useElementResize from './useNew';

const useState = (props) => {
  const modalRef = useRef(null);
  const dragRef = useRef(null);
  const params = useElementResize(modalRef, { dragRef });
  return { ...params, modalRef, dragRef };
};


export default (props) => {
  const state = useState(props);
  return (
    <div ref={state.modalRef}
      style={{
        padding: 20,
        background: 'red',
        width: state.width,
        height: state.height,
        transform: `translate(${state.offsetX}px, ${state.offsetY}px)`,
      }}
    >
      <div ref={state.dragRef} style={{ background: 'blue' }}>拖拽目标</div>
      {props.children}
    </div>
  );
};
