import _ from 'lodash';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import React, { useCallback, useMemo, useRef } from 'react';
import MarkdownToJsx from 'markdown-to-jsx';
import { Icon } from '../..';

import Code from './Code';

const Markdown = (props) => {
  const previewRef = useRef();

  const handleCopy = useCallback(() => {}, []);

  // 合并计算 options
  const options = useMemo(() => _.merge(
    {
      overrides: {
        pre: { component: Code, props: { type: 'block' } },
        code: { component: Code, props: { type: 'inline' } },
      },
    },
    props.options,
  ), [props.options]);

  // 组件最外层 className
  const className = useMemo(() => classNames(
    'brick-markdown-preview',
    `brick-markdown-preview-${props.theme}`,
    props.className,
  ), [props.className, props.theme]);

  return (
    <div className='brick-markdown-preview-wrapper'>
      <MarkdownToJsx
        ref={previewRef}
        options={options}
        className={className}>
        {props.children || ''}
      </MarkdownToJsx>
      <div className='brick-markdown-preview-copy'>
        <Icon
          title="复制代码"
          type="icon-copy"
          onClick={handleCopy}
        />
      </div>
    </div>
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
