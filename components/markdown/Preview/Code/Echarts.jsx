import React from 'react';
import classNames from 'classnames';
import ECharts from '../../../e-charts';

// see: https://echarts.apache.org/examples/zh/index.html
export default React.memo((props) => {
  const option = React.useMemo(() => {
    try {
      return JSON.parse(props.value);
    } catch (e) {
      console.error(
        '%c [ markdown preview echarts parse ]', 'font-size:13px; background:pink; color:#bf2c9f;',
        e,
      );
    }

    return null;
  }, [props.value]);

  return (
    <div
      className={classNames('brick-markdown-preview-echarts', {
        'brick-error': !option,
      })}>
      {option ? (
        <ECharts
          option={option}
          className="brick-markdown-preview-echarts-main"
        />
      ) : 'echarts 解析错误'
      }
    </div>
  );
});
