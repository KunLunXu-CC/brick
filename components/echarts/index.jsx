import React from 'react';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as echarts from 'echarts';
import { Resize } from '..';
import '../resize/style';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'on',
  'style',
  'width',
  'option',
  'height',
  'onCreate',
  'className',
];

const useHooks = (props) => {
  const containerRef = React.useRef(null);
  const [echartsInstance, setEchartsInstance] = React.useState(null); // echarts 实例

  // 容器变化
  const onResize = React.useCallback(() => {
    echartsInstance?.resize({ width: 'auto', height: 'auto' });
  }, [echartsInstance]);

  // 创建 echartsInstance
  React.useEffect(() => {
    if (containerRef.current) {
      const e = echarts.init(containerRef.current);
      setEchartsInstance(e);
      _.isFunction(props.onCreate) && props.onCreate(e);
    }
  }, [containerRef.current]);

  // 刷新配置
  React.useEffect(() => {
    echartsInstance && props.option && echartsInstance.setOption(props.option);
  }, [echartsInstance, props.option]);

  // 绑定事件
  React.useEffect(() => {
    if (echartsInstance && _.isArray(props.on)) {
      props.on.forEach(({ eventName, query, handler, context }) => {
        if (!eventName || !handler) {
          return false;
        }

        echartsInstance.off(eventName);
        echartsInstance.on(
          eventName,
          query,
          handler.bind(null, echartsInstance),
          context,
        );
      });
    }
  }, [echartsInstance, props.on]);

  return { containerRef, echartsInstance, onResize };
};

const Echarts = (props) => {
  const state = useHooks(props);
  return (
    <Resize
      ref={state.containerRef}
      onResize={state.onResize}
      className={classNames('qyrc-echarts', props.className)}
      style={{ height: props.height, width: props.width, ...props.style }}
      {...omit(props, filterPropKeys)}
    />
  );
};

Echarts.defaultProps = {};

Echarts.propTypes =  {
  on: PropTypes.array,
  style: PropTypes.object,
  option: PropTypes.object,
  className: PropTypes.string,
  onCreate: PropTypes.func,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

export default React.memo(Echarts);
