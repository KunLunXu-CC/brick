import React from 'react';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import useCacheFun from '../hooks/useCacheFun';

// omit 需要过滤 props key 列表
const filterPropKeys = ['onResize'];

const Resize = React.forwardRef((props, ref) => {
  const { fun: handleResize } = useCacheFun({ fun: props.onResize });
  const resizeObserver = React.useRef(null);
  const containerRef =  ref ?? React.useRef(null);

  React.useEffect(() => {
    // 1. 取消所以监听
    resizeObserver.current?.disconnect();

    // 2. 创建 resizeObserver
    resizeObserver.current = new ResizeObserver(([entry = {}]) => {
      handleResize({ rect: entry?.contentRect, dom: containerRef?.current });
    });

    // 3. 添加监听
    resizeObserver.current?.observe(containerRef.current);
  }, [handleResize]);

  return (
    <div
      ref={containerRef}
      {...omit(props, filterPropKeys)}>
      {props.children}
    </div>
  );
});

Resize.defaultProps = {};

Resize.propTypes = {
  onResize: PropTypes.func,
};

export default React.memo(Resize);
