# API

## 一、 API 文档

> 支持: mermaid、echart

### 1.1 theme

描述: 设置主题
类似: String
默认值: light
可选值: light、 dark

### 1.2 children

描述: props.children
类型: Object
默认值: ---

### 1.3 options

描述: 同 markdown-to-jsx 剧透参考该 npm 包
类型: Object
默认值: ---

### 1.4 style

描述: 为组件追加 style
类型: Object
默认值: ---

### 1.5 className

描述: 为组件追加 className
类型: String
默认值: ---

### 1.6 showToc

描述: 是否显示目录
类型: Boolean
默认值: false

### 1.6 onTocParsed

描述: 解析完目录后执行函数, 不管 showToc 是否设置为 true 都会触发
类型: Function  ({ parseData, reactElement }) => {}
默认值: null

### 1.6 tocParseTypeList

描述: 那些标签需要被解析为目录
类型: String[]
默认值: ['h2', 'h3']
