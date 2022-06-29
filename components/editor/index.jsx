import _ from 'lodash';
import React from 'react';
import omit from 'omit.js';
import * as monaco from 'monaco-editor';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useCacheFun from '../hooks/useCacheFun';
import { Resize } from '..';
import './foldingRangeProvider';
import './theme';

// 基础 monaco-editor option
const BASE_OPTION = {
  fontFamily: 'Menlo, monospace, Consolas', // 字体
};

// props 参数校验
const propTypes = {
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  onResize: PropTypes.func,
  onKeyDown: PropTypes.func,

  value: PropTypes.string,
  theme: PropTypes.string,
  actions: PropTypes.array,
  options: PropTypes.object,
  language: PropTypes.string,
  className: PropTypes.string,
};

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'ref',
  'value',
  'theme',
  'onSave',
  'options',
  'onChange',
  'onResize',
  'language',
  'onKeyDown',
  'className',
];

const Editor = React.memo(React.forwardRef((props, ref) => {
  const { fun: handleChange } = useCacheFun({ fun: props.onChange });
  const editorRef = React.useRef(null); // 编辑器实例
  const editorContainerRef = React.useRef(null); // 编辑器容器

  // 当前光标后插入内容
  const insertText = React.useCallback((text) => {
    if (!_.isString(text)) {
      return false;
    }

    const { column, lineNumber } = editorRef.current.getPosition();
    // executeEdits 执行编辑: 可实现文本插入、删除、替换
    // see: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneCodeEditor.html#executeEdits
    editorRef.current.executeEdits('', [
      {
        text,
        range: {
          endColumn: column,
          startColumn: column,
          endLineNumber: lineNumber,
          startLineNumber: lineNumber,
        },
        forceMoveMarkers: true,
      },
    ]);
  }, []);

  // 鼠标按下事件
  const onKeyDown = React.useCallback((event) => {
    // 1. 保存 ctr + s
    if (
      props.onSave &&
      (event.ctrlKey || event.metaKey) &&
      event.keyCode === 83
    ) {
      event.preventDefault();
      props.onSave({
        event,
        editor: editorRef.current,
        value: editorRef.current.getValue(),
      });
    }

    // 2. 调用 props.onKeyDown
    props.onKeyDown?.({
      event,
      editor: editorRef.current,
    });
  }, [props.onSave, props.onKeyDown]);

  // 容器改变
  const onResize = React.useCallback((...args) => {
    props.onResize?.(...args);
    editorRef.current?.layout();
  }, [props.onResize]);

  // 初始化
  React.useEffect(() => {
    if (!editorRef.current) {
      // 1. 创建 editor, see: https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#create
      editorRef.current = monaco.editor.create(editorContainerRef.current, {
        ...BASE_OPTION,
        ...(props.options || {}),
      });

      // 2. 绑定事件
      editorRef.current.onDidChangeModelContent((event) => handleChange({
        event,
        editor: editorRef.current,
        value: editorRef.current.getValue(),
      }));
    }
  }, [handleChange, props.options]);

  // 修改 value
  React.useEffect(() => {
    if (props.value !== editorRef.current?.getValue()) {
      editorRef.current?.setValue(props.value || '');
    }
  }, [props.value]);

  // 修改 language
  React.useEffect(() => {
    if (props.language) {
      const model = editorRef.current?.getModel();
      monaco.editor.setModelLanguage(model, props.language);
    }
  }, [props.language]);

  // 修改 theme
  React.useEffect(() => {
    if (props.theme) {
      monaco.editor.setTheme(props.theme);
    }
  }, [props.theme]);

  // 更新 options, see: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneCodeEditor.html#updateOptionss
  // 📢 注意: 允许更新的配置项, 和创建时的 options 是有所不一样的
  React.useEffect(() => {
    if (props.options) {
      editorRef.current?.updateOptions(props.options);
    }
  }, [props.options]);

  // 添加 action: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneCodeEditor.html#addAction
  React.useEffect(() => {
    if (_.isArray(props.actions) && editorRef.current) {
      props.actions.forEach((action) => {
        editorRef.current.addAction(action);
      });
    }
  }, [editorRef.current, props.actions]);

  // 自定义暴露给父组件的实例值
  React.useImperativeHandle(ref, () => ({
    insertText,
    editor: editorRef.current,
    editorContainer: editorContainerRef.current,
  }), [insertText, editorRef.current, editorContainerRef.current]);

  // 该组件宽高自适应外容器
  return (
    <Resize
      onResize={onResize}
      onKeyDown={onKeyDown}
      ref={editorContainerRef}
      className={classNames('qyrc-editor', props.className)}
      {...omit(props, filterPropKeys)}
    />
  );
}));

// 已注册语言列表
Editor.LANGUAGES = monaco.languages.getLanguages();
Editor.propTypes = propTypes;

export default Editor;
