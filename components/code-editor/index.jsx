import React, {
  useRef,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import _ from 'lodash';
import omit from 'omit.js';
import * as monaco from 'monaco-editor';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import registerTheme from './theme';
import { Resize } from '..';

// props 参数校验
const propTypes = {
  onSave: PropTypes.func,
  onDrop: PropTypes.func,
  onChange: PropTypes.func,
  onResize: PropTypes.func,
  onKeyDown: PropTypes.func,
  onCreated: PropTypes.func,
  onPasteImage: PropTypes.func,

  value: PropTypes.string,
  theme: PropTypes.string,
  options: PropTypes.object,
  language: PropTypes.string,
  className: PropTypes.string,
  themeConfig: PropTypes.array,
};

// omit 需要过滤 props key 列表
const filterPropKeys = [
  'ref',
  'value',
  'theme',
  'onSave',
  'onDrop',
  'onPaste',
  'options',
  'onChange',
  'onResize',
  'language',
  'onCreated',
  'onKeyDown',
  'className',
  'themeConfig',
  'onPasteImage',
];

// 默认 props
const defaultProps = {
  themeConfig: [],
  theme: 'vs',
  language: 'javascript',
};

const useStateHook = (props, ref) => {
  const _editorBodyRef = useRef(ref);

  const editorBodyRef = useMemo(() => (
    ref || _editorBodyRef
  ), [_editorBodyRef]);

  const immutable = useMemo(() => ({
    editor: null,
    onChange: props.onChange,
  }), []);

  // 插入内容
  const insertText = text => {
    if (!immutable.editor || !_.isString(text)) {
      return false;
    }
    immutable.editor.trigger('keyboard', 'type', { text });
  };

  // 模块内容改变事件
  const onChange = useCallback(event => {
    if (!_.isFunction(immutable.onChange) || !immutable.editor) {
      return false;
    }
    immutable.onChange({
      event,
      editor: immutable.editor,
      value: immutable.editor.getValue(),
    });
  }, []);

  // 鼠标按下事件
  const onKeyDown = event => {
    // 1. 保存: saveConds 为调用 props.onSave 条件
    const saveConds = [
      event.ctrlKey,
      immutable.editor,
      event.keyCode === 83,
      _.isFunction(props.onSave),
    ];
    if (saveConds.every(v => v)) {
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
  const onPaste = async event => {
    // 1. 黏贴图片处理
    if (
      event.clipboardData &&
      event.clipboardData.items &&
      _.isFunction(props.onPasteImage)
    ) {
      const [item] = event.clipboardData.items;
      const file = item.kind === 'file' ? item.getAsFile() : null;
      const text = file && /^image\/.*/ig.test(file.type)
        ? await props.onPasteImage({
          file,
          event,
          editor: immutable.editor,
        })
        : void 0;
      insertText(text);
    }

    // 2. 处理普通黏贴事件
    _.isFunction(props.onPaste) && props.onPaste({
      event,
      editor: immutable.editor,
    });
  };

  // 拖拽事件
  const onDrop = event => {
    if (!_.isFunction(props.onDrop)) {
      return false;
    }
    event.preventDefault();
    const text = props.onDrop({
      event,
      editor: immutable.editor,
    });
    insertText(text);
  };

  // 容器改变
  const onResize = (... args) => {
    _.isFunction(props.onResize) && props.onResize(... args);
    _.get(props, 'options.automaticLayout') !== false &&
    immutable.editor &&
    immutable.editor.layout();
  };

  // 监听 props.onChange 变更, 修改 immutable.onChange
  useEffect(() => {
    immutable.onChange = props.onChange;
  }, [props.onChange]);

  // 监听 props.value 并设置 editor.value
  // 多个 useEffect 执行顺序和它们位置一致, 所以 useEffect 位置很重要
  useEffect(() => {
    if (immutable.editor && props.value !== immutable.editor.getValue()) {
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

  // 监听 props.options 并设置 editor.options
  // 多个 useEffect 执行顺序和它们位置一致, 所以 useEffect 位置很重要
  useEffect(() => {
    if (immutable.editor) {
      immutable.editor.updateOptions(props.options);
    }
  }, [props.options]);

  // 初始化
  useEffect(() => {
    // 1. 注册主题
    registerTheme(props.themeConfig);

    // 2. 创建 editor
    const options = {
      value: props.value,         // 默认值
      theme: props.theme,         // 主题
      language: props.language,   // 语言
      ... omit(props.options, ['automaticLayout']), // 个性化配置
    };
    immutable.editor = monaco.editor.create(editorBodyRef.current, options);

    // 3. 调用回调函数
    _.isFunction(props.onCreated) && props.onCreated({
      editor: immutable.editor,
    });

    // 4. 绑定 onChange 事件
    immutable.editor.onDidChangeModelContent(onChange);
  }, []);

  return { editorBodyRef, onKeyDown, onPaste, onDrop, onResize };
};

const Editor = React.forwardRef((props, ref) => {
  const state = useStateHook(props, ref);

  return (
    <Resize
      onDrop={state.onDrop}
      onPaste={state.onPaste}
      ref={state.editorBodyRef}
      onResize={state.onResize}
      onKeyDown={state.onKeyDown}
      className={classNames('qyrc-editor', props.className)}
      {...omit(props, filterPropKeys)}
    />
  );
});

Editor.defaultProps = defaultProps;
Editor.propTypes = propTypes;
export default Editor;
