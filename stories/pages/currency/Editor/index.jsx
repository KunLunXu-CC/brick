import React, {
  useRef,
  useState,
  useEffect,
} from 'react';
import initValue from './value.md';
import { Editor } from '@components';
import '@components/editor/style';
import './index.scss';

const options = {
  cursorStyle: 'line',
  language: 'javascript',
  roundedSelection: false,
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
};

export default (props) => {
  const editorRef = useRef(null);
  const [value, setValue] = useState(initValue);
  const [language, setLanguage] = useState('javascript');
  const [theme, setTheme] = useState('vs');

  const onAppendValue = () => {
    setValue(`${value}\n${initValue}`);
  }

  const onToggleTheme = () => {
    setTheme(
      theme === 'one-dark-pro'
      ? 'vs'
      : 'one-dark-pro'
    );
  }

  const onToggleLanguage = () => {
    setLanguage(
      language === 'javascript'
      ? 'markdown'
      : 'javascript'
    );
  }

  const onSave = args => {
    console.log('----> 保存 ctr+s', args);
  }

  const onDrop = args => {
    console.log('----> onDrop', args);
  }

  const onPaste = args => {
    console.log('----> onPaste', args);
  }

  const onResize = args => {
    console.log('----> onResize', args);
  }

  const onCreated = args => {
    console.log('----> onCreated', args);
  }

  const onKeyDown = args => {
    console.log('----> onKeyDown', args);
  }

  return (
    <div className="demo-editor">
      <div className="demo-editor-header">
        <span onClick={onAppendValue}>追加内容</span>
        <span onClick={onToggleTheme}>切换主题</span>
        <span onClick={onToggleLanguage}>切换语言</span>
      </div>
      <div className="demo-editor-body">
        <Editor
          onSave={onSave}
          onDrop={onDrop}
          onPaste={onPaste}
          onResize={onResize}
          onCreated={onCreated}
          onKeyDown={onKeyDown}
          language={language}
          options={options}
          theme={theme}
          themeConfig={[]}
          value={value} />
      </div>
    </div>
  );
};
