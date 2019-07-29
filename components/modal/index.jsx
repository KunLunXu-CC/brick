import classNames from 'classnames';
import React, { useRef } from 'react';

import { Icon } from '..';

import useElementResize from './useNew';

const useState = (props) => {
  const modalRef = useRef(null);
  const params = useElementResize(modalRef, { 
    dragRef: props.dragRef,
    threshold: props.threshold,
    defaultParams: props.defaultParams,
    constraintSize: props.constraintSize,
  });
  return { ...params, modalRef };
};

const defaultProps = {
  threshold: 10,
  constraintSize: 200,
  defaultParams: { width: 500, height: 500, offsetX: 0, offsetY: 0 },
};

const Modal = (props) => {
  const state = useState(props);
  return (
    <div
      ref={state.modalRef}
      style={{
        width: state.width,
        height: state.height,
        padding: props.threshold * 1.5,
        transform: `translate(${state.offsetX}px, ${state.offsetY}px)`,
        ...props.style,
      }}
      className={classNames('qyrc-modal', props.className)}
    >
      <div className="qyrc-modal-body">
        <span className="qyrc-modal-tool" onMouseDown={(e) => {
          e.nativeEvent.stopImmediatePropagation();
          e.stopPropagation();
        }}>
          <Icon type="icon-guanbi6-copy" onClick={(e) => {
            
          }}/>
          <Icon type="icon-suoxiao2" />
          <Icon type="icon-suoxiao" />
        </span>
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
