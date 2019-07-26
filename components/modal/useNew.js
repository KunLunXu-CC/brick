import { useState, useMemo, useEffect } from 'react';

const OPERATION_TYPE_MAP_CURSOR = {
  drag: 'move',
  top: 'n-resize',
  bottom: 's-resize',
  left: 'w-resize',
  right: 'e-resize',
  leftTop: 'nw-resize',
  leftBottom: 'sw-resize',
  rightTop: 'ne-resize',
  rightBottom: 'se-resize',
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

// 获取 originClient
const getOriginClient = ({ e, target, operationType }) => {
  const originClient = { x: e.clientX, y: e.clientY };
  if (!!operationType){
    const targetRect = target.getBoundingClientRect();
    /top/i.test(operationType) && (originClient.y = targetRect.top);
    /left/i.test(operationType) && (originClient.x = targetRect.left);
    /right/i.test(operationType) && (originClient.x = targetRect.right);
    /bottom/i.test(operationType) && (originClient.y = targetRect.bottom);
  }
  console.log('originClient::', originClient);
  return originClient;
};

// 获取 boundary
const getBoundary = ({ boundary, target, operationType, constraintSize }) => {
  const targetParentRect = target.parentNode.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const _boundary = { ...(boundary || {
    top: targetParentRect.top,
    left: targetParentRect.left,
    right: targetParentRect.right,
    bottom: targetParentRect.bottom,
  })};
  /left/i.test(operationType) && (_boundary.right = targetRect.right - constraintSize);
  /right/i.test(operationType) && (_boundary.left = targetRect.left + constraintSize);
  /top/i.test(operationType) && (_boundary.bottom = targetRect.bottom - constraintSize);
  /bottom/i.test(operationType) && (_boundary.top = targetRect.top + constraintSize);
  return _boundary;
};

// TODO: 方法编写， 根据操作类型返回 params
const getParams = ({ e, originClient, operationType, previousParams, boundary }) => {
  // 1. 修正 e.clientX e.clientY

  // 2. 根据操作类型计算偏移值

  // 3. 根据操作类型计算 params

  return {};
};

/**
 * # 运动方式有两种： resize drag, 细分为：left right top bottom leftTop rightTop leftBottom rightBottom
 * 
 * 计算需要存储数据： originClient type lock corve
 */

export default (modakRef, {
  dragRef = {},
  threshold = 10,
  boundary = null,
  constraintSize = 100,
  defaultParams = { width: 100, height: 100, offsetX: 0, offsetY: 0 },
} = {}) => {
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!modakRef || !modakRef.current){return false;}
    const target = modakRef.current;
    const drag = dragRef.current;

    let tem = null;
    let lock = false;
    let _boundary = null;
    let operationType = null;
    let previousParams = { ...params };
    let originClient = { x: null, y: null };
    let cover = createCover();

    /* 通用方法: 代码块 */

    // 处理操作类型, 并设置样式
    const handeOperationType = (event) => {
      let _operationType = operationType;
      if (lock){return false;}
      if (event.target === drag && event.type === 'mousedown'){
        _operationType = 'drag';
      } else {
        const { offsetX, offsetY } = event;
        const { width, height } = target.getBoundingClientRect();
  
        const inTop = offsetY < threshold;
        const inLeft = offsetX < threshold;
        const inRight = width - offsetX < threshold;
        const inBottom = height - offsetY < threshold;
  
        const possibilities = [
          { conds: inLeft && inTop, value: 'leftTop' },
          { conds: inRight && inTop, value: 'rightTop' },
          { conds: inLeft && inBottom, value: 'leftBottom' },
          { conds: inRight && inBottom, value: 'rightBottom' },
          { conds: inBottom, value: 'bottom' },
          { conds: inRight, value: 'right' },
          { conds: inLeft, value: 'left' },
          { conds: inTop, value: 'top' },
          { conds: true, value: null },
        ];
        _operationType = possibilities.find(v => v.conds).value;
      }
      if (_operationType === operationType){return false;}
      console.log('operationType', operationType);
      operationType = _operationType;
      target.style.cursor = OPERATION_TYPE_MAP_CURSOR[operationType] || 'auto';
      cover.style.cursor = OPERATION_TYPE_MAP_CURSOR[operationType] || 'auto';
    };

    /* 主要控制分支 */
    function onHanding(e){
      console.log('处理事件');
      tem = getParams({
        e,
        originClient, 
        operationType,
        previousParams, 
        boundary: _boundary, 
      });
      setParams({ ...tem });
    } 

    function onStop(e){
      console.log('鼠标弹起');
      previousParams = { ...tem };

      lock = false;
      cover.remove();
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    }

    function onStart(e){
      console.log('鼠标按下');
      handeOperationType(e);
      originClient = getOriginClient({ e, target, operationType });
      _boundary = getBoundary({ boundary, target, operationType, constraintSize });

      lock = true;
      document.body.appendChild(cover);
      window.addEventListener('mouseup', onStop);
      window.addEventListener('mousemove', onHanding);
    }
    
    function onHover(e){
      console.log('鼠标移动');
      handeOperationType(e);
    }
    target.addEventListener('mousedown', onStart);
    target.addEventListener('mousemove', onHover);
    return () => {
      cover.remove();
      target.removeEventListener('mousedown', onStart);
      target.removeEventListener('mousemove', onHover);
      window.removeEventListener('mousemove', onHanding);
      window.removeEventListener('mouseup', onStop);
    };
  }, []);
  return params;
};