import React from 'react';

/**
 * 缓存函数, 将经常变更的函数变量, 存储起来, 返回一个不再变更的函数变量
 * 用途:
 *   1. 部分工具允许绑定事件, 但未提供配套的销毁方法, 通过该 hook 来避免绑定多个事件
 *   2. ResizeObserver 中每次创建实例, 都会执行监听函数, 通过该 hook 来避免监听函数的变更, 造成监听函数的错误执行
 * @param {Function} fun 给定函数
 * @returns {fun} fun: 新函数
 */
export default ({ fun }) => {
  const funRef = React.useRef(fun);

  React.useEffect(() => {
    funRef.current = fun;
  }, [fun]);

  const newFun = React.useCallback((...args) => {
    funRef.current?.(...args);
  }, []);

  return { fun: newFun };
};
