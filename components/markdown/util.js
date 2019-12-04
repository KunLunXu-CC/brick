import _ from 'lodash';
import React from 'react';
import { compiler } from 'markdown-to-jsx';

/**
 * 获取 id: 通过 encodeURIComponent 对 ${type}${children} 进行编码
 * @param {String[] | String} children React.children
 * @param {String} type 标签类型
 * @return {String}
 */
export const getId = (children, type = '') => {
  const text = _.isArray(children) ? children[0] : children;
  return text ? encodeURIComponent(`${type}${text.trim()}`) : '';
}

/**
 * 构建 toc(目录)
 * @param {String} markdown      md 文本
 * @param {String[]} tocTypeList 需要构建成目录的标题, 默认为: ['h2', 'h3', 'h4']
 * @return {Object} {reactElements: React 元素 可直接进行渲染, tocData: 构建目录所需参数, 可自行进行渲染 }
 */
export const buildToc = (markdown, tocTypeList) => {
  const reactElements = [];
  const tocData = [];
  compiler(markdown, {
    createElement(type, props, children) {
      if (!tocTypeList.includes(type)){return false;}
      const id = getId(children, type);
      const onClick = () => {
        const target = document.getElementById(id);
        target && target.scrollIntoView();
      };
      const newProps = {
        ...props,
        onClick,
        id: null,
        className: `toc-${type}`,
      };
      tocData.push({ id, onClick, type, children, props });
      reactElements.push(React.createElement("div", newProps, children));
    },
  });
  return { reactElements, tocData };
}
