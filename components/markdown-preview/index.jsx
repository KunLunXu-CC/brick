import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

import Toc from './Toc';
import Title from './Title';
import CodeBlock from './CodeBlock';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'options',
  'children',
  'showToc',
  'className',
  'onTocParsed',
  'tocParseTypeList',
];

// props 默认值
const defaultProps = {
  theme: 'light',
  showToc: false,
  tocParseTypeList: ['h2', 'h3'],
};

// props 参数校验
const propTypes = {
  theme: PropTypes.string,
  showToc: PropTypes.bool,
  style: PropTypes.object,
  options: PropTypes.object,
  onTocParsed: PropTypes.func,
  className: PropTypes.string,
  tocParseTypeList: PropTypes.arrayOf(PropTypes.string),
};

const useHooks = props => {
  // 合并计算 options
  const options = useMemo(() => {
    const baseOptions = {
      overrides: {
        h1: { component: Title, props: { type: 'h1' } },
        h2: { component: Title, props: { type: 'h2' } },
        h3: { component: Title, props: { type: 'h3' } },
        h4: { component: Title, props: { type: 'h4' } },
        h5: { component: Title, props: { type: 'h5' } },
        h6: { component: Title, props: { type: 'h6' } },
        pre: {
          component: CodeBlock,
          props: {
            classNamePrefix: `qyrc-markdown-preview-${props.theme}`,
          },
        },
      },
    };
    return _.merge(baseOptions, props.options);
  }, [props.options]);

  // 组件最外层 className
  const wrapperClassName = useMemo(() => classNames(
    'qyrc-markdown-preview',
    `qyrc-markdown-preview-${props.theme}`,
    { 'qyrc-markdown-preview-show-toc': props.showToc },
    props.className,
  ), []);

  return { options, wrapperClassName };
};

const Markdown = props => {
  const state = useHooks(props);
  return (
    <div
      className={state.wrapperClassName}
      {...omit(props, filterPropKeys)}>
      <MarkdownToJsx
        options={state.options}
        className="qyrc-markdown-preview-body">
        {props.children}
      </MarkdownToJsx>
      <Toc {...props}/>
    </div>
  );
};

Markdown.defaultProps = defaultProps;
Markdown.propTypes = propTypes;
export default Markdown;
