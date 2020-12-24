import React from 'react';
import { Button } from 'antd';
import { Echart } from '@components';
import './index.scss';

const setting = {
  line: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      type: 'line',
      data: [820, 932, 901, 934, 129, 1330, 1320],
    }],
  },
  bar: {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(220, 220, 220, 0.8)',
      },
    }],
  },
};

export default () => {
  const [option, setOptions] = React.useState(setting.line);

  // 切换
  const onToggle = React.useCallback(() => {
    setOptions(_.isEqual(option, setting.line) ? setting.bar : setting.line);
  }, [option]);

  return (
    <div className="demo-echart">
      <Button onClick={onToggle}>切换</Button>
      <Echart
        height={500}
        option={option}
        on={[
          {
            eventName: 'click',
            handler: (... args) => console.log('---->>> click', ... args),
          },
          {
            eventName: 'mousemove',
            handler: (... args) => console.log('---->>> mousemove', ... args),
          },
        ]}
      />
    </div>
  );
};
