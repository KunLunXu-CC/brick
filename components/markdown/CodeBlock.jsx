import React, {
  useRef,
  useMemo,
  useCallback,
} from 'react';
import * as monaco from 'monaco-editor';
import { CodeEditor, Icon } from '..';
import '../code-editor/style';
import '../icon/style';

// 最大高度
const MAX_HEIGHT = 400;

const useStateHook = props => {
  const selectRef = useRef(null);
  const editorRef = useRef(null);

  // 复制
  const onCopy = useCallback(() => {
    selectRef.current.select();
    document.execCommand('Copy');
  }, [selectRef]);

  const options = useMemo(() => {
    const { children, className = '' } = props.children.props;
    return {
      readOnly: true,
      theme: 'one-dark-pro',
      value: `\n${children}\n`,
      scrollBeyondLastLine: false,
      minimap: { enabled: false },
      language: className.replace('lang-', ''),
      fontFamily: 'monospace, \'Droid Sans Mono\', \'Droid Sans Fallback\'',
      scrollbar: { alwaysConsumeMouseWheel: false },
    };
  }, [props.children.props.children, props.children.props.className]);

  // 创建完成事件
  const onCreated = useCallback(({ editor }) => {
    const model =  editor.getModel();
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
    const lineCount = model ? model.getLineCount() : 1;
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;
    editorRef.current.style.height = `${Math.min(height, MAX_HEIGHT)}px`;
  }, []);

  return { selectRef, editorRef, options, onCopy, onCreated };
};

export default props => {
  const state = useStateHook(props);
  return (
    <div className="qyrc-md-code">
      <div className="qyrc-md-code-header">
        <div className="qyrc-md-code-header-red" />
        <div className="qyrc-md-code-header-yellow" />
        <div className="qyrc-md-code-header-green" />
        <div className="qyrc-md-code-header-lang">
          {state.options.language}
        </div>
        <Icon
          title="复制代码"
          type="icon-copy"
          onClick={state.onCopy}
          className="qyrc-md-code-header-copy"
        />
      </div>
      <div className="qyrc-md-code-body" ref={state.editorRef}>
        <CodeEditor
          options={state.options}
          onCreated={state.onCreated}
        />
      </div>
      <textarea
        ref={state.selectRef}
        className="qyrc-md-code-select"
        defaultValue={state.options.value}
      />
    </div>
  );
};
