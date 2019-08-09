import _ from 'lodash';
import { useState, useEffect } from 'react';

// 默认参数
const DEFAULT_OPTION = {
  dragable: true,
  defaultMenuWidth: 200,
  menuMargin: { left: 100, right: 100 },
};

/**
 * 修正值
 * @param {Number} v           当前值
 * @param {Object} body        拖动容器
 * @param {Object} menuMargin      和父容器的限制边界
 */
const correctClientX = (v, body, menuMargin) => {
  const { left, right }  = body.parentNode.getBoundingClientRect();
  const minClientX = left + menuMargin.left;
  const maxClientX = right - menuMargin.right;
  return v < minClientX ? minClientX : v > maxClientX ? maxClientX : v;
};

/**
 * 三栏布局 hook
 * @param {Boolean} dragable    是否允许拖拽
 * @param {Number} defaultMenuWidth 默认宽度
 * @param {Object} menuMargin       与父容器的限制外边距
 */
export default (ref,  {
  dragable = DEFAULT_OPTION.dragable,
  defaultMenuWidth = DEFAULT_OPTION.defaultMenuWidth,
  menuMargin = DEFAULT_OPTION.menuMargin,
} = {}) => {
  const [width, setWidth] = useState(
    menuMargin.left > defaultMenuWidth ? menuMargin.left : defaultMenuWidth
  );

  useEffect(() => {
    if (!ref || !ref.current || !dragable){return false;}
    const target = ref.current;
    const body = ref.current.parentNode;

    let preWidth = width;
    let originClientX = body.getBoundingClientRect().right;

    // 开始拉伸: 鼠标移动
    const onMove = (e) => {
      const clientX = correctClientX(e.clientX, body, menuMargin);
      const reWidth = (clientX - originClientX) + preWidth;
      setWidth(reWidth);
    };

    // 停止拉伸: 鼠标弹起
    const onStop = (e) => {
      document.body.style.cursor = 'auto';
      preWidth = (e.clientX - originClientX) + preWidth;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onStop);
    };

    // 开始拉伸: 鼠标按下
    const onStart = (e) => {
      e.preventDefault();
      const bodyRef = body.getBoundingClientRect();
      originClientX = bodyRef.right;
      document.body.style.cursor = 'e-resize';

      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onStop);
    };

    target.addEventListener('mousedown', onStart);

    return () => {
      target.removeEventListener('mousedown', onStart);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onStop);
    };
  }, []);

  return width;
};
