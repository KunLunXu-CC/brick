import React from 'react';
import * as monaco from 'monaco-editor';
import { CodeEditor, Icon } from '../..';
import '../../code-editor/style';
import '../../icon/style';

// 最大高度
const MAX_HEIGHT = 400;

const useHooks = props => {
  const selectRef = React.useRef(null);
  const editorRef = React.useRef(null);

  // 复制
  const onCopy = React.useCallback(() => {
    selectRef.current.select();
    document.execCommand('Copy');
  }, [selectRef]);

  // 代码编辑器 options
  const codeEditoroptions = React.useMemo(() => ({
    readOnly: true,
    language: props.lang,
    theme: 'one-dark-pro',
    value: `\n${props.value}\n`,
    scrollBeyondLastLine: false,
    minimap: { enabled: false },
    scrollbar: { alwaysConsumeMouseWheel: false },
    fontFamily: 'monospace, \'Droid Sans Mono\', \'Droid Sans Fallback\'',
  }), [props.value, props.lang]);

  // 创建完成事件
  const onCreated = React.useCallback(({ editor }) => {
    const model =  editor.getModel();
    const lineHeight = editor.getOption(monaco.editor.EditorOption.lineHeight);
    const lineCount = model ? model.getLineCount() : 1;
    const height = editor.getTopForLineNumber(lineCount + 1) + lineHeight;
    editorRef.current.style.height = `${Math.min(height, MAX_HEIGHT)}px`;
  }, []);

  return { selectRef, editorRef, codeEditoroptions, onCopy, onCreated };
};

export default React.memo(props => {
  const state = useHooks(props);
  return (
    <div className="qyrc-markdown-preview-code">
      <div className="qyrc-markdown-preview-code-header">
        <div className="qyrc-markdown-preview-code-header-red" />
        <div className="qyrc-markdown-preview-code-header-yellow" />
        <div className="qyrc-markdown-preview-code-header-green" />
        <div className="qyrc-markdown-preview-code-header-lang">
          {state.codeEditoroptions.language}
        </div>
        <Icon
          title="复制代码"
          type="icon-copy"
          onClick={state.onCopy}
          className="qyrc-markdown-preview-code-header-copy"
        />
      </div>
      <div
        ref={state.editorRef}
        className="qyrc-markdown-preview-code-body" >
        <CodeEditor
          onCreated={state.onCreated}
          options={state.codeEditoroptions}
          className="qyrc-markdown-preview-code-body-editor"
        />
      </div>
      {/* 用于实现复制功能 */}
      <textarea
        ref={state.selectRef}
        defaultValue={state.codeEditoroptions.value}
        className="qyrc-markdown-preview-code-select"
      />
    </div>
  );
});
