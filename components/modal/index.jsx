import classNames from 'classnames';
import React, { useRef, useMemo, useState } from 'react';

import { Icon } from '..';

import useElementResize from './useNew';

const useStateHook = (props) => {
  const modalRef = useRef(null);
  const [min, setMin] = useState(props.min);
  const [max, setMax] = useState(props.max);

  const resizeParams = useElementResize(modalRef, {
    dragRef: props.dragRef,
    threshold: props.threshold,
    defaultParams: props.defaultParams,
    constraintSize: props.constraintSize,
  });

  const params = useMemo(() => {
    const _params = { ...resizeParams, ...(props.max || max), ...(props.min || min) };
    props.onResize && props.onResize({ ..._params });
    return _params;
  }, [resizeParams, props.max, props.min, max, min]);

  const onClose = (e) => {
    props.onClose && props.onClose(e);
    console.log('close');
  };

  const onMin = (e) => {
    console.log('min');
    props.onMin && props.onMin(e);
  };

  const onMax = (e) => {
    const parentNodeRect = modalRef.current.parentNode.getBoundingClientRect();
    const reset = max ? null : {
      offsetX: 0,
      offsetY: 0,
      width: parentNodeRect.width,
      height: parentNodeRect.height,
    };
    props.onMax && props.onMax(e, modalRef);
    setMax(reset);
  };

  return { ...params, modalRef, onClose, onMin, onMax };
};

const defaultProps = {
  threshold: 5,
  constraintSize: 200,
  defaultParams: { width: 500, height: 500, offsetX: 0, offsetY: 0 },
};

const Modal = (props) => {
  const state = useStateHook(props);
  return (
    <div
      ref={state.modalRef}
      style={{
        width: state.width,
        height: state.height,
        transform: `translate(${state.offsetX}px, ${state.offsetY}px)`,
        ...props.style,
      }}
      className={classNames('qyrc-modal', props.className)}
    >
      <div className="qyrc-modal-body">
        <span
          className={classNames('qyrc-modal-tool', props.toolClassName)}
          style={{ top: props.threshold, left: props.threshold, ...props.toolStyle }}>
          <Icon
            type="icon-guanbi6-copy"
            onClick={state.onClose}
            className="qyrc-modal-tool-item qyrc-modal-tool-close"
          />
          <Icon
            type="icon-suoxiao"
            onClick={state.onMin}
            className="qyrc-modal-tool-item qyrc-modal-tool-max"
          />
          <Icon
            type="icon-suoxiao2"
            onClick={state.onMax}
            className="qyrc-modal-tool-item qyrc-modal-tool-min"
          />
        </span>
        {props.children}
      </div>
    </div>
  );
};

Modal.defaultProps = defaultProps;

export default Modal;
