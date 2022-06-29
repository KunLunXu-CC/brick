import _ from 'lodash';
import React from 'react';
import actions from './actions';
import { Editor } from '../..';

// 初始默认 options
const OPTIONS = {
  tabSize: 2,                       // tab 大小
  fontSize: 14,                     // 字体大小
  wordWrap: 'on',                   // 自动换行
  theme: 'dark-pro',                // 主题设置dark-pro
  language: 'markdown',             // 语言设置
  minimap: { enabled: false },      // TODO: 右侧小地图, 先禁掉, 后面或许可以显示目录? 思维导图?
  padding: { top: 16, bottom: 16 }, // 第一行代码距离顶部距离
};

export default React.memo((props) => {
  const editorRef = React.useRef(null); // 编辑器实例

  // 插入图片
  const insertImages = React.useCallback(async (event) => {
    // 1. 获取图片
    const imageFiles = Array
      .from(event.dataTransfer?.files || event.clipboardData?.files || [])
      .filter(
        (file) => /^image\/.*/ig.test(file.type),
      );

    // 2. 空值处理
    if (!imageFiles.length || !props.onInsertImages) {
      return false;
    }

    // 3. 阻止默认行为
    event.preventDefault();

    // 4. 调用 onInsertImages
    const hrefList = await props.onInsertImages({
      event,
      files: imageFiles,
      editor: editorRef.current?.editor,
    });

    // 5. 在当前光标插入 onInsertImage 返回的内容: hrefList =>  href || href[]
    const content = (_.isArray(hrefList) ? hrefList : [hrefList])
      .map((href, index) => {
        const name = imageFiles[index]?.name?.replace(/\..+?$/ig, '');
        return `![${name}](${href})`;
      }).join('\n');

    editorRef.current?.insertText(content);
  }, [props.onInsertImages]);

  // 编辑器黏贴事件: 插入图片
  const onPaste = React.useCallback(async (event) => {
    insertImages(event);
  }, [insertImages]);

  // 编辑器拖拽事件: 阻止默认行为, 防止文件打开
  const onDragOver = React.useCallback((event) => {
    event.preventDefault();
  }, []);

  // 编辑器拖拽事件: 插入图片
  const handleDrop = React.useCallback(async (event) => {
    insertImages(event);
  }, [insertImages]);

  return (
    <Editor
      ref={editorRef}
      actions={actions}
      options={OPTIONS}
      onPaste={onPaste}
      value={props.value}
      onDrop={handleDrop}
      onSave={props.onSave}
      onDragOver={onDragOver}
      onChange={props.onChange}
    />
  );
});
