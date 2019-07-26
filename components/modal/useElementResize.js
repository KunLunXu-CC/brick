import { useState, useEffect, useMemo } from 'react';
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
  const data = { 
    clientX: correctValue(e.clientX, boundary.left, boundary.right), 
    clientY: correctValue(e.clientY, boundary.top, boundary.bottom),
  };
  return data;
};

// 创建遮罩层
const createCover = () => {
  const cover = document.createElement('div');
  cover.style.position = 'fixed';
  cover.style.top = 0;
  cover.style.left = 0;
  cover.style.right = 0;
  cover.style.bottom = 0;
  cover.style.background = 'rgba(255, 0, 0, 0.1)';
  return cover;
};

export default (modalRef, {
  dragRef = {},
  boundary = null,
  constraintSize = 100,
  defaultParams = { width: 100, height: 100, offsetX: 0, offsetY: 0 },
} = {}) => {
  const [params, setParams] = useState(defaultParams);

  const position = usePosition(modalRef);

  useEffect(() => {
    if (!modalRef || !modalRef.current){return false;}
    const target = modalRef.current;
    const cover = createCover();

    let tem;
    let _boundary;
    let originClientX;
    let originClientY;
    let draging = false;
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
        bottom: targetParentRect.bottom,
        left: targetParentRect.left,
        right: targetParentRect.right,
      })};
      /left/i.test(position) && (_boundary.right = targetRect.right - constraintSize);
      /right/i.test(position) && (_boundary.left = targetRect.left + constraintSize);
      /top/i.test(position) && (_boundary.bottom = targetRect.bottom - constraintSize);
      /bottom/i.test(position) && (_boundary.top = targetRect.top + constraintSize);
    }

    function getParams(e){
      const { clientX, clientY } = correctClient(e, _boundary);
      const _position = draging ? 'leftTop': position;

      const _offsetX = 
        /left/i.test(_position) ? originClientX - clientX :
        /right/i.test(_position) ? clientX - originClientX : 0;
      const _offsetY = 
        /top/i.test(_position) ? originClientY - clientY :
        /bottom/i.test(_position) ? clientY - originClientY : 0;

      return { 
        width: previousParams.width + (draging ? 0 :  _offsetX), 
        height: previousParams.height + (draging ? 0 : _offsetY), 
        offsetX: /left/i.test(_position) ? previousParams.offsetX - _offsetX : previousParams.offsetX, 
        offsetY: /top/i.test(_position) ? previousParams.offsetY - _offsetY : previousParams.offsetY,
      };
    }

    function onStop(e){
      cover.remove();
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
      document.body.appendChild(cover);
      setBoundary();
      setOriginClient(e);
      e.target === dragRef.current && (draging = true);
      window.addEventListener('mousemove', onHanding);
      window.addEventListener('mouseup', onStop);
    }

    target.addEventListener('mousedown', onStart);
    return () => {
      cover.remove();
      target.removeEventListener('mousedown', onStart);
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    };
  }, [position]);

  return params;
};
