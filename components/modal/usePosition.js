import { useState, useEffect } from 'react';

/**
 * 将语义化的 position 映射为 css cursor 属性值
 * @param {String} position 当前鼠标位置 
 */
const getCursorStyle = (position) => {
  const positionMapCursor = {
    top: 'n-resize',
    bottom: 's-resize',
    left: 'w-resize',
    right: 'e-resize',
    leftTop: 'nw-resize',
    leftBottom: 'sw-resize',
    rightTop: 'ne-resize',
    rightBottom: 'se-resize',
  };
  return positionMapCursor[position] || 'auto';
}

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
 * 获取鼠标位置
 * @param {Object} e            当前事件对象 
 * @param {Object} target       目标元素 
 * @param {Number} threshold    容错值 
 * @returns {string}            当前位置
 */
const getPosition = (e, target, dragRef, threshold) => {
  const { width, height } = target.getBoundingClientRect();
  const { offsetX, offsetY } = e;

  const inTop = offsetY < threshold;
  const inBottom = height - offsetY < threshold;
  const inLeft = offsetX < threshold;
  const inRight = width - offsetX < threshold;

  const possibilities = [
    { conds: inLeft && inTop, value: 'leftTop' },
    { conds: inRight && inTop, value: 'rightTop' },
    { conds: inLeft && inBottom, value: 'leftBottom' },
    { conds: inRight && inBottom, value: 'rightBottom' },
    { conds: inTop, value: 'top' },
    { conds: inBottom, value: 'bottom' },
    { conds: inLeft, value: 'left' },
    { conds: inRight, value: 'right' },
    { conds: true, value: '' },
  ];
  return possibilities.find(v => v.conds).value;
};

/**
 * @param {Object} ref        区块 ref 值
 * @param {Number} threshold  容错值
 * @param {Boolean} resizable 是否允许改变大小 
 * @returns {String}          返回当前区块位置, 参考 getCursorStyle 方法
 */
export default (ref, {
  dragRef = {},
  threshold = 10, 
  resizable = true
} = {}) => {
  const [position, setPosition] = useState('');

  useEffect(() => {
    if (!ref || !ref.current || !resizable){return false}
    const target = ref.current;
    const cover = createCover();
    let lock = false;

    const onMouseMove = (e) => {
      if (lock) return;
      const _position = getPosition(e, target, dragRef, threshold);
      setPosition(_position);
      target.style.cursor = getCursorStyle(_position);
      cover.style.cursor = getCursorStyle(_position);
    };

    const onMouseUp = (e) => {
      lock = false;
      cover.remove();
      window.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseDown = (e) => {
      // TODO: 是否可以修改为 e.target 是 target 的子类或者相同
      if (e.target !== target && e.target !== dragRef.current) return;
      e.preventDefault();
      onMouseMove(e);
      lock = true;
      document.body.appendChild(cover);
      window.addEventListener('mouseup', onMouseUp);
    };

    target.addEventListener('mousemove', onMouseMove);
    target.addEventListener('mousedown', onMouseDown);
    return () => {
      cover.remove();
      target.removeEventListener('mousemove', onMouseMove);
      target.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);
  return position;
};
