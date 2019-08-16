import hljs from 'highlight.js';
import classNames from 'classnames';
import { Icon } from '..';
import React, { useEffect, useRef } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

// 代码块
const CodeBlock = (props) => {
  const { children, className = '' } = props.children.props;
  const selectRef = useRef(null);
  const onClick = (e) => {
    selectRef.current.select();
    document.execCommand("Copy");
  };
  return (
    <div className="qyrc-md-code">
      <div className="qyrc-md-code-header">
        <div className="qyrc-md-code-header-red" />
        <div className="qyrc-md-code-header-yellow" />
        <div className="qyrc-md-code-header-green" />
        <div className="qyrc-md-code-header-lang">
          {className.replace('lang-', '')}
        </div>
        <Icon
          title="复制代码"
          type="icon-copy" 
          onClick={onClick}
          className="qyrc-md-code-header-copy" 
        />
      </div>
      <div className="qyrc-md-code-body">
        <ul className="qyrc-md-code-line">
          {new Array(children.split('\n').length).fill(0).map((v, index) => (
            <li key={index}>{index + 1}</li>
          ))}
        </ul>
        <div className="qyrc-md-code-content">
          <pre><code className={classNames(className, 'qyrc-md-code-block')}>
            {children}
          </code></pre>
        </div>
      </div>
      <textarea className="qyrc-md-code-select" ref={selectRef}>{children}</textarea>
    </div>
  );
};

const useStateHook = () => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
};

const markdownOptions = {
  overrides: {
    pre: CodeBlock,
  },
};

export default (props) => {
  const state = useStateHook(props);
  return (
    <MarkdownToJsx
      options={markdownOptions}
      className="qyrc-md"
      children={props.children}
    />
  );
};
