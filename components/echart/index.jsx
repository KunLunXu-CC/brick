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

const useHooks = props => {
  const containerRef = React.useRef(null);
  const [echart, setEchart] = React.useState(null);

  // 容器变化
  const onResize = React.useCallback(() => {
    echart?.resize({ width: 'auto', height: 'auto' });
  }, [echart]);

  // 创建 echart
  React.useEffect(() => {
    if (containerRef.current) {
      const e = echarts.init(containerRef.current);
      setEchart(e);
      _.isFunction(props.onCreate) && props.onCreate(e);
    }
  }, [containerRef.current]);

  // 刷新配置
  React.useEffect(() => {
    echart && props.option && echart.setOption(props.option);
  }, [echart, props.option]);

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

  return { containerRef, echart, onResize };
};

const Echart = props => {
  const state = useHooks(props);
  return (
    <Resize
      ref={state.containerRef}
      onResize={state.onResize}
      className={classNames('qyrc-echart', props.className)}
      style={{ height: props.height, width: props.width, ... props.style }}
      {...omit(props, filterPropKeys)}
    />
  );
};

Echart.defaultProps = {};

Echart.propTypes =  {
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

export default Echart;
