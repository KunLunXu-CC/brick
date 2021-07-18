import * as monaco from 'monaco-editor';
import customTheme from './darkPro';

/**
 * 注册主题
 * @param {Object[]} thems 主题配置
 * 内部主题: "dark-pro" | "vs" | "vs-dark" | "hc-black"
 */
export default (thems = []) => ([
  customTheme,
  ... thems,
].forEach(v => {
  const { name, ... theme } = v;
  monaco.editor.defineTheme(name, theme);
}));
