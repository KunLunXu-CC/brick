# API

## 一、 API 文档

### 1.1 children

- 描述: props.children
- 类型: ReactNode
- 默认值: ---

### 1.2 defaultScrollHeight

- 描述: 组件默认卷起高度
- 类型: Number
- 默认值: 0

### 1.3 shifting

- 描述: 鼠标滚轮每次滚动时偏移量
- 类型: Number
- 默认值: 50

### 1.4 sliderMinHeight

- 描述: 设置滚动滑块最小高度
- 类型: Number
- 默认值: 40

### 1.5 showScroll

- 描述: 是否显示滚动条, 默认自动计算是否需要(类似 overflow: auto), 设置 false 则不显示滚动, 但只是样式上不进行先依然可以滚动
- 类型: boolean
- 默认值: --

### 1.6 onScroll

- 描述: 滚动时触发事件
- 类型: Function ==> (scrollHeight) => {}
- 默认值: ---

### 1.7 scrollHeight

- 描述: 组件卷起高度(受控)
- 类型: Number
- 默认值: ---

### 1.8 onResize

- 描述: 组件大小改变时触发
- 类型: Function ==> (scrollDom) => {}
- 默认值: ---

### 1.9 onBodyResize

- 描述: 内容块大小改变时触发
- 类型: Function ==> (bodyDom) => {}
- 默认值: ---

### 1.10 onReachBottom

- 描述: 触底(滚动至底部)事件
- 类型: Function ==> (scrollHeight) => {}
- 默认值: ---

### 1.11 touchBottomDistance

- 描述: 触底距离(距离底部多少内算触底)
- 类型: Number
- 默认值: 20

### 1.12 onReachTop

- 描述: 触顶(滚动至顶部)事件
- 类型: Function ==> (scrollHeight) => {}
- 默认值: ---

### 1.13 touchTopDistance

- 描述: 触顶距离(距离顶部多少内算触顶)
- 类型: Number
- 默认值: 20

### 1.14 style

- 描述: 追加 style 样式
- 类型: Object
- 默认值: ---

### 1.15 className

- 描述: 追加 className
- 类型:  String
- 默认值: ---

## 二、 DEMO

### 2.1 简单使用

### 2.2 修改滚动条样式
