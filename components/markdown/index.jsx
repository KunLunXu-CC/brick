import _ from 'lodash';
import omit from 'omit.js';
import hljs from 'highlight.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MarkdownToJsx from 'markdown-to-jsx';
import React, { useEffect, useRef, useMemo } from 'react';

import { Icon } from '..';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'style',
  'options',
  'children',
  'className',
];

// props 默认值
const defaultProps = {};

// props 参数校验
const propTypes = {
  options: PropTypes.object,

  style: PropTypes.object,
  className: PropTypes.string,
};

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
      <textarea defaultValue={children} className="qyrc-md-code-select" ref={selectRef} />
    </div>
  );
};

const useStateHook = (props) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });

  // 合并计算 options
  const options = useMemo(() => {
    const baseOptions = {
      overrides: {
        pre: CodeBlock,
      },
    };
    return _.merge(baseOptions, props.options);
  }, [props.options]);
  return { options };
};

const Markdown = (props) => {
  const state = useStateHook(props);
  return (
    <MarkdownToJsx
      style={props.style}
      options={state.options}
      children={props.children}
      className={classNames('qyrc-md', props.className)}
      {...omit(props, filterPropKeys)}
    />
  );
};

Markdown.defaultProps = defaultProps;
Markdown.propTypes = propTypes;
export default Markdown;
