import React from 'react';
import initValue from './value.md';
// import personality from './personality';
import { PlusOutlined } from '@ant-design/icons';
import { Card, Select, Button } from 'antd';
import { Editor } from '@components';

import '@components/editor/style';
import './index.scss';

const { LANGUAGES } = Editor; // LANGUAGES 语言列表

export default () => {
  const [options, setOptions] = React.useState({});
  const editorRef = React.useRef(null);

  const [theme, setTheme] = React.useState();
  const [width, setWidth] = React.useState('50%');

  const [value, setValue] = React.useState(initValue);
  const [language, setLanguage] = React.useState();

  // 追加内容
  const onAppendValue = React.useCallback(() => {
    setValue(`${value}\n${initValue}`);
  }, []);

  // 完成
  const onSave = (args) => {
    console.log('----> 保存 ctr+s', args);
  };

  const onChange = React.useCallback(({ value, editor, event }) => {
    console.log(
      '%c [onChange]',
      { value, editor, event },
    );
    setValue(value);
  }, []);

  // 完成
  const onResize = React.useCallback((args) => {
    console.log('----> onResize', args);
  }, []);

  const onCreated = React.useCallback((args) => {
    editorRef.current = args.editor;
    console.log('----> onCreated', args);
  }, []);

  // 完成
  const onKeyDown = React.useCallback((args) => {
    console.log('----> onKeyDown', args);
  }, []);

  // 重置 options
  const resetOptions = React.useCallback(() => setOptions({
    readOnly: true,
    theme: 'dark-pro',
  }), []);

  return (
    <Card
      style={{ width }}
      className="demo-editor"
      title={(
        <>
          <Select
            allowClear
            value={theme}
            placeholder="主题"
            onChange={setTheme}
            style={{ width: 100 }}>
            <Select.Option value="vs">
              vs
            </Select.Option>
            <Select.Option value="vs-dark">
              vs-dark
            </Select.Option>
            <Select.Option value="hc-black">
              hc-black
            </Select.Option>
            <Select.Option value="dark-pro">
              dark-pro
            </Select.Option>
          </Select>
          {' '}
          &emsp;
          <Select
            showSearch
            allowClear
            value={language}
            placeholder="语言"
            style={{ width: 100 }}
            onChange={setLanguage}>
            {LANGUAGES.map((v) => (
              <Select.Option
                value={v.id}
                key={v.id}>
                {v.id}
              </Select.Option>
            ))}
          </Select>
          {' '}
          &emsp;
          <Button
            type="primary"
            onClick={onAppendValue}>
            追加
          </Button>
          {' '}
          &emsp;
          <Button
            type="primary"
            onClick={resetOptions}>
            重置 OPT
          </Button>
        </>
      )}
      extra={<PlusOutlined onClick={setWidth.bind(null, `${Number.parseInt(width, 10) + 5}%`)} />}>
      <div className="demo-editor-body">
        <Editor
          theme={theme}
          value={value}
          onSave={onSave}
          options={options}
          language={language}
          onResize={onResize}
          onChange={onChange}
          onCreated={onCreated}
          onKeyDown={onKeyDown}
        />
      </div>
    </Card>
  );
};
