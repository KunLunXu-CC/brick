import _ from 'lodash';
import omit from 'omit.js';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';


import { getId, buildToc } from './util';
import CodeBlock from './CodeBlock';
import Title from './Title';

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'options',
  'children',
  'showToc',
  'className',
  'onBuildToc',
  'tocTypeList',
];

// props 默认值
const defaultProps = {
  theme: 'light',
  showToc: true,
  tocTypeList: ['h2', 'h3', 'h4'],
};

// props 参数校验
const propTypes = {
  theme: PropTypes.string,
  options: PropTypes.object,

  style: PropTypes.object,
  className: PropTypes.string,
};

const useStateHook = (props) => {

  // 渲染 Toc
  const toc = useMemo(() => {
    const { reactElements, tocData } = buildToc(props.children, props.tocTypeList);
    _.isFunction(props.onBuildToc) && props.onBuildToc({ reactElements, tocData });
    return props.showToc ? reactElements : null;
  }, [props.children]);

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
            classNamePrefix: `qyrc-md-${props.theme}`,
          },
        },
      },
    };
    return _.merge(baseOptions, props.options);
  }, [props.options]);

  // 组件最外层 className
  const wrapperClassName = useMemo(() => classNames(
    'qyrc-md',
    `qyrc-md-${props.theme}`,
    props.className
  ), [])

  return { options, toc, wrapperClassName };
};

const Markdown = (props) => {
  const state = useStateHook(props);
  return (
    <div
      className={state.wrapperClassName}
      {...omit(props, filterPropKeys)}>
      <MarkdownToJsx
        options={state.options}
        children={props.children}
      />
      <div className="qyrc-md-toc">
        {state.toc}
      </div>
    </div>
  );
};

Markdown.defaultProps = defaultProps;
Markdown.propTypes = propTypes;
export default Markdown;
