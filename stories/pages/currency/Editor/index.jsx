import React, {
  useRef,
  useMemo,
  useState,
} from 'react';
import initValue from './value.md';
import { CodeEditor } from '@components';
import personality from './personality';
import '@components/code-editor/style';
import './index.scss';

const options = {
  language: 'javascript',
  fontFamily: "monospace, 'Droid Sans Mono', 'Droid Sans Fallback'",
};

export default (props) => {
  const immutable = useMemo(() => ({
    editor: null,
  }), []);
  const editorRef = useRef(null);
  const [value, setValue] = useState(initValue);
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs');

  // 完成
  const onAppendValue = () => {
    setValue(`${value}\n${initValue}`);
  }

  // 完成
  const onToggleTheme = () => {
    setTheme(
      theme === 'vs'
      ? 'personality'
      : 'vs'
    );
  }

  // 完成
  const onToggleLanguage = () => {
    setLanguage(
      language === 'javascript'
      ? 'markdown'
      : 'javascript'
    );
  }

  // 完成
  const onSave = args => {
    console.log('----> 保存 ctr+s', args);
  }

  // 有点小问题
  const onDrop = args => {
    console.log('----> onDrop', args);
    return '拖拽完成';
  }

  // 完成
  const onPaste = args => {
    console.log('----> onPaste', args);
  }

  const onPasteImage = async args => {
    console.log('----> onPasteImage', args);
    return '黏贴图片';
  }

  const onChange = args => {
    console.log('----> onChange', args, theme);
  }

  // 完成
  const onResize = args => {
    console.log('----> onResize', args);
  }

  const onCreated = args => {
    immutable.editor = args.editor;
    console.log('----> onCreated', args);
  }

  // 完成
  const onKeyDown = args => {
    console.log('----> onKeyDown', args);
  }

  // 预览内容
  const onView = () => {
    const value = immutable.editor.getValue();
    console.log('------------>> 预览', value);
  }

  // 预览内容
  const onResetValue = () => {
    immutable.editor.setValue(initValue);
  }

  return (
    <div className="demo-editor">
      <div className="demo-editor-header">
        <span onClick={onAppendValue}>追加内容</span>
        <span onClick={onToggleTheme}>切换主题</span>
        <span onClick={onToggleLanguage}>切换语言</span>
        <span onClick={onView}>查看内容</span>
        <span onClick={onResetValue}>重置内容</span>
      </div>
      <div className="demo-editor-body">
        <CodeEditor
          onSave={onSave}
          onDrop={onDrop}
          onPaste={onPaste}
          onResize={onResize}
          onCreated={onCreated}
          onKeyDown={onKeyDown}
          onPasteImage={onPasteImage}
          onChange={onChange}
          language={language}
          options={options}
          theme={theme}
          themeConfig={[personality]}
          value={value} />
      </div>
    </div>
  );
};
