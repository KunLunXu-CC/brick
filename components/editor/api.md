# 文档

## 一、 API 文档

基于 [monaco-editor](https://microsoft.github.io/monaco-editor) 实现

### 1.1 value

- 描述: 编辑器内容
- 类型: String
- 默认值: ---

### 1.2 theme

- 描述: 编辑器主题
- 类型: String
- 默认值: vs
- 内部主题: "one-dark-pro" | "vs" | "vs-dark" | "hc-black"

### 1.3 language

- 描述: 编辑器语言
- 类型: String
- 默认值: javascript

### 1.4 themeConfig

- 描述: 编辑器主题配置
- 类型: Object[]
- 默认值: []
- 格式: { name, base, inherit, rulescolors }
- 更多参考 [monaco-editor 文档](https://microsoft.github.io/monaco-editor/)

### 1.5 options

- 描述: 编辑器其余配置
- 类型: Object
- 默认值

```js
{
  cursorStyle: 'line',
  roundedSelection: false,
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
}
```

- 更多参考 [monaco-editor 文档](https://microsoft.github.io/monaco-editor/)

### 1.6 className

- 描述: 编辑器外容器 className
- 类型: String
- 默认值: ---

### 1.7 onResize

- 描述: 编辑器容器大小改变事件
- 类型: Function ==> ({ width, height, editor }) => {}
- 默认值: ---

### 1.8 onSave

- 描述: 编辑器执行 ctr + s 事件
- 类型: Function ==> ({ event, value, editor }) => {}
- 默认值: ---

### 1.9 onDrop

- 描述: 编辑器拖拽事件, 事件返回值将被插入编辑器内(当前光标)
- 类型: Function ==> ({ event, editor }) => {}
- 默认值: ---

### 1.10 onPaste

- 描述: 编辑器黏贴事件, 事件返回值将被插入编辑器内(当前光标)
- 类型: Function ==> ({ event, editor }) => {}
- 默认值: ---

### 1.11 onKeyDown

- 描述: 编辑器鼠标按下事件
- 类型: Function ==> ({ event, editor }) => {}
- 默认值: ---

### 1.12 onCreated

- 描述: 编辑器创建 editor 对象后的回调函数, 父组件可通过该事件获取多 editor 实例对象
- 类型: Function ==> ({ editor }) => {}
- 默认值: ---

## 二、 常见问题

### 2.1 编辑器字符不等宽, 导致空格很小, 缩进看起来不正常等问题

主要是字体问题, 将字体设置为等宽字体即可, `options` 新增字段 `fontFamily`

```js
{
  fontFamily: "monospace, 'Droid Sans Mono', 'Droid Sans Fallback'"
}
```

## 三、 monaco-editor 笔记

### 3.1 参考

- 博客: https://blog.csdn.net/weixin_30376453/article/details/94965152
- 官网 https://microsoft.github.io/monaco-editor/
- 示例(github): https://github.com/Microsoft/monaco-editor-samples/

- 主题配置 colors 字段参考文档: https://code.visualstudio.com/api/references/theme-color
- 主题配置 rules 字段参考文档: https://code.visualstudio.com/docs/getstarted/themes

### 3.2 零碎笔记

- 光标后插入文本

```js
immutable.editor.trigger('keyboard', 'type', { text: '要插入的文本' });
```

- 销毁 editor

```js
editor_api.dispose()
```

- 重新渲染, 改变大小

```js
editor_api.layout()
```
