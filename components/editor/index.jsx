import React, {
  useRef,
  useMemo,
  useEffect,
} from 'react';
import _ from 'lodash';
import omit from 'omit.js';
import * as monaco from 'monaco-editor';
import { Resize } from '..';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import registerTheme from './theme';

// props 参数校验
const propTypes = {
  onResize: PropTypes.func,
  onSave: PropTypes.func,
  onDrop: PropTypes.func,
  onPaste: PropTypes.func,
  onKeyDown: PropTypes.func,
  onCreated: PropTypes.func,

  value: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.object,
  language: PropTypes.string,
  themeConfig: PropTypes.array,
  className: PropTypes.string,
};

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'ref',
  'value',
  'theme',
  'onSave',
  'onDrop',
  'onPaste',
  'language',
  'onResize',
  'onCreated',
  'onKeyDown',
  'className',
  'themeConfig',
];

// 默认 props
const defaultProps = {
  themeConfig: [],
  theme: 'vs',
  language: 'javascript',
  options: {
    cursorStyle: 'line',
    roundedSelection: false,
    selectOnLineNumbers: true,
    scrollBeyondLastLine: false,
  }
};

const useStateHook = (props, ref) => {
  const _editorBodyRef = useRef(ref);

  const editorBodyRef = useMemo(() => (
    ref || _editorBodyRef
  ), [_editorBodyRef]);

  const immutable = useMemo(() => ({
    editor: null,
  }), []);

  // 插入内容
  const insertText = text => {
    if (!immutable.editor || !_.isString(text)) {return false;}
    immutable.editor.trigger('keyboard', 'type', { text });
  };

  // 鼠标按下事件
  const onKeyDown = event => {
    // 1. 保存: saveConds 为调用 props.onSave 条件
    const saveConds = [
      event.ctrlKey,
      immutable.editor,
      event.keyCode === 83,
      _.isFunction(props.onSave),
    ];
    if (saveConds.every(v => v)){
      event.preventDefault();
      props.onSave({
        event,
        editor: immutable.editor,
        value: immutable.editor.getValue(),
      });
    }

    // 2. 调用 props.onKeyDown
    _.isFunction(props.onKeyDown) && props.onKeyDown({
      event,
      editor: immutable.editor,
    });
  };

  // 黏贴事件
  const onPaste = event => {
    if (!_.isFunction(props.onPaste)){return false;}
    const text = props.onPaste({
      event,
      editor: immutable.editor,
    });
    insertText(text);
  };

  // 拖拽事件
  const onDrop = event => {
    if (!_.isFunction(props.onDrop)){return false;}
    event.preventDefault();
    const text = props.onDrop({
      event,
      editor: immutable.editor,
    });
    insertText(text);
  };

  // 容器大小改变
  const onResize = args => {
    immutable.editor && immutable.editor.layout();
    _.isFunction(props.onResize) && props.onResize({
      ... args,
      editor: immutable.editor,
    });
  };

  // 监听 props.value 并设置 editor.value
  // 多个 useEffect 执行顺序和它们位置一致, 所以 useEffect 位置很重要
  useEffect(() => {
    if (immutable.editor) {
      immutable.editor.setValue(props.value);
    }
  }, [props.value]);

  // 监听 props.theme 并设置 editor.theme
  // 多个 useEffect 执行顺序和它们位置一致, 所以 useEffect 位置很重要
  useEffect(() => {
    if (immutable.editor) {
      monaco.editor.setTheme(props.theme);
    }
  }, [props.theme]);

  // 监听 props.language 并设置 editor.language
  // 多个 useEffect 执行顺序和它们位置一致, 所以 useEffect 位置很重要
  useEffect(() => {
    if (immutable.editor) {
      const model = immutable.editor.getModel();
      monaco.editor.setModelLanguage(model, props.language);
    }
  }, [props.language]);

  // 初始化
  useEffect(() => {
    // 1. 注册主题
    registerTheme(props.themeConfig);

    // 2. 创建 editor
    immutable.editor = monaco.editor.create(
      editorBodyRef.current,
      {
        value: props.value,
        theme: props.theme,
        language: props.language,
        ... props.options,
      }
    );

    // 3. 调用回调函数
    _.isFunction(props.onCreated) && props.onCreated({
      editor: immutable.editor,
    });
  }, []);

  return { editorBodyRef, onKeyDown, onPaste, onResize, onDrop };
};

const Editor = React.forwardRef((props, ref) => {
  const state = useStateHook(props, ref);

  return (
    <Resize
      onDrop={state.onDrop}
      onPaste={state.onPaste}
      onResize={state.onResize}
      ref={state.editorBodyRef}
      onKeyDown={state.onKeyDown}
      className={classNames('qyrc-editor', props.className)}
      {...omit(props, filterPropKeys)}
    />
  );
});

Editor.defaultProps = defaultProps;
Editor.propTypes = propTypes;
export default Editor;
