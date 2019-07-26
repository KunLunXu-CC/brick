import { useState, useEffect } from 'react';
import usePosition from './usePosition';

/**
 * 修正 client
 * @param {Object} e         事件对象 
 * @param {Object} boundary  限制范围
 * @return {Object} {clientX, clientY}
 */
const correctClient = (e, boundary) => {
  const correctValue = (value, min, max) => (
    value < min ? min :
    value > max ? max : value
  );
  return { 
    clientX: correctValue(e.clientX, boundary.left, boundary.right), 
    clientY: correctValue(e.clientY, boundary.top, boundary.bottom),
  };
};

export default (modalRef, {
  dragRef = null,
  boundary = null,
  constraintSize = 100,
  defaultParams = { width: 100, height: 100, offsetX: 0, offsetY: 0 },
} = {}) => {
  const [params, setParams] = useState(defaultParams);

  const position = usePosition(modalRef, { dragRef });

  useEffect(() => {
    if (!modalRef || !modalRef.current){return false;}
    const target = modalRef.current;

    let tem;
    let _boundary;
    let originClientX;
    let originClientY;
    let previousParams = { ...params };

    function setOriginClient(e){
      const targetRect = target.getBoundingClientRect();
      originClientX = 
        /left/i.test(position) ? targetRect.left : 
        /right/i.test(position) ? targetRect.right : e.clientX;
      originClientY = 
        /top/i.test(position) ? targetRect.top : 
        /bottom/i.test(position) ? targetRect.bottom : e.clientY;
    }

    function setBoundary(){
      const targetRect = target.getBoundingClientRect();
      const targetParentRect = target.parentNode.getBoundingClientRect();
      _boundary = { ...(boundary || {
        top: targetParentRect.top,
        bottom: targetParentRect.botttom,
        left: targetParentRect.lteft,
        right: targetParentRect.ritght,
      })};
      /left/i.test(position) && (_boundary.right = targetRect.right - constraintSize);
      /right/i.test(position) && (_boundary.left = targetRect.left + constraintSize);
      /top/i.test(position) && (_boundary.bottom = targetRect.bottom - constraintSize);
      /bottom/i.test(position) && (_boundary.top = targetRect.top + constraintSize);
    }

    function getParams(e){
      const { clientX, clientY } = correctClient(e, _boundary);
      const _offsetX = 
        /left/i.test(position) ? originClientX - clientX :
        /right/i.test(position) ? clientX - originClientX : 0;
      const _offsetY = 
        /top/i.test(position) ? originClientY - clientY :
        /bottom/i.test(position) ? clientY - originClientY : 0;

      return { 
        width: previousParams.width + _offsetX, 
        height: previousParams.height + _offsetY, 
        offsetX: /left/i.test(position) ? previousParams.offsetX - _offsetX : previousParams.offsetX, 
        offsetY: /top/i.test(position) ? previousParams.offsetY - _offsetY : previousParams.offsetY,
      };
    }

    function onStop(e){
      previousParams = { ...tem };
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    }

    function onHanding(e){
      tem = getParams(e);
      setParams({ ...tem });
    }

    function onStart(e){
      e.preventDefault();
      setBoundary();
      setOriginClient(e);
      window.addEventListener('mousemove', onHanding);
      window.addEventListener('mouseup', onStop);
    }

    target.addEventListener('mousedown', onStart);
    console.log('position', position);

    return () => {
      target.removeEventListener('mousedown', onStart);
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    };
  }, [position]);

  return params;
};
