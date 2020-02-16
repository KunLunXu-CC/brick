import * as monaco from 'monaco-editor';
import customTheme from './oneDarkPro';

/**
 * 注册主题
 * @param {Object[]} thems 主题配置
 * 内部主题: "one-dark-pro" | "vs" | "vs-dark" | "hc-black"
 */
export default (thems = []) => ([
  customTheme,
  ... thems,
].forEach(v => monaco.editor.defineTheme(v.name, v.theme)));
