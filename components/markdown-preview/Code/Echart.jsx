import React from 'react';
import classNames from 'classnames';
import { Echart } from '../..';
import '../../echart/style';

const useHooks = props => {
  const option = React.useMemo(() => {
    try {
      return JSON.parse(props.value);
    } catch (e) {
      console.error(
        '%c [ markdow preview echart parse ]', 'font-size:13px; background:pink; color:#bf2c9f;',
        e
      );
    }
    return null;
  }, [props.value]);

  return { option };
};

export default React.memo(props => {
  const state = useHooks(props);
  return (
    <div
      className={classNames('qyrc-markdown-preview-echart', {
        'qyrc-error': !state.option,
      })}>
      {state.option ?
        <Echart
          option={state.option}
          className="qyrc-markdown-preview-echart-main"
        /> : 'echart 解析错误'
      }
    </div>
  );
});
