import _ from 'lodash';
import { useState, useMemo, useEffect } from 'react';

// 该 hook 默认参数
const DEFAULT_OPTION = {
  threshold: 5,
  dragHeight: 20,
  constraintSize: { width: 200, height: 200 },
  margin: { left: 0, right: 0, top: 0, bottom: 0 },
  defaultParams: { width: 200, height: 200, offsetX: 0, offsetY: 0 },
  operationList: [
    'top', 'left', 'right', 'bottom',
    'leftTop', 'rightTop', 'leftBottom', 'rightBottom',
    'drag',
  ],
};

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

/**
 * 解析 params: 因为支持百分比所以需要将值转为数值
 * @param {Object} target  目标对象
 */
const parseParams = ({ target }) => {
  const { width, height } = target.getBoundingClientRect();
  const style = window.getComputedStyle(target, null).getPropertyValue("transform");
  const values = style.split('(')[1].split(')')[0].split(',');
  const offsetX = _.toNumber(values[values.length - 2]);
  const offsetY = _.toNumber(values[values.length - 1]);
  return { width, height, offsetX, offsetY };
};

/**
 * 解析 constraintSize: 因为支持百分比所以需要将值转为数值
 * @param {Object} target           目标对象
 * @param {Object} constraintSize   传入 constraintSize
 */
const parseConstraintSize = ({ target, constraintSize }) => {
  let { width, height } = { ...DEFAULT_OPTION.constraintSize, ...constraintSize };
  const parentRect = target.parentNode.getBoundingClientRect();
  width = (/%$/.test(width) ? parentRect.width / 100 : 1) * parseFloat(width, 10);
  height = (/%$/.test(height) ? parentRect.height / 100 : 1) * parseFloat(height, 10);
  return { width, height };
};

/**
 * 解析 margin: 因为支持百分比所以需要将值转为数值
 * @param {Object} target   目标对象
 * @param {Object} margin   传入 margin
 */
const parseMargin = ({ target, margin }) => {
  let { left, right, top, bottom } = { ...DEFAULT_OPTION.margin, ...margin };
  const parentRect = target.parentNode.getBoundingClientRect();
  left = (/%$/.test(left) ? parentRect.width / 100 : 1) * parseFloat(left, 10);
  right = (/%$/.test(right) ? parentRect.width / 100 : 1) * parseFloat(right, 10);
  top = (/%$/.test(top) ? parentRect.height / 100 : 1) * parseFloat(top, 10);
  bottom = (/%$/.test(bottom) ? parentRect.height / 100 : 1) * parseFloat(bottom, 10);
  return { left, right, top, bottom };
};

/**
 * 获取操作类型
 * @param {Object} target          操作目标
 * @param {String} operationType   操作类型
 */
const setCursor = ({ target, operationType }) => {
  const cursor = OPERATION_TYPE_MAP_CURSOR[operationType] || 'inherit';
  if (cursor !== target.style.cursor){
    setCursor.cursor = true;
    target.style.cursor = cursor;
    document.body.style.cursor = cursor;
  }
}

/**
 * 获取操作类型
 * @param {Object} event             事件对象
 * @param {Object} target            操作目标
 * @param {Number} threshold         边界值，距离边界多少才触发操作
 * @param {Number} dragHeight        可拖拽区域高度
 * @param {String[]} operationList   允许的操作类型
 */
const getOperationType = ({ event, target, threshold, dragHeight, operationList }) => {
  // 1. 操作范围检测如果操作范围在 target 之外直接返回 null
  if (!target.contains(event.target)){return null}

  // 2. 判断当前鼠标位置
  const targetRect = target.getBoundingClientRect();
  const inTop = event.clientY - targetRect.top < threshold;
  const inLeft = event.clientX - targetRect.left < threshold;
  const inRight = targetRect.right - event.clientX < threshold;
  const inBottom = targetRect.bottom - event.clientY < threshold;
  const inDrag = event.clientY - targetRect.top < threshold + dragHeight;

  // 3. 可能值以及对应条件
  const possibilities = [
    { conds: inLeft && inTop, value: 'leftTop' },
    { conds: inRight && inTop, value: 'rightTop' },
    { conds: inLeft && inBottom, value: 'leftBottom' },
    { conds: inRight && inBottom, value: 'rightBottom' },
    { conds: inBottom, value: 'bottom' },
    { conds: inRight, value: 'right' },
    { conds: inLeft, value: 'left' },
    { conds: inTop, value: 'top' },
    { conds: event.type === 'mousedown' && inDrag, value: 'drag'},
    { conds: true, value: null },
  ].filter(v => ([...operationList, null].includes(v.value)));

  return possibilities.find(v => v.conds).value;
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
  const targetRect = target.getBoundingClientRect();
  /top/i.test(operationType) && (originClient.y = targetRect.top);
  /left/i.test(operationType) && (originClient.x = targetRect.left);
  /right/i.test(operationType) && (originClient.x = targetRect.right);
  /bottom/i.test(operationType) && (originClient.y = targetRect.bottom);
  return originClient;
};

/**
 * 合并计算 margin 值
 * @param {Object} margin          目标对象距离父节点的 margin
 * @param {Object} target          目标对象
 * @param {String} operationType   操作类型
 * @param {Object} constraintSize  容器限制大小
 * @returns {Object}               限制边界， client 限制范围
 */
const getBoundary = ({ margin, target, operationType, constraintSize }) => {
  const parentRect = target.parentNode.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  const _margin = parseMargin({ target, margin });
  const boundary = {
    top: parentRect.top + _margin.top,
    left: parentRect.left + _margin.left,
    right: parentRect.right - _margin.right,
    bottom: parentRect.bottom - _margin.bottom,
  };
  const _constraintSize = parseConstraintSize({ target, constraintSize });
  /left/i.test(operationType) && (boundary.right = targetRect.right - _constraintSize.width);
  /right/i.test(operationType) && (boundary.left = targetRect.left + _constraintSize.width);
  /top/i.test(operationType) && (boundary.bottom = targetRect.bottom - _constraintSize.height);
  /bottom/i.test(operationType) && (boundary.top = targetRect.top + _constraintSize.height);
  return boundary;
};

/**
 * 修正 client 值
 * @param {Object} e          事件对象
 * @param {Object} boundary   client 限制范围
 * @param {Function} onBoundary       到底边界触发 (types) => {}
 * @returns {Object}          返回当前 { clientX, clientY }
 */
const correctClient = (e, boundary, onBoundary) => {
  const correctValue = (v, min, max) => (
    v < min ? min : v > max ? max : v
  );

  // 到达边界情况
  const types = [
    {
      conds: e.clientX <= boundary.left,
      value: 'left',
    },
    {
      conds: e.clientX >= boundary.right,
      value: 'right',
    },
    {
      conds: e.clientY <= boundary.top,
      value: 'top',
    },
    {
      conds: e.clientY >= boundary.bottom,
      value: 'bottom',
    }
  ].filter(v => v.conds).map(v => v.value);

  // 如果到达边界则执行 onBoundary
  _.isFunction(onBoundary) && types.length !== 0 && onBoundary(types);

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
 * @param {Function} onBoundary     到底边界触发 (types) => {}
 * @returns {Object}                计算后 params
 */
const getParams = ({ e, originClient, operationType, previousParams, boundary, onBoundary }) => {
  const { clientX, clientY } = correctClient(e, boundary, onBoundary);
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
 * useResize hook
 * @param {Object} ref               操作对象 ref
 * @param {NUmber} threshold         容错率， 距离目标对象边界多少触发操作
 * @param {NUmber} dragHeight        顶部允许拖拽区域高度
 * @param {Object} margin            操作对象距离父节点的最小 margin 限制
 * @param {Object} constraintSize    宽高限制大小(最小宽、高)
 * @param {Object} defaultParams     默认 params 参数
 * @param {String[]} operationList   允许的操作类型
 * @param {Function} onBoundary     到底边界触发 (types) => {}
 */
export default (ref, {
  onBoundary,
  margin = DEFAULT_OPTION.margin,
  threshold = DEFAULT_OPTION.threshold,
  dragHeight = DEFAULT_OPTION.dragHeight,
  constraintSize = DEFAULT_OPTION.constraintSize,
  defaultParams = DEFAULT_OPTION.defaultParams,
  operationList = DEFAULT_OPTION.operationList,
} = {}) => {
  const [params, setParams] = useState({ ...DEFAULT_OPTION.defaultParams, ...defaultParams });
  useEffect(() => {
    if (!ref || !ref.current){return;}
    const target = ref.current;

    let tem = null;
    let lock = false;
    let boundary = null;
    let operationType = null;
    let previousParams = null;
    let originClient = { x: 0, y: 0 };

    // 鼠标悬停(mousemove): 处理操作类型、cursor
    const onHover = (e) => {
      if (lock){return false;}
      operationType = getOperationType({ event: e, target, threshold, dragHeight, operationList });
      setCursor({ target, operationType });
    }

    // 操作处理中(mousemove): 计算设置 params
    const onHanding = (e) => {
      e.preventDefault();
      const _params = getParams({ e, boundary, originClient,  operationType, previousParams, onBoundary });
      if (!_.isEqual(_params, tem)){
        tem = _params;
        setParams({ ...tem });
      }
    };

    // 操作结束(mouseup): 结束操作后处理相关业务
    const onStop = (e) => {
      lock = false;
      previousParams = { ...previousParams, ...tem };
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
    };

    // 操作开始(mousedown): 开始操作前处理相关业务
    const onStart = (e) => {
      onHover(e);
      if (!operationType){return false;}
      lock = true;
      previousParams = { ...parseParams({ target }) };
      originClient = getOriginClient({ e, target, operationType });
      boundary = getBoundary({ margin, target, operationType, constraintSize });
      window.addEventListener('mouseup', onStop);
      window.addEventListener('mousemove', onHanding);
    }

    window.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onHover);
    return () => {
      window.removeEventListener('mouseup', onStop);
      window.removeEventListener('mousemove', onHanding);
      window.removeEventListener('mousedown', onStart);
      window.removeEventListener('mousemove', onHover);
    };
  }, []);

  return params;
};
