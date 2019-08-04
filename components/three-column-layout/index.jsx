import React, { useRef } from 'react';
import classNames from 'classnames';

import useWidth from './useWidth';

const useStateHook = (props) => {
  const centerRef = useRef(null);

  const width = useWidth(centerRef);

  return { width, centerRef };
};

export default (props) => {
  const state = useStateHook(props);

  return (
    <div className={classNames('qyrc-tcl')}>
      <div className={classNames('qyrc-tcl-header')}>
        header
      </div>
      <div className={classNames('qyrc-tcl-body')}>
        <div className={classNames('qyrc-tcl-body-left')}>
          左
        </div>
        <div
          ref={state.centerRef}
          style={{ width: state.width }}
          className={classNames('qyrc-tcl-body-center')}>
          中
        </div>
        <div className={classNames('qyrc-tcl-body-right')}>
          右
        </div>
      </div>
      <div className={classNames('qyrc-tcl-footer')}>
        footer
      </div>
    </div>
  );
};
