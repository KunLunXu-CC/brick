# 笔记

https://blog.csdn.net/weixin_30376453/article/details/94965152

```js
immutable.editor.trigger('keyboard', 'type', { text: '要插入的文本' });
```
// 官网 https://microsoft.github.io/monaco-editor/
// 默认主题目录: vs/editor/standalone/common/themes.ts
// github: https://github.com/Microsoft/monaco-editor
// github 示例: https://github.com/Microsoft/monaco-editor-samples/
// 销毁editor： editor_api.dispose()

// 改变大小： /* after update container size */ editor_api.layout()
