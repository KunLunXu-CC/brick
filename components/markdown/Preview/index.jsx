import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useMemo } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';

import Code from './Code';

const Markdown = props => {
  // 合并计算 options
  const options = useMemo(() => _.merge(
    {
      overrides: {
        pre: { component: Code, props: { type: 'block' } },
        code: { component: Code, props: { type: 'inline' } },
      },
    },
    props.options
  ), [props.options]);

  // 组件最外层 className
  const className = useMemo(() => classNames(
    'qyrc-markdown-preview',
    `qyrc-markdown-preview-${props.theme}`,
    props.className,
  ), [props.className, props.theme]);

  return (
    <MarkdownToJsx
      options={options}
      className={className}>
      {props.children || ''}
    </MarkdownToJsx>
  );
};

Markdown.defaultProps = {
  theme: 'light',
};

Markdown.propTypes = {
  theme: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.object,
  className: PropTypes.string,
};

export default React.memo(Markdown);
