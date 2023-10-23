import _ from 'lodash';
import juice from 'juice';
import PropTypes from 'prop-types';
import Code from './Code';
import classNames from 'classnames';
import MarkdownToJsx from 'markdown-to-jsx';
import getAllCSS from '../../utils/getAllCSS';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Icon } from '../..';

const COPY_CUSTOM_STYLE = `
  <style>
    @media (prefers-color-scheme: light) {

    }
    @media (prefers-color-scheme: dark) {
      .brick-markdown-preview-light {
        font-size: 13px;
        color: rgba(255, 255, 255, 0.85);
      }
    }
  </style>
`;

const Markdown = (props) => {
  const previewRef = useRef();
  const [copying, setCoping] = useState(false);

  const handleCopy = useCallback(() => {
    setCoping(true);
    // 下面代码执行时间比较长, 会阻塞 UI, 放在另一个宏任务中执行
    setTimeout(async () => {
      const sourceHtml = previewRef.current.outerHTML;
      const css = getAllCSS();

      const options = {
        removeStyleTags: true,     // 移除 Style 标签(暂时无法生效, 已有人提交 issues: https://github.com/Automattic/juice/issues/470)
        inlinePseudoElements: true, // 是否将伪元素转为 span 标签
      };
      const transform = juice(`<style>${css}</style>${sourceHtml}`, options);
      const replaceHtml = transform
        .replace(/<style>[\s\S]*?<\/style>/, '') // 先手动移除 Style
        .replace(/(?<=\/?)div(?=[\s>])/ig, 'section'); // div 标签转为 section

      const copyContent = [`${COPY_CUSTOM_STYLE}${replaceHtml}`];

      // 复制: 将文本内容以 text/html、text/plain 格式写入剪切板
      await navigator.clipboard.write([
        new window.ClipboardItem({
          'text/html': new Blob([copyContent], { type: 'text/html' }),
          'text/plain': new Blob([copyContent], { type: 'text/plain' }),
        }),
      ]);
      setCoping(false);
    }, 0);
  }, []);

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
    <>
      <div
        ref={previewRef}
        className={className}>
        <MarkdownToJsx options={options}>
          {props.children || ''}
        </MarkdownToJsx>
      </div>
      <div
        disabled={copying}
        onClick={handleCopy}
        className='brick-markdown-preview-copy'>
        <Icon
          title="复制代码"
          type={copying ? 'icon-loading' : 'icon-copy'}
        />
      </div>
    </>
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
