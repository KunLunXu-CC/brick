import _ from 'lodash';
import React, { useMemo } from 'react';
import { compiler } from 'markdown-to-jsx';

/**
 * 解析 toc
 * @param {String} markdown mk内容
 * @param {String[]} tocParseTypeList 需要被解析为 toc 的标签列表(例: ['h1', 'h2'])
 * @return {Object} { tocData: 渲染 toc 相关数据 }
 */
const parseToc = (markdown, tocParseTypeList) => {
  const sortTocParseTypeList = tocParseTypeList.sort();
  const tocData = [];
  compiler(markdown, {
    createElement (type, props, children) {
      if (!sortTocParseTypeList.includes(type)) {
        return false;
      }
      const id = encodeURIComponent(`${type || ''}${children[0]?.trim()}`);
      const level = sortTocParseTypeList.indexOf(type);
      const onClick = () => {
        const target = document.getElementById(id);
        target && target.scrollIntoView();
      };
      tocData.push({ id, type, level, props, onClick, children });
    },
  });
  return tocData;
};

/**
 * 渲染 toc
 * @param {Object} setting 相关配置(mk经过解析后的数据)
 * @return {ReactElement}
 */
const renderToc = setting => (
  <div className="qyrc-markdown-preview-toc">
    {setting.map((v, index) => (
      <div
        key={index}
        onClick={v.onClick}
        className={`toc-${v.type} level-${v.level}`}>
        <div className="qyrc-markdown-preview-toc-title">{v.children}</div>
      </div>
    ))}
  </div>
);

const useStateHook = props => {
  const toc = useMemo(() => {
    const parseData = parseToc(props.children, props.tocParseTypeList);
    const reactElement = renderToc(parseData);
    _.isFunction(props.onTocParsed) &&
    props.onTocParsed({ parseData, reactElement });
    return props.showToc ? reactElement : null;
  }, [props.children, props.showToc]);

  return { toc };
};

export default props => {
  const state = useStateHook(props);
  return state.toc;
};
