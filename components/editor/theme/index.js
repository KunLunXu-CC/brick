import * as monaco from 'monaco-editor';
import customTheme from './darkPro';

/**
 * 注册主题: 已有主题 "dark-pro" | "vs" | "vs-dark" | "hc-black"
 * @see https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#defineTheme
 */
[customTheme].forEach(({ name, ... theme }) => monaco.editor.defineTheme(name, theme));
