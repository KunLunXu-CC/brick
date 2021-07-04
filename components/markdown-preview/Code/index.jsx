import React from 'react';
import CodeBlock from './CodeBlock';
import Mermaid from './Mermaid';

// 语言简写映射表
const ABBREVIATION_MAP_LANG = {
  'js': 'javascript',
};

// 自定义语言和对应渲染组件映射表, 默认使用 CodeBlock 进行处理
const CUSTOM_LANG_MAP_RENDER = {
  'mermaid': Mermaid,
};

export default React.memo(props => {
  const { type, children = {} } = props;
  const { children: value, className } = children.props ?? {};

  // 1. type 为 inline (非代码块, 例: `xxxx`)
  if (type === 'inline') {
    return <code>{children}</code>;
  }

  // 2. 获取语言类型
  const langWithClassName = className?.replace(/^lang-/i, '');
  const lang = ABBREVIATION_MAP_LANG[langWithClassName] ?? langWithClassName;

  // 3. 获取渲染组件
  const RenderCom = CUSTOM_LANG_MAP_RENDER[lang] ?? CodeBlock;

  return (<RenderCom lang={lang} value={value}/>);
});