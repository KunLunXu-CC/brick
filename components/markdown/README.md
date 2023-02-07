## API 文档

### defaultValue

描述: 编辑器, 默认值
类型: string
默认值: ---

### value

描述: 编辑器, 值
类型: string
默认值: ---

### onChange

描述: 编辑器, 内容修改事件
类型: ({ value, event, editor }) => void 
默认值: ---

### onSave

描述: 编辑器下, ctr + s 触发事件
类型: ({ value, event, editor }) => void 
默认值: 

### onInsertImages

描述: 插入图片时触发, 拖拽图片、粘帖图片进来, 
类型: async ({ event, files, editor }) => href || href[]
默认值:

### mdToJsxOptions

描述: 预览 md 插件 markdown-to-jsx 配置, 参考 https://www.npmjs.com/package/markdown-to-jsx
类型: Object
默认值: 无

## TODO LIST

[ ] 思维导图


## 零星

- 将 React 组件转换为 HTML DOM?
https://stackoverflow.com/questions/29586411/react-js-is-it-possible-to-convert-a-react-component-to-html-doms
