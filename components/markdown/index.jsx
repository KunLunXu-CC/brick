import React from 'react';
import Preview from './Preview';
import MdEditor from './MdEditor';
import { VariableContainer, Icon } from '..';

// 预览类型
const PREVIEW_TYPE = {
  none: 'none', // 不预览
  html: 'html', // html
  mind: 'mind', // 思维导图
};

const Markdown = (props) => {
  const [innerValue, setInnerValue] = React.useState(props.defaultValue); // 内部值
  const [previewType, setPreviewType] = React.useState(PREVIEW_TYPE.none); // 预览类型
  const value = React.useMemo(() => props.value || innerValue); // 组件值, 外面值 || 内部值

  // 切换预览模式
  const togglePreview = React.useCallback((type) => {
    setPreviewType(previewType === type ? PREVIEW_TYPE.none : type);
  }, [previewType]);

  // 编辑器 change 事件
  const onChange = React.useCallback((args) => {
    setInnerValue(args.value);
    props.onChange?.(args);
  }, [props.onChange]);

  return (
    <div className='brick-markdown'>
      <div className='brick-markdown-editor'>
        <MdEditor
          value={value}
          onChange={onChange}
          onSave={props.onSave}
          onInsertImages={props.onInsertImages}
        />
        <div className='brick-markdown-tool'>
          <div
            className="brick-markdown-tool-item"
            onClick={togglePreview.bind(null, PREVIEW_TYPE.html)}>
            <Icon type="icon-yulan" />
          </div>
          {/* <div
            className="brick-markdown-tool-item"
            onClick={togglePreview.bind(null, PREVIEW_TYPE.mind)}>
            思
          </div> */}
        </div>
      </div>
      {previewType !== PREVIEW_TYPE.none ? (
        <VariableContainer
          layout
          margin={{ left: '20%' }}
          operationList={['left']}
          style={{ height: '100%' }}
          constraintSize={{ width: 100 }}
          defaultParams={{ width: '50%' }}
          className="brick-markdown-preview-wrapper">
          <Preview type={previewType}>
            {value}
          </Preview>
        </VariableContainer>
      ) : null}
    </div>
  );
};

Markdown.Preview = Preview;

export default React.memo(Markdown);
