# 文档

## 一、 API 文档

基于 [monaco-editor](https://microsoft.github.io/monaco-editor) 实现

## ref

- 描述: 通过 ref 可获取一个对象实例
- 类型: {
  editor: "编辑器实例"
  insertText: "在光标后插入内容"
  editorContainer: "容器 dom"
}

### value

- 描述: 编辑器内容
- 类型: String
- 默认值: ---

### theme

- 描述: 编辑器主题
- 类型: String
- 默认值: vs
- 内部主题: vs | vs-dark | hc-black | dark-pro

### language

> 查看已注册语言列表: monaco.languages.getLanguages()

- 描述: 编辑器语言
- 类型: String
- 可选值有: 
plaintext、 abap、 apex、 azcli、 bat、 bicep、 cameligo、 clojure、 coffeescript、 c、 cpp、 csharp、 csp、 css、 dart、 dockerfile、 ecl、 
elixir、 flow9、 freemarker2、 freemarker2.tag-angle.interpolation-dollar、 freemarker2.tag-bracket.interpolation-dollar、 
freemarker2.tag-angle.interpolation-bracket、 freemarker2.tag-bracket.interpolation-bracket、 freemarker2.tag-auto.interpolation-dollar、 
freemarker2.tag-auto.interpolation-bracket、 fsharp、 go、 graphql、 handlebars、 hcl、 html、 ini、 java、 javascript、 json、 julia、 kotlin、 
less、 lexon、 liquid、 lua、 m3、 markdown、 mips、 msdax、 mysql、 objective-c、 pascal、 pascaligo、 perl、 pgsql、 php、 pla、 postiats、 
powerquery、 powershell、 proto、 pug、 python、 qsharp、 r、 razor、 redis、 redshift、 restructuredtext、 ruby、 rust、 sb、 scala、 scheme、 
scss、 shell、 sol、 aes、 sparql、 sql、 st、 swift、 systemverilog、 verilog、 tcl、 twig、 typescript、 vb、 xml、 yaml

### options

- 描述: 编辑器初始配置项, 也可在该配置中配置 value、theme、language 等字段, 但是无法动态修改
- 类型: Object
- 默认值

> 📢 注意: 初始创建 `options` 和更新时 `options` 参数是有所不同的
> monaco.editor.create 配置文档(记得勾选菜单栏 inherited): https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneEditorConstructionOptions.html
> editor.updateOptions 文档: https://microsoft.github.io/monaco-editor/api/interfaces/monaco.editor.IStandaloneCodeEditor.html#updateOptionss

```js
{
  cursorStyle: 'line',
  roundedSelection: false,
  selectOnLineNumbers: true,
  scrollBeyondLastLine: false,
}
```

### className

- 描述: 编辑器外容器 className
- 类型: String
- 默认值: ---

### onChange

- 描述: 模块内容改变事件
- 类型: Function ==> ({ event, value, editor }) => {}
- 默认值: ---

### onSave

- 描述: 编辑器执行 ctr + s 事件
- 类型: Function ==> ({ event, value, editor }) => {}
- 默认值: ---

### onCopy

- 描述: 编辑器执行 ctr + c 事件(复制)
- 类型: Function ==> ({ event, value, editor }) => {}
- 默认值: ---

### onKeyDown

- 描述: 编辑器鼠标按下事件
- 类型: Function ==> ({ event, editor }) => {}
- 默认值: ---

### 同时支持 Resize 组件的所有接口

## 二、 常量列表

- LANGUAGES: 已注册语言列表

```js
import { Editor } from '@components';
const { LANGUAGES } = Editor // LANGUAGES 语言列表
```

## 三、 monaco-editor 笔记

### 参考

- 博客: https://blog.csdn.net/weixin_30376453/article/details/94965152
- 官网 https://microsoft.github.io/monaco-editor/
- 示例(github): https://github.com/Microsoft/monaco-editor-samples/

- 主题配置 colors 字段参考文档: https://code.visualstudio.com/api/references/theme-color
- 主题配置 rules 字段参考文档: https://code.visualstudio.com/docs/getstarted/themes

### 零碎笔记

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
