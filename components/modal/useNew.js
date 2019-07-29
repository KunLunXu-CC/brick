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

/**
 * 弹窗 hook
 * @param {Object} modakRef          弹窗 ref
 * @param {Object} dragRef           可拖拽元素 ref
 * @param {NUmber} threshold         容错率
 * @param {Object} boundary          边界限制， 默认为弹窗父原始 rect
 * @param {Number} constraintSize    宽高限制大小(最小宽、高)
 * @param {Object} defaultParams     默认 params 参数
 */
export default (modakRef, {
  threshold = 10,
  dragRef = null,
  boundary = null,
  constraintSize = 200,
  defaultParams = { width: 500, height: 500, offsetX: 0, offsetY: 0 },
} = {}) => {
  const [params, setParams] = useState(defaultParams);

  useEffect(() => {
    if (!modakRef || !modakRef.current){return false;}
    const target = modakRef.current;

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
      if (dragRef && event.target === dragRef.current && event.type === 'mousedown'){
        _operationType = 'drag';
      } else if (event.target === target){
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
