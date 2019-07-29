import classNames from 'classnames';
import React, { useRef, useMemo, useState } from 'react';

import { Icon } from '..';

import useElementResize from './useNew';

const useStateHook = (props) => {
  const modalRef = useRef(null);
  const [isMin, setIsMin] = useState(props.isMin || false);
  const [isMax, setIsMax] = useState(props.isMax || false);

  const resizeParams = useElementResize(modalRef, {
    dragRef: props.dragRef,
    threshold: props.threshold,
    defaultParams: props.defaultParams,
    constraintSize: props.constraintSize,
  });

  const params = useMemo(() => {
    const parentNodeRect = modalRef.current.parentNode.getBoundingClientRect();
    const max = isMax ? props.maxParams || {
      offsetX: 0,
      offsetY: 0,
      width: parentNodeRect.width,
      height: parentNodeRect.height,
    } : null;

    const min = isMin ? props.minParams || {
      offsetX: 0,
      offsetY: 0,
      width: 100,
      height: 100,
    } : null;
    const _params = { ...resizeParams, ...max, ...min };
    props.onResize && props.onResize({ ..._params });
    setMax(_params);
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
    setIsMax(!isMax);
    props.onMax && props.onMax(e, !isMax);
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
