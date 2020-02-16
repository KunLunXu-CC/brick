import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useRef, useEffect } from 'react';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'onResize',
  'className',
];

// props 默认值
const defaultProps = {};

// props 参数校验
const propTypes = {
  onResize: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

const useStateHook = (props) => {
  const iframeRef = useRef(null);

  // 容器大小改变
  const onResize = () => {
    if (!_.isFunction(props.onResize)){return false;}
    const width = _.get(iframeRef, 'current.contentWindow.document.documentElement.clientWidth');
    const height = _.get(iframeRef, 'current.contentWindow.document.documentElement.clientHeight');
    props.onResize({ width, height });
  };

  useEffect(() => {
    iframeRef.current &&
    iframeRef.current.contentWindow.addEventListener('resize', onResize);
  }, [iframeRef.current]);

  return { iframeRef };
}

const Resize = React.forwardRef((props, ref) => {
  const state = useStateHook(props);
  return (
    <div
      ref={ref}
      className={classNames('qyrc-resize', props.className)}
      {...omit(props, filterPropKeys)}
    >
      {props.children}
      <iframe frameBorder="0" ref={state.iframeRef} className="qyrc-resize-iframe"/>
    </div>
  );
});

Resize.defaultProps = defaultProps;
Resize.propTypes = propTypes;
export default Resize;
