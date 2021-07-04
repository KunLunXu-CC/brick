import _ from 'lodash';
import React from 'react';
import omit from 'omit.js';
import PropTypes from 'prop-types';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'onResize',
];

const useHooks = (props, ref) => {
  const _containerRef = React.useRef(null);
  const resizeObserver = React.useRef(null);

  // 容器 ref
  const containerRef = React.useMemo(() => (
    ref || _containerRef
  ), [_containerRef]);

  // 容器大小改变
  const onResize = React.useCallback(([entrie = {}]) => {
    if (!_.isFunction(props.onResize)) {
      return false;
    }
    const { bottom, height, left, right, top, width, x, y } = entrie?.contentRect ?? {};
    props.onResize({ bottom, height, left, right, top, width, x, y });
  }, [props.onResize]);

  React.useEffect(() => {
    resizeObserver.current?.disconnect(); // 取消所以监听
    resizeObserver.current = new ResizeObserver(onResize); // 重新创建 resizeObserver
    resizeObserver.current?.observe(containerRef.current); // 添加监听
  }, [containerRef.current, onResize]);

  return { containerRef };
};

const Resize = React.forwardRef((props, ref) => {
  const state = useHooks(props, ref);

  return (
    <div ref={state.containerRef} {...omit(props, filterPropKeys)}>
      {props.children}
    </div>
  );
});

Resize.defaultProps = {};

Resize.propTypes = {
  onResize: PropTypes.func,
};

export default Resize;
