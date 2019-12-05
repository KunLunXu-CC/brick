import _ from 'lodash';
import React, { useMemo } from 'react';
import { compiler } from 'markdown-to-jsx';

// 解析 toc
const parseToc = (markdown, tocParseTypeList) => {
  const sortTocParseTypeList = tocParseTypeList.sort();
  const tocData = [];
  compiler(markdown, {
    createElement(type, props, children) {
      if (!sortTocParseTypeList.includes(type)){return false;}
      const id = encodeURIComponent(`${type || ''}${children[0].trim()}`);
      const level = sortTocParseTypeList.indexOf(type);
      const onClick = () => {
        const target = document.getElementById(id);
        target && target.scrollIntoView();
      };
      tocData.push({ id, type, level, props, onClick, children });
    },
  });
  return tocData;
}

const useStateHook = props => {

  // 获取 Toc 数据
  const tocData = useMemo(() => {
    const tocData = parseToc(props.children, props.tocParseTypeList);
    _.isFunction(props.onTocParsed) && props.onTocParsed(tocData);
    return tocData;
  }, [props.children]);

  return { tocData };
}

export default props => {
  const state = useStateHook(props);

  return props.showToc ? (
    <div className="qyrc-md-toc">
      {state.tocData.map((v, index) => (
        <div
          key={index}
          onClick={v.onClick}
          className={`toc-${v.type} level-${v.level}`}>
          <div className="qyrc-md-toc-title">{v.children}</div>
        </div>
      ))}
    </div>
  ) : null;
}
