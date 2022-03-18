# 折叠

- vscode/extensions/markdown-language-features/src/features/foldingProvider.ts 


# 笔记

##

getLanguages



## 参数

> https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html

value,                      // 内容
readOnly: true,             // 只读
tabSize: 2,                 // tab 大小
fontSize: 14,               // 字体大小
wordWrap: 'on',             // 自动换行
language: 'markdown',       // 语言设置
theme: 'dark-pro',          // 主题设置
fontFamily: 'monospace, \'Droid Sans Mono\', \'Droid Sans Fallback\'',  // 字体
minimap: { enabled: false },  // 控制编辑器右侧, 小地图的行为和渲染,
scrollbar: { alwaysConsumeMouseWheel: false }, // 控制滚动条的行为和呈现, alwaysConsumeMouseWheel 不阻止滚动默认行为
scrollBeyondLastLine: false,                   // 编辑器最后一行后面是否要空出一个屏幕大小的间距, 默认为真
padding: { top: 20 },       // 编辑器工作区边距

## todo

1. 测试所有功能接口
