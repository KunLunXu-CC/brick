import React from 'react';
import classNames from 'classnames';

export default () => {
  return (
    <div className={classNames('qyrc-tcl')}>
      <div className={classNames('qyrc-tcl-header')}>
        header
      </div>
      <div className={classNames('qyrc-tcl-body')}>
        <div className={classNames('qyrc-tcl-body-left')}>
          左
        </div>
        <div className={classNames('qyrc-tcl-body-center')}>
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
