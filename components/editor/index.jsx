import React, {
  useRef,
  useMemo,
  useEffect,
} from 'react';
import * as monaco from 'monaco-editor';

import customTheme from './theme/customTheme';
import value from './value.md';

// monaco.editor.defineTheme('customTheme', customTheme);

// // 默认主题目录: vs/editor/standalone/common/themes.ts
// // github: https://github.com/Microsoft/monaco-editor
// // github 示例: https://github.com/Microsoft/monaco-editor-samples/
// // 销毁editor： editor_api.dispose()

// // 改变大小： /* after update container size */ editor_api.layout()
// const options = {
//   value,
//   theme: 'customTheme',
//   cursorStyle: 'line',
//   language: 'javascript',
//   roundedSelection: false,
//   selectOnLineNumbers: true,
//   scrollBeyondLastLine: false,
// };

// const useStateHook = () => {
//   const editorBodyRef = useRef(null);

//   const immutable = useMemo(() => ({
//     editor: null,
//   }), []);

//   const onSave = () => {
//     // console.log('---->>> 保存', immutable.editor.getValue());
//     console.log('---->>> 保存');
//     immutable.editor.trigger('keyboard', 'type', { text: '要插入的文本' });
//   };

//   const onKeyDown = event => {
//     if (event.ctrlKey && event.keyCode === 83) {
//       event.preventDefault();
//       onSave();
//     }
//   };

//   const onPaste = () => {
//     if (!event.clipboardData || !event.clipboardData.items) {
//       return false;
//     }
//     console.log('-------------------->>> 黏贴');
//   };

//   useEffect(() => {
//     immutable.editor = monaco.editor.create(editorBodyRef.current, options);
//   }, []);

//   return { editorBodyRef, onKeyDown, onPaste };
// };

// export default props => {
//   const state = useStateHook(props);

//   return (
//     <div
//       onPaste={state.onPaste}
//       ref={state.editorBodyRef}
//       style={{ height: '100%' }}
//       onKeyDown={state.onKeyDown}
//     />
//   );
// };
