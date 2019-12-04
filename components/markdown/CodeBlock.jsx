import _ from 'lodash';
import hljs from 'highlight.js';
import classNames from 'classnames';

import React, { useEffect, useRef, useMemo } from 'react';
import { highlightBlock } from './util';
import { Icon } from '..';

const useStateHook = props => {
  const selectRef = useRef(null);
  const codeRef = useRef(null);

  // 复制
  const onCopy = (e) => {
    selectRef.current.select();
    document.execCommand("Copy");
  };

  useEffect(() => {
    codeRef.current &&
    codeRef.current.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [codeRef.current]);
  return { onCopy, selectRef, codeRef };
}

export default props => {
  const state = useStateHook(props);
  const { children, className = '' } = props.children.props;
  const classNamePrefix = props.classNamePrefix;

  return (
    <div ref={state.codeRef} className={`${classNamePrefix}-code`}>
      <div className={`${classNamePrefix}-code-header`}>
        <div className={`${classNamePrefix}-code-header-red`} />
        <div className={`${classNamePrefix}-code-header-yellow`} />
        <div className={`${classNamePrefix}-code-header-green`} />
        <div className={`${classNamePrefix}-code-header-lang`}>
          {className.replace('lang-', '')}
        </div>
        <Icon
          title="复制代码"
          type="icon-copy"
          onClick={state.onCopy}
          className={`${classNamePrefix}-code-header-copy`}
        />
      </div>
      <div className={`${classNamePrefix}-code-body`}>
        <ul className={`${classNamePrefix}-code-line`}>
          {new Array(children.split('\n').length).fill(0).map((v, index) => (
            <li key={index}>{index + 1}</li>
          ))}
        </ul>
        <div className={`${classNamePrefix}-code-content`}>
          <pre><code className={classNames(className, `${classNamePrefix}-code-block`)}>
            {children}
          </code></pre>
        </div>
      </div>
      <textarea
        ref={state.selectRef}
        defaultValue={children}
        className={`${classNamePrefix}-code-select`}
      />
    </div>
  );
};
