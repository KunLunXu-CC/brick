import { useState, useMemo, useEffect } from 'react';

// 操作类型和 css cursor 值映射表
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

/**
 * 获取 originClient 值
 * @param {Object} e               事件对象
 * @param {Object} target          目标对象
 * @param {String} operationType   操作类型
 * @returns {Object}               源 client
 */
const getOriginClient = ({ e, target, operationType }) => {
  const originClient = { x: e.clientX, y: e.clientY };
  if (!!operationType){
    const targetRect = target.getBoundingClientRect();
    /top/i.test(operationType) && (originClient.y = targetRect.top);
    /left/i.test(operationType) && (originClient.x = targetRect.left);
    /right/i.test(operationType) && (originClient.x = targetRect.right);
    /bottom/i.test(operationType) && (originClient.y = targetRect.bottom);
  }
  return originClient;
};

/**
 * 合并计算 boundary 值
 * @param {Object} boundary        传入 boundary
 * @param {Object} target          目标对象
 * @param {String} operationType   操作类型
 * @param {Number} constraintSize  modal 限制大小
 * @returns {Object}               限制边界， client 限制范围
 */
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

/**
 * 修正 client 值
 * @param {Object} e          事件对象
 * @param {Object} boundary   client 限制范围
 * @returns {Object}          返回当前 { clientX, clientY }
 */
const correctClient = (e, boundary) => {
  const correctValue = (v, min, max) => (
    v < min ? min : v > max ? max : v
  );
    return {
      clientX: correctValue(e.clientX, boundary.left, boundary.right),
      clientY: correctValue(e.clientY, boundary.top, boundary.bottom),
    };
};

/**
 * 获取 params 参数值
 * @param {Object} e                事件对象
 * @param {Object} originClient     源 client， 鼠标按下时记录的 client
 * @param {String} operationType    操作类型
 * @param {Object} previousParams   上一次 params 或者说是操作前 params
 * @param {Object} boundary         client 限制范围
 * @returns {Object}                计算后 params
 */
const getParams = ({ e, originClient, operationType, previousParams, boundary }) => {
  const { clientX, clientY } = correctClient(e, boundary);
  const offsetW =
    /left/i.test(operationType) ? originClient.x - clientX :
    /right/i.test(operationType) ? clientX - originClient.x : 0;
  const offsetH =
    /top/i.test(operationType) ? originClient.y - clientY :
    /bottom/i.test(operationType) ? clientY - originClient.y : 0;

  const offsetX = /(left|drag)/i.test(operationType) ? clientX - originClient.x : 0;
  const offsetY = /(top|drag)/i.test(operationType) ? clientY - originClient.y : 0;
  return {
    width: previousParams.width + offsetW,
    height: previousParams.height + offsetH,
    offsetX: previousParams.offsetX + offsetX,
    offsetY: previousParams.offsetY + offsetY,
  };
};

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

    // 处理计算 operationType 值, 并设置样式
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
      operationType = _operationType;
      target.style.cursor = OPERATION_TYPE_MAP_CURSOR[operationType] || 'auto';
      cover.style.cursor = OPERATION_TYPE_MAP_CURSOR[operationType] || 'auto';
    };

    /* 主要控制分支 */
    function onHanding(e){
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
      previousParams = { ...tem };
      target.style.cursor = 'auto';
      lock = false;
      cover.remove();
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    }

    function onStart(e){
      handeOperationType(e);
      originClient = getOriginClient({ e, target, operationType });
      _boundary = getBoundary({ boundary, target, operationType, constraintSize });

      lock = true;
      document.body.appendChild(cover);
      window.addEventListener('mouseup', onStop);
      window.addEventListener('mousemove', onHanding);
    }

    function onHover(e){
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
