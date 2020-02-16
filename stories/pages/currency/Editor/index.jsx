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

  const onClick = () => {
    setValue(`${value}\n${initValue}`);
  }

  const onToggleTheme = () => {
    setTheme(
      theme === 'customTheme'
      ? 'vs'
      : 'customTheme'
    );
  }

  const onToggleLanguage = () => {
    setLanguage(
      language === 'javascript'
      ? 'markdown'
      : 'javascript'
    );
  }

  return (
    <div className="demo-editor">
      <div className="demo-editor-header">
        <span onClick={onClick}>追加内容</span>
        <span onClick={onToggleTheme}>切换主题</span>
        <span onClick={onToggleLanguage}>切换语言</span>
      </div>
      <div className="demo-editor-body">
        <Editor
          language={language}
          options={options}
          theme={theme}
          value={value} />
      </div>
    </div>
  );
};
