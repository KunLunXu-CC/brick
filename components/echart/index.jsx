import React from 'react';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as echarts from 'echarts';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'on',
  'style',
  'width',
  'option',
  'height',
  'className',
  'createEchart',
];

// props 默认值
const defaultProps = {};

// props 参数校验
const propTypes = {
  on: PropTypes.array,
  style: PropTypes.object,
  option: PropTypes.object,
  className: PropTypes.string,
  createEchart: PropTypes.func,
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

const useHooks = props => {
  const containerRef = React.useRef(null);
  const [echart, setEchart] = React.useState(null);

  // 创建 echart
  React.useEffect(() => {
    if (containerRef.current) {
      const e = echarts.init(containerRef.current);
      setEchart(e);
      _.isFunction(props.createEchart) && props.createEchart(e);
    }
  }, [containerRef.current]);

  // 刷新配置
  React.useEffect(() => {
    echart && props.option && echart.setOption(props.option);
  }, [echart, props.option]);

  // 监听容器变化, 并重置图表大小
  React.useEffect(() => {
    if (echart) {
      const ro = new ResizeObserver(() => {
        echart.resize({ width: 'auto', height: 'auto' });
      });
      ro.observe(containerRef.current);
    }
  }, [echart]);

  // 绑定事件
  React.useEffect(() => {
    if (echart && _.isArray(props.on)) {
      props.on.forEach(({ eventName, query, handler, context }) => {
        if (!eventName || !handler) {
          return false;
        }
        echart.off(eventName);
        echart.on(eventName, query, handler.bind(null, echart), context);
      });
    }
  }, [echart, props.on]);

  return { containerRef, echart };
};

const Echart = props => {
  const state = useHooks(props);
  return (
    <div
      ref={state.containerRef}
      className={classNames('qyrc-echart', props.className)}
      style={{ height: props.height, width: props.width, ... props.style }}
      {...omit(props, filterPropKeys)}>
    </div>
  );
};

Echart.defaultProps = defaultProps;
Echart.propTypes = propTypes;
export default Echart;
